---
title: Random graphs and matrix concentration
description: Develop degree tails, trace and Gaussian estimates, and
  concentration; connect them to regular spectra, connectivity and
  synchronization thresholds with each input's model and asymptotic range.
status: draft
dependency_level: 2
---

**Purpose:** Develop degree tails, trace and Gaussian estimates, and concentration; connect them to regular spectra, connectivity and synchronization thresholds with each input's model and asymptotic range.

## Single-vertex degree laws and the shared-edge dependence

[Open item](item-prop-expander-prereq-degree-law-and-dependence) · level 0


### Statement

Let $n\geq 1$ and $p\in[0,1]$, and let $G(n,p)$ be the simple graph on $[n]$ whose possible edges occur independently with probability $p$. Write $A_{uv}=A_{vu}$ for the indicator that the edge $\{u,v\}$ occurs, and define the degree $d(u)=\sum_{w\in[n]\setminus\{u\}}A_{uw}$. Then $d(u)$ has law $\operatorname{Bin}(n-1,p)$ for every vertex $u$.

For distinct vertices $u,v$, put $R_u=\sum_{w\notin\{u,v\}}A_{uw}$ and $R_v=\sum_{w\notin\{u,v\}}A_{vw}$. The variables $A_{uv},R_u,R_v$ are mutually independent, while $d(u)=A_{uv}+R_u$ and $d(v)=A_{uv}+R_v$ share the same edge indicator. Consequently $\operatorname{Cov}(d(u),d(v))=p(1-p)$. Identically distributed degrees need not be independent; a count of vertices of a given degree is not in general binomial.

### Statement references

[math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)

[math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables)

[math:def-variance-and-covariance](https://alphabetamath.cc/item/def-variance-and-covariance)

### Facts & Assumptions

**Given:** $n\geq 1$, $p\in[0,1]$, and the graph and edge indicators in the Statement.

**Goal:** Establish the degree law, the independence of the three displayed terms, their covariance, and the qualification about degree counts.

[F1] The graph has one mutually independent Bernoulli$(p)$ indicator for each unordered pair of distinct vertices; a simple graph has no loops. ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph), [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph))

[F2] A sum of $k$ mutually independent Bernoulli$(p)$ variables has the binomial$(k,p)$ law, including the empty sum when $k=0$. ([math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables))

[F3] Mutual independence means that joint probabilities of specified values factor over any subfamily. ([math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables))

[F4] Covariance is the expectation of the product of centered variables and is bilinear on finite linear combinations; independent square-integrable variables have zero covariance. ([math:def-variance-and-covariance](https://alphabetamath.cc/item/def-variance-and-covariance), [math:lem-variance-and-covariance-identities-for-random-variables](https://alphabetamath.cc/item/lem-variance-and-covariance-identities-for-random-variables), [math:cor-covariance-vanishes-under-independence](https://alphabetamath.cc/item/cor-covariance-vanishes-under-independence))

[F5] A Bernoulli$(p)$ variable has variance $p(1-p)$. ([math:lem-bernoulli-and-binomial-mean-and-variance](https://alphabetamath.cc/item/lem-bernoulli-and-binomial-mean-and-variance))

### Proof

**Proof technique:** direct.

1.1 For a fixed $u$, its possible incident edges are precisely the $n-1$ distinct pairs $\{u,w\}$ with $w\ne u$. Their indicators are mutually independent Bernoulli$(p)$ variables, so their sum $d(u)$ is binomial$(n-1,p)$, also when $n=1$. [F1, F2]

1.2 For distinct $u,v$, the edge-index sets used by $A_{uv}$, $R_u$ and $R_v$ are pairwise disjoint. For prescribed values of the three variables, sum the joint probabilities over the edge-indicator configurations giving those values. The factorization in [F3] makes each configuration probability a product over the three disjoint blocks; the finite sum consequently factors into the three marginal probabilities. Thus the three variables are mutually independent. This includes $n=2$, when both residual sums are constant zero. The displayed degree decompositions follow by separating the edge $\{u,v\}$ from each incident-edge sum. [F1, F3, algebra]

2.1 All variables are bounded. Bilinearity and the zero covariance of independent variables give $\operatorname{Cov}(d(u),d(v))=\operatorname{Cov}(A_{uv},A_{uv})=\operatorname{Var}(A_{uv})=p(1-p)$. For $0<p<1$ this is nonzero, so the two degrees are not independent. [step 1.2, F4, F5]

3.1 For $n=2$ and $0<p<1$, the number of vertices of degree one is $2A_{12}$: it is zero with probability $1-p$ and two with probability $p$. A binomial law with two trials and success probability $p$ assigns probability $2p(1-p)>0$ to one, and no other binomial law can have exactly this nondegenerate support $\{0,2\}$. Hence even though the degrees have the same marginal law, their degree count need not be binomial. [step 1.1, F1, F2, algebra] ∎


## Asymptotic quantifiers and uniform parameter ranges

[Open item](item-def-expander-prereq-asymptotic-quantifiers) · level 0


### Definition

Let $S$ be an unbounded subset of the natural numbers. All limits below are taken as $n\to\infty$ through $n\in S$: $x_n\to L$ means that for every $\varepsilon>0$ there is an $N$ such that $|x_n-L|<\varepsilon$ for every $n\in S$ with $n\ge N$. A property holds eventually if it holds for all such $n$ beyond some $N$.

For real deterministic sequences $a_n,b_n$ with $b_n>0$ eventually, $a_n=o(b_n)$ means that for every $\varepsilon>0$ there is an $N$ such that $|a_n|\le\varepsilon b_n$ for all $n\in S$ with $n\ge N$. The notation $a_n=O(b_n)$ means that there are constants $C>0$ and $N$ such that $|a_n|\le Cb_n$ for all $n\in S$ with $n\ge N$.

For each $n\in S$, let $(\Omega_n,\mathcal F_n,\mathbb P_n)$ be a probability space and $E_n\in\mathcal F_n$ an event. The events $E_n$ hold with high probability if $\mathbb P_n(E_n)\to1$. The spaces may vary with $n$; in the finite outcome-weight model $(\Omega,w)$, every subset of $\Omega$ is an event and its probability is the sum of its outcome weights.

Suppose that for each $n\in S$ a parameter $p$ ranges over a set $I_n$, and that $a_n(p)$ and $b_n(p)>0$ are real-valued on that set. The assertion $a_n(p)=O(b_n(p))$ uniformly over $p\in I_n$ means that there are $C>0$ and $N$, independent of $p$ and $n$, such that $|a_n(p)|\le Cb_n(p)$ for every $n\in S$ with $n\ge N$ and every $p\in I_n$. The assertion $a_n(p)=o(b_n(p))$ uniformly means that for every $\varepsilon>0$ there is an $N$, independent of $p$, such that $|a_n(p)|\le\varepsilon b_n(p)$ for all those $n$ and $p$. Similarly, events $E_{n,p}$ hold with high probability uniformly over $p\in I_n$ if for every $\varepsilon>0$ there is an $N$ such that $\mathbb P_{n,p}(E_{n,p})\ge1-\varepsilon$ for every $n\in S$ with $n\ge N$ and every $p\in I_n$. Each $E_{n,p}$ is an event in its indicated probability space. Empty parameter sets impose no condition at that index.

For integers $n\ge1$ and $d\ge0$, a simple $d$-regular graph on $n$ vertices means a finite graph with no loops or repeated edges in which every vertex has exactly $d$ neighbors. An order is feasible when such a graph exists. Limits over this model are taken through feasible orders; necessarily $0\le d<n$ and $nd$ is even. A fixed-$n$ estimate retains its stated constants and cutoff rather than replacing them by an asymptotic assertion.

### Justification

The definitions of $o$ and $O$ are, respectively, convergence to zero and eventual boundedness of $a_n/b_n$ in the sequence sense; eventual positivity makes the ratios and inequalities equivalent. Restriction to an unbounded index set simply requires the same inequalities at its indices. These use [math:def-sequences-in-an-ordered-field](https://alphabetamath.cc/item/def-sequences-in-an-ordered-field).

A probability space supplies a probability in $[0,1]$ for each event, so the high-probability definition is an ordinary real-sequence limit. In the finite outcome-weight model, the stated sum formula is the finite probability-space definition. See [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure) and [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event).

The uniform definitions place the cutoff outside the parameter quantifier. Thus a uniform bound applies to any choice $p=p(n)\in I_n$, whereas a result for each fixed $p$ alone need not: for $I_n=(0,1)$, $p^n\to0$ for each fixed $p$ by [math:lem-geometric-sequence-null](https://alphabetamath.cc/item/lem-geometric-sequence-null), but for $n\ge1$ with $p_n=1-1/(2n)$, the factorization $1-p_n^n=(1-p_n)\sum_{k=0}^{n-1}p_n^k\le1/2$ gives $p_n^n\ge1/2$. The distinction uses the convergence and boundedness notions in [math:def-sequences-in-an-ordered-field](https://alphabetamath.cc/item/def-sequences-in-an-ordered-field).

In a simple $d$-regular graph on $n\ge1$ vertices, each vertex has at most $n-1$ neighbors. Counting incident vertex-edge pairs by vertices gives $nd$, while counting by edges gives twice the number of edges; hence $nd$ is even. The graph, neighbor and incidence conventions are those of [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) and [math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree). Feasibility is defined by existence, so these necessary restrictions are not asserted to be sufficient here. The finite-$n$ convention records precisely the constants and cutoff appearing in the relevant quantified inequality.


## Indicator expectations and exceptional-vertex probabilities

[Open item](item-prop-expander-prereq-degree-count-first-moment) · level 0


### Statement

Let $n\in\mathbb N$ with $n\ge1$, and let $D_1,\ldots,D_n$ be integer-valued random variables on a common finite probability space with identical distributions: $\mathbb P(D_v=j)=\mathbb P(D_1=j)$ for every $v$ and integer $j$. No independence is assumed. For an integer $k$, define $X_k=\sum_{v=1}^n\mathbf1_{\{D_v=k\}}$, $X_{\le k}=\sum_{v=1}^n\mathbf1_{\{D_v\le k\}}$, and $X_{\ge k}=\sum_{v=1}^n\mathbf1_{\{D_v\ge k\}}$. Then $\mathbb E X_k=n\mathbb P(D_1=k)$, and $\mathbb P(\min_v D_v\le k)\le\mathbb E X_{\le k}$ and $\mathbb P(\max_v D_v\ge k)\le\mathbb E X_{\ge k}$. These identities and bounds do not by themselves approximate the law of $X_k$.

### Statement references

[math:def-natural-numbers](https://alphabetamath.cc/item/def-natural-numbers)

[math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)

[math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution)

[math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)

[math:def-indicator-random-variable](https://alphabetamath.cc/item/def-indicator-random-variable)

### Facts & Assumptions

**Given:** The positive integer $n$, finite probability space, variables $D_1,\ldots,D_n$, and integer $k$ in the statement.

**Goal:** Establish the expectation identity and both exceptional-count bounds.

[F1] A finite probability space has finitely many outcomes with nonnegative weights summing to one; events are subsets, and their probabilities are sums of their weights ([math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)). A real random variable is a function on the outcomes, and its distribution records the probabilities of its values ([math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution)).

[F2] Expectation is the finite weighted sum of the values of a random variable ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)). The indicator of an event is one on that event and zero elsewhere ([math:def-indicator-random-variable](https://alphabetamath.cc/item/def-indicator-random-variable)).

[F3] The expectation of an event indicator equals the probability of that event; a finite sum of indicators counts the events occurring at an outcome ([math:lem-indicator-expectation-and-products](https://alphabetamath.cc/item/lem-indicator-expectation-and-products)).

[F4] Expectation is linear for finite families of random variables, without an independence assumption ([math:thm-linearity-of-expectation](https://alphabetamath.cc/item/thm-linearity-of-expectation)).

[F5] If $Y$ is nonnegative and $a>0$ on a finite probability space, then $\mathbb P(Y\ge a)\le\mathbb E Y/a$ ([math:thm-markov-inequality](https://alphabetamath.cc/item/thm-markov-inequality)).

### Proof

**Proof technique:** direct.

1.1 Each event $\{D_v=k\}$ is a subset of the finite outcome space, and its indicator is a real random variable. By finite linearity and the indicator expectation identity, $\mathbb E X_k=\sum_{v=1}^n\mathbb P(D_v=k)=n\mathbb P(D_1=k)$, where the last equality uses identical distributions. [given, F1, F2, F3, F4]

1.2 At each outcome, $X_{\le k}$ counts the indices with $D_v\le k$, while $X_{\ge k}$ counts those with $D_v\ge k$. Thus both counts are nonnegative, and, since $n\ge1$, the events $\{\min_vD_v\le k\}$ and $\{X_{\le k}\ge1\}$ coincide, as do $\{\max_vD_v\ge k\}$ and $\{X_{\ge k}\ge1\}$. [given, F2, F3]

2.1 Applying the nonnegative Markov bound with $a=1$ to each count and using the event identities in step 1.2 gives both claimed inequalities. Together with step 1.1 this proves the result; no independence was used. [step 1.1, step 1.2, F5] ∎


## Binomial mass ratios and geometric tail domination

[Open item](item-prop-expander-prereq-binomial-tail-ratio-tool) · level 0


### Statement

Let $N$ be a nonnegative integer and $0<p<1$. Let $B\sim\operatorname{Bin}(N,p)$, meaning that $B$ is the sum of $N$ independent Bernoulli$(p)$ variables, and put $f_j=\mathbb P(B=j)$ for $0\le j\le N$. For every integer $1\le j\le N$, $f_j>0$ and $f_{j-1}/f_j=j(1-p)/((N-j+1)p)$. Equivalently, for $0\le j<N$, $f_{j+1}/f_j=(N-j)p/((j+1)(1-p))$.

Let $k$ be an integer with $0\le k\le N$, and let $0\le q<1$. If $f_{j-1}\le qf_j$ for all integers $1\le j\le k$, then $\mathbb P(B\le k)\le f_k/(1-q)$. If $f_{j+1}\le qf_j$ for all integers $k\le j<N$, then $\mathbb P(B\ge k)\le f_k/(1-q)$. Empty index ranges impose no conditions. Thus the conclusions include $k=0$, $k=N$, and $N=0$; every displayed denominator is positive.

### Statement references

[math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)

[math:lem-binomial-count-law](https://alphabetamath.cc/item/lem-binomial-count-law)

[math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)

[math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)

[math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)

[math:def-measure](https://alphabetamath.cc/item/def-measure)

### Facts & Assumptions

[F1] Random variables are measurable real-valued maps on a probability space $(\Omega,\mathcal F,\mathbb P)$; probabilities of their values refer to measurable inverse-image events. [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable) [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure) A binomial$(N,p)$ variable is the sum of $N$ independent Bernoulli$(p)$ variables; when $N=0$ the sum is zero. A Bernoulli$(p)$ variable takes values $1$ and $0$ with probabilities $p$ and $1-p$ respectively. [math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)

[F2] For $0\le j\le N$, the mass is $f_j=\binom Nj p^j(1-p)^{N-j}$. [math:lem-binomial-count-law](https://alphabetamath.cc/item/lem-binomial-count-law)

[F3] The binomial coefficient counts $j$-element subsets of an $N$-element set, and for $0\le j\le N$ it satisfies $\binom Nj=N!/(j!(N-j)!)$. [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient) [math:thm-binomial-closed-formula](https://alphabetamath.cc/item/thm-binomial-closed-formula)

[F4] On any probability space, $\mathbb P$ is a measure with $\mathbb P(\Omega)=1$. Thus $\mathbb P(\varnothing)=0$ and $\mathbb P$ is countably additive on pairwise disjoint measurable events. [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure) [math:def-measure](https://alphabetamath.cc/item/def-measure)

[F5] Induction on a nonnegative integer permits a base case and a successor step. [math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)

[F6] For $0\le q<1$, $\sum_{r=0}^{\infty}q^r=1/(1-q)$, with $q^0=1$ even when $q=0$. [math:thm-geometric-series](https://alphabetamath.cc/item/thm-geometric-series)

### Proof

**Given:** The hypotheses in the Statement.

**Goal:** Prove the adjacent-mass identities and both tail bounds.

1.1 The factorial formula in [F3] makes every $\binom Nj$ positive for $0\le j\le N$. Since $p$ and $1-p$ are positive, [F2] gives $f_j>0$. For $1\le j\le N$, cancellation in [F2] and [F3] gives $f_{j-1}/f_j=j(1-p)/((N-j+1)p)$. All factors canceled are positive. Taking the reciprocal and replacing $j$ by $j+1$ gives the displayed forward ratio for $0\le j<N$; its denominator is positive. When $N=0$ both ratio ranges are empty. [F2, F3, algebra]

1.2 Let $E_0,\ldots,E_m$ be pairwise disjoint measurable events, and set $E_r=\varnothing$ for $r>m$. Applying countable additivity from [F4] to this sequence gives $\mathbb P(\bigcup_{r=0}^{m}E_r)=\sum_{r=0}^{\infty}\mathbb P(E_r)=\sum_{r=0}^{m}\mathbb P(E_r)$, because each appended term has probability zero. This establishes finite additivity on the underlying probability space without requiring its sample space to be finite. If $A\subseteq C$ are measurable, applying this to $C=A\mathbin{\dot\cup}(C\setminus A)$ and using nonnegativity gives $\mathbb P(A)\le\mathbb P(C)$. Applying it to $\Omega=A\mathbin{\dot\cup}(\Omega\setminus A)$ gives $\mathbb P(\Omega\setminus A)=1-\mathbb P(A)$. [F4]

2.1 Write $B=\sum_{i=1}^N X_i$ as in [F1]. For each $1\le i\le N$, the measurable events $\{X_i=0\}$ and $\{X_i=1\}$ are disjoint and have probabilities $1-p$ and $p$, so step 1.2 gives $\mathbb P(C_i)=0$ for $C_i=\{X_i\notin\{0,1\}\}$. Put $D_i=C_i\setminus\bigcup_{h<i}C_h$. These measurable sets are pairwise disjoint, satisfy $D_i\subseteq C_i$, and have union $E=\bigcup_{i=1}^N C_i$. By monotonicity and finite additivity in step 1.2, $\mathbb P(E)=\sum_{i=1}^N\mathbb P(D_i)=0$. Outside $E$, every summand is $0$ or $1$, so $B\in\{0,\ldots,N\}$. The measurable event $S=\{B\notin\{0,\ldots,N\}\}$ is therefore contained in $E$ and has probability zero by monotonicity. When $N=0$, the unions are empty and $B=0$, so the same conclusion holds. [F1, step 1.2, algebra]

3.1 Under the lower-tail hypothesis, induction on $r$ gives $f_{k-r}\le q^r f_k$ for each $0\le r\le k$: the base case is equality, and the successor step uses $f_{k-r-1}\le qf_{k-r}$ and $q\ge0$. The measurable residual event $R_-=\{B\le k\}\setminus\bigcup_{j=0}^k\{B=j\}$ is contained in $S$ from step 2.1 and hence has probability zero by step 1.2. Thus the tail event is the disjoint union of $R_-$ and the level events $\{B=j\}$ for $0\le j\le k$. Finite additivity gives $\mathbb P(B\le k)=\sum_{j=0}^k f_j\le f_k\sum_{r=0}^k q^r$. The omitted terms of the convergent series in [F6] are nonnegative, so this is at most $f_k/(1-q)$. This reasoning includes $q=0$ and the empty adjacent-mass range when $k=0$. [F1, F5, F6, step 1.2, step 2.1, algebra]

4.1 Under the upper-tail hypothesis, induction on $r$ gives $f_{k+r}\le q^r f_k$ for $0\le r\le N-k$: the base case is equality, and for $r<N-k$ the successor step uses $f_{k+r+1}\le qf_{k+r}$ and $q\ge0$. The measurable residual event $R_+=\{B\ge k\}\setminus\bigcup_{j=k}^N\{B=j\}$ is contained in $S$ from step 2.1 and hence has probability zero by step 1.2. Thus the tail event is the disjoint union of $R_+$ and the level events $\{B=j\}$ for $k\le j\le N$. Finite additivity gives $\mathbb P(B\ge k)=\sum_{j=k}^N f_j\le f_k\sum_{r=0}^{N-k}q^r$. Since the omitted terms are nonnegative, [F6] gives $\sum_{r=0}^{N-k}q^r\le1/(1-q)$. This includes the empty adjacent-mass range when $k=N$. Both tail denominators are positive because $q<1$, completing the proof. [F1, F5, F6, step 1.2, step 2.1, algebra] ∎



## Elementary binomial probability envelopes

[Open item](item-prop-expander-prereq-binomial-exponential-envelope) · level 0


### Statement

Let $N\ge k\ge1$ be integers and $0<p<1$. A $\operatorname{Bin}(N,p)$ count is the sum of $N$ mutually independent Bernoulli real random variables on a common probability space $(\Omega,\mathcal F,\mathbb P)$, each equal to $1$ with probability $p$ and $0$ otherwise. Then

$$\mathbb P(\operatorname{Bin}(N,p)=k)\le\frac{(Np)^k e^{-p(N-k)}}{k!}\le\exp\{k\log(Np/k)+k-p(N-k)\}.$$

Here $k!=1\cdot2\cdots k$, $e=\exp(1)$, and $\log$ is the inverse of the real exponential. In particular $k!\ge(k/e)^k$, $\binom Nk\le N^k/k!$, and $1-p\le e^{-p}$. Separately, for $N\ge0$ and $0<p<1$, $\mathbb P(\operatorname{Bin}(N,p)=0)=(1-p)^N\le e^{-Np}$; no logarithm of zero is used.

### Facts & Assumptions

[F1] A binomial count is the sum described above, and its mass at $k\in\{0,\ldots,N\}$ is $\binom Nk p^k(1-p)^{N-k}$. The coefficient $\binom Nk$ counts $k$-element subsets of an $N$-element set ([math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure), [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable), [math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables), [math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables), [math:lem-binomial-count-law](https://alphabetamath.cc/item/lem-binomial-count-law), [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)).

[F2] For $0\le k\le N$, $\binom Nk k!=N(N-1)\cdots(N-k+1)$, with the empty product equal to $1$; factorials are positive and $0!=1$ ([math:thm-binomial-closed-formula](https://alphabetamath.cc/item/thm-binomial-closed-formula), [math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)).

[F3] On $(0,\infty)$, $\log$ is continuously differentiable with derivative $1/x$, is strictly increasing, and takes products to sums, with $\log1=0$ ([math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral), [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)).

[F4] A continuous function bounded above by $M$ on $[a,b]$ has integral at most $M(b-a)$; the fundamental theorem evaluates the integral of a continuously differentiable function's derivative, and the product rule differentiates products ([math:lem-integral-elementary-bounds](https://alphabetamath.cc/item/lem-integral-elementary-bounds), [math:lem-fundamental-theorem-and-integration-by-parts](https://alphabetamath.cc/item/lem-fundamental-theorem-and-integration-by-parts), [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)).

[F5] The real exponential is strictly increasing, $\log$ is its inverse, $e=\exp(1)$, and $\exp(u+v)=\exp(u)\exp(v)$ ([math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm), [math:def-real-exponential-function-and-e](https://alphabetamath.cc/item/def-real-exponential-function-and-e), [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing), [math:thm-exponential-addition-formula](https://alphabetamath.cc/item/thm-exponential-addition-formula)).

[F6] If $0\le p\le1$ and $m$ is a nonnegative integer, then $(1-p)^m\le\exp(-mp)$; also $1+x\le\exp(x)$ for every real $x$ ([math:lem-exponential-dominates-one-plus-x](https://alphabetamath.cc/item/lem-exponential-dominates-one-plus-x)).

### Proof

**Given:** Integers $N\ge k\ge1$ and $0<p<1$; for the final case, an integer $N\ge0$ and $k=0$.

**Goal:** Prove both positive-count bounds, their stated elementary ingredients, and the zero-count bound.

1.1 For each integer $j\ge1$, [F3] gives $\log t\le\log(j+1)$ on $[j,j+1]$. By [F4], $\int_j^{j+1}\log t\,dt\le\log(j+1)$. The product rule and [F3] show that $t\log t-t$ is a continuously differentiable antiderivative of $\log t$ on $(0,\infty)$, so the same integral equals $(j+1)\log(j+1)-(j+1)-j\log j+j$. [F3, F4, algebra]

1.2 Each of the $k$ positive factors in the falling factorial in [F2] is at most $N$, so $\binom Nk\le N^k/k!$. With $m=N-k$, [F6] gives $(1-p)^{N-k}\le e^{-p(N-k)}$ and, at $x=-p$, $1-p\le e^{-p}$. Substituting these bounds into [F1] proves the first displayed inequality. [F1, F2, F6, algebra]

2.1 Sum the inequalities of step 1.1 for $j=1,\ldots,k-1$. The left sides telescope to $k\log k-k+1$, and the right side is $\sum_{i=2}^k\log i=\log(k!)$ by [F2] and [F3]. For $k=1$ the same inequality holds directly. Thus $\log(k!)\ge k\log k-k$. Applying the increasing exponential and [F5] yields $k!\ge(k/e)^k$. [step 1.1, F2, F3, F5, algebra]

3.1 By step 2.1 and positivity, $1/k!\le(e/k)^k$. Multiplying by the nonnegative remaining factors and using the logarithm inverse and exponential addition laws in [F5] gives $\frac{(Np)^k e^{-p(N-k)}}{k!}\le\exp\{k\log(Np/k)+k-p(N-k)\}$. [step 2.1, F5, algebra]

4.1 For $k=0$, [F1] and the boundary value $\binom N0=1$ give probability $(1-p)^N$; [F6] bounds it by $e^{-Np}$. This also holds for $N=0$, when both sides equal $1$. The stated bounds follow. [F1, F6, algebra] ∎

### Remarks

The displayed inequalities are finite bounds. Any later asymptotic replacement of $N=n-1$ or of an integer $k$ by a real threshold requires its own explicit error estimate.


## Floor and ceiling thresholds in logarithmic degree estimates

[Open item](item-prop-expander-prereq-rounding-exponent-budget) · level 0


### Statement

Let $a_n,c_n$ be real, $b_n>0$, and for integers $k\ge 0$ put $F_n(k)=a_n+k\log b_n-\log(k!)+c_nk$, where $\log$ is the natural logarithm and $0!=1$. Then $F_n(k+1)-F_n(k)=\log b_n-\log(k+1)+c_n$.

For $t\ge0$, let $m=\lfloor t\rfloor$ be the unique integer satisfying $m\le t<m+1$, and let $\lceil t\rceil$ be $m$ if $t=m$ and $m+1$ otherwise. Define the piecewise linear interpolation $\widetilde F_n(t)=(1-(t-m))F_n(m)+(t-m)F_n(m+1)$. For either $r=\lfloor t\rfloor$ or $r=\lceil t\rceil$, $|F_n(r)-\widetilde F_n(t)|\le |\log b_n|+\log(m+1)+|c_n|$.

In particular, fix $\gamma>0$ and $C\ge0$. If $b_n=\gamma\log n$, $|c_n|\le C$ and $0\le m\le C\log n$ for integers $n$ sufficiently large, then the last difference is at most $4\log\log n$ for all sufficiently large $n$, with the threshold depending only on $\gamma$ and $C$. Thus it is $O(\log\log n)$: its absolute value is bounded by a constant multiple of $\log\log n$ eventually. The interpolation uses factorials only at integers; a factorial at a noninteger would require a separately specified extension.

### Statement references

[math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part)

[math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)

[math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)

### Facts & Assumptions

[F1] The factorial recursion gives $(k+1)!=(k+1)k!$, with $k!>0$, for every integer $k\ge0$ ([math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)).

[F2] The natural logarithm is increasing on positive reals and satisfies $\log(xy)=\log x+\log y$ there ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)).

[F3] Every real number has a unique integer part $m$ with $m\le t<m+1$ ([math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part)).

### Proof

**Given:** The quantities and hypotheses in the statement.

**Goal:** Prove the increment, interpolation bound, and stated eventual budget.

1.1 By factorial recursion and the logarithm product law, $\log((k+1)!)=\log(k+1)+\log(k!)$. Subtracting the two definitions of $F_n$ therefore gives $F_n(k+1)-F_n(k)=\log b_n-\log(k+1)+c_n$. [F1, F2, algebra]

2.1 Put $u=t-m$, so $0\le u<1$. The interpolation lies on the line segment between $F_n(m)$ and $F_n(m+1)$. Each permitted endpoint is one of these values, so its distance from the interpolation is at most $|F_n(m+1)-F_n(m)|$. Since $m+1\ge1$, logarithm monotonicity gives $\log(m+1)\ge0$; the triangle inequality and step 1.1 yield the stated bound. [F2, F3, step 1.1, algebra]

3.1 For sufficiently large $n$, $\log\log n\ge0$, and $m+1\le(C+1)\log n$. Hence $|\log b_n|\le |\log\gamma|+\log\log n$ and $\log(m+1)\le\log(C+1)+\log\log n$. The bound in step 2.1 is therefore at most $2\log\log n+|\log\gamma|+\log(C+1)+C$. As $\log\log n$ tends to infinity, the fixed latter terms are at most $2\log\log n$ eventually. This proves the $4\log\log n$ and big-O assertions. The construction only evaluates factorials at $m$ and $m+1$. [F2, step 2.1, algebra] ∎

## Norm symmetrization at the actual matrix mean

[Open item](item-prop-expander-prereq-independent-copy-norm-symmetrization) · level 0


### Statement

Let $(\Omega,w)$ be a finite probability space, and let $A,A':\Omega\to M_{m\times k}(\mathbb R)$ be matrix-valued functions, where $m,k$ are nonnegative integers. A matrix-valued random variable on this space means such a function. For any such function $B$, its distribution assigns to each matrix value $M$ the probability $q_B(M):=\mathbb P(B=M)=\sum_{\omega:B(\omega)=M}w(\omega)$, with the empty sum equal to zero. Having the same distribution means $q_A(M)=q_{A'}(M)$ for every $M$; independence of the two matrices means $\mathbb P(A=M,A'=N)=q_A(M)q_{A'}(N)$ for every pair $M,N$. Its matrix mean is $\mathbb EB:=\sum_{\omega\in\Omega}w(\omega)B(\omega)$, using entrywise matrix operations. Suppose they are independent and have the same distribution, and equip their matrix vector space with any norm $\|\cdot\|$. Matrix expectation is taken entrywise. Then $\mathbb E\|A-\mathbb EA\|\leq\mathbb E\|A-A'\|$.

For the adjacency matrix $A$ of the simple graph $G(n,p)$, with $n\geq 1$ and $0\leq p\leq 1$, let $J$ be the all-ones matrix and $I$ the identity matrix. Then $\mathbb EA=p(J-I)$ and $A-pJ=(A-\mathbb EA)-pI$. Consequently $\mathbb E\|A-pJ\|\leq\mathbb E\|A-A'\|+p\|I\|$ for an independent copy $A'$ under the same norm. The graph model has independent indicators for distinct unordered edges; independence of $A$ and $A'$ concerns the two whole matrices.

### Statement references

[math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables)

[math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)

[math:def-norm-and-normed-space](https://alphabetamath.cc/item/def-norm-and-normed-space)

[math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)

[math:def-matrix-space](https://alphabetamath.cc/item/def-matrix-space)

[math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix)

[math:def-adjacency-matrix-of-a-finite-simple-graph](https://alphabetamath.cc/item/def-adjacency-matrix-of-a-finite-simple-graph)

[math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)

### Facts & Assumptions

[F1] For finite-valued variables, independence means that each joint value probability is the product of its marginal value probabilities; finite expectation is the weighted sum over outcomes ([math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables), [math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)).

[F2] A norm is absolutely homogeneous and satisfies the triangle inequality ([math:def-norm-and-normed-space](https://alphabetamath.cc/item/def-norm-and-normed-space)). Expectation is linear for finite families of real random variables, without an independence hypothesis ([math:thm-linearity-of-expectation](https://alphabetamath.cc/item/thm-linearity-of-expectation)).

[F3] In $G(n,p)$, the indicators of distinct unordered pairs of vertices are mutually independent Bernoulli variables with success probability $p$; the graph is simple ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph), [math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)).

[F4] Real matrices form a vector space under entrywise addition and scalar multiplication. Equality can be checked entrywise, and the identity matrix has entries one on the diagonal and zero elsewhere ([math:def-matrix-space](https://alphabetamath.cc/item/def-matrix-space), [math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix)).

[F5] In a chosen vertex order, the adjacency matrix of a finite simple graph has entry one exactly for an edge, zero otherwise; it is symmetric and has zero diagonal ([math:def-adjacency-matrix-of-a-finite-simple-graph](https://alphabetamath.cc/item/def-adjacency-matrix-of-a-finite-simple-graph)).

[F6] A finite probability space has nonnegative outcome weights summing to one; an event has probability equal to the sum of its outcome weights ([math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)). The matrix-valued distribution in the Statement applies this event formula to the sets of outcomes with a fixed matrix value.


### Proof

**Given:** Independent identically distributed finite-valued matrices $A,A'$ and a norm on their real matrix space; for the graph application, the specified simple $G(n,p)$ model.

**Goal:** Prove the norm inequality and the stated graph centering identities and bound.

1.1 List the possible matrix values as $M_1,\ldots,M_r$ with probabilities $q_1,\ldots,q_r$, including all values of either copy. The sets $\{\omega:A(\omega)=M_j\}$ are pairwise disjoint and their union is $\Omega$, and $q_j=\sum_{\omega:A(\omega)=M_j}w(\omega)$. Thus the $q_j$ are nonnegative and sum to one; grouping the outcome sums entrywise gives $\mu=\mathbb EA=\sum_j q_jM_j$. For each $i$, $M_i-\mu=\sum_jq_j(M_i-M_j)$; repeated application of the triangle inequality and absolute homogeneity gives $\|M_i-\mu\|\leq\sum_jq_j\|M_i-M_j\|$. [F1, F2, F4, F6, algebra]

2.1 Multiply this inequality by $q_i$ and sum over $i$. Independence gives $\mathbb P(A=M_i,A'=M_j)=q_iq_j$, so the resulting inequality is $\mathbb E\|A-\mathbb EA\|\leq\sum_{i,j}q_iq_j\|M_i-M_j\|=\mathbb E\|A-A'\|$. [F1, F6, step 1.1]

3.1 For the simple graph, $A_{ii}=0$, while for $i\ne j$ the entry $A_{ij}$ is the indicator of the unordered edge $\{i,j\}$ and has expectation $p$. Thus entrywise $\mathbb EA=p(J-I)$, and subtraction gives $A-pJ=(A-\mathbb EA)-pI$. This uses the graph's edge-coordinate independence as part of its model, whereas step 2.1 uses independence of the whole matrices. [F1, F2, F3, F4, F5, algebra]

4.1 The triangle inequality and homogeneity yield $\|A-pJ\|\leq\|A-\mathbb EA\|+p\|I\|$ pointwise. Taking finite expectations and applying step 2.1 proves the asserted bound. [F1, F2, step 2.1, step 3.1] ∎


## Gaussian entry moments and triangular independence

[Open item](item-prop-expander-prereq-gaussian-entry-moments) · level 0


### Statement

Assume the Axiom of Choice, as in the adopted normal-law construction. Let $Z$ have standard real Gaussian law $N(0,1)$, with density $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$. Its moments exist absolutely, $\mathbb E Z^0=1$, $\mathbb E Z^{2j+1}=0$ for $j\geq0$, and $\mathbb E Z^{2j}=(2j-1)!!$ for $j\geq1$, where $(2j-1)!!=1\cdot3\cdots(2j-1)$. In particular every positive even moment is at least $1$.

Let $n\geq0$ be an integer and put $I=\{1,\ldots,n\}$, with $I=\varnothing$ when $n=0$. On a common probability space take mutually independent standard Gaussian variables $G_{ij}$ for $1\leq i\leq j\leq n$ and set $G_{ji}=G_{ij}$ for $i<j$. The real random matrix $G$ is interpreted pointwise: for each outcome $\omega$, its realization is the function $G(\omega):I\times I\to\mathbb R$ with entries $G_{ij}(\omega)$. Its realizations are finite square symmetric matrices. Thus the independent coordinates are those in the chosen triangular half; the two mirrored entries are the same nonconstant variable and are not independent. For any finite list of matrix entries, let $m_{ij}$ be the number of occurrences of the unordered pair $\{i,j\}$. The expectation of their product is $\prod_{i\leq j}\mathbb E Z^{m_{ij}}$, with unused coordinates contributing $1$ and empty products equal to $1$. In particular, the actual multiplicity of each unordered pair must be retained in a trace-moment calculation.

### Facts & Assumptions

[F1] A real random variable is a measurable map from a probability space to $\mathbb R$ with its Borel sigma-algebra ([math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)). Under Choice, $N(0,1)$ is the probability law with density $\phi$ above; its total mass is one ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [math:def-standard-normal-and-normal-laws](https://alphabetamath.cc/item/def-standard-normal-and-normal-laws)).

[F2] Expectation is integration against the probability measure; change of variables to a random variable's law and integration against a density give the corresponding density integrals for nonnegative functions and, by positive and negative parts, for integrable functions ([math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable), [math:thm-change-of-variables-for-expectation](https://alphabetamath.cc/item/thm-change-of-variables-for-expectation), [math:thm-integration-against-a-density](https://alphabetamath.cc/item/thm-integration-against-a-density)).

[F3] Finite-interval integration by parts applies to continuously differentiable functions. The derivative of $e^t$ is $e^t$. The power rule and termwise differentiation of polynomials, the algebra of derivatives, and the chain rule apply on $\mathbb R$; all real points of the inner and outer domains are limit points ([math:thm-integration-by-parts](https://alphabetamath.cc/item/thm-integration-by-parts), [math:thm-derivative-of-exponential](https://alphabetamath.cc/item/thm-derivative-of-exponential), [math:lem-derivative-of-a-power](https://alphabetamath.cc/item/lem-derivative-of-a-power), [math:thm-algebra-of-derivatives](https://alphabetamath.cc/item/thm-algebra-of-derivatives), [math:thm-chain-rule](https://alphabetamath.cc/item/thm-chain-rule)).

[F4] Exponential decay dominates every fixed polynomial; the exponential is increasing and obeys its addition law. A geometric series with ratio strictly between zero and one converges ([math:thm-exponential-beats-every-polynomial](https://alphabetamath.cc/item/thm-exponential-beats-every-polynomial), [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing), [math:thm-exponential-addition-formula](https://alphabetamath.cc/item/thm-exponential-addition-formula), [math:thm-geometric-series](https://alphabetamath.cc/item/thm-geometric-series)).

[F5] Monotone convergence applies to nonnegative integrands, and a bounded Riemann-integrable function on a compact interval has the same Lebesgue integral there; the countable-choice hypothesis of the latter supplier follows from the assumed Axiom of Choice ([math:thm-monotone-convergence-for-the-integral](https://alphabetamath.cc/item/thm-monotone-convergence-for-the-integral), [math:thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral](https://alphabetamath.cc/item/thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral)).

[F6] Independence means independence of the coordinate-generated sigma-algebras. For a finite independent family, integrable Borel functions of the individual coordinates have an integrable product whose expectation factors ([math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements), [math:thm-factorization-of-expectations-for-independent-variables](https://alphabetamath.cc/item/thm-factorization-of-expectations-for-independent-variables)).

[F7] A finite matrix over $\mathbb R$ is a function on a finite rectangular index set; relabeling the supplier's indices $0,\ldots,n-1$ as $1,\ldots,n$ gives the pointwise matrix convention in the Statement. For the empty index set there is exactly one such function ([math:def-matrices-over-a-commutative-ring](https://alphabetamath.cc/item/def-matrices-over-a-commutative-ring)).

[F8] A property of natural numbers holds for every natural number if it holds at zero and passes from each natural number to its successor ([math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)).

[F9] Polynomial functions and their absolute values are continuous, as are sums, scalar multiples, products and compositions of continuous real functions. Continuous real functions on $\mathbb R$ are Borel measurable, under countable choice, which follows from the assumed Axiom of Choice. On a compact interval a continuous real function is bounded and Riemann integrable ([math:thm-algebra-of-continuous-functions](https://alphabetamath.cc/item/thm-algebra-of-continuous-functions), [math:thm-composition-of-continuous-functions](https://alphabetamath.cc/item/thm-composition-of-continuous-functions), [math:cor-continuous-functions-are-borel-measurable](https://alphabetamath.cc/item/cor-continuous-functions-are-borel-measurable), [math:thm-continuous-implies-integrable](https://alphabetamath.cc/item/thm-continuous-implies-integrable)).

[F10] If $\psi:[c,d]\to[a,b]$ is a monotone surjection, differentiable with one-sided derivatives at the endpoints and with Riemann-integrable derivative, then for every bounded Riemann-integrable $f:[a,b]\to\mathbb R$, $\int_a^b f(x)\,dx=\int_c^d f(\psi(t))|\psi\prime(t)|\,dt$ ([math:thm-monotone-change-of-variable-for-riemann-integrals](https://alphabetamath.cc/item/thm-monotone-change-of-variable-for-riemann-integrals)).

### Proof

**Given:** Choice, a standard Gaussian $Z$, and a finite symmetric matrix constructed from independent triangular standard Gaussian entries as in the statement.

**Goal:** Prove the moment formulas, absolute integrability, and the multiplicity-preserving factorization.

1.1 Fix an integer $k\geq0$. By [F4], $t^k e^{-t/2}$ is bounded for $t\geq1$. Since $t^2\geq2t$ for $t\geq2$, $t^k e^{-t^2/2}\leq(t^k e^{-t/2})e^{-t/2}\leq C_k e^{-t/2}$ there for some finite $C_k$. The same bound holds with $t=|x|$. On each interval $[n,n+1]$, $n\geq2$, monotonicity and the addition law bound $e^{-x/2}$ by $e^{-n/2}$; the resulting geometric series converges. The integrand is continuous, hence bounded and Riemann integrable on every compact interval, including $[-2,2]$, by [F3] and [F9]. Applying [F5] to the successive compact intervals shows that $\int_{\mathbb R}|x|^k\phi(x)\,dx<\infty$. The nonnegative case of [F2] therefore makes $Z^k$ integrable. The same tail estimate also gives $R^k\phi(R)\to0$ as $R\to\infty$. [F2, F3, F4, F5, F9]

2.1 Put $I_k=\int_{\mathbb R}x^k\phi(x)\,dx$. By [F2] and step 1.1, $I_k=\mathbb E Z^k$. For odd $k$ and $R>0$, $f(x)=x^k\phi(x)$ is continuous, hence bounded and Riemann integrable on $[-R,0]$, by [F3] and [F9]. The reflection $r:[0,R]\to[-R,0]$, $r(t)=-t$, is a decreasing surjection. Its difference quotient is $-1$, including in the one-sided endpoint limits, so its derivative is the Riemann-integrable constant $-1$ and $|r'(t)|=1$. Applying [F10] and using $\phi(-t)=\phi(t)$ gives $\int_{-R}^0 x^k\phi(x)\,dx=\int_0^R(-t)^k\phi(-t)\,dt=-\int_0^R t^k\phi(t)\,dt$. Thus the two half-interval integrals cancel. By [F5] the compact-interval Riemann and Lebesgue integrals agree; monotone convergence for the positive and negative parts, together with absolute integrability from step 1.1, gives $I_k=0$. Also $I_0=1$ by [F1]. [F1, F2, F3, F5, F9, F10, step 1.1]

3.1 For $k\geq2$ and $R>0$, the polynomial rule in [F3] gives $h'(x)=-x$ for $h(x)=-x^2/2$ and $u'(x)=(k-1)x^{k-2}$ for $u(x)=x^{k-1}$. The chain and scalar-multiple rules in [F3], on the full real inner and outer domains, give $\phi'(x)=-x\phi(x)$. Thus $v(x)=-\phi(x)$ has $v'(x)=x\phi(x)$. These derivatives are continuous by [F3] and [F9], so [F3] applies on $[-R,R]$. This gives $\int_{-R}^R x^k\phi(x)\,dx=[-x^{k-1}\phi(x)]_{-R}^R+(k-1)\int_{-R}^R x^{k-2}\phi(x)\,dx$. Both boundary terms vanish as $R\to\infty$ by step 1.1. The compact-interval integrals equal their Lebesgue counterparts by [F5], and absolute integrability permits passage to the whole line, separately for positive and negative parts. Hence $I_k=(k-1)I_{k-2}$. The base case is $I_2=I_0=1$. For $j\geq1$, the recurrence gives $I_{2j+2}=(2j+1)I_{2j}$, so [F8], applied to the property at $j=m+1$ for $m\geq0$, gives $I_{2j}=(2j-1)!!$ for every $j\geq1$. Each factor is a positive integer, so this moment is at least $1$. [F3, F5, F8, F9, step 1.1, step 2.1]

4.1 Using the pointwise finite matrix convention [F7], group a finite product of entries by its unordered index pairs. The result is $\prod_{i\leq j}G_{ij}^{m_{ij}}$. Each power is integrable by step 1.1. The functions $x\mapsto x^{m_{ij}}$ are continuous polynomials, hence Borel measurable by [F9]; applying [F6] to them gives the stated factorization, including exponent zero. If $n=0$, the only list of entries is empty and the identity reads $\mathbb E1=1$; an empty list for any $n$ gives the same identity. For $i<j$, $G_{ij}=G_{ji}$ and this variable has mean zero and second moment one by steps 2.1 and 3.1. If the two copies were independent, [F6] would give their product expectation as zero, contradicting the second moment. This proves the statement. [F6, F7, F9, step 1.1, step 2.1, step 3.1, algebra] ∎



## Independent-entry coordinates, convexity and Lipschitz constants

[Open item](item-def-expander-prereq-symmetric-coordinate-metrics) · level 0


### Definition

Let $n\ge1$ be an integer and $N=\binom n2$. Label the coordinates of $x\in\mathbb R^N$ by pairs $1\le i<j\le n$. Let $\operatorname{Sym}_n$ be the real symmetric $n\times n$ matrices, and define $T:\mathbb R^N\to\operatorname{Sym}_n$ by $T(x)_{ij}=T(x)_{ji}=x_{ij}$ for $i<j$ and $T(x)_{ii}=0$.

Use the Euclidean coordinate norm $\|x\|_2=(\sum_{i<j}x_{ij}^2)^{1/2}$ and distance $\|x-y\|_2$. For a real matrix $A$, its Frobenius norm is $\|A\|_F=(\sum_{i,j}A_{ij}^2)^{1/2}$, and its operator norm is $\|A\|_{\mathrm{op}}=\max_{\|v\|_2=1}\|Av\|_2$. These conventions give $\|T(x)-T(y)\|_F^2=2\|x-y\|_2^2$.

For a fixed real $n\times n$ matrix $C$, define $f_C(x)=\|T(x)-C\|_{\mathrm{op}}$. A function $f$ is convex if $f((1-t)x+ty)\le(1-t)f(x)+tf(y)$ for $0\le t\le1$, and is $L$-Lipschitz in this coordinate metric if $|f(x)-f(y)|\le L\|x-y\|_2$ for all $x,y$. The function $f_C$ is convex and has least Lipschitz constant $L_n=\sqrt{2(n-1)/n}$; for $n=1$ this constant is zero. Restrictions to coordinate boxes retain this upper bound, although their least constant can be smaller.

### Definition references

[math:lem-symmetric-matrix-frobenius-isometry](https://alphabetamath.cc/item/lem-symmetric-matrix-frobenius-isometry)

[math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)

[math:def-convex-and-strictly-convex-functions-on-euclidean-sets](https://alphabetamath.cc/item/def-convex-and-strictly-convex-functions-on-euclidean-sets)

[math:def-lipschitz-holder-contraction](https://alphabetamath.cc/item/def-lipschitz-holder-contraction)

### Justification

The coordinate formulas determine a unique linear map $T$. The Frobenius identity follows by counting each off-diagonal entry twice, equivalently by the symmetric-vectorization isometry [math:lem-symmetric-matrix-frobenius-isometry](https://alphabetamath.cc/item/lem-symmetric-matrix-frobenius-isometry). The operator norm is defined by [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space); the Euclidean triangle inequality and homogeneity imply its triangle inequality and homogeneity. Thus the norm of an affine matrix-valued map is convex, and the reverse triangle inequality gives $|f_C(x)-f_C(y)|\le\|T(x-y)\|_{\mathrm{op}}$.

For $z\in\mathbb R^N$, the matrix $T(z)$ is self-adjoint by [math:prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases](https://alphabetamath.cc/item/prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases). The real spectral theorem [math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms](https://alphabetamath.cc/item/cor-real-spectral-theorem-for-self-adjoint-endomorphisms) gives a unit eigenvector $v$ whose eigenvalue has absolute value $\|T(z)\|_{\mathrm{op}}$: expand unit vectors in an orthonormal eigenbasis to obtain this norm formula. By Cauchy–Schwarz [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm), $|v^TT(z)v|\le\|z\|_2(4\sum_{i<j}v_i^2v_j^2)^{1/2}$. Since $\sum_i v_i^2=1$, the squared second factor is $2(1-\sum_i v_i^4)\le2(n-1)/n$; the last inequality is Cauchy–Schwarz applied to $(v_i^2)$ and the all-ones vector. Therefore $\|T(z)\|_{\mathrm{op}}\le L_n\|z\|_2$, establishing the stated Lipschitz bound.

For $n\ge2$, take $z_{ij}=1$ for every $i<j$. Then $T(z)=J-I$, where $J$ is the all-ones matrix. It has eigenvalue $n-1$ on the all-ones vector and eigenvalue $-1$ on its orthogonal complement, so $\|T(z)\|_{\mathrm{op}}/\|z\|_2=(n-1)/\sqrt{n(n-1)/2}=L_n$. For any fixed $C$, the reverse triangle inequality gives $f_C(tz)\ge t\|T(z)\|_{\mathrm{op}}-\|C\|_{\mathrm{op}}$ for $t>0$, while $f_C(0)=\|C\|_{\mathrm{op}}$. Dividing $f_C(tz)-f_C(0)$ by $t\|z\|_2$ and letting $t\to\infty$ shows that no smaller global Lipschitz constant works. For $n=1$, the coordinate space has one point and $T=0$, so the least constant is zero.


## Tail integration and a median-to-mean bridge

[Open item](item-prop-expander-prereq-median-tail-integration) · level 0


### Statement

Assume countable choice. Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space, let $Z$ be an integrable real random variable, and let $m$ be a median: $\mathbb P(Z\le m)\ge 1/2$ and $\mathbb P(Z\ge m)\ge 1/2$. Suppose that $L>0$ and, for every $t>0$, both $\mathbb P(Z>m+t)$ and $\mathbb P(Z<m-t)$ are at most $2e^{-t^2/(4L^2)}$. Then

$$|\mathbb EZ-m|\le\int_0^\infty\min\{1,2e^{-t^2/(4L^2)}\}\,dt\le 2\sqrt\pi L<4L.$$

The two one-sided expectations $\mathbb E(Z-m)^+$ and $\mathbb E(Z-m)^-$ equal their respective tail integrals. No symmetry of $Z$ is required. The first inequality in fact holds under the displayed tail bounds for any real $m$, whether or not it is a median.

### Facts & Assumptions

**Given:** The probability space, $Z$, $m$, $L$ and countable choice as in the statement. For a real $x$, write $x^+=\max\{x,0\}$ and $x^-=\max\{-x,0\}$.

[F1] Expectation is integration against the probability measure; the expectation of an integrable real variable is the difference of the expectations of its positive and negative parts ([math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)). The nonnegative integral is defined as the supremum over simple nonnegative minorants ([math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral)).

[F2] The layer-cake formula gives $\mathbb E X=\int_0^\infty\mathbb P(X>t)\,dt$ for nonnegative measurable $X$, allowing infinite values ([math:cor-layer-cake-formulas-for-random-variables](https://alphabetamath.cc/item/cor-layer-cake-formulas-for-random-variables)). The integral is linear on integrable functions ([math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)), and the nonnegative integral is monotone and positively homogeneous ([math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)).

[F3] The improper Gaussian integral is $\int_{-\infty}^{\infty}e^{-u^2}\,du=\sqrt\pi$ ([math:thm-gaussian-integral](https://alphabetamath.cc/item/thm-gaussian-integral)), and $\pi<3.185<4$ ([Bartle–Sherbert bounds for pi](https://alphabetamath.cc/item/ex-bartle-sherbert-bounds-for-pi)).

[F4] Continuous functions on compact intervals are Riemann integrable, and substitution applies there ([math:thm-continuous-implies-integrable](https://alphabetamath.cc/item/thm-continuous-implies-integrable), [math:thm-substitution](https://alphabetamath.cc/item/thm-substitution)). Under countable choice, bounded Riemann integrable functions have the same Lebesgue integral ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [math:thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral](https://alphabetamath.cc/item/thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral)). Monotone convergence passes increasing nonnegative integrals to their limit ([math:thm-monotone-convergence-for-the-integral](https://alphabetamath.cc/item/thm-monotone-convergence-for-the-integral)).

[F5] A probability space has $\mathbb P(\Omega)=1$, and its events have probabilities in $[0,1]$ ([math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)). A real random variable is a measurable real-valued map ([math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)). An integrable real function has finite integrals of both its positive and negative parts ([math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)). Sums, real scalar multiples, and positive and negative parts of measurable real functions are measurable ([math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral)).

[F6] For a nonnegative simple function $s=\sum_j c_j\chi_{E_j}$ on disjoint measurable sets, its simple integral is $\sum_j c_j\mathbb P(E_j)$ ([math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)), and its nonnegative Lebesgue integral agrees with this value ([math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral)).

### Proof

**Given:** The data and assumptions in the statement.

**Goal:** Prove the one-sided tail identities and the displayed median-to-mean estimates.

1.1 Constants are measurable because inverse images of Borel sets are either $\Omega$ or $\varnothing$. The nonnegative constants $m^+$ and $m^-$ are simple, so [F5] and [F6] give $\mathbb E m^+=m^+\mathbb P(\Omega)=m^+$ and $\mathbb E m^-=m^-\mathbb P(\Omega)=m^-$. Thus the constant $m$ is integrable by [F5] and has expectation $m^+-m^-=m$ by [F1]. Put $Y=Z-m$. By the closure properties in [F5], $Y$ and its nonnegative parts $Y^+$ and $Y^-$ are measurable. Since $Z$ and the constant $m$ are integrable, the vector-space and linearity assertions in [F2] give integrability of $Y$ and $\mathbb EY=\mathbb EZ-m$. By [F5], both $\mathbb EY^+$ and $\mathbb EY^-$ are finite. [F1, F2, F5, F6, given, algebra]

2.1 By [F1], $\mathbb EY=\mathbb EY^+-\mathbb EY^-$. For $t>0$, the strict superlevel events of the nonnegative measurable variables $Y^+$ and $Y^-$ from step 1.1 are respectively $\{Z>m+t\}$ and $\{Z<m-t\}$. Applying [F2] to $Y^+$ and $Y^-$ gives $\mathbb EY^+=\int_0^\infty\mathbb P(Z>m+t)\,dt$ and $\mathbb EY^-=\int_0^\infty\mathbb P(Z<m-t)\,dt$. Both expectations are finite by step 1.1. [F1, F2, step 1.1, algebra]

3.1 Each probability in step 2.1 is at most one by [F5] and at most the stated Gaussian bound. By monotonicity in [F2], each of the two nonnegative expectations is at most $I=\int_0^\infty\min\{1,2e^{-t^2/(4L^2)}\}\,dt$. For nonnegative $a,b\le I$, $|a-b|\le I$; apply this to the two expectations in step 2.1 and use the expectation difference from steps 1.1 and 2.1. This argument does not use the median property or symmetry. [F2, F5, step 1.1, step 2.1, given, algebra]

4.1 On every finite interval, substitute $u=t/(2L)$ using [F4]. The integrand is continuous, so [F4] also identifies its compact-interval Riemann and Lebesgue integrals. Applying monotone convergence to increasing compact intervals and using the evenness of $e^{-u^2}$ and [F3] yields $\int_0^\infty 2e^{-t^2/(4L^2)}\,dt=2\sqrt\pi L$. Hence $I\le2\sqrt\pi L$ by [F2]. Finally [F3] gives $\sqrt\pi<2$, so $2\sqrt\pi L<4L$. Together with step 3.1 this proves the claim. [F2, F3, F4, step 3.1, algebra] ∎


## Uniform edge orderings, graph-process times and independent labels

[Open item](item-def-expander-prereq-edge-order-process-coupling) · level 0


### Definition

Assume countable choice. Let $n\ge 1$ be an integer, $V=\{1,\ldots,n\}$, and let $E=\{\{i,j\}:i,j\in V,\ i<j\}$ be the set of possible edges, with $N=|E|=\binom n2$. A graph here is the vertex set $V$ together with a subset of $E$; it is connected if each pair of vertices is joined by a finite path of edges. Give the set $\Omega$ of the $N!$ orderings $(e_1,\ldots,e_N)$ of $E$ its power-set sigma-algebra and the uniform probability law. For $0\le m\le N$, define $G(n,m)$ to have edge set $\{e_1,\ldots,e_m\}$. For $0\le m\le N$, the joint prefix map $R_m:\Omega\to E^m$ sends an ordering to $(e_1,\ldots,e_m)$; the finite target $E^m$ has the discrete topology and hence its full power set as its Borel sigma-algebra. For $m=0$, $E^0$ is the singleton consisting of the empty tuple. Its edge-revelation filtration is $\mathcal F_m=\sigma(R_m)=\{R_m^{-1}(B):B\subseteq E^m\}$, also written $\sigma(e_1,\ldots,e_m)$, extended by $\mathcal F_m=\mathcal F_N$ for $m>N$. Define the connectivity time $\tau=\min\{m:G(n,m)\text{ is connected}\}$. A discrete stopping time is a map whose event $\{\tau\le m\}$ belongs to $\mathcal F_m$ for every $m\ge0$.

Equivalently for the order process, assign to each edge an independent random label $U_e$ uniform on $[0,1)$ and order edges by increasing label, breaking ties using a fixed deterministic edge order. For $p\in[0,1]$, put an edge in the threshold graph $G_p$ exactly when $U_e\le p$. Here uniform means $\mathbb P(U_e\in[a,b))=b-a$ for $0\le a\le b\le1$, and independence means that probabilities of simultaneous coordinate events factor. Almost surely the labels are distinct, and their ordering has the uniform law above. At each fixed $p$, the edge indicators of $G_p$ are independent with inclusion probability $p$.

For a sequence of random processes indexed by $n$, an event holds with high probability if its probability tends to one as $n\to\infty$. A simultaneous assertion after connectivity means that the single event $\{G(n,m)\text{ has the property for every }m\in\{\tau,\ldots,N\}\}$ holds with high probability. This is stronger than separate high-probability assertions at deterministic times, even when the latter are restricted to times at or after $\tau$. No monotonicity of a graph property such as synchronization is asserted by this definition.

### Facts & Assumptions

[F1] On a nonempty finite set the uniform law assigns each outcome equal mass and each event its fraction of the outcomes ([math:def-uniform-finite-probability-space](https://alphabetamath.cc/item/def-uniform-finite-probability-space)).

[F2] A filtration is an increasing sequence of sigma-algebras, and a discrete stopping time is characterized by the events $\{\tau\le m\}$ being in the corresponding sigma-algebras ([math:def-filtration-and-filtered-probability-space](https://alphabetamath.cc/item/def-filtration-and-filtered-probability-space), [math:def-discrete-stopping-time](https://alphabetamath.cc/item/def-discrete-stopping-time)).

[F3] Finite products of the normalized Lebesgue law on $[0,1)$ exist by iteration of product measure; their coordinate events have product probabilities. Independent random elements are defined by factorization of their coordinate sigma-algebras ([math:def-product-measure-on-sigma-finite-spaces](https://alphabetamath.cc/item/def-product-measure-on-sigma-finite-spaces), [math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)).

[F4] Under countable choice, a finite-dimensional box has Lebesgue measure equal to the product of its side lengths, including the stated half-open conventions. Euclidean Borel sets agree with the finite product Borel sigma-algebra ([math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind), [math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel](https://alphabetamath.cc/item/thm-borel-products-of-euclidean-spaces-are-euclidean-borel), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F5] A path is a finite vertex list with distinct vertices and with an edge between each consecutive pair; a single vertex is a path of length zero ([math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)).

[F6] For a map $f$ to a Borel measurable target, $\sigma(f)$ consists of the inverse images of its Borel sets; it is the smallest sigma-algebra making $f$ measurable. On a finite discrete target every subset is Borel ([math:def-sigma-algebra-generated-by-a-function](https://alphabetamath.cc/item/def-sigma-algebra-generated-by-a-function)).

[F7] For a finite family of events, the probability of their union is at most the sum of their probabilities, including the empty-family case ([math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound)).

### Justification

**Given:** An integer $n\ge1$, the finite edge set and the uniform permutation and label constructions in the definition, under countable choice.

**Goal:** Verify the laws, the coupling, the stopping-time assertion, and the stated distinction of quantifiers.

1.1 There are $N!$ edge orderings. For a fixed $m$-edge set, exactly $m!(N-m)!$ orderings put precisely that set first, so $G(n,m)$ is uniform among the $\binom Nm$ graphs with $m$ edges. Conditional on any specified first $m<N$ edges in their revealed order, each missing edge is next in exactly $(N-m-1)!$ of the $(N-m)!$ compatible orderings. Thus it is selected with probability $1/(N-m)$. For $N=0$ the unique empty ordering gives the same statements where applicable. [F1, algebra]

1.2 For $N>0$, use the $N$-fold product of normalized Lebesgue measure on $[0,1)$, indexed by $E$; for $N=0$ use the one-point probability space. Product rectangles show that the coordinate labels are independent and have the stated uniform law. A threshold event is a coordinate event of probability $p$, including the endpoints $p=0,1$; therefore all threshold indicators are independent. Strict ordering events are Borel, since they are defined by finitely many strict coordinate inequalities. [F3, F4, given]

1.3 Each $R_m$ has a finite discrete target, so $\mathcal F_m$ is a sigma-algebra of events by [F6]. Truncating a prefix of length $m+1$ to length $m$ shows that $\mathcal F_m\subseteq\mathcal F_{m+1}$. For each $m\le N$, the event that $G(n,m)$ is connected is the inverse image under $R_m$ of the set of prefixes whose edge set joins every pair of vertices by a path, and thus belongs to $\mathcal F_m$. Connectivity persists when edges are added, because every existing path remains a path. The complete graph is connected: distinct vertices have a one-edge path, and each vertex has a length-zero path to itself. Thus $\tau\le N$, including when $n=1$, and $\{\tau\le m\}$ is exactly the event that $G(n,m)$ is connected for $m\le N$; for $m>N$ it is the whole space. Hence $\tau$ is a bounded stopping time for the stated filtration. [F2, F5, F6, given]

1.4 For $n\ge2$, a disconnected graph on $V$ has at least $n-1$ missing edges. Indeed, choose a vertex and let $S$ be the vertices reachable from it by paths. Disconnectedness makes $S$ nonempty and proper, and there is no edge from $S$ to its complement: such an edge would extend a path to a vertex outside $S$. If $s=|S|$, at least $s(n-s)\ge n-1$ edges are therefore missing, since $s(n-s)-(n-1)=(s-1)(n-s-1)\ge0$. Consequently every graph with at most $n-2$ missing edges is connected. In the given process this proves $\tau\le a_n:=N-n+2$ deterministically. The set $L_n=\{a_n,\ldots,N\}$ contains $n-1$ indices, all at or after the actual connectivity time. [F5, given, algebra]

2.1 Divide $[0,1)$ into $k$ equal half-open intervals. The probability that a specified pair of distinct labels falls in the same interval is $1/k$, by independence and the interval lengths. A finite union bound gives probability at most $\binom N2/k$ that any pair shares an interval. The tie event is contained in this event for every $k$, so it has probability zero. [F3, F4, F7, step 1.2, algebra]

2.2 Write $S_n$ for the simultaneous event in the definition and $B_{n,m}=\{m<\tau\}\cup\{G(n,m)\text{ has the property}\}$ for the assertion at a deterministic index $0\le m\le N$, restricted to times at or after connectivity. Then $S_n=\bigcap_{m=0}^N B_{n,m}$, so $\mathbb P(B_{n,m})\ge\mathbb P(S_n)$ for each such index, including any deterministic choice depending on $n$. Thus simultaneous high probability implies each of these deterministic-time assertions. [given, step 1.3]

3.1 On the event that all labels occupy different intervals, each ordered list of distinct interval indices has probability $k^{-N}$, and relabeling its coordinates gives equally many lists for each of the $N!$ strict edge orders. Hence the probabilities of any two strict edge orders differ by at most $\binom N2/k$. Letting $k$ grow shows that all strict orders have equal probability. They are disjoint and, by step 2.1, their union has probability one; each therefore has probability $1/N!$. The deterministic tie-breaking rule changes nothing outside a null event, establishing the coupling to the uniform permutation process. The case $N=0$ is immediate. [F1, step 1.2, step 2.1, algebra]

4.1 On the finite space $\Omega\times L_n$, use the uniform law, so each pair has mass $1/(N!(n-1))$. Its ordering coordinate retains the original graph-process law. For subsets $A\subseteq\Omega$ and $B\subseteq L_n$, the probability of $A\times B$ is $|A||B|/(N!(n-1))$, the product of its marginal probabilities. Hence the index coordinate $J$ is uniform on $L_n$ and independent of the ordering. Define a time-indexed property to hold at $m$ exactly when $m\ne J$; equivalently, sample the graph property that its edge count differs from $J$. For each deterministic index $m$, its failure probability is $\mathbb P(J=m)\le1/(n-1)$, which tends to zero. Since $J\ge\tau$ by step 1.4, the simultaneous post-connectivity assertion fails for every outcome, at the index $m=J$. This proves the strict quantifier distinction on the stated graph process with an independently sampled property. No monotonicity of synchronization follows from the process construction or the definitions. [F1, F3, step 2.2, step 1.4, algebra] ∎



## From finite Gaussian comparisons to a sphere supremum

[Open item](item-prop-expander-prereq-gaussian-finite-net-transfer) · level 0


### Statement

Assume the Axiom of Choice. Let $S=\{t\in\mathbb R^d:\|t\|_2=1\}$, where $d\ge1$. Let $X=(X_t)_{t\in S}$ and $Y=(Y_t)_{t\in S}$ be centered real Gaussian processes, possibly on different probability spaces. Suppose that each has continuous sample paths outside a measurable null set and that $\sup_{t\in S}X_t$ and $\sup_{t\in S}Y_t$ are measurable and integrable. If $\mathbb E(X_s-X_t)^2\ge\mathbb E(Y_s-Y_t)^2$ for every $s,t\in S$, then $\mathbb E\sup_{t\in S}X_t\ge\mathbb E\sup_{t\in S}Y_t$.

Here centered means that every coordinate has expectation zero; integrable means finite absolute expectation. A Gaussian process has a possibly singular multivariate normal evaluation vector at every finite list of indices. A finite $\varepsilon$-net in $S$ is a finite subset whose points are within Euclidean distance $\varepsilon$ of every point of $S$.

### Statement references

[math:def-gaussian-process](https://alphabetamath.cc/item/def-gaussian-process)

[math:def-stochastic-process-and-finite-dimensional-distributions](https://alphabetamath.cc/item/def-stochastic-process-and-finite-dimensional-distributions)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-metric-continuity](https://alphabetamath.cc/item/def-metric-continuity)

[math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)

### Facts & Assumptions

**Given:** The sphere, processes, continuity and integrability assumptions, and increment-variance ordering in the Statement.

**Goal:** Compare the expectations of the two sphere suprema.

[F1] Under AC, finite centered Gaussian vectors with finite covariance matrices and ordered increment variances have ordered expected maxima when the two vectors are independent and have at least two coordinates ([math:lem-finite-gaussian-max-comparison](https://alphabetamath.cc/item/lem-finite-gaussian-max-comparison), [math:def-gaussian-process](https://alphabetamath.cc/item/def-gaussian-process), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

[F2] The product of two probability measures exists and has the rectangle formula; the rectangle criterion then gives independence of random vectors depending on separate coordinates ([math:thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique](https://alphabetamath.cc/item/thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique), [math:thm-rectangle-criterion-for-independent-random-elements](https://alphabetamath.cc/item/thm-rectangle-criterion-for-independent-random-elements)).

[F3] Finite maxima and increasing pointwise limits of measurable functions are measurable, and dominated convergence passes expectations through an almost-everywhere limit with an integrable majorant ([math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral), [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)).

[F4] The rationals are countable and dense in the reals, and closed bounded subsets of $\mathbb R^d$ are compact ([math:thm-rationals-countable](https://alphabetamath.cc/item/thm-rationals-countable), [math:lem-q-and-irrationals-dense-r](https://alphabetamath.cc/item/lem-q-and-irrationals-dense-r), [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn)).

[F5] A one-dimensional normal law is an affine image of the standard normal density $e^{-x^2/2}/\sqrt{2\pi}$, including the constant case ([math:def-standard-normal-and-normal-laws](https://alphabetamath.cc/item/def-standard-normal-and-normal-laws)).

[F6] A stochastic process is a family of random elements on one probability space; its finite evaluation vectors have the corresponding pushforward laws ([math:def-stochastic-process-and-finite-dimensional-distributions](https://alphabetamath.cc/item/def-stochastic-process-and-finite-dimensional-distributions)).

[F7] Continuity means metric $\varepsilon$-$\delta$ continuity, using the Euclidean metrics for maps on the sphere and normalization away from zero ([math:def-metric-continuity](https://alphabetamath.cc/item/def-metric-continuity)).

[F8] The expectation of a nonnegative or integrable random variable is its probability-space integral; for a real random variable, integrability means finite absolute expectation ([math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)).

### Proof

1.1 Enumerate the distinct points of $D=\{q/\|q\|_2:q\in\mathbb Q^d\setminus\{0\}\}$ as $t_1,t_2,\ldots$ if $d\ge2$; for $d=1$, take $D=\{-1,1\}$ and repeat these points in the list. Rational coordinate approximation and continuity of normalization away from zero show that $D$ is dense in $S$. Put $N_k=\{t_1,\ldots,t_{k+1}\}$. These finite sets are nested and have dense union. For every $\varepsilon>0$, the open $\varepsilon$-balls centered at points of $D$ cover compact $S$; a finite subcover is contained in some $N_k$, so all later $N_k$ are $\varepsilon$-nets. [F4, F7, construct]

2.1 For either process $Z\in\{X,Y\}$, let $M_k^Z=\max_{t\in N_k}Z_t$ and $M^Z=\sup_{t\in S}Z_t$. On the measurable probability-one event of continuous sample paths, density gives $M_k^Z\uparrow M^Z$: for any $t\in S$, values at a sequence from $D$ tending to $t$ converge to $Z_t$. The finite maxima are measurable by [F3]. Since $t_1\in N_k$, $Z_{t_1}\le M_k^Z\le M^Z$, hence $|M_k^Z|\le |Z_{t_1}|+|M^Z|$ on that event. [given, F3, F6, F7, step 1.1]

3.1 The coordinate $Z_{t_1}$ has a normal law by the Gaussian-process definition. Its absolute expectation is finite: by [F5] it is bounded by $|m|+\sigma\mathbb E|G|$, where $G$ is standard normal and $\mathbb E|G|=\sqrt{2/\pi}$ by integrating its density on the two half-lines. Thus the majorant in step 2.1 is integrable. Dominated convergence gives $\mathbb E M_k^Z\to\mathbb E M^Z$ for each process. [F1, F3, F5, F8, step 2.1]

4.1 For each $k$, put independent copies of the two finite evaluation vectors on the product of their original probability spaces. The rectangle formula and criterion in [F2] give independence, and each copy has its original finite-dimensional law, means, and increment variances. If $N_k$ has fewer than two distinct points, repeat a point in its evaluation list; otherwise list its points once. The finite comparison [F1] gives $\mathbb E M_k^X\ge\mathbb E M_k^Y$. Taking $k\to\infty$ using step 3.1 proves the desired comparison. [given, F1, F2, F6, F8, step 1.1, step 3.1] ∎

### Remarks

To apply this proposition to a quadratic-form process, its increment ordering, almost-sure path continuity, and integrability of its supremum must be established separately.


## Finite Bernoulli difference laws and parity of moments

[Open item](item-prop-expander-prereq-symmetric-bernoulli-difference-moments) · level 0


### Statement

Let $0\le p\le1$ and let $B,B'$ be independent Bernoulli$(p)$ random variables on a finite probability space. Put $W=B-B'$. Then $\mathbb P(W=1)=\mathbb P(W=-1)=p(1-p)$ and $\mathbb P(W=0)=p^2+(1-p)^2$. For every positive integer $k$, $\mathbb E[W^k]$ is zero if $k$ is odd and $2p(1-p)$ if $k$ is even; $\mathbb E[W^0]=1$, with $W^0$ the constant one.

More generally, let $E$ be a finite set of unordered edges, meaning two-element subsets of a finite vertex set, and suppose that the family $(B_e,B'_e)_{e\in E}$ of all its Bernoulli$(p)$ coordinates is mutually independent. Then the differences $W_e=B_e-B'_e$ are mutually independent. This hypothesis holds for the coordinate variables on the finite product of two Bernoulli spaces per edge. Defining $W_{ij}=W_{\{i,j\}}$ for distinct vertices makes $W_{ij}=W_{ji}$: reflection is the same random variable, not another independent copy.

### Statement references

[Bernoulli random variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)

[Mutual independence of finite-valued random variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables)

[Finite product probability spaces](https://alphabetamath.cc/item/def-product-of-finite-probability-spaces)

[Finite expectation](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)

[Finite probability spaces and event probabilities](https://alphabetamath.cc/item/def-finite-probability-space-and-event)

[Finite real random variables and their distributions](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution)

### Facts & Assumptions

[F1] By [math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables), a Bernoulli$(p)$ variable has probabilities $p$ and $1-p$ at $1$ and $0$, respectively.

[F2] By [math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables), mutual independence means that every simultaneous assignment to any nonempty subfamily has probability equal to the product of its coordinate probabilities.

[F3] By [math:def-product-of-finite-probability-spaces](https://alphabetamath.cc/item/def-product-of-finite-probability-spaces), a product outcome has weight equal to the product of its coordinate weights; the empty product has weight one.

[F4] By [math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space), expectation is the sum of a random variable's values weighted by outcome probabilities.

[F5] By [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event), a finite probability space $(\Omega,w)$ has nonnegative outcome weights summing to one, and $\mathbb P(A)=\sum_{\omega\in A}w(\omega)$ for each event $A\subseteq\Omega$. Summing over disjoint events therefore sums their probabilities.

[F6] By [math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution), a finite real random variable is a function $\Omega\to\mathbb R$, and its law assigns each value the probability of its fibre. Differences and nonnegative integer powers here are formed pointwise as functions on the same finite outcome set, with zeroth powers defined as the constant one.

### Proof

**Given:** The finite probability spaces and variables in the statement.

**Goal:** Establish the difference law, its moments, and independence across edge blocks.

1.1 By independence, the four assignments $(B,B')=(1,0),(0,1),(1,1),(0,0)$ have respective probabilities $p(1-p),p(1-p),p^2,(1-p)^2$. Their differences are respectively $1,-1,0,0$, giving the asserted law, including at $p=0$ and $p=1$. [F1, F2, F5, F6]

2.1 For $k>0$, the weighted sum over these values is $\mathbb E[W^k]=p(1-p)(1+(-1)^k)$, since the zero term vanishes. This gives the two parity cases. The zeroth power is the constant one, whose expectation is one by normalization. [F4, F5, F6, step 1.1]

2.2 For a nonempty $J\subseteq E$ and prescribed values $a_e\in\{-1,0,1\}$, sum the joint coordinate-assignment probabilities over the disjoint assignments satisfying $b_e-b'_e=a_e$ for each $e\in J$. Mutual independence factors every summand into its edge-block factors, and finite distributivity factors the sum into $\prod_{e\in J}\mathbb P(W_e=a_e)$. Thus the differences are mutually independent; impossible values have probability zero, and the empty family is independent by convention. [F2, F5, F6, step 1.1]

3.1 On the stated finite product, summing product weights over all unprescribed coordinates gives one for each such coordinate, so every prescribed coordinate assignment has the product of its marginal weights. The coordinates are therefore mutually independent. Finally, $\{i,j\}=\{j,i\}$, so the two reflected entries are literally the same difference variable. [F1, F2, F3, F5, F6, step 2.2] ∎


## Logarithmic tangent bound and a quadratic entropy envelope

[Open item](item-lem-author-2bcd11f9e275-logarithmic-tangent-bound) · level 0


### Statement

For $a>0$, $\log a\le a-1$, with equality only at $a=1$. Put $I(a)=a\log a-a+1$. For $0<a<1$, $0<I(a)<(1-a)^2$ and $I(a)<1-a<-\log a$. For $1<a<e$, $I(a)<\log a$, where $e$ denotes the unique positive number with $\log e=1$.

### Facts & Assumptions

**Given:** The variables and hypotheses of the Statement.

[F1] [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws) gives the order, range and continuity of $\log$, including $\log 1=0$.

[F2] [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral) gives $(\log a)\prime=1/a$.

[F3] [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative) converts a derivative sign on an interval into monotonicity.

[F4] [math:thm-algebra-of-derivatives](https://alphabetamath.cc/item/thm-algebra-of-derivatives) gives differentiability and the sum, scalar-multiple and product rules for differentiable functions on a common domain at a limit point of that domain.

[F5] [math:lem-derivative-of-a-power](https://alphabetamath.cc/item/lem-derivative-of-a-power), with exponents $0$ and $1$, gives the derivatives $0$ and $1$ of the constant function $1$ and the identity function, respectively.

[F6] [math:cor-differentiable-implies-continuous](https://alphabetamath.cc/item/cor-differentiable-implies-continuous) gives continuity at every point where a function is differentiable and that point is a limit point of its domain.

### Proof

**Goal:** Establish the full Statement.

1.1 On $(0,\infty)$ every point is a limit point of the domain. By F2, F4 and F5, the function $q(a)=a-1-\log a$ is differentiable with $q\prime(a)=1-0-1/a=1-1/a$, and F6 makes it continuous there. Its derivative is negative for $0<a<1$ and positive for $a>1$, and $q(1)=0$. Applying F3 on $(0,1]$ and $[1,\infty)$ therefore gives $q(a)>q(1)=0$ for $a\ne1$. Thus $\log a\le a-1$, with equality exactly at $a=1$. The number $e$ exists uniquely by the range and strict increase of $\log$, and $e>1$ since $\log 1=0<1$. [F1, F2, F3, F4, F5, F6, algebra]

2.1 By F2, F4 and F5, the function $I(a)=a\log a-a+1$ is differentiable on $(0,\infty)$, with $I\prime(a)=\log a+a(1/a)-1+0=\log a$, and F6 makes it continuous there. Since $\log a<0$ on $(0,1)$, F3 on $(0,1]$ gives strict decrease and hence $I(a)>I(1)=0$ for $0<a<1$. In this range, $(1-a)^2-I(a)=a(a-1-\log a)>0$ by step 1.1, while $I(a)=a\log a+1-a<1-a$ and step 1.1 gives $1-a<-\log a$. For $1<a<e$, strict increase of $\log$ gives $0<\log a<1$, so $\log a-I(a)=(a-1)(1-\log a)>0$. These are all asserted bounds. [F1, F2, F3, F4, F5, F6, step 1.1, algebra] ∎


## A parent-map bound for isolated components

[Open item](item-lem-author-c1dce5041ae4-component-parent-bound) · level 0


### Statement

Let $X_k$ count connected components with $k$ vertices in $G(n,p)$. For $2\le k\le n$,
$$\mathbb EX_k\le\binom nk k^{k-1}p^{k-1}(1-p)^{k(n-k)}.$$
This upper bound uses a root-parent encoding and does not require the exact count of labelled trees.

### Facts & Assumptions

**Given:** The objects and hypotheses of the Statement.

**Goal:** Prove the Statement.

[F1] Edge indicators for distinct unordered vertex pairs are independent ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)).

[F2] A component consists of all vertices joined to a vertex by finite paths ([math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)).

[F3] Expectations are finite weighted sums ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)).

[F4] The coefficient $\binom nk$ counts $k$-element subsets of $[n]$ ([math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)).

[F5] An induced subgraph retains exactly the edges with both endpoints in its vertex set; a spanning subgraph has the full vertex set ([math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)).

[F6] A path has distinct vertices and length equal to its number of traversed edges; a cycle is a closed walk of length at least three with no other vertex repetition ([math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)).

[F7] Distance within a connected component is the minimum length of a path between the vertices ([math:def-graph-distance-and-girth](https://alphabetamath.cc/item/def-graph-distance-and-girth)).

[F8] The indicator of an event is one on that event and zero elsewhere ([math:def-indicator-random-variable](https://alphabetamath.cc/item/def-indicator-random-variable)).

### Proof

**Proof technique:** direct.

1.1 Fix a $k$-vertex set $S$ and root it at its least labelled vertex. If the induced graph on $S$ is connected, every other vertex has a shortest path to the root. Choose as its parent the least labelled neighbor whose distance to the root is one smaller. Following parents strictly decreases distance and reaches the root, so the resulting $k-1$ distinct edges form a connected spanning graph with no cycle. There are at most $k^{k-1}$ parent maps, since each nonroot vertex chooses an element of $S$. Each map arising this way requires $k-1$ distinct internal edges. [F2, F5, F6, F7, algebra, construct]

2.1 For $S$ to be a component, its $k(n-k)$ crossing pairs must be absent. For each valid parent map from step 1.1 its internal required edges and those crossing pairs are disjoint. Independence gives probability $p^{k-1}(1-p)^{k(n-k)}$ for these requirements. Sum over at most $k^{k-1}$ maps and then over the $\binom nk$ sets $S$. The indicator of a union is bounded by the sum of its indicators; applying the finite expectation formula proves the bound, also at $p=0,1$ with zero exponents interpreted as empty products. [step 1.1, F1, F3, F4, F8, algebra] ∎


## Finite coupling makes connectivity probability monotone

[Open item](item-lem-author-c1dce5041ae4-connectivity-monotone-coupling) · level 0


### Statement

For fixed integer $n\ge1$ and $0\le p\le q\le1$, the connectivity probabilities satisfy $\mathbb P(G(n,p)\text{ is connected})\le\mathbb P(G(n,q)\text{ is connected})$. This statement concerns graph connectivity only.

### Facts & Assumptions

**Given:** The objects and hypotheses of the Statement.

**Goal:** Prove the Statement.

[F1] Finite product spaces assign to a coordinate tuple the product of its coordinate weights ([math:def-product-of-finite-probability-spaces](https://alphabetamath.cc/item/def-product-of-finite-probability-spaces)).

[F2] Event probabilities in a finite space are sums of nonnegative outcome weights ([math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)).

[F3] The law $G(n,p)$ has independent edge coordinates of inclusion probability $p$ ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)).

[F4] Connectivity means that every pair of vertices is joined by a finite path ([math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)).

### Proof

**Proof technique:** direct.

1.1 Give each possible edge a coordinate with three outcomes $0,1,2$ of respective weights $1-q,q-p,p$, and use their finite product. These weights are nonnegative and sum to one. Include an edge in $H_p$ if its coordinate is $2$, and in $H_q$ if its coordinate is $1$ or $2$. Summing coordinate weights shows the marginals are respectively $p$ and $q$; summing product weights over each prescribed coordinate block factors, so the graph marginals are $G(n,p)$ and $G(n,q)$. [F1, F2, F3, construct]

2.1 On every outcome the two graphs have the same nonempty vertex set $[n]$, and every edge of $H_p$ is an edge of $H_q$. Each path of $H_p$ therefore remains a path of $H_q$, so the event $A$ that $H_p$ is connected is contained in the event $B$ that $H_q$ is connected. For the product outcome weights $w$, nonnegativity gives $\mathbb P(B)-\mathbb P(A)=\sum_{\omega\in B\setminus A}w(\omega)\ge0$. By the graph marginals in step 1.1 this is the desired inequality, including all endpoint cases. [step 1.1, F2, F4, algebra] ∎


## Reversible labels for adjacency slots

[Open item](item-lem-author-f736bc76cd5d-reversible-slots) · level 0


### Statement

Let $A$ be the adjacency-slot matrix of a finite $d$-regular multigraph in [math:def-regular-multigraph-and-normalized-adjacency](https://alphabetamath.cc/item/def-regular-multigraph-and-normalized-adjacency). There is a finite set $S$ of directed slot labels, maps $o,t:S\to V$ (origin and terminal vertex), and an involution $s\mapsto\bar s$ such that $o(\bar s)=t(s)$, $t(\bar s)=o(s)$, and exactly $A_{xy}$ labels have origin $x$ and terminal vertex $y$. Each vertex has $d$ outgoing labels. Diagonal labels may be fixed by the involution. A labelled walk of length $m$ is a list $(s_1,\ldots,s_m)$ with $t(s_i)=o(s_{i+1})$; it starts at $o(s_1)$ and is closed when $t(s_m)=o(s_1)$. The length-zero walk at a specified vertex is also allowed.

### Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish every assertion in the statement.

[F1] The adjacency-slot convention gives a symmetric nonnegative integer matrix with row sum $d$, including arbitrary nonnegative diagonal entries ([math:def-regular-multigraph-and-normalized-adjacency](https://alphabetamath.cc/item/def-regular-multigraph-and-normalized-adjacency)).

### Proof

1.1 For each unordered pair of distinct vertices $\{x,y\}$, choose $A_{xy}=A_{yx}$ paired labels, one in each direction, and interchange each pair under reversal. For each $x$, choose $A_{xx}$ distinct labels with both endpoints $x$ and fix each under reversal. This gives the required involution and endpoint counts; summing the counts over destinations gives $d$ outgoing labels at each vertex. No parity of $A_{xx}$ is required. [F1, construct, algebra]

2.1 The endpoint conditions in the definition of a walk ensure that concatenating two successive labels is possible. Reversal of a label always starts at its former endpoint, including a fixed loop label. Thus the proposed walk and reversal operations are well-defined. They encode exactly the slot multiplicities in $A$, rather than requiring an ordinary loop with two incidence slots. This proves the assertions. [step 1.1, construct] ∎



## Dyck words and elementary Catalan growth

[Open item](item-lem-author-f736bc76cd5d-catalan-count) · level 0


### Statement

A Dyck word of length $2k$, for integer $k\ge1$, is a sequence of $k$ symbols $+1$ and $k$ symbols $-1$ whose every initial partial sum is nonnegative. Write $C_k$ for the number of these words. Then $C_k=\binom{2k}{k}/(k+1)$ and

$$\frac{4^k}{(2k+1)(k+1)}\le C_k\le4^k.$$

In the real-sequence sense of [math:def-sequences-in-an-ordered-field](https://alphabetamath.cc/item/def-sequences-in-an-ordered-field), $C_k^{1/(2k)}\to2$. The integer $\binom{m}{r}=m!/(r!(m-r)!)$ counts the $r$-element subsets of an $m$-element set, where $m!=1\cdot2\cdots m$ and $0!=1$.

### Facts & Assumptions

[F1] A real sequence converges to a real number when, for every positive tolerance, all sufficiently late terms lie within that tolerance ([math:def-sequences-in-an-ordered-field](https://alphabetamath.cc/item/def-sequences-in-an-ordered-field)).

[F2] For $a>0$ and integer $N\ge1$, $a^{1/N}$ denotes the unique positive $N$-th root of $a$, as a rational power ([math:def-rational-power](https://alphabetamath.cc/item/def-rational-power)).

[F3] For positive real bases and rational exponents, rational powers are positive and obey product, inverse and composition laws ([math:lem-rational-power-laws](https://alphabetamath.cc/item/lem-rational-power-laws)); a positive rational power is increasing in its positive base ([math:lem-rational-power-monotone](https://alphabetamath.cc/item/lem-rational-power-monotone)).

[F4] For real $x,y$ and integer $n\ge0$, $(x+y)^n=\sum_{j=0}^n\binom{n}{j}x^jy^{n-j}$ ([math:thm-binomial-theorem](https://alphabetamath.cc/item/thm-binomial-theorem)).

[F5] The natural numbers are unbounded in the real numbers: for every real $B$ there is a natural number $K>B$ ([math:lem-cut-archimedean](https://alphabetamath.cc/item/lem-cut-archimedean)).

[F6] For natural numbers $m,r$, $\binom{m}{r}$ is the number of $r$-element subsets of any $m$-element set ([math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)).

### Proof

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish every assertion in the statement.

1.1 By [F6], there are $\binom{2k}{k}$ balanced words: choose the positions of the $+1$ symbols. Reflect every symbol through the first time a balanced word has partial sum $-1$. This maps the words failing the nonnegative condition bijectively to words with total sum $2$, having $k+1$ positive symbols and $k-1$ negative symbols. The inverse reflects through the first partial sum $1$ of such a word. Thus $C_k=\binom{2k}{k}-\binom{2k}{k+1}=\binom{2k}{k}/(k+1)$. The subset formula follows by counting ordered lists of distinct selected elements and dividing by their $r!$ orders. [given, F6, construct, algebra]

1.2 Put $D_k=(2k+1)(k+1)$. For $k\ge2$, the formula $\binom{2k}{3}=(2k)(2k-1)(2k-2)/6$ gives $\binom{2k}{3}\ge k^3/3$, while $D_k\le6k^2$, so $\binom{2k}{3}/D_k\ge k/18$. Fix $\delta>0$. By [F5], choose a natural number $K>1+18\delta^{-3}$. For every integer $k\ge K$, one has $k\ge2$ and $(k/18)\delta^3>1$. By [F4] and nonnegativity of all binomial terms, $(1+\delta)^{2k}\ge\binom{2k}{3}\delta^3>D_k$ for all such $k$. [F4, F5, algebra, choose]

2.1 By [F4] with $x=y=1$ and $n=2k$, the sum of all $2k+1$ binomial coefficients in row $2k$ is $2^{2k}=4^k$; equivalently, count every subset according to its size. The central coefficient is maximal: consecutive coefficients have ratio $(2k-r)/(r+1)$, at least one up to the center and at most one thereafter. Hence $4^k/(2k+1)\le\binom{2k}{k}\le4^k$, giving the displayed inequalities. [F4, step 1.1, algebra]

3.1 Since $D_k>0$ and $1+\delta>0$, [F2] and [F3] applied to step 1.2 give $D_k^{1/(2k)}\le1+\delta$ for all $k\ge K$. The bounds of step 2.1 imply $C_k>0$; by the positive-root order, product, inverse and composition laws in [F2] and [F3], $2/(1+\delta)\le 2/D_k^{1/(2k)}\le C_k^{1/(2k)}\le2$. Given any real tolerance $\varepsilon>0$, set $\delta=\varepsilon/4>0$ and choose $K$ as in step 1.2. For every $k\ge K$, $|C_k^{1/(2k)}-2|\le2-2/(1+\delta)=2\delta/(1+\delta)<\varepsilon$. This is the limit assertion by [F1]. [F1, F2, F3, step 2.1, step 1.2, algebra, choose] ∎


## An elementary sufficient budget for the synchronization criterion

[Open item](item-lem-author-635c380339fd-inverse-sine-budget) · level 0


### Statement

Let $n>6$, $0<a\le1/24$ and $0<b<1/4$. Set $q=1/(2b)-1>1$. If $\pi/(96a)>\log n/\log q+1$, then $a<1/12$ and $\frac{\pi/4}{\arcsin(12a)}>\frac{\log(n/6)}{\log(1/(2b)-1)}+1$. The inverse sine is its principal branch in radians.

### Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the conclusions in the Statement.

[F1] The principal inverse sine is continuous on $[-1,1]$ and is the inverse of sine restricted to $[-\pi/2,\pi/2]$; logarithms have domain $(0,\infty)$: [math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine) and [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm).

[F2] For $-1<t<1$, $(\arcsin t)\prime=1/\sqrt{1-t^2}$: [math:thm-principal-inverse-sine-and-cosine-derivatives](https://alphabetamath.cc/item/thm-principal-inverse-sine-and-cosine-derivatives).

[F3] Sine is odd, so $\sin0=-\sin0$ and hence $\sin0=0$: [math:cor-trigonometric-parity-and-pythagorean-identity](https://alphabetamath.cc/item/cor-trigonometric-parity-and-pythagorean-identity).

[F4] If $f$ is continuous on $[u,v]$ with $u<v$ and differentiable on $(u,v)$, then $f(v)-f(u)=f\prime(c)(v-u)$ for some $c\in(u,v)$: [math:cor-mean-value-theorem](https://alphabetamath.cc/item/cor-mean-value-theorem).

[F5] The natural logarithm is strictly increasing and $\log1=0$: [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws).

### Proof

1.1 By the principal inverse convention and $\sin0=0$, $\arcsin0=0$. For $0<x\le1/2$, the principal inverse sine is continuous on $[0,x]$ and differentiable on $(0,x)$, since $[0,x]\subset(-1,1)$. The mean value theorem therefore gives $\arcsin x=x/\sqrt{1-c^2}$ for some $0<c<x$. Since $1-c^2\ge3/4>1/4$, this yields $0<\arcsin x\le2x$. In particular, $0<12a\le1/2$ gives $0<\arcsin(12a)\le24a$. [given, F1, F2, F3, F4, algebra]

2.1 The positivity in step 1.1 permits taking reciprocals and gives $(\pi/4)/\arcsin(12a)\ge\pi/(96a)$. The hypothesis $0<b<1/4$ gives $q=1/(2b)-1>1$, so $\log q>\log1=0$. Also $0<n/6<n$, hence $\log(n/6)<\log n$. Thus $(\pi/4)/\arcsin(12a)\ge\pi/(96a)>\log n/\log q+1>\log(n/6)/\log q+1$, as required; and $a\le1/24<1/12$. [given, F1, F5, step 1.1, algebra] ∎


## Chernoff bounds with the exact degree mean

[Open item](item-prop-expander-prereq-degree-chernoff-union) · level 1


### Statement

Let $n\ge2$ be an integer and $p\in[0,1]$. In $G(n,p)$, the simple graph on $[n]=\{1,\ldots,n\}$ whose possible edges occur independently with probability $p$, let $d(v)$ be the number of edges incident to $v$ and put $\mu=(n-1)p$. For $0\le\delta\le1$,
$$\mathbb P(\exists v:|d(v)-\mu|\ge\delta\mu)\le2n\exp(-\mu\delta^2/3).$$
No independence between different vertex degrees is required. If $1/n\le\varepsilon\le1$, then the estimate centered at $pn$ is
$$\mathbb P(\exists v:|d(v)-pn|\ge\varepsilon pn)\le2n\exp\left(-\frac{p(n\varepsilon-1)^2}{3(n-1)}\right).$$
In particular, for fixed $0<\varepsilon\le1$ and $p=\gamma\log n/n\in[0,1]$, if $\gamma\ge\gamma_0>3/\varepsilon^2$, the latter probability tends to zero uniformly over such $\gamma$ as $n\to\infty$. The same conclusion holds when $\gamma\to\infty$, subject to $p\le1$.

### Statement references

[prop-expander-prereq-degree-law-and-dependence](item-prop-expander-prereq-degree-law-and-dependence)

[math:lem-chernoff-bound-for-independent-bernoulli-trials](https://alphabetamath.cc/item/lem-chernoff-bound-for-independent-bernoulli-trials)

[math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound)

### Facts & Assumptions

**Given:** The graph and parameters in the Statement.

**Goal:** Prove the exact-mean and translated simultaneous degree bounds and the stated logarithmic-density consequence.

[F1] Each $d(v)$ is the sum of the $n-1$ mutually independent Bernoulli$(p)$ indicators of the possible edges incident to $v$. ([prop-expander-prereq-degree-law-and-dependence](item-prop-expander-prereq-degree-law-and-dependence))

[F2] For a finite sum of independent Bernoulli variables with mean $\mu$, the two-sided deviation probability at $\delta\mu$ is at most $2\exp(-\mu\delta^2/3)$ when $0\le\delta\le1$, including $\mu=0$. ([math:lem-chernoff-bound-for-independent-bernoulli-trials](https://alphabetamath.cc/item/lem-chernoff-bound-for-independent-bernoulli-trials))

[F3] The probability of a finite union of events is at most the sum of their probabilities; independence of the events is unnecessary. ([math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound))

### Proof

**Proof technique:** Apply the single-vertex tail bound and then the finite union bound; translate the center before selecting the deviation parameter.

1.1 For each vertex, [F1] gives a sum to which [F2] applies with mean $(n-1)p=\mu$. Thus its probability of deviation at least $\delta\mu$ is at most $2\exp(-\mu\delta^2/3)$. Applying [F3] to the $n$ vertex events proves the first displayed inequality, regardless of dependence among degrees. [F1, F2, F3]

2.1 Since $pn-\mu=p$, the triangle inequality gives $|d(v)-\mu|\ge |d(v)-pn|-p$. If $1/n\le\varepsilon\le1$, put $\delta=(n\varepsilon-1)/(n-1)$; then $0\le\delta\le1$ and $\delta\mu=\varepsilon pn-p$. Hence every event $|d(v)-pn|\ge\varepsilon pn$ is contained in $|d(v)-\mu|\ge\delta\mu$. The first bound therefore gives the second, including $p=0$. [step 1.1, algebra]

3.1 For fixed $0<\varepsilon\le1$, the restriction $1/n\le\varepsilon$ holds for all sufficiently large $n$. Substituting $p=\gamma\log n/n$ in the second bound yields $2n^{1-\gamma a_n}$, where $a_n=(n\varepsilon-1)^2/(3n(n-1))\to\varepsilon^2/3$. If $\gamma\ge\gamma_0>3/\varepsilon^2$, choose $c>1$ with $\gamma_0a_n\ge c$ for all sufficiently large $n$; the probability is then at most $2n^{1-c}$ uniformly in $\gamma$. A sequence with $\gamma\to\infty$ eventually exceeds such a fixed $\gamma_0$, so the same conclusion follows whenever the specified $p$ is a probability. [step 2.1, algebra] ∎


## Trace powers, closed walks and independent edge moments

[Open item](item-prop-expander-prereq-random-matrix-walk-expansion) · level 1


### Statement

Let $n\geq1$ and $\ell\geq1$ be integers, and let $W=(W_{ij})_{1\leq i,j\leq n}$ be a real symmetric random matrix: its entries are real random variables on one probability space and $W_{ij}=W_{ji}$ pointwise. Write $\operatorname{Tr}A=\sum_i A_{ii}$ and let $\|W\|$ be the operator norm induced by the Euclidean norm on $\mathbb R^n$ (equivalently, by the standard norm on $\mathbb C^n$). Then, pointwise,

$$\operatorname{Tr}W^{2\ell}=\sum_{i_0,\ldots,i_{2\ell-1}=1}^{n}\prod_{j=0}^{2\ell-1}W_{i_ji_{j+1}},\qquad i_{2\ell}=i_0,$$

and $\|W\|^{2\ell}\leq\operatorname{Tr}W^{2\ell}\leq n\|W\|^{2\ell}$.

Suppose additionally that the family $(W_{ab})_{1\leq a\leq b\leq n}$ is mutually independent and $\mathbb E|W_{ab}|^{2\ell}<\infty$ for every $a\leq b$. A closed walk here is an ordered sequence $(i_0,\ldots,i_{2\ell})$ with $i_{2\ell}=i_0$; loops and repeated vertices and edges are allowed. For each unordered pair $e=\{a,b\}$, including $a=b$, let $m_e$ be the number of steps whose unordered endpoint pair is $e$. Then

$$\mathbb E\!\left[\prod_{j=0}^{2\ell-1}W_{i_ji_{j+1}}\right]=\prod_{e:m_e>0}\mathbb E[W_e^{m_e}],$$

where $W_{\{a,b\}}=W_{\min(a,b),\max(a,b)}$. If each $W_e$ has a law symmetric about zero, meaning that $W_e$ and $-W_e$ have the same distribution, every factor with odd $m_e$ is zero. Consequently only walks with every multiplicity even can contribute to the expected trace. Comparing these surviving terms with those of another such matrix requires, in addition, the relevant entry-moment inequalities; the walk expansion alone supplies no Gaussian comparison.

### Facts & Assumptions

[F1] Matrix multiplication gives $(AB)_{ij}=\sum_k A_{ik}B_{kj}$, and trace is the sum of diagonal entries ([math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix), [math:def-trace-of-a-square-matrix](https://alphabetamath.cc/item/def-trace-of-a-square-matrix)).

[F2] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis ([math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms](https://alphabetamath.cc/item/cor-real-spectral-theorem-for-self-adjoint-endomorphisms)). The vertex-space convention supplies the standard matrix action and Euclidean norm ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)); the induced operator norm is the supremum of the output norm over the closed unit ball ([math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)).

[F3] A real random variable is a measurable map into $\mathbb R$ with its Borel sigma-algebra ([math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)). Independence is independence of the coordinate-generated sigma-algebras ([math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)). For independent real random variables, integrable Borel functions of the individual variables have an integrable product whose expectation is the product of their expectations ([math:thm-factorization-of-expectations-for-independent-variables](https://alphabetamath.cc/item/thm-factorization-of-expectations-for-independent-variables)).

[F4] Expectation of an integrable random variable is its integral over the underlying probability space ([math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)). The Lebesgue integral is linear on $L^1$ of that space, so expectation is linear on integrable random variables ([math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)). Expectation of an integrable function of a random variable is also its integral against that variable's law ([math:thm-change-of-variables-for-expectation](https://alphabetamath.cc/item/thm-change-of-variables-for-expectation)).

[F5] Similar square matrices have equal trace ([math:cor-trace-is-invariant-under-similarity](https://alphabetamath.cc/item/cor-trace-is-invariant-under-similarity)).

[F6] The law of a real random variable $X$ is $\mathbb P_X(B)=\mathbb P(X^{-1}(B))$ for Borel $B\subseteq\mathbb R$; equality in distribution means equality of these laws ([math:def-law-or-distribution-of-a-random-element](https://alphabetamath.cc/item/def-law-or-distribution-of-a-random-element)).

[F7] Arithmetic and lattice operations preserve measurability: in particular, finite products, real scalar multiples and absolute values of measurable real functions are measurable ([math:thm-arithmetic-and-lattice-operations-preserve-measurability](https://alphabetamath.cc/item/thm-arithmetic-and-lattice-operations-preserve-measurability)). Applied to the identity function on $\mathbb R$ with its Borel sigma-algebra, this gives Borel measurability of $x\mapsto x^k$, $x\mapsto |x|^k$ for positive integers $k$, and $x\mapsto-x$. Composition of measurable maps is measurable ([math:thm-composition-with-borel-functions-preserves-measurability](https://alphabetamath.cc/item/thm-composition-with-borel-functions-preserves-measurability)).

[F8] A measurable real function $f$ is integrable exactly when $\int |f|\,d\mu<\infty$ ([math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)). For nonnegative measurable $f\leq g$, $\int f\,d\mu\leq\int g\,d\mu$ on any measure space ([math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)).

[F9] A probability space has $\mathbb P(\Omega)=1$ ([math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)). The simple integral of $1=\chi_\Omega$ is therefore $1$ ([math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)), and its nonnegative Lebesgue integral has the same value ([math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral)).

### Proof

**Given:** The matrix and integer hypotheses in the Statement; assume the additional independence and moment hypotheses for the expectation assertions.

**Goal:** Establish the displayed identities, cancellation, and norm bounds.

1.1 Repeatedly applying the matrix-product formula in [F1] gives $(W^k)_{ab}=\sum_{i_1,\ldots,i_{k-1}}W_{ai_1}W_{i_1i_2}\cdots W_{i_{k-1}b}$ for $k\geq2$. Taking $k=2\ell$, setting $a=b=i_0$, and summing the diagonal entries yields the stated closed-walk expansion. The argument is pointwise and permits loops and repeated edges. [F1, given, induction]

1.2 For a fixed walk, symmetry of $W$ groups its factors as $\prod_{e:m_e>0}W_e^{m_e}$. Each $m_e$ lies between $1$ and $2\ell$. By [F7], all powers and absolute powers used here are measurable. By [F9] and [F8], the constant function $1$ is integrable. The moment hypothesis and [F4], [F8] imply that $|W_e|^{2\ell}$ is integrable. Thus [F4] makes $1+|W_e|^{2\ell}$ integrable, with integral $1+\mathbb E|W_e|^{2\ell}<\infty$. For $1\leq m\leq2\ell$, the bound $|x|^m\leq1+|x|^{2\ell}$ follows by considering $|x|\leq1$ and $|x|>1$. Monotonicity in [F8] therefore gives $\int_\Omega |W_e|^m\,d\mathbb P\leq1+\mathbb E|W_e|^{2\ell}<\infty$, so [F8] proves integrability of $W_e^m$, in particular of $W_e^{m_e}$. [F7, F8, F9, F4, given, algebra]

2.1 Apply [F3] to the distinct independent entries and the Borel functions $x\mapsto x^{m_e}$ from [F7] to obtain the product formula and integrability of each walk product, using step 1.2. By [F4], integrate the finite sum of these integrable walk products over the underlying probability space; repeated $L^1$ linearity permits expectation to pass through the finite expansion in step 1.1. [F3, F4, F7, step 1.2, step 1.1, given]

3.1 If $W_e$ and $-W_e$ have the same law in the sense of [F6] and $m_e$ is odd, both are random variables by [F7], and both $m_e$th powers are integrable by step 1.2 because their absolute values agree. The change-of-variables formula in [F4] evaluates both expectations as the integral of the same Borel function $x\mapsto x^{m_e}$ against their common law. Since $(-W_e)^{m_e}=-W_e^{m_e}$, linearity in [F4] gives $\mathbb E[W_e^{m_e}]=\mathbb E[(-W_e)^{m_e}]=-\mathbb E[W_e^{m_e}]$. Thus that moment is zero. The product formula in step 2.1 then eliminates every walk with an odd multiplicity. For a comparison, the formula identifies precisely the moments to be compared; inequalities for those moments are additional hypotheses. [F6, F7, F4, step 1.2, step 2.1, algebra]

4.1 Fix an outcome. A real symmetric matrix is self-adjoint for the Euclidean inner product. By [F2] it has an orthonormal eigenbasis with real eigenvalues $\lambda_1,\ldots,\lambda_n$. Let $Q$ have those eigenvectors as columns. Then $Q^{-1}=Q^T$ and $Q^{-1}W^{2\ell}Q=\operatorname{diag}(\lambda_1^{2\ell},\ldots,\lambda_n^{2\ell})$, since both sides act on each coordinate vector by the same scalar. Thus [F5] and [F1] give $\operatorname{Tr}W^{2\ell}=\sum_r\lambda_r^{2\ell}$ in the original coordinates. For $x=\sum_r c_r v_r$ in the orthonormal eigenbasis, $\|Wx\|_2^2=\sum_r|\lambda_r|^2|c_r|^2\leq(\max_r|\lambda_r|)^2\|x\|_2^2$. This proves boundedness and the upper bound for the unit-ball supremum in [F2]; a unit eigenvector for a maximal absolute eigenvalue attains it. Hence the operator norm is $\max_r|\lambda_r|$. The same calculation in the complexified basis gives the identical complex operator norm. Every summand is nonnegative and at most the largest, while one attains it. Therefore $\|W\|^{2\ell}\leq\operatorname{Tr}W^{2\ell}\leq n\|W\|^{2\ell}$. The preceding steps prove all assertions. [F2, F1, F5, given, algebra] ∎


## Convex Lipschitz concentration with its coordinate metric

[Open item](item-thm-expander-prereq-convex-product-concentration) · level 1


### Statement

Let $d\ge1$, and let $X=(X_1,\ldots,X_d)$ have independent random coordinates taking values in $[0,1]$ on a probability space with probability $\mathbb P$. Equip $[0,1]^d$ with the Euclidean distance $\|x-y\|_2=(\sum_{i=1}^d(x_i-y_i)^2)^{1/2}$. Suppose $f:[0,1]^d\to\mathbb R$ is quasi-convex and $L$-Lipschitz for some $L>0$. Here quasi-convex means that every sublevel set $\{x:f(x)\le a\}$ is convex, and $L$-Lipschitz means $|f(x)-f(y)|\le L\|x-y\|_2$ for all $x,y$ in the cube. Let $m$ be a median of $f(X)$, meaning $\mathbb P(f(X)\le m)\ge1/2$ and $\mathbb P(f(X)\ge m)\ge1/2$. Then, for every $t>0$, $\mathbb P(f(X)>m+t)\le2e^{-t^2/(4L^2)}$ and $\mathbb P(f(X)<m-t)\le2e^{-t^2/(4L^2)}$. Every convex function is quasi-convex, so the conclusion applies in particular to convex $f$.

### Statement references

[Coordinate metric, convexity and Lipschitz constants](item-def-expander-prereq-symmetric-coordinate-metrics)

[Independent random elements](https://alphabetamath.cc/item/def-independent-random-elements)

[Probability measures and probability spaces](https://alphabetamath.cc/item/def-probability-measure)

[Convex subsets of Euclidean space](https://alphabetamath.cc/item/def-convex-subset-of-euclidean-space)

[Random elements and real random variables](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)

### External input

Boucheron, Lugosi and Massart, Theorem 7.12, gives the two stated median tail bounds with exponent $-s^2/4$ for a quasi-convex Euclidean $1$-Lipschitz function of independent $[0,1]$-valued coordinates. This imported theorem is used as a premise; its proof is not reconstructed here.

### Facts & Assumptions

[F1] The external input above supplies both tails for positive deviations $s$ and Euclidean $1$-Lipschitz quasi-convex functions.

[F2] The coordinate metric and convex-function and Lipschitz conventions are as in [def-expander-prereq-symmetric-coordinate-metrics](item-def-expander-prereq-symmetric-coordinate-metrics); convex subsets of Euclidean space are as in [math:def-convex-subset-of-euclidean-space](https://alphabetamath.cc/item/def-convex-subset-of-euclidean-space).

### Proof

**Given:** The hypotheses and a median $m$ in the statement.

**Goal:** Establish both scaled tail bounds and the convex special case.

1.1 Put $g=f/L$ and $m_g=m/L$. Since $L>0$, the sublevel sets of $g$ are sublevel sets of $f$, and the Lipschitz inequality for $f$ shows that $g$ is Euclidean $1$-Lipschitz. Dividing the two median inequalities by the positive constant shows that $m_g$ is a median of $g(X)$. [given, F2]

2.1 Apply [F1] to $g$ with $s=t/L>0$. The events $g(X)>m_g+t/L$ and $g(X)<m_g-t/L$ are respectively the two events in the conclusion, giving the displayed bounds. If $f$ is convex, its defining inequality shows that each sublevel set is convex; hence it is quasi-convex and the same bounds apply. [F1, F2, step 1.1] ∎


## A fixed-law Wigner spectral-edge input

[Open item](item-thm-expander-prereq-fixed-law-wigner-edge-input) · level 1


### Statement

Let $\mu$ be one fixed compactly supported probability distribution on $\mathbb R$ with $\int x\,d\mu(x)=0$, $\int x^2\,d\mu(x)=\sigma^2$, and $\int x^3\,d\mu(x)\ne0$, where $\sigma\ge0$. Here compactly supported means that $\mu([-L,L])=1$ for some real $L>0$. Suppose that a constant $K>0$ satisfies $\int |x|^k\,d\mu(x)\le K^k$ for every integer $k\ge4$.

For each positive integer $N$, let the real random variables $a_{ij}$, $1\le i\le j\le N$, be independent and identically distributed with law $\mu$, and put $a_{ji}=a_{ij}$ for $i<j$. Set $M_N=(a_{ij})$ and $A_N=N^{-1/2}M_N$. The spectral norm here is $\|A_N\|=\sup\{\|A_Nv\|_2:v\in\mathbb C^N,\ \|v\|_2=1\}$.

For every $\varepsilon>0$ there is a deterministic real sequence $r_N=o(N^{-6/11+\varepsilon})$ such that $\mathbb P(\|A_N\|\le2\sigma+r_N)\to1$ as $N\to\infty$. The probability spaces may vary with $N$, but the law $\mu$ and its moment bound are fixed.

### Statement references

[def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)

[def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)

[math:def-moments-variance-and-covariance](https://alphabetamath.cc/item/def-moments-variance-and-covariance)

[math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)

[math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)

[math:def-law-or-distribution-of-a-random-element](https://alphabetamath.cc/item/def-law-or-distribution-of-a-random-element)

[math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)

### External input

Péché and Soshnikov, Section 1, equation (1), Theorem 1.1 and Remark 1.1, supply the fixed-law bound for $\max_i|\lambda_i(A_N)|$. No local proof of the imported estimate is claimed. This input alone supplies no uniform estimate for a law varying with $N$. The proof below only identifies this eigenvalue bound with the norm in the Statement.

### Facts & Assumptions

[F1] The vertex space $\mathbb C^N$ is finite-dimensional, has the displayed Euclidean norm, and represents the adjoint by conjugate transpose; real symmetric matrices are self-adjoint. The library and vertex inner-product conventions have the same norm and orthogonality. [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[F2] A normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis. [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)

[F3] On a nonzero finite-dimensional inner product space, the operator norm is the maximum of $\|Tv\|_2$ over unit vectors $v$. [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)

[F4] For the fixed law and the independent identically distributed entries including the diagonal specified in the Statement, the imported Theorem 1.1 and Remark 1.1 give, for every $\varepsilon>0$, a deterministic $r_N=o(N^{-6/11+\varepsilon})$ with $\mathbb P(\max_j|\lambda_j(A_N)|\le2\sigma+r_N)\to1$.

### Proof

**Given:** The law, matrices and hypotheses in the Statement, and $\varepsilon>0$.

**Goal:** Establish the conclusion in the statement.

1.1 Fix $N\ge1$ and a realization of $A_N$. By [F1], $A_N=A_N^*$, so $A_NA_N^*=A_N^*A_N$: the endomorphism is normal, meaning that it commutes with its adjoint. Thus [F2] applies and gives an orthonormal eigenbasis $u_1,\ldots,u_N$, unchanged by the convention transfer in [F1]. Put $m_N=\max_j|\lambda_j(A_N)|$. For $v=\sum_jc_ju_j$ with $\|v\|_2=1$, orthonormality gives $\sum_j|c_j|^2=1$ and $\|A_Nv\|_2^2=\sum_j|\lambda_j(A_N)|^2|c_j|^2\le m_N^2$. A unit eigenvector attaining this finite maximum gives equality. Consequently [F3] gives $\|A_N\|=m_N$; the same attained maximum equals the supremum used in the Statement. [F1, F2, F3, algebra]

2.1 The law, its moments and its moment bound are fixed independently of $N$, and all upper-triangular entries, including the diagonal, have that law independently. These are exactly the model hypotheses of [F4]. Choose its sequence $r_N$. The pointwise identity in step 1.1 makes the events $\{\|A_N\|\le2\sigma+r_N\}$ and $\{m_N\le2\sigma+r_N\}$ equal for every $N$. Their probabilities therefore have the limit in [F4], proving the Statement with its fixed-law scope. [given, F4, step 1.1] ∎



## Entropy endpoint limits and the two monotone branches

[Open item](item-lem-author-2bcd11f9e275-entropy-branch-geometry) · level 1


### Statement

For $a>0$, let $I(a)=a\log a-a+1$. Then $I\prime(a)=\log a$, $I\prime\prime(a)=1/a>0$, $I(1)=0$, $\lim_{a\downarrow0}I(a)=1$, and $I(a)\to+\infty$ as $a\to+\infty$. The function strictly decreases on $(0,1)$ with range $(0,1)$ and strictly increases on $(1,\infty)$ with range $(0,\infty)$. Consequently $I(a)=t$ has exactly two positive solutions for $0<t<1$, one in each branch.

### Facts & Assumptions

**Given:** The variables and hypotheses of the Statement.

[F1] [lem-author-2bcd11f9e275-logarithmic-tangent-bound](item-lem-author-2bcd11f9e275-logarithmic-tangent-bound) gives $\log y\le y-1$ for $y>0$.

[F2] [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws) gives continuity, range, strict monotonicity, the product and reciprocal laws, and $\log 1=0$.

[F3] [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral) gives $(\log a)\prime=1/a$ for $a>0$.

[F4] [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative) gives strict monotonicity on an interval for a continuous function whose derivative has the corresponding strict sign at every interior point.

[F5] [math:thm-intermediate-value](https://alphabetamath.cc/item/thm-intermediate-value) attains every value between the endpoint values of a continuous function on a closed real interval.

[F6] [math:thm-algebra-of-derivatives](https://alphabetamath.cc/item/thm-algebra-of-derivatives) gives the sum, scalar-multiple and product rules for functions differentiable on a common domain at a limit point of that domain.

[F7] [math:lem-derivative-of-a-power](https://alphabetamath.cc/item/lem-derivative-of-a-power), with exponents $0$ and $1$, gives the derivatives $0$ and $1$ of the constant function $1$ and the identity function, respectively.

[F8] [math:cor-differentiable-implies-continuous](https://alphabetamath.cc/item/cor-differentiable-implies-continuous) gives continuity at every limit point of the domain where the function is differentiable.

[F9] [math:thm-of-square-roots](https://alphabetamath.cc/item/thm-of-square-roots) gives, for each $a>0$ in $\mathbb R$, the unique nonnegative $s=\sqrt a$ with $s^2=a$; necessarily $s>0$.

[F10] [math:def-one-sided-limits](https://alphabetamath.cc/item/def-one-sided-limits) defines the right limit at $0$ by the condition that for every $\varepsilon>0$ there is $\delta>0$ such that $0<a<\delta$ implies $|I(a)-1|<\varepsilon$. The point $0$ is a limit point of $(0,\infty)$.

[F11] [math:def-limits-at-infinity](https://alphabetamath.cc/item/def-limits-at-infinity) defines divergence to $+\infty$ at $+\infty$ by requiring, for every real $B$, a real $M$ such that $a>M$ implies $I(a)>B$. The domain $(0,\infty)$ is unbounded above.

[F12] [math:def-derivative](https://alphabetamath.cc/item/def-derivative) defines the derivative at a domain limit point by the limit of the difference quotient, and differentiability on a set pointwise. Here $I\prime\prime$ denotes the derivative of $I\prime$.

[F13] [math:def-monotone-function](https://alphabetamath.cc/item/def-monotone-function) defines strict increase on a domain by $x<y\Rightarrow f(x)<f(y)$ and strict decrease by $x<y\Rightarrow f(x)>f(y)$; either condition makes the function injective.

[F14] [math:def-continuity-real](https://alphabetamath.cc/item/def-continuity-real) defines continuity at $c$ by requiring, for every $\varepsilon>0$, a $\delta>0$ such that domain points $x$ with $|x-c|<\delta$ satisfy $|f(x)-f(c)|<\varepsilon$. Continuity on a domain is pointwise continuity, and passes to restrictions of that domain.

### Proof

**Goal:** Establish the full Statement.

1.1 Every point of $(0,\infty)$ is a limit point of that domain. The logarithm, the identity and the constant function $1$ are differentiable there by F3 and F7. Applying F6 gives $I\prime(a)=\log a+a(1/a)-1+0=\log a$, and F3 then gives $I\prime\prime(a)=1/a>0$. By F8, $I$ is continuous on $(0,\infty)$. Since $\log a<0$ for $0<a<1$ and $\log a>0$ for $a>1$, F4 applies on $(0,1]$ and $[1,\infty)$, giving strict decrease and strict increase, respectively. Substitution gives $I(1)=0$. [F2, F3, F4, F6, F7, F8, F12, F13, F14, algebra]

1.2 For $0<a<1$, let $s=\sqrt a>0$ by F9 and put $y=1/s$. Since $s^2=a<1$, one has $s<1$ and $y>1$. The logarithm laws give $\log a=2\log s=-2\log y$. Hence F1 and F2 give $0\le-a\log a=2a\log y\le2a(y-1)\le2s$. Given $\varepsilon>0$, take $\delta=\min\{1,\varepsilon/2,\varepsilon^2/16\}>0$. If $0<a<\delta$, then $s^2<\varepsilon^2/16$, and the factorization $s^2-(\varepsilon/4)^2=(s-\varepsilon/4)(s+\varepsilon/4)$ gives $s<\varepsilon/4$. Therefore $|I(a)-1|=-a\log a+a\le2s+a<\varepsilon$. This proves the right limit $1$ at $0$ directly by F10. [F1, F2, F9, F10, algebra, choose]

1.3 By the range of $\log$, choose $A>0$ with $\log A=2$. For every real $B$, put $M=\max\{A,B,1\}$. If $a>M$, monotonicity of $\log$ gives $\log a\ge2$, so $I(a)\ge a+1>B$. This is divergence to $+\infty$ at $+\infty$ by F11. [F2, F11, algebra, choose]

2.1 By step 1.1, $I(a)>0$ on both branches. If $0<a<1$, then $\log a<0$ gives $I(a)=1+a\log a-a<1$. For $0<t<1$, the right limit in step 1.2 supplies $u\in(0,1)$ with $I(u)>t$, while continuity at $1$ supplies $v\in(u,1)$ with $I(v)<t$. The restriction of $I$ to $[u,v]$ is continuous, so F5 supplies a solution in $(u,v)$. For $t>0$, continuity at $1$ supplies $u>1$ with $I(u)<t$, and step 1.3 supplies $v>u$ with $I(v)>t$; F5 on $[u,v]$ again supplies a solution. The strict monotonicity in step 1.1 makes the solution unique on each branch. Thus the branch ranges are exactly $(0,1)$ and $(0,\infty)$, and for $0<t<1$ there are exactly two positive solutions, since $I(1)=0$. [F2, F5, F13, F14, step 1.1, step 1.2, step 1.3, choose] ∎


## Feasible orders for labelled simple regular graphs

[Open item](item-lem-author-8d6ffb027277-feasible-regular-orders) · level 1


### Statement

For integers $n\ge1$ and $d\ge0$, a labelled simple $d$-regular graph on $[n]=\{1,\ldots,n\}$ exists exactly when $d<n$ and $nd$ is even. For fixed $d$, these orders form an unbounded set; for odd $d$ they are precisely the even $n>d$.

### Facts & Assumptions

[F1] [def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning) defines labelled simple regular graphs and their uniform law whenever the graph set is nonempty.

[F2] [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers) defines feasible-order limits and records the necessary degree and parity restrictions.

[F3] [math:ex-integers-mod-n-additive-group](https://alphabetamath.cc/item/ex-integers-mod-n-additive-group) supplies, for $n\ge1$, the additive group of congruence classes modulo $n$, with well-defined addition $[a]+[b]=[a+b]$ and unique representatives $0,\ldots,n-1$.

### Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish every assertion of the Statement.

1.1 Each vertex has at most $n-1$ neighbors, so $d<n$. Counting incidences of edges with vertices gives $nd=2|E|$, hence $nd$ is even. [F1, F2]

2.1 Conversely work in the additive group $\mathbb{Z}/n$ supplied by F3, writing $j$ for a residue class and translating its unique representative $r\in\{0,\ldots,n-1\}$ to label $r+1$. If $d=2k$ is even, join $j$ to $j\pm1,\ldots,j\pm k$. Since $2k<n$, these are $2k$ distinct nonzero residues relative to $j$, and adjacency is symmetric; this is a simple $d$-regular graph. It includes the empty-edge graph when $k=0$. If $d=2k+1$ is odd, parity forces $n$ even. Use the same $2k$ neighbors and add $j+n/2$; because $2k+1<n$, this residue is distinct from all previous neighbors and from $j$. The added edges are symmetric. Every vertex has exactly $d$ neighbors. Relabeling gives the claimed graph on $[n]$. Arbitrarily large even $n>d$ satisfy these conditions for every fixed $d$. [F1, F3, step 1.1, construct] ∎


## Hamiltonian cycles as finite cyclic-order events

[Open item](item-lem-author-8d6ffb027277-hamilton-cycle-encodings) · level 1


### Statement

Let $n\ge3$ and let $G$ be a simple graph on $[n]$. A Hamiltonian cycle is an edge set $\{\{v_1,v_2\},\ldots,\{v_{n-1},v_n\},\{v_n,v_1\}\}$ contained in $E(G)$, where $(v_1,\ldots,v_n)$ lists every vertex once. Distinct such edge sets are counted once, regardless of starting point or direction. There are $n!/(2n)$ candidate Hamiltonian cycles on $[n]$. 

More generally, let $(\Omega,w)$ be any finite probability space and let $\omega\mapsto G_\omega$ assign a simple graph on $[n]$ to every outcome. For each candidate Hamiltonian cycle $C$, define $A_C=\{\omega\in\Omega:C\subseteq E(G_\omega)\}$. The event $H$ that the sampled graph contains at least one Hamiltonian cycle is the finite union $H=\bigcup_C A_C$, with probability $\mathbb P(H)=\sum_{\omega\in H}w(\omega)$.

### Facts & Assumptions

[F1] [def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning) specifies labelled simple graphs as sets of unordered two-element edges on the labelled vertex set.

[F2] [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks) identifies simple graphs with symmetric zero-diagonal adjacency matrices.

[F3] [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event) defines a finite probability space $(\Omega,w)$ by nonnegative outcome weights summing to one; every subset $A\subseteq\Omega$ is an event with probability $\mathbb P(A)=\sum_{\omega\in A}w(\omega)$.

[F4] [math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial) defines $0!=1$ and $k!=k(k-1)!$ for positive integers $k$; equivalently, $n!$ is the product of the first $n$ positive integers.

### Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish every assertion of the Statement.

1.1 An ordered listing of the vertices produces the displayed edge set, with distinct endpoints at every edge. Each vertex has exactly its predecessor and successor as neighbors in this edge set. Conversely, fixing a vertex on this cycle, its next vertex can be chosen in exactly two ways; every later vertex is then forced by continuing along the edge that was not just used. Thus each edge set has exactly $n$ choices of starting point and two choices of direction, including when $n=3$. [F1, F2, construct]

2.1 Successive choices give $n!$ ordered listings. The disjoint classes in step 1.1 each have size $2n$, so there are $n!/(2n)$ candidate edge sets. For the specified assignment $\omega\mapsto G_\omega$, each $A_C$ is a subset of $\Omega$, hence an event by [F3]. An outcome belongs to $\bigcup_C A_C$ exactly when its graph $G_\omega$ contains a Hamiltonian cycle, so this finite union is $H$. By [F3], its probability is $\sum_{\omega\in H}w(\omega)$. [F1, F3, F4, step 1.1, algebra] ∎


## Intersecting finitely many high-probability events

[Open item](item-lem-author-8d6ffb027277-simultaneous-high-probability-events) · level 1


### Statement

Let $S$ be an unbounded subset of the natural numbers and $k$ a fixed positive integer. For each $n\in S$, let $(\Omega_n,w_n)$ be a finite probability space with event probability $\mathbb P_n$, and let $E_{1,n},\ldots,E_{k,n}\subseteq\Omega_n$ be events in that space. Then $\mathbb P_n(\bigcap_{j=1}^k E_{j,n})\ge1-\sum_{j=1}^k\mathbb P_n(E_{j,n}^c)$, where complements are relative to $\Omega_n$. If every $E_{j,n}$ has probability tending to one through $S$, their intersection does too and is nonempty for every sufficiently large $n\in S$. No independence is assumed.

### Facts & Assumptions

[F1] [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers) defines high probability, eventual assertions and limits through an unbounded subset of the natural numbers.

[F2] [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event) defines a finite probability space $(\Omega_n,w_n)$ by nonnegative outcome weights whose sum is one; every subset is an event, with probability equal to the sum of its outcome weights.

### Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish every assertion of the Statement.

1.1 For an event $A\subseteq\Omega_n$, define $\mathbf 1_A(\omega)=1$ when $\omega\in A$ and $0$ otherwise. At each outcome, $\mathbf 1_{\bigcup_{j=1}^k E_{j,n}^c}(\omega)\le\sum_{j=1}^k\mathbf 1_{E_{j,n}^c}(\omega)$, since membership in the union means membership in at least one constituent event. Multiplying by the nonnegative weight $w_n(\omega)$ and summing over $\Omega_n$ gives $\mathbb P_n(\bigcup_{j=1}^k E_{j,n}^c)\le\sum_{j=1}^k\mathbb P_n(E_{j,n}^c)$. The weights sum to one, so the probability of a complement is one minus the event probability. The complement of this union is $\bigcap_{j=1}^k E_{j,n}$, giving the asserted inequality. [F2, algebra]

2.1 Suppose each $\mathbb P_n(E_{j,n})\to1$ through $S$. Given $\varepsilon>0$, for each $j$ take a cutoff $N_j$ such that $\mathbb P_n(E_{j,n}^c)=1-\mathbb P_n(E_{j,n})<\varepsilon/k$ whenever $n\in S$ and $n\ge N_j$. Since $k$ is fixed and finite, $N=\max_{1\le j\le k}N_j$ is a common cutoff. Step 1.1 gives intersection probability greater than $1-\varepsilon$ for $n\in S$ with $n\ge N$; its probability is at most one by F2, proving convergence to one in the sense of F1. Taking $\varepsilon=1/2$ gives positive probability eventually. An empty event has weight sum zero, so the intersection is nonempty for every sufficiently large $n\in S$. [F1, F2, step 1.1, algebra] ∎


## Factorial moments of isolated vertices at the connectivity window

[Open item](item-lem-author-c1dce5041ae4-isolated-factorial-moments) · level 1


### Statement

Let $G\sim G(n,p)$, let $X$ count isolated vertices (vertices incident to no edges), and write $(x)_r=x(x-1)\cdots(x-r+1)$, with $(x)_0=1$. For $0\le r\le n$,
$$\mathbb E(X)_r=(n)_r(1-p)^{rn-r(r+1)/2}.$$
Here a power with exponent zero is the empty product $1$, including $0^0=1$ in this formula.
If $p=(\log n+c_n)/n$ and $c_n\to c\in\mathbb R$, then for each fixed integer $r\ge0$, $\mathbb E(X)_r\to e^{-cr}$.

### Facts & Assumptions

**Given:** The objects and hypotheses of the Statement.

**Goal:** Prove the Statement.

[F1] Distinct possible edges are independent and each is absent with probability $1-p$ ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)).

[F2] For a finite probability space expectation is the outcome-weighted sum; finite sums can therefore be interchanged ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)).

[F3] The falling factorial $(x)_r$ counts ordered selections of $r$ distinct elements from a set of size $x$, by successive selection ([math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)).

[F4] Limits and the symbols $O$ and $o$ have their sequence meanings ([def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)).

[F5] The logarithm satisfies $\log x=\int_1^x dt/t$ ([math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral)).

[F6] For every $a>0$, $\log n/n^a\to0$ ([math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)).

[F7] For an event $A$ in a finite probability space, $\mathbf 1_A$ equals $1$ on $A$ and $0$ elsewhere ([math:def-indicator-random-variable](https://alphabetamath.cc/item/def-indicator-random-variable)).

[F8] The logarithm is the inverse of the exponential: $\exp(\log x)=x$ for $x>0$ and $\log(\exp y)=y$ for real $y$ ([math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)).

[F9] The exponential is continuous on $\mathbb R$ and is a bijection onto $(0,\infty)$ ([math:cor-exponential-is-a-bijection-onto-positive-reals](https://alphabetamath.cc/item/cor-exponential-is-a-bijection-onto-positive-reals), its first fact and Statement).

[F10] Limits of real sequences respect sums, differences, scalar multiples, finite products and quotients with nonzero limiting denominator ([math:thm-algebra-of-limits](https://alphabetamath.cc/item/thm-algebra-of-limits)).

[F11] On positive reals, the logarithm is continuous, strictly increasing and onto $\mathbb R$, $\log 1=0$, $\log(xy)=\log x+\log y$ and $\log(x/y)=\log x-\log y$ ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)).

[F12] Constants, the identity, sums, scalar multiples, products and quotients with nonvanishing denominator are continuous on their domains ([math:thm-algebra-of-continuous-functions](https://alphabetamath.cc/item/thm-algebra-of-continuous-functions)).

[F13] Continuous real functions on a compact interval are Riemann integrable. Their oriented integrals reverse sign on reversing endpoints and vanish on zero-length intervals. Integrals preserve pointwise order, and the integral of a constant $d$ over $[a,b]$ is $d(b-a)$, by the constant bounds in the Statement ([math:lem-continuous-functions-riemann-integrable](https://alphabetamath.cc/item/lem-continuous-functions-riemann-integrable)).

[F14] The oriented Riemann integral is linear in continuous integrands ([math:lem-riemann-integral-linearity](https://alphabetamath.cc/item/lem-riemann-integral-linearity)).

[F15] If $\phi:[c,d]\to[a,b]$ is a monotone surjection, differentiable with one-sided endpoint derivatives and Riemann-integrable derivative, and $f$ is bounded and Riemann integrable on $[a,b]$, then $\int_a^b f(x)\,dx=\int_c^d f(\phi(t))|\phi'(t)|\,dt$ ([math:thm-monotone-change-of-variable-for-riemann-integrals](https://alphabetamath.cc/item/thm-monotone-change-of-variable-for-riemann-integrals)).

### Proof

**Proof technique:** direct.

1.1 For each ordered tuple $t$ of $r$ distinct vertices, let $A_t$ be the event that every vertex in $t$ is isolated. In each graph, the number of such tuples is $(X)_r$, so $(X)_r=\sum_t\mathbf 1_{A_t}$. By the finite expectation formula, $\mathbb E\mathbf 1_{A_t}=\sum_{\omega\in A_t}w(\omega)=\mathbb P(A_t)$, and the two finite sums can be interchanged. The edges required absent consist of $r(n-r)$ edges to the complement and $r(r-1)/2$ internal pairs, for a total of $m_{n,r}=rn-r(r+1)/2$. Independence gives $\mathbb P(A_t)=(1-p)^{m_{n,r}}$. There are $(n)_r$ tuples, proving the exact formula. When $m_{n,r}=0$ the absent-edge product is $1$, even at $p=1$; for $r=0$ there is one empty tuple and its event is the whole probability space. [F1, F2, F3, F7, algebra]

1.2 Fix $0<u<1$. The rational integrands below are continuous by [F12], since $x\ge1-u>0$ on $[1-u,1]$ and $1-t\ge1-u>0$ on $[0,u]$; hence they are bounded and integrable by [F13]. The decreasing affine surjection $\phi(t)=1-t$ from $[0,u]$ onto $[1-u,1]$ has derivative $-1$ at every point, including the one-sided endpoints (its difference quotient is identically $-1$), so its derivative is integrable. Applying [F15], then [F5], [F13] and [F14], gives $\log(1-u)=-\int_{1-u}^1 dx/x=-\int_0^u dt/(1-t)$ and $\log(1-u)+u=-\int_0^u t/(1-t)\,dt$. To evaluate $I:=\int_0^u t\,dt$, use the affine surjection $\psi(t)=u-t$ from $[0,u]$ onto itself, with the same derivative $-1$ and the continuous bounded integrand $f(x)=x$. By [F15] and [F14], $I=\int_0^u(u-t)\,dt=u^2-I$, using the constant-integral rule in [F13]; hence $I=u^2/2$. On $[0,u]$ we have $0\le t/(1-t)\le t/(1-u)$, so [F13] and [F14] give $|\log(1-u)+u|=\int_0^u t/(1-t)\,dt\le u^2/[2(1-u)]$. At $u=0$ the identity and bound follow from the zero-length integral rule and $\log1=0$. [F5, F11, F12, F13, F14, F15, algebra]

2.1 Since $c_n\to c$, eventually $|c_n|\le |c|+1$. The logarithm is unbounded above by [F11], so $p=O(\log n/n)\to0$, and $np^2=O((\log n)^2/n)\to0$ by [F6] with $a=1/2$. For fixed $r$, therefore $m_{n,r}\log(1-p)=-m_{n,r}p+o(1)=-r(\log n+c_n)+o(1)$. Also $q_n:=(n)_r/n^r=\prod_{j=0}^{r-1}(1-j/n)\to1$ by the finite product limit rule, and $q_n>0$ eventually. [step 1.1, step 1.2, F3, F4, F6, F10, F11, algebra]

3.1 Fix $r\ge1$. Eventually $n\ge r$ and $0\le p<1$, so the exact moment in step 1.1 is positive. The product and quotient laws for logarithms, applied repeatedly to its integer powers, give $\log\bigl(\mathbb E(X)_r\bigr)=\log q_n+r\log n+m_{n,r}\log(1-p)=-rc_n+o(1)\to-rc$, since $\log q_n\to\log1=0$. Apply the inverse relation and continuity of the exponential to conclude $\mathbb E(X)_r\to\exp(-rc)=e^{-cr}$. For $r=0$ the moment is identically $1=e^0$. [step 1.1, step 2.1, F4, F8, F9, F10, F11, algebra] ∎


## Finite sieve determines the probability of a zero count

[Open item](item-lem-author-c1dce5041ae4-finite-sieve-zero-count) · level 1


### Statement

Let $X_n$ be nonnegative integer-valued random variables on finite probability spaces, and define $\binom{x}{r}=(x)_r/r!$ for integers $0\le r\le x$, and zero for $r>x$. Powers $\lambda^r$ use natural integer exponents, with $\lambda^0=1$ also when $\lambda=0$. If, for each fixed $r\ge0$, $\mathbb E(X_n)_r\to\lambda^r$ for a fixed $\lambda\ge0$, then $\mathbb P(X_n=0)\to e^{-\lambda}$. No assertion about other values of $X_n$ is needed.

### Facts & Assumptions

**Given:** The objects and hypotheses of the Statement.

**Goal:** Prove the Statement.

[F1] Expectation is a finite weighted sum, preserving pointwise inequalities ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)).

[F2] Factorials and falling factorials have their finite product definitions ([math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)).

[F3] The exponential is the everywhere convergent series $\exp(t)=\sum_{r\ge0}t^r/r!$ ([math:def-real-exponential-function-and-e](https://alphabetamath.cc/item/def-real-exponential-function-and-e)).

[F4] Convergence is interpreted along the sequence of finite probability spaces ([def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)).

[F5] A finite probability space $(\Omega_n,w_n)$ has nonnegative weights summing to one; every subset is an event whose probability is the sum of its weights. A real random variable is a function $X_n:\Omega_n\to\mathbb R$ ([math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event), [math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution)).

[F6] For $a>0$ and $t\in\mathbb R$, real powers satisfy $a^t=\exp(t\log a)$, and the inverse logarithm satisfies $\log(\exp(t))=t$ ([math:def-real-power](https://alphabetamath.cc/item/def-real-power), [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)).

[F7] Natural integer powers satisfy $a^0=1$ and $a^{r+1}=a^r a$ for every real $a$ and integer $r\ge0$, including $a=0$ ([math:def-integer-power](https://alphabetamath.cc/item/def-integer-power)).

### Proof

**Proof technique:** direct.

1.1 For integers $x\ge1$ and $m\ge0$, Pascal's identity, obtained by separating subsets according to whether they contain a specified element, telescopes to $\sum_{r=0}^m(-1)^r\binom xr=(-1)^m\binom{x-1}m$; the binomial coefficient is zero beyond its range. The factorial formula agrees with subset counting because each $r$-subset admits $r!$ orders. For $x=0$, the sum is one. Write $\mathbf1_{\{x=0\}}$ for the function equal to one when $x=0$ and zero otherwise. Thus, for every $M\ge0$, $\sum_{r=0}^{2M+1}(-1)^r\binom xr\le\mathbf1_{\{x=0\}}\le\sum_{r=0}^{2M}(-1)^r\binom xr$. [F2, F7, algebra]

2.1 On $(\Omega_n,w_n)$, the function $\omega\mapsto\mathbf1_{\{X_n(\omega)=0\}}$ has expectation $\sum_{\omega:X_n(\omega)=0}w_n(\omega)=\mathbb P(X_n=0)$. Put $q_n=\mathbb P(X_n=0)$ and $T_{n,k}=\sum_{r=0}^k(-1)^r\mathbb E(X_n)_r/r!$. Taking expectations in step 1.1 and distributing the finite weighted sum over the finite sieve sums gives $T_{n,2M+1}\le q_n\le T_{n,2M}$ for every $M\ge0$. [step 1.1, F1, F2, F5, F7, algebra]

3.1 Put $s_k=\sum_{r=0}^k(-1)^r\lambda^r/r!$ and $L=\exp(-\lambda)$. The natural-power recursion gives $(-\lambda)^r=(-1)^r\lambda^r$ by induction on $r$, starting at $r=0$ with both sides equal to one. Thus $s_k\to L$ by the exponential series, including when $\lambda=0$. Fix $\varepsilon>0$ and choose $M$ so that both $|s_{2M+1}-L|<\varepsilon/3$ and $|s_{2M}-L|<\varepsilon/3$. For each of the finitely many $r\in\{0,\ldots,2M+1\}$, the given moment convergence supplies an $N_r$ such that $|\mathbb E(X_n)_r-\lambda^r|<\varepsilon r!/[3(2M+2)]$ for $n\ge N_r$. For $n\ge N=\max_{0\le r\le2M+1}N_r$, the triangle inequality gives $|T_{n,k}-s_k|\le\sum_{r=0}^k|\mathbb E(X_n)_r-\lambda^r|/r!<\varepsilon/3$ for both $k=2M$ and $k=2M+1$. The bounds from step 2.1 now imply $L-2\varepsilon/3<q_n<L+2\varepsilon/3$, so $|q_n-L|<\varepsilon$. This proves $q_n\to\exp(-\lambda)$ directly from the convergence definition. [step 2.1, F2, F3, F4, F7, given, choose, algebra]

4.1 The series at one gives $e=\exp(1)>0$, and the inverse logarithm gives $\log e=1$; hence $e^{-\lambda}=\exp(-\lambda\log e)=\exp(-\lambda)$ by the real-power definition. Substituting this identity into step 3.1 yields the stated zero-count limit. [step 3.1, F3, F6, algebra] ∎


## Components between two vertices and half the graph disappear in the window

[Open item](item-lem-author-c1dce5041ae4-small-component-sum) · level 1



### Statement

Suppose $p=(\log n+c_n)/n$, where $(c_n)$ is bounded and $p\in[0,1]$. In $G(n,p)$, the probability of a component of order $k$ with $2\le k\le n/2$ tends to zero.

### Facts & Assumptions

[F1] For the component count $X_k$, $\mathbb EX_k\le\binom nk k^{k-1}p^{k-1}(1-p)^{k(n-k)}$ ([lem-author-c1dce5041ae4-component-parent-bound](item-lem-author-c1dce5041ae4-component-parent-bound)).

[F2] A bounded sequence is eventually bounded in absolute value, and $O$ and $o$ have their stated sequence meanings ([def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)).

[F3] For integers $N\ge k\ge1$ and $0<p<1$, the binomial exponential envelope includes $\binom Nk\le N^k/k!$, $k!\ge(k/e)^k$ and $1-p\le e^{-p}$. Here $e=\exp(1)$, and throughout this proof $e^s$ denotes $\exp(s)$ ([prop-expander-prereq-binomial-exponential-envelope](item-prop-expander-prereq-binomial-exponential-envelope)).

[F4] For every $a>0$, $\log n/n^a\to0$ ([math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)).

[F5] The model is the simple independent-edge graph ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)).

[F6] Component order is the cardinality of its vertex set ([math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)).

[F7] The expectation is the sum of values times outcome weights ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)).

[F8] The binomial coefficient $\binom nk$ counts the $k$-element subsets of an $n$-element set ([math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)).

[F9] The factorial is the positive product $k!=\prod_{j=1}^k j$ ([math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)).

[F10] The indicator $\mathbf 1_E$ of an event $E$ equals one on $E$ and zero off $E$ ([math:def-indicator-random-variable](https://alphabetamath.cc/item/def-indicator-random-variable)).

[F11] The logarithm is continuous and strictly increasing on $(0,\infty)$, is onto $\mathbb R$, and satisfies $\log1=0$. It is inverse to the exponential, so $\exp(\log x)=x$ for $x>0$ and $\log(\exp s)=s$ for real $s$ ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws), [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)).

[F12] The exponential is continuous and strictly increasing on $\mathbb R$, and $\exp(s+t)=\exp(s)\exp(t)$ for real $s,t$ ([math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing), [math:thm-exponential-addition-formula](https://alphabetamath.cc/item/thm-exponential-addition-formula)). In the inverse pair in [F11] its values are positive; $\exp(0)=\exp(\log1)=1$, so the addition law also gives $\exp(-s)=1/\exp(s)$.

### Proof

**Given:** The objects and hypotheses of the Statement.

**Goal:** Prove that the probability of any component of order between two and half the graph tends to zero.

1.1 Choose $C>0$ with $|c_n|\le C$ eventually and set $a=np=\log n+c_n$. By [F11], $\log n\to+\infty$: for any real $M$, choose $x_M>0$ with $\log x_M=M$ and then use monotonicity for $n>x_M$. Hence eventually $\tfrac12\log n\le a\le2\log n$, $a>1$ and $0<p<1$, since [F4] with exponent $1$ gives $\log n/n\to0$. For $1\le k\le n$, [F3] with $N=n$ and this admissible $p$ gives $1-p\le\exp(-p)$ and $\binom nk\le(en/k)^k$. These inequalities apply to every component index used below. [F2, F3, F4, F8, F9, F11, algebra]

2.1 Fix an integer $k$ between $2$ and $10$. From [F1] and [F3], raising the nonnegative inequality $1-p\le\exp(-p)$ to the integer power $k(n-k)$ and using the exponential addition law gives $\mathbb EX_k\le(k^{k-1}/k!)n^kp^{k-1}\exp(-pk(n-k))$ for sufficiently large $n$. By [F11] and [F12], $\exp(-pk(n-k))=n^{-k}\exp(-kc_n+k^2a/n)$. Here $a/n\to0$ by step 1.1 and [F4], and $|c_n|\le C$, so the final exponential factor is bounded, for example by $\exp(kC+1)$ eventually. Thus $\mathbb EX_k=O((\log n/n)^{k-1})\to0$. There are only nine such fixed values of $k$, so their sum tends to zero. [F1, F2, F3, F4, F11, F12, step 1.1, algebra]

2.2 For $11\le k\le n/2$, [F1] and step 1.1 give $\mathbb EX_k\le(kp)^{-1}[enp\exp(-np/2)]^k\le p^{-1}q_n^k$, where $q_n=ea\exp(-a/2)$. The inverse relation and addition law imply $\exp(-\log n/2)=1/\sqrt n$: both sides are positive and their squares equal $1/n$. Consequently $q_n=ea\exp(-c_n/2)/\sqrt n=O(\log n/\sqrt n)\to0$ by [F4]. Eventually $0<q_n<1/2$, and $p^{-1}=n/a=O(n/\log n)$. Multiplying a finite geometric sum by $1-q_n$ and discarding its nonnegative last term yields $\sum_{k=11}^{\lfloor n/2\rfloor}\mathbb EX_k\le p^{-1}q_n^{11}/(1-q_n)=O((\log n)^{10}/n^{9/2})\to0$. For the final limit use [F4] with exponent $9/20$ and take the tenth power. An empty index range has sum zero and obeys the same bound. [F1, F2, F4, F11, F12, step 1.1, algebra]

3.1 The indicator that any such component exists is at most $\sum_{k=2}^{\lfloor n/2\rfloor}X_k$, pointwise on the finite graph space. By the finite weighted-sum expectation, its expectation is the event probability and is at most the sum of the component expectations. Steps 2.1 and 2.2 show that this sum tends to zero, proving the Statement. [F5, F6, F7, F10, step 2.1, step 2.2, algebra] ∎


## Matrix powers count closed labelled slot walks

[Open item](item-lem-author-f736bc76cd5d-trace-walk-count) · level 1


### Statement

For a finite $d$-regular adjacency-slot matrix $A$ on $V=\{1,\ldots,n\}$, with $n\ge1$ and integer $d>0$, fix reversible slot labels representing $A$. For every integer $m\ge0$ and $x,y\in V$, the entry $(A^m)_{xy}$ equals the number of labelled length-$m$ walks from $x$ to $y$. Consequently, for every integer $k\ge0$, $\operatorname{tr}(A^{2k})=\sum_x(A^{2k})_{xx}$ counts all closed length-$2k$ walks with specified starting vertex. Here the trace is the sum of diagonal matrix entries, and $A^0=I$.

### Statement references

[math:def-regular-multigraph-and-normalized-adjacency](https://alphabetamath.cc/item/def-regular-multigraph-and-normalized-adjacency)

[lem-author-f736bc76cd5d-reversible-slots](item-lem-author-f736bc76cd5d-reversible-slots)

### Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish every assertion in the statement.

[F1] Reversible slot labels represent exactly $A_{xy}$ choices for a step from $x$ to $y$; labelled walks retain their actual slot labels ([lem-author-f736bc76cd5d-reversible-slots](item-lem-author-f736bc76cd5d-reversible-slots)).

[F2] The adjacency-slot matrix is a symmetric nonnegative integer matrix indexed by the finite vertex set $V=\{1,\ldots,n\}$, with row sum $d$; diagonal entries count loop slots ([math:def-regular-multigraph-and-normalized-adjacency](https://alphabetamath.cc/item/def-regular-multigraph-and-normalized-adjacency)).

### Proof

1.1 At length zero there is one walk from $x$ to itself and none to a different vertex, agreeing with $I$. Suppose the count equals $(A^m)_{xz}$ for length $m$. A walk of length $m+1$ from $x$ to $y$ has a unique last intermediate vertex $z$, a length-$m$ prefix to $z$, and one of $A_{zy}$ last slots. The resulting disjoint count is $\sum_z(A^m)_{xz}A_{zy}=(A^{m+1})_{xy}$. Induction proves the entry formula. [F1, F2, algebra]

2.1 Taking $y=x$ counts precisely the closed walks with starting vertex $x$. Summing these counts over the finitely many vertices gives the trace formula. Distinct parallel labels and distinct loop labels remain distinct choices in this count. [F2, step 1.1, algebra] ∎


## Stack construction of closed walks with loops and repeated edges

[Open item](item-lem-author-f736bc76cd5d-stack-closed-walks) · level 1


### Statement

Let $A$ be a finite $d$-regular adjacency-slot matrix, with $d\ge2$, and fix a vertex $v$. For every integer $k\ge1$ there are at least $C_k(d-1)^k$ closed labelled walks of length $2k$ starting at $v$. Slot labels and their reversal are as in [lem-author-f736bc76cd5d-reversible-slots](item-lem-author-f736bc76cd5d-reversible-slots), and $C_k$ is the Dyck-word count in [lem-author-f736bc76cd5d-catalan-count](item-lem-author-f736bc76cd5d-catalan-count). Arbitrary diagonal slot counts and parallel slots are allowed.

### Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish every assertion in the statement.

[F1] Each vertex has $d$ outgoing labels, and reversal is an involution exchanging endpoints; fixed loop labels are permitted ([lem-author-f736bc76cd5d-reversible-slots](item-lem-author-f736bc76cd5d-reversible-slots)).

[F2] There are $C_k$ Dyck words of length $2k$, each having exactly $k$ positive symbols ([lem-author-f736bc76cd5d-catalan-count](item-lem-author-f736bc76cd5d-catalan-count)).

### Proof

1.1 Fix a Dyck word, start at $v$, and keep a stack of labels, initially empty. At a positive symbol choose any outgoing label if the stack is empty; otherwise exclude exactly the reversal of the top label. Traverse the chosen label and push it. At a negative symbol traverse the reversal of the top label and pop it. Inductively the current vertex is the terminal vertex of the stack path starting at $v$. The Dyck condition ensures a top label exists at each negative symbol. At the end the stack is empty and the walk ends at $v$. Every positive symbol has at least $d-1$ choices, and negative symbols are forced. [F1, F2, construct]

2.1 The resulting labelled walk uniquely determines its Dyck word and every choice. Indeed, reconstruct the stack from the empty stack: at an empty stack a step must be a push; at a nonempty stack a label equal to the reversal of its top must be a pop, and any other label must be a push. The construction prohibited precisely that reversal at a push. This deterministic decoding also works when a loop label is its own reversal, because labels, rather than endpoints alone, are compared. Thus different Dyck words or different choices cannot produce the same labelled walk. There are at least $C_k(d-1)^k$ such walks, as claimed. [F1, F2, step 1.1, construct, algebra] ∎


## Feasible labelled simple regular graph orders

[Open item](item-lem-author-bcce21321c2a-feasible-regular-orders) · level 1


### Statement

For integers $n\ge1$ and $d\ge0$, put $V=\{1,\ldots,n\}$ and let $\mathcal G_d(n)$ be the set of all graphs $(V,E)$ such that $E$ is a set of two-element subsets of $V$ and each vertex belongs to exactly $d$ edges. These are the labelled simple $d$-regular graphs on $V$; this definition imposes no parity restriction on $nd$. Then $\mathcal G_d(n)$ is nonempty if and only if $d<n$ and $nd$ is even. Under these conditions the simplicity event $S$ in the uniform pairing model has strictly positive probability. No lower bound uniform in $n$ is asserted.

### Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning)

### Facts & Assumptions

[F1] A finite simple graph $(V,E)$ has a finite vertex set $V$ and an edge set consisting of two-element subsets of $V$, with no loops or repeated edges ([math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)). The requirement that each vertex belongs to exactly $d$ edges defines $d$-regularity here for every integer $d\ge0$.

[F2] For $n\ge1$, $d\ge0$ and $nd$ even, [def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning) defines the finite uniform pairing space, its collapse and its simplicity event $S$; each simple regular graph has exactly $(d!)^n$ pairing realizations. Every outcome of this nonempty finite uniform space has positive probability, including the unique empty pairing when $d=0$.

### Proof

**Given:** Integers $n\ge1$ and $d\ge0$ and the graph set defined in the statement; the pairing model is invoked only after $nd$ is known to be even.

**Goal:** Prove feasibility and positivity of the simplicity event.

1.1 If $(V,E)$ belongs to $\mathcal G_d(n)$, its $d$ distinct neighbours at any vertex lie among the other $n-1$ vertices. Counting the incidences $(v,e)$ with $v\in e\in E$ first by vertices and then by edges gives $nd=2|E|$, since every edge has two distinct endpoints. Thus $d<n$ and $nd$ is even. [F1, given, algebra]

1.2 Conversely suppose $d<n$ and $nd$ is even. If $d=2k$, put $D=\{1,\ldots,k\}\cup\{n-k,\ldots,n-1\}$, with both sets empty when $k=0$. Since $2k<n$, the two sets are disjoint subsets of $\{1,\ldots,n-1\}$. If $d=2k+1$, then $n$ is even; put $D=\{1,\ldots,k\}\cup\{n-k,\ldots,n-1\}\cup\{n/2\}$, again taking the first two sets empty when $k=0$. The inequality $2k+1<n$ gives $k<n/2$, so the three sets are disjoint subsets of $\{1,\ldots,n-1\}$. In either case $|D|=d$ and $t\in D$ if and only if $n-t\in D$. [given, construct, algebra]

1.3 For $v\in V$ and an integer $1\le t\le n-1$, define $c_v(t)=v+t$ when $v+t\le n$, and $c_v(t)=v+t-n$ when $v+t>n$. These two explicit formulas give a vertex of $V$ different from $v$. The map $t\mapsto c_v(t)$ is a bijection from $\{1,\ldots,n-1\}$ to $V\setminus\{v\}$: for $w>v$ its unique inverse value is $t=w-v$, and for $w<v$ it is $t=n+w-v$, as is checked in the two branches. If $w=c_v(t)$, the same formulas give $c_w(n-t)=v$: when $v+t\le n$ one has $w+n-t=v+n>n$, and when $v+t>n$ one has $w+n-t=v\le n$. This defines and verifies the required cyclic operation using integer labels only. [given, construct, algebra]

2.1 Define $E=\{\{v,c_v(t)\}:v\in V,\ t\in D\}$. It is a set of two-element subsets of $V$, hence $(V,E)$ is simple by [F1]. At each $v$ the vertices $c_v(t)$ for $t\in D$ are distinct by step 1.3. Every edge incident to $v$ is of this form: an edge generated at some other vertex $w$ with $v=c_w(t)$ has $w=c_v(n-t)$, and $n-t\in D$ by step 1.2. Thus the incident edges at $v$ are exactly $\{v,c_v(t)\}$ for $t\in D$, and there are $|D|=d$ of them. This constructs a member of $\mathcal G_d(n)$, including the empty edge set when $d=0$ and in particular when $n=1$. [F1, step 1.2, step 1.3, construct]

3.1 Under the sufficient conditions, $nd$ is even, so [F2] applies to the constructed graph. It has $(d!)^n\ge1$ pairing realizations. At least one outcome of the nonempty finite uniform pairing space therefore belongs to $S$, and every such outcome has positive probability by [F2]. Consequently $\mathbb P(S)>0$. Together with step 1.1 and step 2.1 this proves the equivalence and the asserted positivity, without asserting a uniform lower bound. [F2, step 1.1, step 2.1, algebra] ∎


## Triangular Gaussian coordinates: metric and moment control

[Open item](item-lem-author-b9de37ca32a7-triangular-norm-moments) · level 1


### Statement

Assume the Axiom of Choice. Fix an integer $r\ge1$, put $N=r(r+1)/2$, and index $z\in\mathbb R^N$ by $1\le i\le j\le r$. Let $T(z)_{ij}=T(z)_{ji}=z_{ij}$ and let $\|A\|$ be the operator norm on the vertex Hilbert space $\mathbb C^{\{1,\ldots,r\}}$. Write $\|A\|_F=(\sum_{i,j}|A_{ij}|^2)^{1/2}$. Then $\|T(z)-T(w)\|\le\|T(z)-T(w)\|_F\le\sqrt2\|z-w\|_2$. If $Z$ has independent standard normal coordinates and $Y=T(Z)$, then $\|Y\|$ is measurable and $\mathbb E\|Y\|^{2k}<\infty$ for every integer $k\ge1$. In particular $Y$ has variance-one diagonal entries and identical mirrored off-diagonal entries.

### Facts & Assumptions

[F1] The triangular construction and every absolute Gaussian moment are available under Choice. [prop-expander-prereq-gaussian-entry-moments](item-prop-expander-prereq-gaussian-entry-moments), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] The vertex inner product is linear in its second argument. The real and complex Cauchy–Schwarz inequality applies in the library's linear-first convention and transfers to this convention by conjugation, with the same absolute values and norms. [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space), [math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces).

[F3] Finite sums and real scalar multiples of measurable real-valued functions are measurable. The nonnegative integral is monotone and homogeneous, and finite integrable sums have linear expectation. [math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral), [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral), [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one).

[F4] For a bounded linear map on a nonzero normed space, the operator norm is the supremum of its values on unit vectors. It is a norm on the space of bounded linear maps, in particular satisfying the triangle inequality. [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm), [math:lem-operator-norm-is-a-norm](https://alphabetamath.cc/item/lem-operator-norm-is-a-norm).

[F5] A map from a measurable space into $\mathbb R^N$, $N\ge1$, equipped with its Borel sigma-algebra, is measurable exactly when its real coordinates are measurable. Under Countable Choice, a continuous map between positive-dimensional Euclidean spaces is Borel measurable. Composition of measurable maps, with matching sigma-algebras, is measurable. [math:thm-coordinatewise-measurability-into-r-n](https://alphabetamath.cc/item/thm-coordinatewise-measurability-into-r-n), [math:cor-continuous-functions-are-borel-measurable](https://alphabetamath.cc/item/cor-continuous-functions-are-borel-measurable), [math:thm-composition-with-borel-functions-preserves-measurability](https://alphabetamath.cc/item/thm-composition-with-borel-functions-preserves-measurability).

### Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish all the stated estimates.

1.1 For any complex matrix $A$ and vector $u$, put $a_i=(\overline{A_{ij}})_j$. In the vertex convention, $\langle a_i,u\rangle=\sum_jA_{ij}u_j$, so [F2] gives $\|Au\|_2^2=\sum_i|\langle a_i,u\rangle|^2\le\sum_i(\sum_j|A_{ij}|^2)\|u\|_2^2=\|A\|_F^2\|u\|_2^2$. Thus the matrix action is bounded, and its operator norm in [F4] satisfies $\|A\|\le\|A\|_F$. Also $\|T(z)-T(w)\|_F^2=\sum_i(z_{ii}-w_{ii})^2+2\sum_{i<j}(z_{ij}-w_{ij})^2\le2\|z-w\|_2^2$. Taking nonnegative square roots proves the stated metric estimates. [F2, F4, algebra]

2.1 The operator-norm triangle inequality in [F4], applied in both directions, gives $|\|T(z)\|-\|T(w)\||\le\|T(z)-T(w)\|\le\sqrt2\|z-w\|_2$. Hence $h:\mathbb R^N\to\mathbb R$, $h(z)=\|T(z)\|$, is continuous. [F4, step 1.1, algebra]

3.1 Choice supplies the countable-choice hypothesis in [F5] by restriction to countable families. The Gaussian coordinates are measurable real random variables on their common probability space by [F1], so [F5] makes $Z$ measurable into $(\mathbb R^N,\mathcal B(\mathbb R^N))$, where $N\ge1$. Step 2.1 and [F5] make $h$ Borel measurable, so $h\circ Z=\|Y\|$ is measurable. For any fixed $k\ge1$, the map $p_k(t)=t^{2k}$ is continuous: factorization gives $|s^{2k}-t^{2k}|\le2k\max(|s|,|t|)^{2k-1}|s-t|$, which tends to zero as $s\to t$. Applying [F5] to $p_k$ and then composing with $h\circ Z$ or an individual Gaussian coordinate proves measurability of $\|Y\|^{2k}$ and $|Z_{ij}|^{2k}$. Their finite sums and nonnegative scalar multiples are measurable by [F3]. [F1, F3, F5, step 2.1, algebra]

4.1 By step 1.1, $\|Y\|^{2k}\le2^k(\sum_{i\le j}Z_{ij}^2)^k\le2^kN^k\sum_{i\le j}|Z_{ij}|^{2k}$: the sum of the $N$ coordinate squares is at most $N$ times their maximum, and the $k$th power of that maximum is at most the sum of their $k$th powers. Every summand has finite expectation by [F1]. Using the measurability from step 3.1, finite linearity and monotonicity in [F3] give $\mathbb E\|Y\|^{2k}\le2^kN^k\sum_{i\le j}\mathbb E|Z_{ij}|^{2k}<\infty$. Finally $Y_{ii}=Z_{ii}$ has mean zero and second moment one by [F1], hence variance one, while $Y_{ij}=Y_{ji}=Z_{ij}$ for $i<j$ by construction. [F1, F3, step 1.1, step 3.1, algebra] ∎


## Loop coupling preserves the dynamics and centered Laplacian

[Open item](item-lem-author-635c380339fd-loop-coupling) · level 1


### Statement

Let $W$ be the adjacency matrix of a simple graph on $n\ge1$ vertices and $0\le p\le1$. Let $B$ be any diagonal matrix with diagonal in $\{0,1\}$ and put $A=W+B$, $J=\mathbf1\mathbf1^T$, $d=np$, where $\mathbf1$ is the all-ones vector and $I$ below is the identity matrix. For real phase variables $\theta=(\theta_1,\ldots,\theta_n)\in\mathbb R^n$, the equations $\dot\theta_i=\sum_j A_{ij}\sin(\theta_j-\theta_i)$ agree pointwise with those for $W$. More precisely, for any initial data $(t_0,\theta_0)\in\mathbb R\times\mathbb R^n$ and any interval $\mathcal I$ containing $t_0$, a function $\theta:\mathcal I\to\mathbb R^n$ is a solution with those initial data for $A$ if and only if it is one for $W$. Trajectories here mean these solutions on intervals. Writing $L(M)=\operatorname{diag}(M\mathbf1)-M$, we have $L(A)=L(W)$ and $\|A-pJ\|\le\|W-p(J-I)\|+1$. All matrix norms are Euclidean induced operator norms on the finite vertex space.

### Statement references

[def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)

[def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)

[math:def-first-order-ode-initial-value-problem-and-solution](https://alphabetamath.cc/item/def-first-order-ode-initial-value-problem-and-solution)

[math:def-sine-and-cosine-by-power-series](https://alphabetamath.cc/item/def-sine-and-cosine-by-power-series)

### Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the conclusions in the Statement, including the realization-by-realization Bernoulli specialization.

[F1] The finite symmetric network convention counts each diagonal entry once in the row sum and defines its Laplacian as the diagonal matrix of row sums minus the adjacency matrix ([def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)).

[F2] The finite vertex space has $\|f\|_2^2=\sum_i|f_i|^2$ and a norm satisfying the vector triangle inequality ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)). The induced operator norm of a matrix $T$ is $\max_{\|f\|_2=1}\|Tf\|_2$ ([math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)).

[F3] A first-order system on an open subset of $\mathbb R\times\mathbb R^n$ and its solutions on intervals with prescribed initial data are understood as in [math:def-first-order-ode-initial-value-problem-and-solution](https://alphabetamath.cc/item/def-first-order-ode-initial-value-problem-and-solution). Here the domain is all of $\mathbb R\times\mathbb R^n$.

[F4] Real sine is defined for every real argument by its convergent power series; at zero every term is zero, so $\sin0=0$ ([math:def-sine-and-cosine-by-power-series](https://alphabetamath.cc/item/def-sine-and-cosine-by-power-series)).

[F5] For the probabilistic specialization, let $(\Omega,w)$ be a finite probability space and let $b_i:\Omega\to\{0,1\}$ be mutually independent Bernoulli$(p)$ random variables. Outcomes and probabilities, random variables, Bernoulli laws and mutual independence are defined in [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event), [math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution), [math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables) and [math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables), respectively.

### Proof

1.1 For any $\theta\in\mathbb R^n$ and each $i$, the difference between the two vector-field coordinates is $B_{ii}\sin(\theta_i-\theta_i)=B_{ii}\sin0=0$. Also $\operatorname{diag}(B\mathbf1)=B$, so $L(A)=\operatorname{diag}(W\mathbf1)+B-W-B=L(W)$. [given, F1, F4, algebra]

1.2 For a real diagonal matrix $C=\operatorname{diag}(c_1,\ldots,c_n)$, put $m=\max_i|c_i|$. Every unit vector $f$ satisfies $\|Cf\|_2^2=\sum_i|c_i|^2|f_i|^2\le m^2$. A coordinate unit vector at an index attaining $m$ gives equality, so $\|C\|=m$. In particular $\|B-pI\|=\max_i|B_{ii}-p|\le1$, since $B_{ii}\in\{0,1\}$ and $0\le p\le1$. [given, F2, algebra]

2.1 Both systems have the same domain and the same right-hand side at every $(t,\theta)$. For any common interval $\mathcal I$ and initial data $(t_0,\theta_0)$, the differentiability requirement, initial-value requirement and differential equation for a solution are therefore identical. Their solution sets on that interval coincide; this conclusion does not require a uniqueness theorem. [F3, step 1.1]

2.2 For any two matrices $S,T$ and any unit vector $f$, the vector triangle inequality gives $\|(S+T)f\|_2\le\|Sf\|_2+\|Tf\|_2\le\|S\|+\|T\|$. Taking the maximum over unit vectors proves the operator triangle inequality. Apply it to $A-pJ=W-p(J-I)+(B-pI)$ and use step 1.2 to obtain $\|A-pJ\|\le\|W-p(J-I)\|+1$. [F2, step 1.2, algebra]

3.1 For every outcome $\omega\in\Omega$, the matrix $B(\omega)=\operatorname{diag}(b_1(\omega),\ldots,b_n(\omega))$ satisfies the deterministic hypotheses. Steps 1.1 and 2.1 therefore show, realization by realization, that adding the independent Bernoulli loops changes neither the Laplacian nor the trajectories with matching initial data on common intervals; step 2.2 also supplies the norm bound for each realization. The deterministic conclusions hold for every binary diagonal choice, regardless of its probability law or dependence. This proves all assertions. [F5, step 1.1, step 2.1, step 2.2] ∎


## Every fixed positive squared logarithmic density satisfies the budget

[Open item](item-lem-author-635c380339fd-fixed-density-budget) · level 1



### Statement

Fix $c>0$ and $K>0$. For $d\ge c(\log n)^2$, set $\alpha=(K+1)/\sqrt d$ and $\beta=K/\sqrt d+\sqrt{12\log n/d}$. Eventually $0<\alpha\le1/24$, $0<\beta<1/4$, and $\pi/(96\alpha)>\log n/\log(1/(2\beta)-1)+1$. Consequently the criterion inequality in the inverse-sine-budget lemma holds for every $0<a\le\alpha$ and $0<b\le\beta$.

### Facts & Assumptions

**Given:** The data and hypotheses in the Statement, with $n$ tending to infinity through natural numbers and $d$ ranging over $d\ge c(\log n)^2$.

**Goal:** Establish the conclusions uniformly over this range of $d$.

[F1] The elementary inverse-sine budget is [lem-author-635c380339fd-inverse-sine-budget](item-lem-author-635c380339fd-inverse-sine-budget); eventual assertions and uniform comparisons have the meaning in [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers).

[F2] The natural logarithm has domain $(0,\infty)$ ([math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)). It is strictly increasing, is onto $\mathbb R$, satisfies $\log1=0$, and obeys the product and quotient laws ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)).

[F3] Every nonnegative real number has a unique nonnegative square root, whose square is that number ([math:thm-of-square-roots](https://alphabetamath.cc/item/thm-of-square-roots)). Order comparisons and product identities for these roots follow by squaring nonnegative quantities in the real ordered field.

[F4] The constant $\pi$ is positive ([math:def-pi-via-first-positive-cosine-zero](https://alphabetamath.cc/item/def-pi-via-first-positive-cosine-zero)). Every real number has an integer part ([math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part)), so a natural-number cutoff can exceed any specified positive real cutoff.

### Proof

1.1 By [F2], for any real $M$ there is $R>0$ with $\log R=M$. For natural $n>R$, monotonicity gives $\log n>M$; [F4] supplies a natural-number cutoff beyond $R$. Thus $\ell=\log n$ eventually exceeds every real constant. Applying the same argument to $\ell$ shows that $\log\ell$ eventually exceeds every real constant as well. All logarithms below consequently have positive arguments for sufficiently large $n$. Put $C=(K+\sqrt{12})/\sqrt c>0$ and $A=\pi\sqrt c/(96(K+1))>0$. For $\ell\ge1$ and every allowed $d$, squaring nonnegative quantities in [F3] gives $\sqrt d\ge\sqrt c\,\ell$, so $0<\alpha\le(K+1)/(\sqrt c\,\ell)$ and $0<\beta\le K/(\sqrt c\,\ell)+\sqrt{12}/(\sqrt c\sqrt\ell)\le C/\sqrt\ell$. These estimates are uniform in $d$. In particular $\alpha\le1/24$ when $\ell\ge24(K+1)/\sqrt c$, and $\beta<1/4$ when $\sqrt\ell>4C$. [given, F1, F2, F3, F4, algebra]

2.1 For $\sqrt\ell>4C$, put $q=1/(2\beta)-1$. Step 1.1 gives $q\ge\sqrt\ell/(2C)-1\ge\sqrt\ell/(4C)>1$. The log laws imply $\log\sqrt\ell=(\log\ell)/2$, since $(\sqrt\ell)^2=\ell$. Hence $\log q\ge(\log\ell)/2-\log(4C)$. Requiring $\log\ell>\max\{0,4\log(4C)\}$ ensures $\log q\ge(\log\ell)/4>0$. Consequently $\log n/\log q+1\le4\ell/\log\ell+1$, while $\pi/(96\alpha)\ge A\ell$. [F2, F3, step 1.1, algebra]

3.1 Choose $n$ sufficiently large that all preceding conditions hold, $n>6$, $\log\ell>8/A$ and $\ell>2/A$; step 1.1 establishes a cutoff independent of $d$. Then $4\ell/\log\ell+1<A\ell/2+A\ell/2=A\ell\le\pi/(96\alpha)$, proving the budget. If $0<a\le\alpha$ and $0<b\le\beta$, then $a\le1/24$, $b<1/4$, and $1/(2b)-1\ge q>1$. Monotonicity of the logarithm, together with $\log n>0$, gives $\log n/\log(1/(2b)-1)+1\le\log n/\log q+1<\pi/(96\alpha)\le\pi/(96a)$. The inverse-sine-budget lemma now yields its criterion inequality for every such $a,b$. [F1, F2, step 1.1, step 2.1, algebra] ∎



## Exponential clocks and the uniform edge-order process

[Open item](item-lem-author-fc0d6c95270f-exponential-process-transfer) · level 1


### Statement

Assume countable choice and use independent uniform edge labels $U_e\in[0,1)$ for the possible edges of a graph on $n\ge2$ vertices. Set $T_e=-\log(1-U_e)$ and $p(t)=1-e^{-t}$ for $t\ge0$. The clocks are independent and satisfy $\mathbb P(T_e\le t)=p(t)$; a rate-one exponential clock means precisely this distribution. The graph $H_t$ containing edges with $T_e\le t$ equals $G_{p(t)}$. Almost surely all clocks are finite and distinct, and their edge ordering is uniform. If $s_m$ is the time the $m$th edge appears, then $H_{s_m}=G(n,m)$ for $1\le m\le N=\binom n2$. Hence an assertion holding for every real $t\ge s_\tau$ holds for every indexed graph $G(n,m)$ with $m\ge\tau$, where $\tau$ is the connectivity index.

### Facts & Assumptions

[F1] Independent uniform labels give the threshold graphs and almost surely a uniform strict ordering of all edges; the first-connected index is bounded and connectivity persists under edge addition ([def-expander-prereq-edge-order-process-coupling](item-def-expander-prereq-edge-order-process-coupling)).

[F2] The natural logarithm is the inverse of the exponential by [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm); it is strictly increasing and satisfies $\log1=0$ by [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws).

[F3] A real-valued function on a measurable space is measurable if and only if every lower threshold set $\{x:f(x)\le a\}$, for real $a$, is measurable ([math:thm-threshold-characterisations-of-real-and-extended-real-measurability](https://alphabetamath.cc/item/thm-threshold-characterisations-of-real-and-extended-real-measurability)).

### Proof

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all stated claims.

1.1 Write $g(u)=-\log(1-u)$ for $0\le u<1$. Since $0<1-u\le1$, $g(u)$ is finite and nonnegative. It is strictly increasing: if $u<v$, then $1-u>1-v>0$, so $-\log(1-u)<-\log(1-v)$. For $t\ge0$, logarithm inversion and monotonicity give $g(u)\le t$ exactly when $u\le1-e^{-t}$, with $0\le1-e^{-t}<1$. [given, F2, algebra]

2.1 Give $[0,1)$ its Borel sigma-algebra. For any real $a<0$, $\{u:g(u)\le a\}=\varnothing$; for $a\ge0$, this set is $[0,1-e^{-a}]$, a Borel subset of $[0,1)$. Hence [F3] makes $g$ Borel measurable. For every Borel set $B\subseteq\mathbb R$, the event $\{T_e\in B\}=\{U_e\in g^{-1}(B)\}$ is measurable because $U_e$ is a random label and $g^{-1}(B)$ is Borel. Thus each $T_e$ is a random variable. For distinct edges $e_1,\ldots,e_k$ and arbitrary Borel sets $B_1,\ldots,B_k$, independence of the labels gives $\mathbb P(\bigcap_{j=1}^k\{T_{e_j}\in B_j\})=\mathbb P(\bigcap_{j=1}^k\{U_{e_j}\in g^{-1}(B_j)\})=\prod_{j=1}^k\mathbb P(U_{e_j}\in g^{-1}(B_j))=\prod_{j=1}^k\mathbb P(T_{e_j}\in B_j)$. This proves independence for all Borel clock events. [F1, F3, step 1.1]

3.1 For $t\ge0$, the threshold equivalence gives $\mathbb P(T_e\le t)=\mathbb P(U_e\le p(t))=p(t)$ by the uniform threshold law in [F1]. Edge by edge it also gives $H_t=G_{p(t)}$ for every $t\ge0$. [F1, step 1.1, step 2.1]

4.1 The transformation from labels to clocks is strictly increasing, so it preserves their strict order outside the label-tie event of probability zero. At the $m$th arrival, precisely the first $m$ edges have appeared. Connectedness is preserved thereafter, so $s_\tau$ is the first connected clock time, and substituting $t=s_m\ge s_\tau$ proves every indexed assertion. This argument evaluates a single pathwise assertion and uses no union bound at random times. [step 1.1, step 3.1, F1] ∎


## Connectivity in the logarithmic random-graph window

[Open item](item-thm-expander-prereq-connectivity-window-input) · level 2


### Statement

For $p=(\log n+c_n)/n\in[0,1]$, the connectivity probability for the simple independent-edge graph tends to zero if $c_n\to-\infty$, to $e^{-e^{-c}}$ if $c_n\to c\in\mathbb R$, and to one if $c_n\to+\infty$. This is a graph probability statement and supplies no monotonicity assertion about Kuramoto synchronization.

### Facts & Assumptions

**Given:** The objects and hypotheses of the Statement.

**Goal:** Prove the Statement.

[F1] The graph is $G(n,p)$ with independent possible edges ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)).

[F2] Every vertex belongs to its component, and distinct components have no connecting path ([math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)).

[F3] All limits concern $n\to\infty$ and the specified sequences $c_n$ ([def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)).

[F4] The fixed-order factorial moments of the isolated-vertex count converge to $e^{-cr}$ when $c_n\to c$ ([lem-author-c1dce5041ae4-isolated-factorial-moments](item-lem-author-c1dce5041ae4-isolated-factorial-moments)).

[F5] If these factorial moments converge to $\lambda^r$, the zero-count probability converges to $e^{-\lambda}$ ([lem-author-c1dce5041ae4-finite-sieve-zero-count](item-lem-author-c1dce5041ae4-finite-sieve-zero-count)).

[F6] When $c_n$ is bounded the probability of a component with between two and half the vertices tends to zero ([lem-author-c1dce5041ae4-small-component-sum](item-lem-author-c1dce5041ae4-small-component-sum)).

[F7] For fixed $n$, connectivity probability is nondecreasing in the edge probability ([lem-author-c1dce5041ae4-connectivity-monotone-coupling](item-lem-author-c1dce5041ae4-connectivity-monotone-coupling)).

[F8] A finite probability space has nonnegative outcome weights summing to one, and an event's probability is the sum of its weights ([math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)).

[F9] The natural logarithm is strictly increasing on $(0,\infty)$, maps this interval onto $\mathbb R$, and satisfies $\log 1=0$ ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)).

[F10] For every $a>0$, $\log n/n^a\to0$ ([math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)).

[F11] The exponential is positive, tends to zero at $-\infty$, and tends to $+\infty$ at $+\infty$ ([math:thm-exponential-limits-and-range](https://alphabetamath.cc/item/thm-exponential-limits-and-range)).

[F12] The real exponential is continuous, in particular at zero ([math:cor-exponential-is-a-bijection-onto-positive-reals](https://alphabetamath.cc/item/cor-exponential-is-a-bijection-onto-positive-reals), its first fact).

[F13] Limits of convergent real sequences respect sums, differences and scalar multiples ([math:thm-algebra-of-limits](https://alphabetamath.cc/item/thm-algebra-of-limits)).

[F14] The natural logarithm is inverse to the real exponential: $\exp(\log x)=x$ for $x>0$ and $\log(\exp t)=t$ for real $t$ ([math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)).

[F15] For a real sequence $(x_n)$, $x_n\to+\infty$ means that for every real $M$ one has $x_n>M$ eventually; $x_n\to-\infty$ means that for every real $M$ one has $x_n<M$ eventually ([math:def-divergence-to-infinity](https://alphabetamath.cc/item/def-divergence-to-infinity)).

[F16] For a real function on a domain unbounded above, $f(C)\to L$ as $C\to+\infty$ means that for every $\eta>0$ there is a real $M$ such that $|f(C)-L|<\eta$ whenever $C>M$ in the domain. For a domain unbounded below, the corresponding definition at $-\infty$ uses $C<M$. Infinite limits replace the bound on $|f(C)-L|$ by the requirement that $f(C)$ eventually exceed every real threshold or lie below every real threshold, respectively ([math:def-limits-at-infinity](https://alphabetamath.cc/item/def-limits-at-infinity)).

### Proof

**Proof technique:** direct.

1.1 Suppose $c_n\to c\in\mathbb R$ and let $X$ count isolated vertices. Applying [F4] and then [F5] with $\lambda=e^{-c}>0$ gives $\mathbb P(X=0)\to e^{-e^{-c}}$. For $n\ge2$ a connected graph has no isolated vertex. If a graph is disconnected but has no isolated vertex, its smallest component has order between 2 and $n/2$: there are at least two nonempty components, whose sizes sum to $n$. Let $A$ be the connectivity event, $B=\{X=0\}$, and $D$ the event that a component has order between 2 and $n/2$. Then $A\subseteq B$ and $B\setminus A\subseteq D$. For the graph's outcome weights $w$, [F8] gives $0\le\mathbb P(B)-\mathbb P(A)=\sum_{\omega\in B\setminus A}w(\omega)\le\mathbb P(D)=o(1)$ by [F6], since convergence of $c_n$ implies eventual boundedness. Thus $\mathbb P(B)-\mathbb P(A)\to0$ by the convergence definition, and subtracting this null sequence from $\mathbb P(B)$ proves the finite-limit case by [F13], without converting from a fixed-edge model. [F1, F2, F3, F4, F5, F6, F8, F11, F13, algebra]

1.2 Put $L(C)=e^{-e^{-C}}$. The real-variable limits in this step have the meaning in [F16], with domain $\mathbb R$. As $C\to+\infty$, [F11] gives $-e^{-C}\to0$; continuity at zero from [F12] gives $L(C)\to e^0=1$, where $\exp(0)=\exp(\log 1)=1$ by [F9] and [F14]. As $C\to-\infty$, [F11] gives $e^{-C}\to+\infty$, so $-e^{-C}\to-\infty$ and a second application of [F11] gives $L(C)\to0$. To see the final implication directly, for any $\eta>0$ choose $T$ such that $t<T$ implies $e^t<\eta$; then choose $C$ sufficiently negative that $-e^{-C}<T$. These uses of composition are therefore justified at both ends. [F9, F11, F12, F14, F16, algebra]

2.1 Write $f_n(t)=\mathbb P(G(n,t)\text{ is connected})$. For fixed $C\in\mathbb R$, set $p_C=(\log n+C)/n$. By [F9], for any real $M$ there is an $x_M>0$ with $\log x_M=M$; for every integer $n>x_M$, strict increase gives $\log n>M$. Hence $\log n\to+\infty$ in the sense of [F15], and $p_C>0$ eventually. Also [F10] with $a=1$ and [F13] give $p_C\to0$, since $C/n\to0$: given $\eta>0$, $n>|C|/\eta$ implies $|C|/n<\eta$. Consequently $p_C\in[0,1]$ eventually and step 1.1 applies to this tail, giving $f_n(p_C)\to e^{-e^{-C}}$. [step 1.1, F1, F3, F9, F10, F13, F15, algebra]

3.1 By [F8], $0\le f_n(t)\le1$ for $t\in[0,1]$, since an event sums a subset of the nonnegative weights whose total is one. Fix $\varepsilon>0$. If $c_n\to+\infty$, choose a fixed $C$ with $L(C)>1-\varepsilon/2$ by step 1.2. By [F15], eventually $c_n>C$ and hence $p\ge p_C$, so [F7] and step 2.1 give $1\ge f_n(p)\ge f_n(p_C)>L(C)-\varepsilon/2>1-\varepsilon$. If $c_n\to-\infty$, choose a fixed $C$ with $L(C)<\varepsilon/2$. By [F15], eventually $c_n<C$ and hence $p\le p_C$, so $0\le f_n(p)\le f_n(p_C)<L(C)+\varepsilon/2<\varepsilon$. These are precisely convergence to one and zero. The given assumption $p\in[0,1]$ ensures that the graph exists in both regimes, and step 2.1 makes each comparison probability admissible eventually. [step 2.1, step 1.2, F1, F3, F7, F8, F15, F16, choose, algebra] ∎

### Source notes

The local proof follows the isolated-vertex/component decomposition in Frieze and Karoński, §4.1, printed pp. 67–69. The source states Theorem 4.1 first in the fixed-edge model and proves its independent-edge analogue. Here the argument stays in the independent-edge model throughout. The helper uses the deliberately weaker root-parent bound $k^{k-1}$ instead of the exact tree count $k^{k-2}$, and proves the needed zero-count limit directly by a finite sieve rather than importing the Poisson-limit theorem cited by the book. Five fully authored helpers precede this composition. No source statement is imported as a logical premise; the article under study is not used.


## Bipartite Ramanujan existence and the centered spectrum

[Open item](item-thm-expander-prereq-bipartite-ramanujan-existence) · level 2


### Statement

For every integer $d\ge3$ there is a sequence of finite simple $d$-regular bipartite graphs whose vertex counts tend to infinity and whose adjacency eigenvalues other than the source's trivial values $d$ and $-d$ lie in $[-2\sqrt{d-1},2\sqrt{d-1}]$. Here bipartite means that the vertices have two parts and every edge joins different parts; $d$-regular means that each vertex has exactly $d$ neighbors. The adjacency matrix $A$ has entry one at adjacent pairs and zero elsewhere.

For each such graph, with $n$ vertices and all-ones matrix $J$, the centered adjacency norm satisfies $\|A-(d/n)J\|_{\mathrm{op}}\ge d>2\sqrt{d-1}$. Thus the existence theorem with both trivial values excluded does not itself provide the centered absolute-spectrum bound $\|A-(d/n)J\|_{\mathrm{op}}\le2\sqrt{d-1}$.

### External input

The existence and nontrivial-eigenvalue bound in the first paragraph are imported from Marcus, Spielman and Srivastava, Section 2.1 and Theorem 5.5. Their proof starts with a complete bipartite graph and obtains graphs of twice the preceding order; the cited interlacing and lifting machinery is not reconstructed here.

### Facts & Assumptions

**Given:** An integer $d\ge3$ and a graph supplied by the external input, with bipartition $V=L\sqcup R$.

**Goal:** Establish the stated comparison with the centered adjacency norm.

[F1] The imported theorem supplies the graphs and their nontrivial spectral bound, with both $d$ and $-d$ designated trivial in the bipartite case.

[F2] For a finite simple graph, adjacency is represented by its symmetric zero-diagonal $0$–$1$ matrix; its row sums are its vertex degrees ([def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)).

[F3] For a symmetric nonnegative matrix with constant row sum $d>0$, the centered operator $A-(d/n)J$ agrees with $A$ on the vectors of coordinate sum zero, and its norm is the norm of that restriction ([prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum)).

### Proof

1.1 Counting edges from the two sides gives $d|L|=d|R|$, so $|L|=|R|$. Define $v$ to be $1$ on $L$ and $-1$ on $R$. It is nonzero and has coordinate sum zero. Each neighbor of a vertex lies in the opposite part, and every vertex has $d$ neighbors; therefore $Av=-dv$. [given, F2, algebra]

2.1 By [F3], $(A-(d/n)J)v=Av=-dv$. The definition of operator norm applied to this nonzero vector gives $\|A-(d/n)J\|_{\mathrm{op}}\ge d$. Since $d\ge3$, $(d-2)^2>0$, and hence $d^2>4(d-1)$, which gives $d>2\sqrt{d-1}$. Together with the imported existence statement [F1], this proves the claim and the stated limitation of the bipartite convention. [F1, F3, step 1.1, algebra] ∎



## Differentiable entropy inverse branches and shifted contracts

[Open item](item-lem-author-2bcd11f9e275-entropy-inverse-branches) · level 2


### Statement

For $a>0$, let $I(a)=a\log a-a+1$. Write $a_-(t)\in(0,1)$ for the inverse of $I$ at $0<t<1$, and $a_+(t)\in(1,\infty)$ for the inverse at $t>0$. These functions are smooth, with $a_\pm\prime(t)=1/\log a_\pm(t)$. Thus $a_-$ decreases and $a_+$ increases. For real $s,t$, consider $I(1+c+s)=t$ in real $c$, with logarithmic admissibility $1+c+s>0$. If $t<0$ there is no solution; if $t=0$ the unique solution is $c=-s$; if $t>0$ the solutions are exactly $c=a_\pm(t)-1-s$ on the branches for which $a_\pm(t)$ is defined. Thus there are two solutions when $0<t<1$ and only the upper-branch solution when $t\ge1$.

### Facts & Assumptions

[F1] [lem-author-2bcd11f9e275-entropy-branch-geometry](item-lem-author-2bcd11f9e275-entropy-branch-geometry) defines $I$, gives $I(1)=0$, and supplies strict decrease on $(0,1)$, strict increase on $(1,\infty)$, their respective ranges $(0,1)$ and $(0,\infty)$, uniqueness, and $I\prime(a)=\log a\ne0$ off $a=1$.

[F2] [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral) gives $(\log a)\prime=1/a$ on $(0,\infty)$.

[F3] [math:lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space](https://alphabetamath.cc/item/lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space) gives a smooth local inverse wherever the derivative of a smooth Euclidean map is invertible.

[F4] [math:def-ck-euclidean-maps-and-diffeomorphisms](https://alphabetamath.cc/item/def-ck-euclidean-maps-and-diffeomorphisms) defines a smooth map on an open Euclidean set as a map of class $C^k$ for every $k\in\mathbb N$.

[F5] [math:lem-derivative-of-a-power](https://alphabetamath.cc/item/lem-derivative-of-a-power) gives $(a^{-k})\prime=-k a^{-k-1}$ for every integer $k\ge1$ and $a>0$, since this domain excludes zero.

[F6] [math:thm-algebra-of-derivatives](https://alphabetamath.cc/item/thm-algebra-of-derivatives) gives $(\alpha f)\prime=\alpha f\prime$ for a real constant $\alpha$ and a differentiable real function at a limit point of its domain.

[F7] [math:cor-differentiable-implies-continuous](https://alphabetamath.cc/item/cor-differentiable-implies-continuous) gives continuity at each domain limit point where a real function is differentiable.

[F8] [math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle) gives the property form of induction: $P(0)$ and $P(n)\Rightarrow P(n+1)$ for every $n\in\mathbb N$ imply $P(n)$ for every $n\in\mathbb N$.

[F9] [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws) gives strict increase of $\log$ on $(0,\infty)$ and $\log 1=0$.

### Proof

**Given:** The variables and hypotheses of the Statement.

**Goal:** Establish the full Statement.

1.1 Every point of $(0,\infty)$ is a limit point of this domain, and every $a$ in it is nonzero. Apply F8 to the assertion $P(n)$ that the derivative formula below holds at order $k=n+1$. Its base case $n=0$, namely $(\log)\prime(a)=a^{-1}$, is F2. Induction using F5 and the scalar-multiple rule in F6 then gives $(\log)^{(k)}(a)=(-1)^{k-1}(k-1)!a^{-k}$ for every integer $k\ge1$: differentiating the formula at order $k$ multiplies its coefficient by $-k$ and replaces $a^{-k}$ by $a^{-k-1}$, yielding the formula at order $k+1$. Each displayed derivative is itself differentiable by F5 and F6, hence continuous by F7; the logarithm itself is continuous by F2 and F7. Since $I\prime=\log$ by F1, $I$ is continuous by F7 and every positive-order derivative of $I$ exists and is continuous. In dimension one the word derivatives in F4 are precisely ordinary iterated derivatives, so $I$ is smooth in that definition. [F1, F2, F4, F5, F6, F7, F8, induction, algebra]

1.2 Let $t_1<t_2$ lie in the range of the same branch. On the lower branch, if $a_-(t_1)\le a_-(t_2)$, then strict decrease of $I$ in F1 would give $t_1=I(a_-(t_1))\ge I(a_-(t_2))=t_2$, a contradiction. Hence $a_-(t_1)>a_-(t_2)$. On the upper branch, if $a_+(t_1)\ge a_+(t_2)$, strict increase of $I$ would similarly give $t_1\ge t_2$. Thus $a_+(t_1)<a_+(t_2)$, proving both asserted monotonicities directly from branch order. [F1]

2.1 On either open branch, $I\prime(a)=\log a\ne0$ by F1, so its one-dimensional derivative is invertible, with inverse multiplication by $1/\log a$. Step 1.1 and F3 therefore supply a smooth inverse locally at every point of the branch range. Branch uniqueness in F1 identifies every such local inverse with $a_\pm$ on its neighbourhood. Thus $a_\pm$ is smooth on each stated open range, with $a_\pm\prime(t)=1/\log a_\pm(t)$. Since F9 gives $\log a<\log 1=0$ for $0<a<1$ and $\log a>0$ for $a>1$, this derivative is negative on the lower branch and positive on the upper branch. [F1, F3, F4, F9, step 1.1, algebra]

3.1 For each real $s$, substitution of $a=1+c+s$ is a bijection between admissible real $c$ and positive $a$. F1 gives $I(1)=0$ and positive values on both open branches, so $I(a)\ge0$, with equality exactly at $a=1$. Hence there is no solution for $t<0$, and for $t=0$ the unique solution is $c=-s$, which is admissible because $1+c+s=1$. For $t>0$, a solution cannot have $a=1$, so F1 gives exactly $c=a_\pm(t)-1-s$ for each defined inverse value: two solutions for $0<t<1$, and just the upper-branch solution for $t\ge1$. In particular, shifted-root comparisons require both the chosen branch and the right-hand side; monotonicity of an unspecified root is insufficient. [F1, step 1.1, algebra] ∎


## Vertex relabeling preserves the uniform regular graph law

[Open item](item-lem-author-8d6ffb027277-uniform-vertex-relabeling) · level 2


### Statement

Let $n$ be a positive integer and $d$ a nonnegative integer such that the set $\Omega_{n,d}$ of simple $d$-regular graphs on $[n]$ is nonempty, and equip it with the uniform law. For any permutation $\sigma$ of $[n]$, put $E(\sigma G)=\{\{\sigma u,\sigma v\}:\{u,v\}\in E(G)\}$. This map is a bijection of $\Omega_{n,d}$ preserving the uniform law, Hamiltonicity and every graph property invariant under relabeling.

For $n\ge3$, a candidate Hamiltonian cycle on $[n]$ is the edge set obtained by listing every vertex once and joining consecutive vertices, including the last and first. For $n=1,2$, there are no candidate Hamiltonian cycles, following the convention that a simple cycle has at least three distinct vertices. A graph is Hamiltonian when its edge set contains a candidate Hamiltonian cycle. For any two candidate Hamiltonian cycles $C,D$ there is a permutation $\sigma$ with $\sigma C=D$.

### Facts & Assumptions

[F1] [def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning) defines the nonempty uniform labelled simple regular graph model.

[F2] For $n\ge3$, [lem-author-8d6ffb027277-hamilton-cycle-encodings](item-lem-author-8d6ffb027277-hamilton-cycle-encodings) defines Hamiltonian cycles by vertex listings.

[F3] [math:def-symmetric-group](https://alphabetamath.cc/item/def-symmetric-group) defines a permutation of a set as a bijection from that set to itself.

[F4] [math:def-uniform-finite-probability-space](https://alphabetamath.cc/item/def-uniform-finite-probability-space) assigns each outcome of a nonempty finite set $\Omega$ weight $1/|\Omega|$, so an event $A$ has probability $|A|/|\Omega|$.

[F5] [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle) requires a simple cycle to have length at least three and distinct vertices before its closing repetition.

### Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish every assertion of the Statement.

1.1 By F3, each vertex has a unique preimage under $\sigma$; mapping a vertex to that preimage defines the inverse permutation $\sigma^{-1}$. Relabeling preserves distinct endpoints, and $v\mapsto\sigma v$ bijects the neighbors of $u$ with the neighbors of $\sigma u$. Thus $\sigma G$ remains simple and $d$-regular. Relabeling by $\sigma^{-1}$ inverts this construction, so $T_\sigma:G\mapsto\sigma G$ is a bijection of the finite set $\Omega_{n,d}$. For every event $A\subseteq\Omega_{n,d}$, its restriction is a bijection from $A$ onto $T_\sigma(A)$, so $\mathbb P(T_\sigma(A))=|T_\sigma(A)|/|\Omega_{n,d}|=|A|/|\Omega_{n,d}|=\mathbb P(A)$. Hence the uniform law is preserved. [F1, F3, F4, construct]

2.1 If $n\ge3$, applying $\sigma$ to a vertex listing defining a Hamiltonian cycle gives a listing defining a Hamiltonian cycle of $\sigma G$. Applying $\sigma^{-1}$ proves the converse. If $n=1,2$, no simple cycle exists by F5, so neither graph is Hamiltonian under the stated convention. Thus Hamiltonicity is preserved for every allowed $n$. A relabeling-invariant property is preserved by its defining invariance. [given, F2, F5, step 1.1, construct]

3.1 If candidate cycles $C,D$ exist, then $n\ge3$. Choose listings $(v_1,\ldots,v_n)$ and $(w_1,\ldots,w_n)$ defining them. Set $\sigma(v_i)=w_i$ for every $i$. Each listing contains every vertex exactly once, so this defines a bijection of $[n]$, with inverse $w_i\mapsto v_i$, hence a permutation. It carries every consecutive edge, including the closing edge, to the corresponding edge of $D$, giving $\sigma C=D$. For $n=1,2$ the assertion about pairs of candidate cycles is vacuous. [given, F2, F3, step 2.1, construct] ∎


## Extracting a nonconstant eigenvalue from closed-walk moments

[Open item](item-lem-author-f736bc76cd5d-moment-extraction) · level 2


### Statement

Fix an integer $d\ge2$. Let $A_n$ be finite $d$-regular adjacency-slot matrices of orders $n\to\infty$: each $A_n$ is a symmetric nonnegative integer matrix with row sum $d$, and diagonal entries count loop slots. Set $\Lambda_n=\|A_n-(d/n)J\|_{\mathrm{op}}$, where $J$ has all entries one and the norm is Euclidean. For every fixed integer $k\ge1$ and all $n\ge2$,

$$\Lambda_n^{2k}\ge\frac{nC_k(d-1)^k-d^{2k}}{n-1}.$$

Here $C_k$ is the number of Dyck words of length $2k$, namely words with $k$ symbols $+1$ and $k$ symbols $-1$ whose every initial partial sum is nonnegative. In particular, for every $\varepsilon>0$, eventually $\Lambda_n\ge C_k^{1/(2k)}\sqrt{d-1}-\varepsilon$, with $d,k$ held fixed as the order grows.

### Statement references

[math:def-regular-multigraph-and-normalized-adjacency](https://alphabetamath.cc/item/def-regular-multigraph-and-normalized-adjacency)

[lem-author-f736bc76cd5d-catalan-count](item-lem-author-f736bc76cd5d-catalan-count)

[prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum)

[def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)

### Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish every assertion in the statement.

[F1] The trace of $A_n^{2k}$ counts closed labelled slot walks ([lem-author-f736bc76cd5d-trace-walk-count](item-lem-author-f736bc76cd5d-trace-walk-count)).

[F2] At each starting vertex their number is at least $C_k(d-1)^k$, including loops and parallel slots ([lem-author-f736bc76cd5d-stack-closed-walks](item-lem-author-f736bc76cd5d-stack-closed-walks)).

[F3] A regular symmetric matrix has an orthonormal eigenbasis with first eigenvalue $d$ at the constant vector, and the remaining eigenvalues $\lambda_2,\ldots,\lambda_n$ satisfy $\max_{i\ge2}|\lambda_i|=\Lambda_n$ ([prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum)).

[F4] A conclusion holds eventually if it holds beyond a single order cutoff along the sequence under consideration ([def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)).

[F5] In the adjacency-slot convention, $A_n$ is symmetric with nonnegative integer entries and row sum $d$; diagonal entries count loop slots ([math:def-regular-multigraph-and-normalized-adjacency](https://alphabetamath.cc/item/def-regular-multigraph-and-normalized-adjacency)).

[F6] Such a matrix admits directed slot labels with an endpoint-reversing involution, possibly fixing loop labels, and exactly $(A_n)_{xy}$ labels from $x$ to $y$. Labelled walks are composable lists of these labels and are closed when their endpoints agree ([lem-author-f736bc76cd5d-reversible-slots](item-lem-author-f736bc76cd5d-reversible-slots)).

[F7] The Dyck-word count satisfies $C_k=\binom{2k}{k}/(k+1)\ge4^k/((2k+1)(k+1))>0$ for $k\ge1$ ([lem-author-f736bc76cd5d-catalan-count](item-lem-author-f736bc76cd5d-catalan-count)).

### Proof

1.1 By [F5] and [F6], choose reversible slot labels for $A_n$; these satisfy the hypotheses of [F1] and [F2]. Hence $\operatorname{tr}(A_n^{2k})\ge nC_k(d-1)^k$. By [F3], write $A_n=Q\operatorname{diag}(d,\lambda_2,\ldots,\lambda_n)Q^\top$ with $Q$ orthogonal. Expanding diagonal entries and using $\sum_xQ_{xi}^2=1$ gives $\operatorname{tr}(A_n^{2k})=d^{2k}+\sum_{i=2}^n\lambda_i^{2k}\le d^{2k}+(n-1)\Lambda_n^{2k}$. Rearranging proves the finite-order inequality, even if its right side is negative. [F1, F2, F3, F5, F6, choose, algebra]

2.1 By [F7] and $d\ge2$, put $a=C_k^{1/(2k)}\sqrt{d-1}>0$ and hold $d,k$ fixed. The right side of the inequality is $a^{2k}+(a^{2k}-d^{2k})/(n-1)$ and tends to $a^{2k}$. If $0<\varepsilon<a$, then $a^{2k}-(a-\varepsilon)^{2k}>0$, so beyond a cutoff that right side exceeds $(a-\varepsilon)^{2k}$. Since $\Lambda_n\ge0$, step 1.1 gives $\Lambda_n>a-\varepsilon$. If $\varepsilon\ge a$, the same desired weak inequality follows from nonnegativity. This proves the eventual assertion. [F3, F4, F7, step 1.1, algebra] ∎


## Ordered eigenvalues and the centered regular norm

[Open item](item-lem-author-bcce21321c2a-ordered-centered-spectrum) · level 2


### Statement

Let $A$ be the adjacency matrix of a labelled simple $d$-regular graph on $n\ge2$ vertices, with $d>0$. Order its real eigenvalues with multiplicity as $\lambda_1\ge\cdots\ge\lambda_n$, and let $J$ be the all-ones matrix. Then $\lambda_1=d$ and, with $\rho_0(A)=\|A-(d/n)J\|_{\mathrm{op}}$,

$$\rho_0(A)=\max_{2\le i\le n}|\lambda_i|=\max\{\lambda_2,|\lambda_n|\}.$$

Only one copy of the eigenvalue $d$ is removed; no connectedness or nonbipartiteness assumption is made. For any finite probability space $(\Omega,w)$ and any map $\omega\mapsto G(\omega)$ into labelled simple $d$-regular graphs on the same $n$ vertices, let $A(\omega)$ be the adjacency matrix of $G(\omega)$ and $\lambda_i(\omega)$ its eigenvalues in the order above. For every real $t$, the following subsets of $\Omega$ are equal events:

$$\{\omega\in\Omega:\rho_0(A(\omega))\ge t\}=\{\omega\in\Omega:\max\{\lambda_2(\omega),|\lambda_n(\omega)|\}\ge t\}.$$

### Facts & Assumptions

[F1] [prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum) gives $A\mathbf1=d\mathbf1$, the invariance of $\mathbf1^\perp$, and the identity between the centered norm and the maximum absolute value of all eigenvalues after removing the constant eigenvector.

[F2] [def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning) defines the finite labelled simple regular graph model.

[F3] [math:def-adjacency-matrix-of-a-finite-simple-graph](https://alphabetamath.cc/item/def-adjacency-matrix-of-a-finite-simple-graph) defines the adjacency matrix in a fixed vertex order: its entry is $1$ precisely for an edge and $0$ otherwise. For a simple graph it is real symmetric and has nonnegative entries.

[F4] [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event) defines a finite probability space $(\Omega,w)$ and makes every subset of $\Omega$ an event.

### Proof

**Given:** The matrix and ordered eigenvalues in the statement; for the event assertion, also the finite probability space and graph-valued map specified there.

**Goal:** Identify the ordered spectral maximum with the centered norm, and their threshold events.

1.1 By [F2] and [F3], $A$ is real symmetric with nonnegative entries and every row sum $d$, so [F1] applies. Choose a nonzero real eigenvector $x$ for any eigenvalue $\lambda$ and a coordinate $v$ maximizing $|x_v|$. The nonnegative adjacency entries and row sum $d$ imply $|\lambda||x_v|=|\sum_w A_{vw}x_w|\le d|x_v|$, whence $|\lambda|\le d$. Since the constant vector has eigenvalue $d$, the first ordered eigenvalue is $d$. Choose that constant vector first in the orthonormal eigenbasis from [F1]. The other eigenvalues, including every remaining copy of $d$, are exactly $\lambda_2,\ldots,\lambda_n$. [F1, F2, F3, given, algebra]

2.1 The largest absolute value of a decreasing finite real list occurs at an endpoint. If $\lambda_2\ge0$, that value is $\max\{\lambda_2,|\lambda_n|\}$. If $\lambda_2<0$, all remaining eigenvalues are negative and $|\lambda_n|\ge|\lambda_2|$, giving the same formula. Apply the norm identity in [F1] to this list to obtain the displayed equality for $\rho_0(A)$. [F1, step 1.1, algebra]

3.1 For each $\omega\in\Omega$, the graph $G(\omega)$ satisfies the same hypotheses, so step 2.1 gives $\rho_0(A(\omega))=\max\{\lambda_2(\omega),|\lambda_n(\omega)|\}$. Thus $\omega$ belongs to the left threshold subset exactly when it belongs to the right threshold subset, for every real $t$. Both subsets are events by [F4], proving the event equality. [F4, given, step 2.1, algebra] ∎


## Quadratic Gaussian process and its increment metric

[Open item](item-lem-author-b9de37ca32a7-quadratic-gaussian-increments) · level 2


### Statement

Assume Choice and let $Y=T(Z)$ be the triangular Gaussian matrix of [lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments). On the real unit sphere $S=\{v\in\mathbb R^r:\|v\|_2=1\}$ set $Q_v=v^TYv$. This is a centered Gaussian process with continuous sample paths. For $v,w\in S$, writing $D_{ij}=v_iv_j-w_iw_j$, one has $\mathbb E(Q_v-Q_w)^2=\sum_iD_{ii}^2+4\sum_{i<j}D_{ij}^2\le4\|v-w\|_2^2$. The process $H_v=2v^Tg$, for an independent-standard-normal vector $g\in\mathbb R^r$, is centered Gaussian with increment variance exactly $4\|v-w\|_2^2$.

### Facts & Assumptions

[F1] Finite independent standard normal scalars stack into a centered multivariate normal vector with identity covariance; every scalar projection is normal. [math:lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal](https://alphabetamath.cc/item/lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal), [math:def-multivariate-normal-law](https://alphabetamath.cc/item/def-multivariate-normal-law).

[F2] Gaussian processes are defined by normal finite linear combinations, allowing singular laws. Gaussian coordinates have mean zero and second moment one, and distinct independent coordinates have zero cross moment. [math:def-gaussian-process](https://alphabetamath.cc/item/def-gaussian-process), [prop-expander-prereq-gaussian-entry-moments](item-prop-expander-prereq-gaussian-entry-moments).

[F3] Finite integrable sums have linear expectation; real vectors satisfy Cauchy–Schwarz, and their Euclidean norm induces the metric $d(v,w)=\|v-w\|_2$ (restricted to $S$ when appropriate). [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one), [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm).

[F4] A real stochastic process is a family of real random variables indexed by a set and defined on a common probability space. [math:def-stochastic-process-and-finite-dimensional-distributions](https://alphabetamath.cc/item/def-stochastic-process-and-finite-dimensional-distributions).

[F5] A map between metric spaces is continuous if at every point, for each $\varepsilon>0$, some $\delta>0$ makes input distance less than $\delta$ imply output distance less than $\varepsilon$. Here sample paths are maps from $S$ with its restricted Euclidean metric to $\mathbb R$ with distance $|a-b|$. [math:def-metric-continuity](https://alphabetamath.cc/item/def-metric-continuity).

### Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish all the stated estimates.

1.1 Expand $Q_v=\sum_i v_i^2Z_{ii}+2\sum_{i<j}v_iv_jZ_{ij}$. By [F1], for each fixed $v$ this scalar projection is a measurable real random variable on the common probability space carrying $Z$. Thus $Q=(Q_v)_{v\in S}$ is a stochastic process by [F4]. Every finite linear combination of the $Q_v$ is a scalar projection of the jointly Gaussian triangular coordinates, so [F1] and [F2] give the Gaussian-process assertion; [F3] gives zero mean. Expanding the square of $Q_v-Q_w$, the zero cross moments in [F2] give exactly $\sum_iD_{ii}^2+4\sum_{i<j}D_{ij}^2$. [F1, F2, F3, F4, algebra]

2.1 The preceding variance is at most $2\sum_{i,j}D_{ij}^2=4(1-(v^Tw)^2)$. Put $t=v^Tw\in[-1,1]$ by [F3]. Since $1-t^2\le2(1-t)$, this is at most $8(1-t)=4\|v-w\|_2^2$. By [F1], each $H_v=2v^Tg$ is a measurable scalar projection on the common probability space carrying $g$, so [F4] makes $H=(H_v)_{v\in S}$ a stochastic process. Every finite linear combination of the $H_v$ is also a scalar projection of $g$, so [F1] and [F2] prove that $H$ is centered Gaussian; direct expansion using its identity covariance gives $\mathbb E(H_v-H_w)^2=4\sum_i(v_i-w_i)^2$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Fix any outcome $\omega$ for the quadratic process and put $A=Y(\omega)$, a finite real matrix. For $v,w\in S$, the Euclidean norm gives $|v_i|,|w_i|\le1$ and $|v_i-w_i|\le\|v-w\|_2$. Consequently $|v_iv_j-w_iw_j|=|v_i(v_j-w_j)+w_j(v_i-w_i)|\le2\|v-w\|_2$, and finite summation yields $|Q_v(\omega)-Q_w(\omega)|\le L_Q(\omega)\|v-w\|_2$, where $L_Q(\omega)=2\sum_{i,j}|A_{ij}|<\infty$. For any outcome of the linear process, Cauchy–Schwarz in [F3] gives $|H_v(\omega)-H_w(\omega)|\le L_H(\omega)\|v-w\|_2$, where $L_H(\omega)=2\|g(\omega)\|_2<\infty$. For either path, write $L$ for its nonnegative finite bound. Given $\varepsilon>0$ and any $w\in S$, take $\delta=\varepsilon/(1+L)>0$; then $\|v-w\|_2<\delta$ implies that the output distance is at most $L\|v-w\|_2<\varepsilon$. By [F5] every path of each process is continuous. [F3, F5, step 1.1, step 2.1, algebra] ∎


## Even trace moments transfer from the operator norm

[Open item](item-lem-author-b9de37ca32a7-even-trace-transfer) · level 2


### Statement

Let $A$ be real symmetric of size $r\ge1$ on the vertex Hilbert space, with operator norm $\|A\|$. For every integer $p\ge1$, define $\operatorname{Tr}(B)=\sum_{i=1}^r B_{ii}$; then $0\le\operatorname{Tr}(A^{2p})\le r\|A\|^{2p}$.

For the probabilistic conclusion, assume in addition the Axiom of Choice. Let $Z=(Z_{ij})_{1\le i\le j\le r}$ have independent standard normal real coordinates, and set $Y_{ij}=Y_{ji}=Z_{ij}$. Then both expectations below are finite, and $(\mathbb E\operatorname{Tr}(Y^{2p}))^{1/(2p)}\le r^{1/(2p)}(\mathbb E\|Y\|^{2p})^{1/(2p)}$.

### Statement references

[def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)

[lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)

[math:def-standard-normal-and-normal-laws](https://alphabetamath.cc/item/def-standard-normal-and-normal-laws)

[math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)

[math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)

[math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)

### Facts & Assumptions

[F1] A self-adjoint finite-dimensional complex operator has an orthonormal eigenbasis, and the vertex convention has the same adjoint, norm and self-adjoint eigenvalues. [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms), [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space).

[F2] The operator norm bounds the absolute value of each eigenvalue. Under the Axiom of Choice, the stated triangular Gaussian matrix has measurable norm and finite even norm moments. Choice is used here to meet the hypotheses of the triangular-norm supplier. [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm), [lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F3] For a nonnegative measurable random variable, expectation is its nonnegative integral with respect to the probability measure. This integral is monotone and homogeneous. [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable), [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral).

[F4] For a real-valued function on a measure space, measurability is equivalent to measurability of every strict superlevel set. Sums, real scalar multiples and absolute values of finite real-valued measurable functions are measurable. [math:def-extended-real-valued-measurable-function](https://alphabetamath.cc/item/def-extended-real-valued-measurable-function), [math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral).

[F5] On the nonzero finite-dimensional vertex space, the induced operator norm of a linear map $T$ is $\max_{\|u\|_2=1}\|Tu\|_2$. The convention transfer in [F1] preserves this norm. [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space), [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space).

[F6] A real random variable is a measurable map from a probability space into $\mathbb R$ with its Borel sigma-algebra. Random elements on a common probability space are independent when their generated sigma-algebras are independent. Under Choice, the standard normal law $N(0,1)$ is the probability measure with density $e^{-x^2/2}/\sqrt{2\pi}$. [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable), [math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements), [math:def-standard-normal-and-normal-laws](https://alphabetamath.cc/item/def-standard-normal-and-normal-laws), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

### Proof

**Given:** The objects and hypotheses in the Statement; Choice is assumed only for the Gaussian conclusion.

**Goal:** Establish the deterministic bound and the conditional Gaussian expectation bound.

1.1 Symmetry makes $A$ self-adjoint. By [F1], write $A=U\operatorname{diag}(\mu_1,\ldots,\mu_r)U^*$ with real $\mu_j$ and unitary $U$. Matrix multiplication gives $\operatorname{Tr}(A^{2p})=\sum_i\sum_j\mu_j^{2p}|U_{ij}|^2=\sum_j\mu_j^{2p}$ because each column has squared norm one. Each summand is nonnegative and at most $\|A\|^{2p}$ by [F2]. Summation proves the deterministic bound without using Choice. [F1, F2, F5, algebra]

1.2 Let $f$ be a finite real-valued measurable function on a measure space $(\Omega,\mathcal F,\mu)$. By [F4], $|f|$ is measurable. For $a<0$, $\{f^2>a\}=\Omega$; for $a\ge0$, $\{f^2>a\}=\{|f|>\sqrt a\}$. Thus every strict superlevel of $f^2$ is measurable, so [F4] makes $f^2$ measurable. If $g$ is another finite real-valued measurable function, [F4] and the identity $fg=((f+g)^2-(f-g)^2)/4$ then make $fg$ measurable. Induction gives measurability of every finite product and finite sum of products of such functions. [F4, algebra]

2.1 Now assume Choice and use the Gaussian coordinates in the Statement. By [F6], each $Z_{ij}$ is a finite real-valued measurable random variable; every entry of $Y$ is one of these coordinates. Expanding matrix powers gives $\operatorname{Tr}(Y^{2p})=\sum_{i_0,\ldots,i_{2p-1}=1}^r\prod_{k=0}^{2p-1}Y_{i_k i_{k+1}}$, where $i_{2p}=i_0$. This finite sum of finite products is measurable by step 1.2. The same step applied to the measurable norm from [F2] makes $\|Y\|^{2p}$ measurable. [given, F2, F6, step 1.2, algebra]

3.1 Apply step 1.1 pointwise to $Y$. Steps 1.1 and 2.1 give nonnegative measurable functions with $0\le\operatorname{Tr}(Y^{2p})\le r\|Y\|^{2p}$. By [F2], $\mathbb E\|Y\|^{2p}<\infty$, and [F3] gives $0\le\mathbb E\operatorname{Tr}(Y^{2p})\le r\mathbb E\|Y\|^{2p}<\infty$. Taking the increasing positive $2p$th root gives exactly the stated expectation inequality. [F2, F3, step 1.1, step 2.1, algebra] ∎


## Simultaneous degree deviations on the squared logarithmic scale

[Open item](item-lem-author-635c380339fd-degree-envelope) · level 2


### Statement

Fix $c>0$ and let $G\sim G(n,p)$ with $np=d\ge c(\log n)^2$ and $p\le1$. Put $\mu=(n-1)p$ and $t=\sqrt{12\mu\log n}$. Eventually, with probability at least $1-2n^{-3}$, every loop-free degree $d_i$ satisfies $|d_i-\mu|<t\le\sqrt{12d\log n}$. The statement applies along every sequence of allowed probabilities.

### Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the conclusions in the Statement.

[F1] The exact-mean Chernoff union estimate is $\mathbb P(\exists i:|d_i-\mu|\ge\delta\mu)\le2n e^{-\mu\delta^2/3}$ for $0\le\delta\le1$ ([prop-expander-prereq-degree-chernoff-union](item-prop-expander-prereq-degree-chernoff-union)); the graph law and sequence quantifiers are those of [prop-expander-prereq-degree-law-and-dependence](item-prop-expander-prereq-degree-law-and-dependence) and [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers).

### Proof

1.1 Because $\mu=(1-1/n)d\ge(c/2)(\log n)^2$ eventually, $\delta=\sqrt{12\log n/\mu}$ is eventually at most one and $\delta\mu=t$. [F1, algebra]

2.1 Substitution in the union bound gives $2n\exp(-4\log n)=2n^{-3}$. Finally $\mu\le d$ gives the stated envelope. [F1, step 1.1, algebra] ∎


## Normalized graph Laplacian and its nontrivial spectrum

[Open item](item-def-author-fc0d6c95270f-normalized-laplacian) · level 2


### Definition

Let $G$ be a simple graph on $V=\{1,\ldots,n\}$, $n\ge2$, with adjacency matrix $A$, degrees $d_i=\sum_j A_{ij}>0$, and $D=\operatorname{diag}(d_1,\ldots,d_n)$. Define $L=D-A$ and the symmetric normalized Laplacian $\mathcal L=D^{-1/2}LD^{-1/2}=I-D^{-1/2}AD^{-1/2}$, where the diagonal matrix $D^{-1/2}$ has entries $d_i^{-1/2}$. List its real eigenvalues with multiplicity as $0=\lambda_1\le\cdots\le\lambda_n$. It is positive semidefinite, and its kernel consists of vectors $D^{1/2}f$ with $f$ constant on each connected component. In particular, connectedness is equivalent to $\lambda_2>0$. For a connected graph define its spectral deviation $\eta(G)=\max_{2\le i\le n}|1-\lambda_i|$ and its nonzero spectral condition number $\kappa(G)=\lambda_n/\lambda_2$.

### Facts & Assumptions

[F1] A simple graph, its edges and connectedness are defined by the edge-process interface ([def-expander-prereq-edge-order-process-coupling](item-def-expander-prereq-edge-order-process-coupling)).

[F2] The unnormalized graph Laplacian has quadratic form $f^*Lf=\frac12\sum_{i,j}A_{ij}|f_i-f_j|^2$ and kernel equal to the functions constant on each component ([prop-expander-prereq-laplacian-support-kernel](item-prop-expander-prereq-laplacian-support-kernel)).

[F3] A Hermitian matrix is positive semidefinite when its quadratic form is nonnegative on every vector ([prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)).

[F4] In a chosen vertex order, the adjacency matrix of a finite simple graph has $A_{ij}=1$ exactly when $\{i,j\}$ is an edge, and $A_{ij}=0$ otherwise. It is real symmetric, entrywise nonnegative and zero on the diagonal ([math:def-adjacency-matrix-of-a-finite-simple-graph](https://alphabetamath.cc/item/def-adjacency-matrix-of-a-finite-simple-graph)).

[F5] A normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis ([math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)).

[F6] Vertices are in the same connected component exactly when a path joins them; a nonempty graph is connected exactly when it has one component. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[F7] An eigenvector of an endomorphism $T$ is a nonzero vector $u$ with $Tu=\lambda u$; $\lambda$ is its eigenvalue, and the corresponding eigenspace is $\ker(T-\lambda I)$. [math:def-eigenvalue-eigenvector-eigenspace-and-spectrum](https://alphabetamath.cc/item/def-eigenvalue-eigenvector-eigenspace-and-spectrum)

[F8] A finite-dimensional inner-product-space endomorphism $T$ is self-adjoint when $T^*=T$ and normal when $TT^*=T^*T$. Every self-adjoint endomorphism is normal, since $TT^*=T^2=T^*T$. [math:def-self-adjoint-and-normal-endomorphism](https://alphabetamath.cc/item/def-self-adjoint-and-normal-endomorphism)

### Justification

**Given:** The objects and hypotheses in the definition.

**Goal:** Establish all stated claims.

1.1 By [F4], $A$ is real symmetric and nonnegative, and its loop-free support graph is $G$ in [F1], so [F2] applies to $L=D-A$. Positive degrees make $D^{1/2}$ and $D^{-1/2}$ invertible real diagonal matrices. The displayed identity for $\mathcal L$ follows by multiplication. For every $x\in\mathbb C^V$, $x^*\mathcal Lx=(D^{-1/2}x)^*L(D^{-1/2}x)\ge0$ by [F2]. Also $\mathcal L$ is real symmetric, hence Hermitian and therefore normal by [F8], so [F3] makes it positive semidefinite and [F5] gives an orthonormal eigenbasis. For every nonzero eigenvector $u$ with eigenvalue $\lambda$ as in [F7], $\lambda=(u^*\mathcal Lu)/(u^*u)$ is real and nonnegative. Thus its eigenvalues can be ordered as stated. [given, F1, F2, F3, F4, F5, F7, F8, algebra]

2.1 Multiplication by the invertible matrices shows $\mathcal Lx=0$ exactly when $L(D^{-1/2}x)=0$. Hence [F2] gives the stated kernel description. By [F6], the indicator functions of the connected components form a basis of $\ker L$, and multiplication by $D^{1/2}$ is an isomorphism from $\ker L$ onto $\ker\mathcal L$. Thus the latter kernel has dimension equal to the number of components, which is at least one. In the eigenbasis of step 1.1, that dimension is the number of zero eigenvalues counted with multiplicity. Consequently $\lambda_1=0$, and zero is simple exactly when $G$ is connected by [F6]; since all eigenvalues are nonnegative and $n\ge2$, this is equivalent to $\lambda_2>0$. In that case the maximum and ratio defining $\eta(G)$ and $\kappa(G)$ are well-defined finite real numbers, with positive denominator. [given, step 1.1, F1, F2, F5, F6, F7, algebra] ∎


## An isolated vertex before three quarters of the connectivity scale

[Open item](item-lem-author-fc0d6c95270f-isolated-vertex-before-onset) · level 2


### Statement

Assume countable choice. In the independent-label process on $n\ge2$ vertices, use its exponential-clock form $H_t=G_{p(t)}$, where $p(t)=1-e^{-t}$ for $t\ge0$, and define its connectivity clock time by $s_\tau=\min\{t\ge0:H_t\text{ is connected}\}$. Put $p_0=3\log n/(4n)$ for sufficiently large $n$ that $0<p_0<1$. With probability tending to one, $G_{p_0}$ has an isolated vertex and is therefore disconnected. Consequently $s_\tau$ is strictly later than $t_0=-\log(1-p_0)$ on the same event.

### Facts & Assumptions

[F1] At each fixed threshold $p$, the possible edges are independent Bernoulli variables of parameter $p$; connectivity persists as the threshold grows ([def-expander-prereq-edge-order-process-coupling](item-def-expander-prereq-edge-order-process-coupling)).

[F2] A finite probability law consists of nonnegative outcome weights summing to one, and event probabilities are sums of those weights ([math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)). For a real function $Y$ on that finite space, its expectation is $\mathbb EY=\sum_\omega Y(\omega)w(\omega)$ ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)).

[F3] The conventions for tending to zero and high probability are those of [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers).

[F4] The natural logarithm has the usual inverse and product laws, and $\log x=\int_1^x du/u$ for $x>0$ ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws), [math:cor-integral-logarithm-agrees-with-natural-logarithm](https://alphabetamath.cc/item/cor-integral-logarithm-agrees-with-natural-logarithm), [math:def-integral-logarithm](https://alphabetamath.cc/item/def-integral-logarithm)).

[F5] The clocks $T_e=-\log(1-U_e)$ are finite and satisfy $H_t=G_{p(t)}$ with $p(t)=1-e^{-t}$. Almost surely their strict ordering is the uniform edge ordering, and the first connected clock time is $s_\tau$, the arrival time of the edge with connectivity index $\tau$ ([lem-author-fc0d6c95270f-exponential-process-transfer](item-lem-author-fc0d6c95270f-exponential-process-transfer)).

### Proof

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all stated claims.

1.1 Fix $p=p_0$ and let $E$ be the set of possible edges, with $N=|E|=\binom n2$. On the finite configuration space $\Omega_p=\{0,1\}^{E}$, put $w_p(\omega)=\prod_{e\in E}p^{\omega_e}(1-p)^{1-\omega_e}$. These weights are nonnegative and sum to $\prod_{e\in E}(p+(1-p))=1$ by finite distributivity. By independence, the label-process indicator vector $(\mathbf1_{\{U_e\le p\}})_{e\in E}$ equals each configuration $\omega$ with probability $w_p(\omega)$; summing these disjoint configuration probabilities shows that every graph event has the same probability in the two models. All expectations below are the finite weighted sums on $(\Omega_p,w_p)$. [given, F1, F2, algebra]

2.1 On this finite space, let $I_v$ indicate that vertex $v$ is isolated and put $X=\sum_v I_v$. Then $q:=\mathbb P(I_v=1)=(1-p)^{n-1}$, and for distinct $u,v$ one has $\mathbb P(I_u=I_v=1)=(1-p)^{2n-3}$, since there are $2n-3$ distinct edges incident to at least one of them. Expanding the finite sums defining expectation, and using $I_v^2=I_v$, gives $\mathbb E X=nq$ and $\mathbb E X^2=nq+n(n-1)(1-p)^{2n-3}$. [F1, F2, step 1.1, algebra]

3.1 Define $\operatorname{Var}X=\mathbb E(X-\mathbb EX)^2$. Dividing the preceding expressions yields $\operatorname{Var}X/(\mathbb EX)^2=1/(nq)+(n-1)/(n(1-p))-1\le1/(nq)+p/(1-p)$. On $\{X=0\}$, the squared difference equals $(\mathbb EX)^2$, so summing nonnegative weights gives $\mathbb P(X=0)\le\operatorname{Var}X/(\mathbb EX)^2$. [step 2.1, F2, algebra]

4.1 The integral identity gives $-\log(1-p)=\int_{1-p}^1du/u\le p/(1-p)$. Also $\log n\le2\sqrt n$ follows by integrating $1/u\le1/\sqrt u$ from $1$ to $n$, so $p\to0$. Eventually $p\le1/7$, and hence $\log(nq)=\log n+(n-1)\log(1-p)\ge\log n-(n-1)p/(1-p)\ge(1/8)\log n$. Thus $nq\ge n^{1/8}$ and step 3.1 bounds $\mathbb P(X=0)$ by $n^{-1/8}+p/(1-p)\to0$. [given, F3, F4, step 3.1, algebra]

5.1 By the agreement of graph-event probabilities in step 1.1, the label-process graph $G_{p_0}$ has an isolated vertex with probability tending to one. On this event it is disconnected, since $n\ge2$ and an isolated vertex has no path to any other vertex. The finite clocks ensure that the complete graph is attained at a finite time, and the first connected time is a minimum, since the graph changes only at finitely many clock values. The inverse laws give $p(t_0)=p_0$, so $H_{t_0}=G_{p_0}$ is disconnected. Connectivity persists under edge addition, so its first connected time $s_\tau$ must exceed $t_0$. This proves all claims on the same high-probability event. [given, F1, F3, F4, F5, step 1.1, step 4.1] ∎


## The fixed-degree Alon–Boppana lower bound

[Open item](item-thm-expander-prereq-alon-boppana-input) · level 3


### Statement

For each fixed integer $d\ge3$, a sequence of finite $d$-regular graphs with orders tending to infinity has largest absolute nonconstant adjacency eigenvalue at least $2\sqrt{d-1}-o(1)$. The error is in the growing-order limit at fixed degree. This lower bound concerns achievable expansion and does not establish any synchronization threshold.

More precisely, graphs may be arbitrary symmetric nonnegative integer adjacency-slot matrices $A_n$ with every row sum $d$, including loops and repeated edges. The quantity meant is $\Lambda_n=\|A_n-(d/n)J\|_{\mathrm{op}}$, where $J$ is the all-ones matrix and the norm is Euclidean. For $n\ge2$, this equals $\max_{2\le i\le n}|\lambda_i(A_n)|$, retaining every eigenvalue except one constant-vector eigenvalue $d$. For $n=1$, $\Lambda_1=0$ and no maximum over nonconstant eigenvalues is used. For every $\varepsilon>0$, eventually $\Lambda_n\ge2\sqrt{d-1}-\varepsilon$. No connectedness or nonbipartiteness is assumed.

### Statement references

[prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum)

[def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)

### Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish every assertion in the statement.

[F1] For $n\ge2$, the centered norm is the largest absolute nonconstant eigenvalue, with multiplicities retained; for $n=1$, the centered norm is zero ([prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum)).

[F2] For fixed $d,k$ and every $\eta>0$, eventually $\Lambda_n\ge C_k^{1/(2k)}\sqrt{d-1}-\eta$, for the full adjacency-slot convention ([lem-author-f736bc76cd5d-moment-extraction](item-lem-author-f736bc76cd5d-moment-extraction)).

[F3] The Dyck-word numbers satisfy $C_k^{1/(2k)}\to2$ ([lem-author-f736bc76cd5d-catalan-count](item-lem-author-f736bc76cd5d-catalan-count)).

[F4] The asymptotic error is at fixed degree and along increasing graph order ([def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)).

### Proof

1.1 Fix $d\ge3$ and $\varepsilon>0$. By [F3], choose an integer $k\ge1$ such that $C_k^{1/(2k)}\sqrt{d-1}\ge2\sqrt{d-1}-\varepsilon/2$. Keep this $k$ fixed when letting the order grow. Apply [F2] with $\eta=\varepsilon/2$. Beyond its order cutoff, $\Lambda_n\ge2\sqrt{d-1}-\varepsilon$. [F2, F3, F4, choose, algebra]

2.1 Since $n\to\infty$, eventually $n\ge2$, so [F1] identifies this with the claimed absolute nonconstant adjacency bound. If an order-one term occurs, its matrix is $[d]$ and its centered matrix is $[d]-d[1]=[0]$, giving $\Lambda_1=0$ as stated. This initial term has no effect on an eventual assertion. Equivalently put $r_n=\max\{0,2\sqrt{d-1}-\Lambda_n\}$. Step 1.1 says $r_n\to0$, and $\Lambda_n\ge2\sqrt{d-1}-r_n$, which is exactly the stated one-sided $o(1)$ formulation. Since every helper counted actual slot labels, the conclusion includes diagonal entries counted once and parallel slots without a convention transfer. No synchronization or construction assertion was used or proved. [F1, F4, step 1.1, algebra] ∎

### Source notes

The independent source is Hoory–Linial–Wigderson, *Expander Graphs and Their Applications*, May 2006 draft: §2.1, p. 19 allows self-loops and multiple edges; §2.4, p. 21 defines the absolute nonconstant parameter; §2.5, Theorem 2.7, p. 22 states the fixed-degree bound; §5.2.1–5.2.2, pp. 49–50 supplies the closed-walk/Catalan method and explicitly distinguishes it from the stronger second-eigenvalue bound. Those passages were read in the retained PDF. This proof uses the same moment method, but replaces the source's distant-vertices Rayleigh quotient with a trace argument and proves the Dyck-word count and slot-label injection explicitly. The fixed-loop reversal construction addresses the library's allowance of arbitrary diagonal slot counts; it does not infer that an ordinary two-incidence loop is identical to a single diagonal slot. The source is independent background and method attribution, not an outstanding imported logical premise. No complete reading of Chapter 5 or reconstruction of its stronger diameter estimate, explicit Ramanujan constructions, or other cited literature is claimed.


## Parameter bounds giving the signs of shifted entropy roots

[Open item](item-lem-author-2bcd11f9e275-shifted-root-signs) · level 3


### Statement

Let $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, and put $t=(1+\varepsilon)/\gamma$. Then $0<t<1$ and $I(1+\varepsilon)<I(1-\varepsilon)<\varepsilon^2<t$. Consequently $a_-(t)-1+\varepsilon\in(-1+\varepsilon,0)$ and $a_+(t)-1-\varepsilon>0$. Moreover $1+\varepsilon^{-2}<(1+\varepsilon)/I(1-\varepsilon)$.

### Facts & Assumptions

**Given:** The variables and hypotheses of the Statement.

[F1] [lem-author-2bcd11f9e275-logarithmic-tangent-bound](item-lem-author-2bcd11f9e275-logarithmic-tangent-bound) gives $0<I(1-\varepsilon)<\varepsilon^2$.

[F2] [lem-author-2bcd11f9e275-entropy-branch-geometry](item-lem-author-2bcd11f9e275-entropy-branch-geometry) defines $I(a)=a\log a-a+1$ for $a>0$ and gives $I\prime(a)=\log a$, the branch ranges and their strict order.

[F3] [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative) gives strict increase on an interval for a function continuous there and with positive derivative at every interior point.

[F4] [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws) gives logarithm product laws and strict order.

[F5] [lem-author-2bcd11f9e275-entropy-inverse-branches](item-lem-author-2bcd11f9e275-entropy-inverse-branches) defines the unique inverse values $a_-(t)$ and $a_+(t)$ on the stated ranges.

[F6] [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules) gives the sum, product and chain rules for real functions differentiable at the relevant points, and continuity wherever a function is differentiable.

### Proof

**Goal:** Establish the full Statement.

1.1 The parameter bounds give $0<t<1$ and $t>(1+\varepsilon)\varepsilon^2/(1+\varepsilon^2)>\varepsilon^2$, the last inequality using $\varepsilon>\varepsilon^2$. F1 gives $I(1-\varepsilon)<\varepsilon^2$. In particular $(1+\varepsilon)/I(1-\varepsilon)>(1+\varepsilon)/\varepsilon^2>1+\varepsilon^{-2}$. [given, F1, algebra]

1.2 For $-1<u<1$, set $B(u)=I(1-u)-I(1+u)$; both arguments of $I$ are positive throughout this open interval, and $B(0)=0$. The affine functions $1-u$ and $1+u$ have difference quotients $-1$ and $1$, respectively. By F2 and F6, $B$ is differentiable, hence continuous, on $(-1,1)$ and $B\prime(u)=-\log(1-u)-\log(1+u)$. For $0<u<1$, F4 gives $B\prime(u)=-\log(1-u^2)>0$, since $0<1-u^2<1$ and $\log 1=0$. [F2, F4, F6, algebra]

2.1 The restriction of $B$ to $[0,\varepsilon]$ is continuous, and its derivative is positive at every point of $(0,\varepsilon)$ by step 1.2. F3 therefore gives $B(\varepsilon)>B(0)=0$, so $I(1+\varepsilon)<I(1-\varepsilon)<t$ by step 1.1. F5 gives $I(a_-(t))=I(a_+(t))=t$, with $a_-(t)\in(0,1)$ and $a_+(t)>1$. Since $I$ strictly decreases on $(0,1)$ and strictly increases on $(1,\infty)$ by F2, these inequalities imply $a_-(t)<1-\varepsilon$ and $a_+(t)>1+\varepsilon$. Together with $a_-(t)>0$, these prove both shifted signs and the asserted lower bound; step 1.1 gives the remaining parameter comparison. [F2, F3, F5, step 1.1, step 1.2, algebra] ∎


## From Hamiltonicity and an invariant event to a prescribed cycle

[Open item](item-lem-author-8d6ffb027277-prescribed-cycle-transfer) · level 3


### Statement

Fix $d\ge3$. Along feasible orders $n$, let $G_n$ be uniform on $\Omega_{n,d}$ and let $Q_n$ be a property of graphs on $[n]$ invariant under every vertex relabeling. Assume $\mathbb P(G_n\in Q_n)\to1$ and $\mathbb P(G_n\text{ is Hamiltonian})\to1$. Then for every sufficiently large feasible $n$ and every prescribed candidate Hamiltonian cycle $C_n$ on $[n]$, there exists a simple $d$-regular graph in $Q_n$ containing $C_n$. This is an existence conclusion; it asserts no high probability for containing one fixed cycle.

### Facts & Assumptions

[F1] [lem-author-8d6ffb027277-feasible-regular-orders](item-lem-author-8d6ffb027277-feasible-regular-orders) supplies the unbounded feasible-order set.

[F2] [lem-author-8d6ffb027277-hamilton-cycle-encodings](item-lem-author-8d6ffb027277-hamilton-cycle-encodings) supplies the finite Hamiltonicity event and its cycle witnesses.

[F3] [lem-author-8d6ffb027277-uniform-vertex-relabeling](item-lem-author-8d6ffb027277-uniform-vertex-relabeling) maps any Hamiltonian cycle to any prescribed one and preserves regularity and invariant properties.

[F4] [lem-author-8d6ffb027277-simultaneous-high-probability-events](item-lem-author-8d6ffb027277-simultaneous-high-probability-events) gives positive probability and nonemptiness of the intersection of two events of probability tending to one.

### Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish every assertion of the Statement.

1.1 On the common finite graph space, intersect the event $Q_n$ with the Hamiltonicity event. Both have probability tending to one by hypothesis, so F4 gives an outcome $G$ in their intersection for every sufficiently large feasible $n$. Choose a Hamiltonian cycle $D$ contained in $G$. The cutoff depends on the two probabilities and is independent of the prescribed cycle. [given, F1, F2, F4]

2.1 For any prescribed $C_n$, F3 supplies $\sigma$ with $\sigma D=C_n$. The graph $\sigma G$ is simple and $d$-regular, belongs to $Q_n$ by its relabeling invariance, and contains $C_n$. This proves the existence assertion for every prescribed cycle using the same eventual cutoff. It uses no claim about the frequency of a fixed cycle in the uniform model. [F3, step 1.1] ∎



## Disconnected and bipartite spectral witnesses

[Open item](item-lem-author-bcce21321c2a-regular-spectral-obstructions) · level 3


### Statement

For a labelled simple $d$-regular graph $G$ on $n\ge2$ vertices with $d>0$, let $A$ be its adjacency matrix and write $\rho_0(A)=\|A-(d/n)J\|_{\mathrm{op}}$, where $J$ is the all-ones matrix. A connected component is a maximal set of vertices joined by paths; a component is bipartite if it splits into two disjoint parts with each edge joining different parts. If $G$ is disconnected, or has a bipartite connected component, then $\rho_0(A)=d$. Consequently, for any $0<t<d$, the inequality $\rho_0(A)<t$ excludes both obstructions.

### Statement references

[lem-author-bcce21321c2a-ordered-centered-spectrum](item-lem-author-bcce21321c2a-ordered-centered-spectrum)

[def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning)

[math:def-adjacency-matrix-of-a-finite-simple-graph](https://alphabetamath.cc/item/def-adjacency-matrix-of-a-finite-simple-graph)

[math:def-walks-paths-and-connectedness-in-a-simple-graph](https://alphabetamath.cc/item/def-walks-paths-and-connectedness-in-a-simple-graph)

### Facts & Assumptions

[F1] [lem-author-bcce21321c2a-ordered-centered-spectrum](item-lem-author-bcce21321c2a-ordered-centered-spectrum) identifies $\rho_0(A)$ with the norm of $A$ on $\mathbf1^\perp$. Its proof step 1.1 bounds every adjacency eigenvalue in absolute value by $d$, using a maximum-modulus coordinate of a nonzero eigenvector and the nonnegative row sum $d$.

[F2] [def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning) supplies the labelled simple regular graph and incidence conventions.

[F3] [math:def-adjacency-matrix-of-a-finite-simple-graph](https://alphabetamath.cc/item/def-adjacency-matrix-of-a-finite-simple-graph) defines $A_{vw}$ to be $1$ for an edge and $0$ otherwise; hence $(Ax)_v$ is the sum of $x_w$ over neighbours $w$ of $v$.

[F4] [math:def-walks-paths-and-connectedness-in-a-simple-graph](https://alphabetamath.cc/item/def-walks-paths-and-connectedness-in-a-simple-graph) defines paths, connectedness and connected components.

### Proof

**Given:** The regular graph and either of the stated obstructions.

**Goal:** Exhibit a mean-zero eigenvector of eigenvalue $d$ or $-d$.

1.1 If $C$ is a nonempty proper connected component, its indicator $\mathbf1_C$ satisfies $A\mathbf1_C=d\mathbf1_C$: vertices in $C$ have all $d$ neighbours in $C$, and vertices outside have none in $C$. Thus $x=\mathbf1_C-(|C|/n)\mathbf1$ is nonzero, has coordinate sum zero and satisfies $Ax=dx$. By [F1] this forces $\rho_0(A)\ge d$, while the eigenvalue bound gives the reverse inequality. [F1, F2, F3, F4, given, algebra]

2.1 If a connected component has bipartition $L,R$, counting its edges at each end gives $d|L|=d|R|$. Since $d>0$, $|L|=|R|$. Let $y$ equal $1$ on $L$, $-1$ on $R$ and zero elsewhere. It is nonzero, has coordinate sum zero and satisfies $Ay=-dy$, because every neighbour of a vertex in the component has the opposite sign. Again [F1] forces $\rho_0(A)=d$. Either obstruction therefore contradicts $\rho_0(A)<t<d$, proving the conclusion. [F1, F2, F3, F4, given, algebra] ∎


## Exact normalized spectral threshold transfer

[Open item](item-lem-author-bcce21321c2a-normalized-spectral-thresholds) · level 3


### Statement

Let $A$ be the adjacency matrix of a labelled simple $d$-regular graph on $n\ge2$ vertices, with $d>0$, and let $J$ be the all-ones matrix. Define $\rho_0(A)=\|A-(d/n)J\|_{\mathrm{op}}$ and the normalized centered norm $\alpha(A)=\|A/d-J/n\|_{\mathrm{op}}$. Then $\alpha(A)=\rho_0(A)/d$.

For fixed integer $d\ge1$ and each feasible order $n$, choose an arbitrary probability space $(\Omega_n,\mathcal F_n,\mathbb P_n)$ and a map $\omega\mapsto A_n(\omega)$ into adjacency matrices of labelled simple $d$-regular graphs on $n$ vertices. Assume that $\{\omega\in\Omega_n:\rho_0(A_n(\omega))\ge t\}\in\mathcal F_n$ for every real $t$. For every $\varepsilon>0$, the following are equal events:

$$\{\omega\in\Omega_n:\rho_0(A_n(\omega))\ge2\sqrt{d-1}+\varepsilon\}=\{\omega\in\Omega_n:\alpha(A_n(\omega))\ge2\sqrt{d-1}/d+\varepsilon/d\}.$$

For fixed integer $d\ge3$, convergence to zero of the unnormalized event probabilities for every fixed $\varepsilon>0$ is equivalent to convergence to zero of $\mathbb P_n(\{\omega\in\Omega_n:\alpha(A_n(\omega))\ge2\sqrt{d-1}/d+\delta\})$ for every fixed $\delta>0$. All limits are along feasible orders, with $d$ and the positive excess fixed before the limit. No uniformity over varying $d$ is asserted.

### Statement references

[lem-author-bcce21321c2a-ordered-centered-spectrum](item-lem-author-bcce21321c2a-ordered-centered-spectrum)

[def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)

[math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)

[math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)

### Facts & Assumptions

[F1] [lem-author-bcce21321c2a-ordered-centered-spectrum](item-lem-author-bcce21321c2a-ordered-centered-spectrum) identifies the centered operator norm $\rho_0(A)$ for the stated simple regular adjacency matrices, without a connectedness or nonbipartiteness assumption.

[F2] [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers) defines convergence of event probabilities along feasible regular orders with parameters fixed before the limit.

[F3] [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space) defines the operator norm on a nonzero finite-dimensional inner product space as the maximum of $\|Tx\|$ over unit vectors $x$.

[F4] [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure) defines probability spaces and their measurable events. Here the spaces, graph-valued maps and measurable unnormalized threshold sets are those specified in the statement; no particular graph distribution is assumed.

### Proof

**Given:** The adjacency matrices and positive degree in the statement, and, for the event assertions, the specified probability spaces, maps and measurable threshold sets.

**Goal:** Transfer exact threshold events and their fixed-degree asymptotics.

1.1 On the finite-dimensional vertex inner product space used for both displayed operator norms (over $\mathbb R$ or $\mathbb C$, with the same choice for both), every unit vector $x$ satisfies $(A/d-J/n)x=(1/d)(A-(d/n)J)x$, hence $\|(A/d-J/n)x\|=(1/d)\|(A-(d/n)J)x\|$. Taking maxima over the same unit sphere using [F3] and $d>0$ gives $\alpha(A)=\rho_0(A)/d$, with the centered norm as in [F1]. [F1, F3, given, algebra]

2.1 Apply step 1.1 to $A_n(\omega)$ for each $\omega\in\Omega_n$. Dividing the unnormalized threshold inequality by $d>0$ shows that $\omega$ belongs to its threshold set exactly when it belongs to the displayed normalized threshold set. Thus the sets are equal. The first set is measurable by the given assumption, so the second is also an event and their $\mathbb P_n$ probabilities agree by [F4]. [F4, given, step 1.1, algebra]

3.1 When $d$ is fixed, $\varepsilon\mapsto\delta=\varepsilon/d$ bijects the positive real numbers and preserves independence from $n$. The assertions for every fixed positive excess therefore quantify over the same event families after this substitution. Their probabilities agree for every feasible $n$ by step 2.1, so their convergence assertions agree by [F2]. This proves the equivalence without asserting any estimate uniform over varying $d$. [F2, step 2.1, algebra] ∎



## Simple-model spectral events as conditional pairing counts

[Open item](item-lem-author-bcce21321c2a-simple-spectral-event-counting) · level 3


### Statement

Let $n$ and $d$ be integers with $n\ge2$, $0<d<n$ and $nd$ even. Let $\Omega$ be the uniform labelled pairing space and $S$ its simplicity event. Let $G$ instead denote a uniform element of the nonempty set $\mathcal G_d(n)$. For each $g\in\mathcal G_d(n)$, let $A(g)$ be its adjacency matrix in the vertex order $1,\ldots,n$. For real $t$, put $\mathcal B_t=\{g\in\mathcal G_d(n):\rho_0(A(g))\ge t\}$, where $\rho_0$ is the centered spectral quantity. If $G(\omega)$ is the collapsed pairing graph, then

$$\mathbb P(G\in\mathcal B_t)=\frac{|\mathcal B_t|}{|\mathcal G_d(n)|}=\frac{\mathbb P(\{\omega\in S:G(\omega)\in\mathcal B_t\})}{\mathbb P(S)}.$$

Thus the simple-model spectral event is exactly a conditional pairing event. A theorem already stated for uniform $\mathcal G_d(n)$ can be applied directly; no unconditioned pairing estimate or asymptotic simplicity estimate is needed for that application.

### Statement references

[def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning)

[lem-author-bcce21321c2a-feasible-regular-orders](item-lem-author-bcce21321c2a-feasible-regular-orders)

[lem-author-bcce21321c2a-ordered-centered-spectrum](item-lem-author-bcce21321c2a-ordered-centered-spectrum)

[math:def-adjacency-matrix-of-a-finite-simple-graph](https://alphabetamath.cc/item/def-adjacency-matrix-of-a-finite-simple-graph)

### Facts & Assumptions

[F1] [def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning) gives the uniform finite laws, conditional-probability formula and the constant number $(d!)^n$ of pairings realizing each simple regular graph.

[F2] [lem-author-bcce21321c2a-feasible-regular-orders](item-lem-author-bcce21321c2a-feasible-regular-orders) ensures $\mathcal G_d(n)$ is nonempty and $\mathbb P(S)>0$.

[F3] [lem-author-bcce21321c2a-ordered-centered-spectrum](item-lem-author-bcce21321c2a-ordered-centered-spectrum) defines the centered spectral threshold on each simple graph.

[F4] [math:def-adjacency-matrix-of-a-finite-simple-graph](https://alphabetamath.cc/item/def-adjacency-matrix-of-a-finite-simple-graph) defines $A(g)$ in the fixed vertex order $1,\ldots,n$; its entries are $1$ for edges and $0$ otherwise, so it is a real symmetric adjacency matrix to which [F3] applies.

### Proof

**Given:** The finite spaces, collapse map and real threshold in the statement.

**Goal:** Compute the spectral event probability in the two ensembles.

1.1 The spectral condition defines a subset $\mathcal B_t$ of the finite graph set by [F3] and [F4]. Every subset is an event in its finite uniform space, so its probability is $|\mathcal B_t|/|\mathcal G_d(n)|$. By [F2] the denominator is nonzero. [F1, F2, F3, F4, given]

2.1 Each graph in $\mathcal B_t$ has exactly $(d!)^n$ pairing preimages by [F1], and these preimages are disjoint for distinct graphs. The numerator pairing event therefore contains $|\mathcal B_t|(d!)^n$ outcomes. The event $S$ contains $|\mathcal G_d(n)|(d!)^n$ outcomes. Uniform pairing weights cancel in their probability ratio, giving the claimed equality. The conditional-probability formula applies by [F2]; since the graph law itself is uniform, applying a theorem stated in that law requires no further model transfer estimate. [F1, F2, step 1.1, algebra] ∎


## Expected extreme eigenvalues from finite Gaussian comparison

[Open item](item-lem-author-b9de37ca32a7-expected-extreme-eigenvalues) · level 3


### Statement

Assume the Axiom of Choice. Fix an integer $r\ge1$, put $N=r(r+1)/2$, and let $Z=(Z_{ij})_{1\le i\le j\le r}$ have mutually independent standard normal coordinates on a common probability space. Set $T(z)_{ij}=T(z)_{ji}=z_{ij}$, $Y=T(Z)$, and $S=\{v\in\mathbb R^r:\|v\|_2=1\}$. Use the operator norm on the vertex Hilbert space $\mathbb C^{\{1,\ldots,r\}}$. Define $\lambda_+(Y)=\sup_{v\in S}v^TYv$ and $\lambda_-(Y)=\sup_{v\in S}(-v^TYv)$. These measurable integrable random variables have the same distribution and satisfy $0\le m:=\mathbb E\lambda_+(Y)=\mathbb E\lambda_-(Y)\le2\sqrt r$. Moreover $\|Y\|=\max(\lambda_+(Y),\lambda_-(Y))$.

### Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments)

[lem-author-b9de37ca32a7-quadratic-gaussian-increments](item-lem-author-b9de37ca32a7-quadratic-gaussian-increments)

[def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)

### Facts & Assumptions

[F1] The quadratic and linear comparison processes are centered Gaussian, continuous, and have the required increment ordering. [lem-author-b9de37ca32a7-quadratic-gaussian-increments](item-lem-author-b9de37ca32a7-quadratic-gaussian-increments).

[F2] The sphere comparison applies to continuous Gaussian processes with measurable integrable suprema under Choice. [prop-expander-prereq-gaussian-finite-net-transfer](item-prop-expander-prereq-gaussian-finite-net-transfer), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F3] The operator norm of a real symmetric matrix is characterized by its two-sided quadratic-form order bounds in the vertex Hilbert space; real vectors satisfy Euclidean Cauchy–Schwarz and the Euclidean norm triangle inequality. [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm), [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space), [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm).

[F4] The triangular map satisfies $\|T(z)-T(w)\|\le\sqrt2\|z-w\|_2$, its Gaussian matrix has measurable norm and every even norm moment, and Cauchy–Schwarz for random variables bounds a first absolute moment by the square root of the second moment. [lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments), [math:cor-cauchy-schwarz-for-random-variables](https://alphabetamath.cc/item/cor-cauchy-schwarz-for-random-variables).

[F5] Under Choice, independent normal coordinates stack to a multivariate normal vector with the specified scalar projection laws. Cramér–Wold says that all scalar projection laws determine a Borel probability law in positive finite dimension. [math:lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal](https://alphabetamath.cc/item/lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal), [math:def-multivariate-normal-law](https://alphabetamath.cc/item/def-multivariate-normal-law), [math:thm-cramer-wold-device](https://alphabetamath.cc/item/thm-cramer-wold-device).

[F6] A finite positive-dimensional real vector is Borel measurable exactly when its coordinates are measurable. Under Countable Choice, continuous maps between positive-dimensional Euclidean spaces are Borel measurable, and composition of measurable maps preserves measurability. [math:thm-coordinatewise-measurability-into-r-n](https://alphabetamath.cc/item/thm-coordinatewise-measurability-into-r-n), [math:cor-continuous-functions-are-borel-measurable](https://alphabetamath.cc/item/cor-continuous-functions-are-borel-measurable), [math:thm-composition-with-borel-functions-preserves-measurability](https://alphabetamath.cc/item/thm-composition-with-borel-functions-preserves-measurability).

[F7] A standard real Gaussian coordinate has finite absolute moments, mean zero and second moment one. [prop-expander-prereq-gaussian-entry-moments](item-prop-expander-prereq-gaussian-entry-moments).

[F8] Finite integrable sums have linear expectation, and the nonnegative integral is monotone and homogeneous. [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one), [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral).

[F9] A random element’s law assigns to each measurable target set the probability of its inverse image. Integration against that law gives the expectation of every nonnegative or integrable measurable function of the random element. [math:def-law-or-distribution-of-a-random-element](https://alphabetamath.cc/item/def-law-or-distribution-of-a-random-element), [math:thm-change-of-variables-for-expectation](https://alphabetamath.cc/item/thm-change-of-variables-for-expectation).

### Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish all the stated estimates.

1.1 For a real symmetric matrix $A$, [F3] applied with $b=\|A\|$ gives $|v^TAv|\le\|A\|$ for every real unit $v$. Thus the two signed suprema are finite, since $S$ is nonempty. Put $f_\pm(z)=\sup_{v\in S}(\pm v^TT(z)v)$. For each $v\in S$, [F3] and [F4] give $|v^T(T(z)-T(w))v|\le\sqrt2\|z-w\|_2$. Bounding each signed quadratic value at $z$ by its value at $w$ plus this constant, and taking suprema, gives $f_\pm(z)\le f_\pm(w)+\sqrt2\|z-w\|_2$. Interchanging $z,w$ proves $|f_\pm(z)-f_\pm(w)|\le\sqrt2\|z-w\|_2$. In particular both functions are continuous. [F3, F4, algebra]

1.2 For the comparison vector $g$ in [F1], Cauchy–Schwarz gives $\sup_{v\in S}2v^Tg=2\|g\|_2$: if $g\ne0$ take $v=g/\|g\|_2$, and if $g=0$ every value is zero. The triangle inequality in [F3] gives $|2\|a\|_2-2\|b\|_2|\le2\|a-b\|_2$, so [F6] makes this supremum and its square measurable as functions of the Borel vector $g$. By [F7], each $g_i^2$ is integrable with expectation one. Applying [F8] to the finite sum gives $\mathbb E(2\|g\|_2)^2=4\sum_{i=1}^r\mathbb E g_i^2=4r$. Cauchy–Schwarz in [F4], with the constant one, now gives $\mathbb E(2\|g\|_2)\le2\sqrt r$, establishing integrability of the comparison supremum. [F1, F3, F4, F6, F7, F8, algebra]

2.1 Choice implies Countable Choice by restricting to countable families. The measurable Gaussian coordinates and [F6] therefore make $Z$ a Borel random vector, $f_\pm$ Borel functions, and $\lambda_\pm(Y)=f_\pm(Z)$ measurable real random variables. The absolute-value and squaring functions on $\mathbb R$ are continuous (use $||s|-|t||\le|s-t|$ and $|s^2-t^2|=|s-t||s+t|$), so [F6] also makes their compositions measurable. By [F4], Cauchy–Schwarz applied to $\|Y\|$ and the constant one gives $\mathbb E\|Y\|\le(\mathbb E\|Y\|^2)^{1/2}<\infty$. Since $|\lambda_\pm(Y)|\le\|Y\|$ by step 1.1, monotonicity in [F8] proves integrability of both extreme values. [F4, F6, F8, step 1.1, algebra]

2.2 Fix a realization of $Y$ and put $M=\max(\lambda_+(Y),\lambda_-(Y))$. For any unit $v$, $M\ge\max(v^TYv,-v^TYv)=|v^TYv|\ge0$. Scaling real vectors gives $|x^TYx|\le M\|x\|_2^2$, also when $x=0$. For $u=x+iy$, real symmetry cancels the imaginary cross terms, so $u^*Yu=x^TYx+y^TYy$ and $|u^*Yu|\le M(\|x\|_2^2+\|y\|_2^2)=M\|u\|_2^2$. Thus $-MI\preceq Y\preceq MI$ in [F3], which gives $\|Y\|\le M$. Step 1.1 gives $M\le\|Y\|$, proving equality. [F3, step 1.1, algebra]

3.1 Apply [F2] with its larger-increment process equal to $H_v=2v^Tg$ and its smaller-increment process equal to $Q_v=v^TYv$. The common index sphere has dimension $r\ge1$, centering, continuity and increment ordering hold by [F1], and measurable integrable suprema were verified in steps 2.1 and 1.2. Hence $\mathbb E\lambda_+(Y)\le\mathbb E(2\|g\|_2)\le2\sqrt r$. Also $\lambda_+(Y)\ge e_1^TYe_1=Y_{11}$, whose mean is zero by [F7]. Their difference is an integrable nonnegative random variable by step 2.1 and [F8], so [F8] gives $\mathbb E\lambda_+(Y)\ge0$. [F1, F2, F7, F8, step 2.1, step 1.2, algebra]

4.1 By [F5], $Z\sim N_N(0,I)$ and for every $u\in\mathbb R^N$ the scalar $u^TZ$ has law $N(0,\|u\|_2^2)$. The vector $-Z$ is Borel measurable by [F6], since negation is continuous. Its projection $u^T(-Z)=(-u)^TZ$ has that same scalar law, including $u=0$. Since $N=r(r+1)/2\ge1$ and Choice is assumed, Cramér–Wold in [F5] identifies the Borel laws of $Z$ and $-Z$. For every Borel $B\subseteq\mathbb R$, the set $f_+^{-1}(B)$ is Borel by step 2.1; [F9] therefore gives $\mathbb P(f_+(Z)\in B)=\mathbb P(f_+(-Z)\in B)$. Linearity of $T$ yields $f_+(-z)=f_-(z)$ pointwise. Consequently $\lambda_+(Y)$ and $\lambda_-(Y)$ have the same law. Their integrability from step 2.1 and the expectation formula in [F9], applied to the identity function on $\mathbb R$, give equality of their expectations. Together with steps 2.2 and 3.1 this proves every assertion. [F5, F6, F9, step 2.1, step 2.2, step 3.1, algebra] ∎


## The unnormalized Laplacian needs its own degree deviation

[Open item](item-lem-author-635c380339fd-centered-laplacian) · level 3


### Statement

Use the matrices and graph law in the loop-coupling and degree-envelope lemmas. Define $X=W-p(J-I)$ and $Y=L(W)+pJ-dI$. If $\|X\|\le K\sqrt d$ and every degree has $|d_i-(n-1)p|\le\sqrt{12d\log n}$, then $\|Y\|\le K\sqrt d+\sqrt{12d\log n}$. The same $Y$ is obtained after adding any loops.

### Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the conclusions in the Statement.

[F1] The loop-coupling notation has $W$ real symmetric, $J=\mathbf1\mathbf1^T$, $d=np$, $L(W)=\operatorname{diag}(W\mathbf1)-W$, and loop invariance $L(W+B)=L(W)$ for the added diagonal loops ([lem-author-635c380339fd-loop-coupling](item-lem-author-635c380339fd-loop-coupling)). The simultaneous loop-free degree envelope is supplied by [lem-author-635c380339fd-degree-envelope](item-lem-author-635c380339fd-degree-envelope); the argument below is conditional on the stated degree and adjacency bounds.

[F2] In the finite vertex space, $\|f\|_2^2=\sum_i|f_i|^2$ and $\langle f,Tf\rangle=f^*Tf$ ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)). For real symmetric $T$ and $a\ge0$, $\|T\|\le a$ is equivalent to $-aI\preceq T\preceq aI$; the order is defined by nonnegative quadratic forms, and order inequalities can be added ([prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)).

### Proof

1.1 Put $h_i=d_i-(n-1)p$ and $H=\operatorname{diag}(h_i)$. Since $W\mathbf1=(d_i)_i$ and $d=np$, expansion gives $H-X=\operatorname{diag}(d_i)-(n-1)pI-W+pJ-pI=L(W)+pJ-dI=Y$. [given, F1, algebra]

2.1 Put $m=\sqrt{12d\log n}$. The assumed degree bounds give $-m\le h_i\le m$. Hence for every $f\in\mathbb C^n$, $\langle f,(mI\pm H)f\rangle=\sum_i(m\pm h_i)|f_i|^2\ge0$. By the definition of the order, $-mI\preceq H\preceq mI$. [given, F2, step 1.1, algebra]

3.1 Put $b=K\sqrt d$. The assumed bound $\|X\|\le b$ implies $b\ge0$. The matrix $X=W-p(J-I)$ is real symmetric, so the norm-order equivalence yields $-bI\preceq X\preceq bI$. The same two inequalities give $-bI\preceq -X\preceq bI$, because $bI-X$ and $bI+X$ are positive semidefinite. Adding these bounds to those for $H$ gives $-(m+b)I\preceq H-X\preceq(m+b)I$. The matrix $H-X=Y$ is real symmetric and $m+b\ge0$, so the reverse norm-order implication gives $\|Y\|\le m+b=K\sqrt d+\sqrt{12d\log n}$. [given, F1, F2, step 1.1, step 2.1, algebra]

4.1 Adding diagonal loops leaves $L(W)$ unchanged by [F1], while $p$, $J$ and $d$ remain fixed. Thus it leaves $Y=L(W)+pJ-dI$ unchanged. The bound in step 3.1 retains the separate degree-deviation term; no $O(\sqrt d)$ bound for the unnormalized centered Laplacian is inferred from an adjacency bound alone. [F1, step 3.1] ∎


## A spectral window giving condition number below two

[Open item](item-lem-author-fc0d6c95270f-spectral-window-ratio) · level 3


### Statement

For a connected graph with positive degrees and normalized Laplacian as defined above, suppose $0\le\eta<1/3$ and $|1-\lambda_i|\le\eta$ for $2\le i\le n$. Then $\kappa(G)\le(1+\eta)/(1-\eta)<2$.

### Facts & Assumptions

[F1] The normalized Laplacian has ordered nontrivial eigenvalues $\lambda_2,\ldots,\lambda_n$ and $\kappa(G)=\lambda_n/\lambda_2$ ([def-author-fc0d6c95270f-normalized-laplacian](item-def-author-fc0d6c95270f-normalized-laplacian)).

### Proof

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all stated claims.

1.1 The assumed window gives $\lambda_2\ge1-\eta>0$ and $\lambda_n\le1+\eta$. Dividing nonnegative quantities by the positive lower bound yields $\kappa(G)\le(1+\eta)/(1-\eta)$. [given, F1, algebra]

2.1 Since $1-\eta>0$, the inequality $(1+\eta)/(1-\eta)<2$ is equivalent to $1+\eta<2-2\eta$, or $3\eta<1$, which is assumed. Combining the bounds proves the claim. [given, step 1.1, algebra] ∎



## Friedman spectral expansion in the uniform simple model

[Open item](item-thm-expander-prereq-uniform-regular-spectral-input) · level 4


### Statement

Fix $d\ge3$ and $\varepsilon>0$. For a uniformly sampled labelled simple $d$-regular graph on $n$ vertices, $\mathbb P(\max\{\lambda_2(A),|\lambda_n(A)|\}\ge2\sqrt{d-1}+\varepsilon)\to0$ as $n\to\infty$ along $nd$ even. This includes all nonconstant eigenvalues with multiplicity. It gives a fixed-degree, asymptotic bound, not an exact Ramanujan conclusion.

Here $d$ is an integer, $\varepsilon$ is fixed before the limit, and $n\ge d+1$. The eigenvalues of the adjacency matrix $A$ are ordered $d=\lambda_1\ge\cdots\ge\lambda_n$ with multiplicity. The finite graph space exists by [lem-author-bcce21321c2a-feasible-regular-orders](item-lem-author-bcce21321c2a-feasible-regular-orders), and its relation to conditional pairings is the exact event identity in [lem-author-bcce21321c2a-simple-spectral-event-counting](item-lem-author-bcce21321c2a-simple-spectral-event-counting). The spectral maximum is $\rho_0(A)=\|A-(d/n)J\|_{\mathrm{op}}$ by [lem-author-bcce21321c2a-ordered-centered-spectrum](item-lem-author-bcce21321c2a-ordered-centered-spectrum). In particular extra eigenvalues $d$ from disconnection and $-d$ from a bipartite component are retained, as made explicit in [lem-author-bcce21321c2a-regular-spectral-obstructions](item-lem-author-bcce21321c2a-regular-spectral-obstructions). The equivalent normalized threshold is $2\sqrt{d-1}/d+\varepsilon/d$ by [lem-author-bcce21321c2a-normalized-spectral-thresholds](item-lem-author-bcce21321c2a-normalized-spectral-thresholds), with all asymptotic quantifiers as in [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers).

### External input

Bordenave, Section 1, Theorem 1 (PDF/printed p. 2), explicitly imports the outstanding probabilistic estimate for a uniform member of $\mathcal G_d(n)$ stated above. The preceding definition on that page specifies labelled simple graphs. Its ordered eigenvalues are denoted $\mu_i$ there; replacing that letter by $\lambda_i$ changes no hypothesis or conclusion. The five local intermediate items establish feasibility, ordered deflation, obstruction witnesses, normalization, and exact event/model encoding before this import. They do not prove the probability bound.

Application is direct: the graph law is precisely the uniform simple law by [lem-author-bcce21321c2a-simple-spectral-event-counting](item-lem-author-bcce21321c2a-simple-spectral-event-counting), the spectral event is exactly the source's ordered event by [lem-author-bcce21321c2a-ordered-centered-spectrum](item-lem-author-bcce21321c2a-ordered-centered-spectrum), and the limits keep $d$ and $\varepsilon$ fixed by [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers). Thus Theorem 1 applies without an additional connectedness condition, a permutation-model identification, or any claimed local reconstruction of its proof. The assertion about exceptional eigenvalues follows from [lem-author-bcce21321c2a-regular-spectral-obstructions](item-lem-author-bcce21321c2a-regular-spectral-obstructions), and the normalized version follows from [lem-author-bcce21321c2a-normalized-spectral-thresholds](item-lem-author-bcce21321c2a-normalized-spectral-thresholds). The exact source contract and actual reading limits are recorded in the reference metadata.


## Hamiltonicity of a uniform fixed-degree regular graph

[Open item](item-thm-expander-prereq-regular-hamiltonicity-input) · level 4


### Statement

For each fixed integer $d\ge3$, the probability that a uniformly sampled labelled simple $d$-regular graph is Hamiltonian tends to one as its order grows through feasible values. A Hamiltonian cycle is a spanning cyclic ordering with an edge between every consecutive pair, including the last and first. The result is asymptotic and imposes no chosen Hamiltonian cycle in advance.

### External input

Theorem 1 of Robinson and Wormald is imported under the uniform labelled model and fixed-degree/parity conventions stated immediately above it on page 2. No local proof of this substantial input is claimed. In particular, the perfect-matching concentration estimate (2.1) is not inferred merely from the pairing construction or from the first moment of a cycle count.

### Prerequisite interfaces

[def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning) defines the uniform simple regular graph law and distinguishes it from the unconditioned pairing multigraph.

[def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks) fixes the simple graph and network conventions; the theorem concerns the simple unweighted case.

[def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers) defines the feasible-order high-probability limit; the degree remains fixed.

[lem-author-8d6ffb027277-feasible-regular-orders](item-lem-author-8d6ffb027277-feasible-regular-orders) establishes the exact feasible orders.

[lem-author-8d6ffb027277-hamilton-cycle-encodings](item-lem-author-8d6ffb027277-hamilton-cycle-encodings) establishes the finite Hamilton-cycle event and cycle convention.

[lem-author-8d6ffb027277-uniform-vertex-relabeling](item-lem-author-8d6ffb027277-uniform-vertex-relabeling) establishes the relabeling action preserving the uniform law.

[lem-author-8d6ffb027277-simultaneous-high-probability-events](item-lem-author-8d6ffb027277-simultaneous-high-probability-events) establishes simultaneous high-probability intersections.

[lem-author-8d6ffb027277-prescribed-cycle-transfer](item-lem-author-8d6ffb027277-prescribed-cycle-transfer) establishes the conditional existence transfer to any prescribed cycle.

### Local application

For any relabeling-invariant properties $Q_n$ whose probabilities tend to one in this same fixed-degree model, there is, for every sufficiently large feasible $n$, a graph in $Q_n$ containing any prescribed Hamiltonian cycle on $[n]$. Apply the prescribed-cycle transfer lemma to the imported Hamiltonicity limit and the assumed limit for $Q_n$. This local consequence does not assert that a uniform graph contains a preselected cycle with high probability; invariance of $Q_n$ is essential to the relabeling argument.


## Earlier thresholds with explicit source quantifiers and a fixed-scale deduction

[Open item](item-rem-expander-prereq-earlier-random-thresholds) · level 4


### Statement

Assume countable choice. For an integer $n\ge1$ and a simple graph on $[n]$, write $W$ for its adjacency matrix and let $T=\mathbb R^n/(2\pi\mathbb Z)^n$ have its quotient topology and flat metric $d_T$. Identical unit-coupled Kuramoto oscillators with common intrinsic frequency $\omega\in\mathbb R$ obey $\dot\theta_i=\omega+\sum_j W_{ij}\sin(\theta_j-\theta_i)$ in local real lifts. Their rotating-frame phases $\phi_i(t)=\theta_i(t)-\omega t$ modulo $2\pi$ obey $\dot\phi_i=\sum_j W_{ij}\sin(\phi_j-\phi_i)$. These systems have unique trajectories through each initial phase, defined for all real time. A state $s\in T$ is synchronized when all its coordinates agree modulo $2\pi$. Global synchronization means that, outside a phase-volume-null set of initial states $u$, the rotating-frame trajectory satisfies $d_T(\phi^u(t),s(u))\to0$ for some synchronized state $s(u)$ as $t\to\infty$.

For every fixed $c>0$ and every sequence $0\le p=p(n)\le1$ with $np\ge c(\log n)^2$, simple $G(n,p)$ is globally synchronizing with probability tending to one. This is a local consequence of the independent deterministic criterion and concentration input below, not a reinterpretation of $\gg$ as $\Omega$. Kassabov, Strogatz and Townsend explicitly state $p\gg(\log n)^2/n$.

Separately, define the homogeneous energy on $T$ by $E_W(\phi)=\frac12\sum_{i,j=1}^n W_{ij}(1-\cos(\phi_i-\phi_j))$. A local minimum is a point $q\in T$ for which some open neighbourhood $U$ satisfies $E_W(q)\le E_W(v)$ for every $v\in U$; no strictness is required. Ling, Xu and Bandeira’s Theorem 3.3 states that at $p=32\gamma n^{-1/3}\log n$ with $\gamma\ge1$ and $p\le1$, every local minimum is synchronized, modulo common rotations, with probability at least $1-4\exp(n(\log(100n^{1/3})-2\gamma\log n))-10n^{1-\gamma}$. For each fixed $\gamma>1$ this failure bound tends to zero. This landscape conclusion is kept separate from the trajectory convergence conclusion.

### Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the conclusions in the Statement.

[F1] The graph law, asymptotic quantifiers, and null-set meaning are supplied by [prop-expander-prereq-degree-law-and-dependence](item-prop-expander-prereq-degree-law-and-dependence), [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers) and [def-expander-prereq-phase-volume](item-def-expander-prereq-phase-volume).

[F2] Independent external input: Le, Levina and Vershynin, equation (1.2) and Section 1.4 example 1, give an absolute $K>0$ with $\|W-p(J-I)\|\le K\sqrt{np}$ with probability $1-o(1)$ in the regime used here.

[F3] Independent external input: the published Kassabov–Strogatz–Townsend Theorem 11 gives global synchronization under its three strict norm inequalities, with the positive centered Laplacian $L+pJ-npI$. Their Theorem 13 explicitly uses $\gg$.

[F4] Independent external input: Ling–Xu–Bandeira equation (1.1) defines the energy $E_W$ in the Statement; the periodic-domain discussion and Theorem 3.3 supply the separate local-minimum conclusion and explicit probability bound. This is not a dynamical convergence premise.

[F5] The five local bridges are loop coupling [lem-author-635c380339fd-loop-coupling](item-lem-author-635c380339fd-loop-coupling), simultaneous degree deviations [lem-author-635c380339fd-degree-envelope](item-lem-author-635c380339fd-degree-envelope), the centered-Laplacian bound [lem-author-635c380339fd-centered-laplacian](item-lem-author-635c380339fd-centered-laplacian), the inverse-sine budget [lem-author-635c380339fd-inverse-sine-budget](item-lem-author-635c380339fd-inverse-sine-budget), and the fixed-density budget [lem-author-635c380339fd-fixed-density-budget](item-lem-author-635c380339fd-fixed-density-budget).

[F6] For two events $H,D$ in a common probability space, $\mathbb P(H\cap D)\ge1-\mathbb P(H^c)-\mathbb P(D^c)$ by the finite union bound [math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound).

[F7] The phase torus has the quotient topology, angular charts and flat metric of [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus). Finite real linear combinations of phase-difference cosines are analytic potentials by [def-expander-prereq-periodic-analytic-potentials](item-def-expander-prereq-periodic-analytic-potentials). For symmetric weights and $v(t)=1-\cos t$, [prop-expander-prereq-pair-potential-calculus](item-prop-expander-prereq-pair-potential-calculus) gives $(\nabla E_W)_i=\sum_j W_{ij}\sin(\phi_i-\phi_j)$.

[F8] Under countable choice [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), a smooth potential on the compact flat phase torus has unique complete downward-gradient trajectories [def-expander-prereq-gradient-trajectories](item-def-expander-prereq-gradient-trajectories).

[F9] Common rotations and rotating coordinates $\phi(t)=R_{-\omega t}\theta(t)$ are defined in [def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction). The independent KST model and rotating-frame discussion cited in [F3] use this homogeneous system and the almost-everywhere convergence convention.

### Proof

1.1 By [F7], the energy is smooth and its downward-gradient equation is precisely the displayed rotating-frame system, so [F8] supplies a unique trajectory for all real time through every initial phase. Adding $\omega t$ to every coordinate gives the stated original-frame equation because all phase differences are unchanged; conversely, subtracting $\omega t$ transforms every original-frame solution back. Thus existence and uniqueness transfer to that system too. Periodicity makes $E_W$ independent of lifts. Local minima use the stated quotient topology, and synchronized states and their common rotations agree with the conventions of [F3] and [F4]. [F3, F4, F7, F8, F9]

1.2 Put $d=np$. Let $H$ be the adjacency event in [F2] and $D$ the degree event in [F5], both on the simple-graph probability space. By [F6], $\mathbb P(H\cap D)\ge1-o(1)-2n^{-3}\to1$; independence is not required. Add independent Bernoulli diagonal loops so that the KST network convention applies. The loop and Laplacian bridges give $a\le(K+1)/\sqrt d$ and $b\le K/\sqrt d+\sqrt{12\log n/d}$. [F1, F2, F5, F6]

2.1 For $0<p<1$, the off-diagonal entries $A_{ij}-p$ and $p-W_{ij}$ are nonzero, so $a,b>0$. The fixed-density budget and inverse-sine bridge verify all three inequalities of [F3] eventually, giving global synchronization in the sense of the Statement. Loop removal preserves every trajectory. If $p=1$, the graph is complete: augment it with all loops, so $A=J$ and $L=nI-J$. In Theorem 11 choose an auxiliary parameter $r<1$ tending to 1. Then $a=b=(1-r)/r$; the left side of its third inequality tends to infinity and its right side tends to 1. The other two inequalities hold as well, so the complete graph is globally synchronizing. [F3, F5, step 1.1, step 1.2]

3.1 Theorem 13’s written $\gg$ regime is retained literally. The stronger fixed-positive-constant consequence above is derived instead from Theorem 11 with a separate degree bound and does not assume $\|\Delta L\|=O(\sqrt{np})$. Finally [F4] yields exactly the separate landscape conclusion: for fixed $\gamma>1$, $n(\log(100n^{1/3})-2\gamma\log n)=n(\log100-(2\gamma-1/3)\log n)\to-\infty$ and $n^{1-\gamma}\to0$, so both terms in its failure bound vanish. No inference from unique local minima to almost-everywhere convergence is made. [F2, F3, F4, step 2.1] ∎


## Inward comparison and small-shift limits of entropy roots

[Open item](item-lem-author-2bcd11f9e275-shifted-root-comparisons) · level 4


### Statement

Under $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, put $u=1/\gamma$, $t=(1+\varepsilon)/\gamma$, $c_\pm(\gamma)=a_\pm(u)-1$, $c_-(\gamma,\varepsilon)=a_-(t)-1+\varepsilon$, and $c_+(\gamma,\varepsilon)=a_+(t)-1-\varepsilon$. Then $-1<c_-(\gamma)<c_-(\gamma,\varepsilon)<0<c_+(\gamma,\varepsilon)<c_+(\gamma)$. For each fixed $\gamma>1$, $c_\pm(\gamma,\varepsilon)\to c_\pm(\gamma)$ as $\varepsilon\downarrow0$ within the admissible range.

### Facts & Assumptions

**Given:** The variables and hypotheses of the Statement.

[F1] [lem-author-2bcd11f9e275-logarithmic-tangent-bound](item-lem-author-2bcd11f9e275-logarithmic-tangent-bound) gives $-\log x>I(x)$ for $0<x<1$ and $\log y>I(y)$ for $1<y<e$.

[F2] [lem-author-2bcd11f9e275-entropy-branch-geometry](item-lem-author-2bcd11f9e275-entropy-branch-geometry) gives the strict branch order and $I(e)=1$, where $\log e=1$.

[F3] [lem-author-2bcd11f9e275-entropy-inverse-branches](item-lem-author-2bcd11f9e275-entropy-inverse-branches) gives the continuous inverse functions $a_\pm$ and the shifted solution formulas.

[F4] [lem-author-2bcd11f9e275-shifted-root-signs](item-lem-author-2bcd11f9e275-shifted-root-signs) gives the signs and admissibility of the two shifted solutions.

[F5] [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative) gives monotonicity from a derivative bound on a closed interval.

### Proof

**Goal:** Establish the full Statement.

1.1 Put $x=a_-(u)\in(0,1)$. If $x\le\varepsilon$, then $a_-(t)+\varepsilon>\varepsilon\ge x$. If $x>\varepsilon$, on $[x-\varepsilon,x]$ the derivative of $I(z)-z\log x$ is $\log z-\log x\le0$. Thus $I(x-\varepsilon)\ge I(x)-\varepsilon\log x>(1+\varepsilon)I(x)=t$. Since $I$ strictly decreases on its lower branch, $x-\varepsilon<a_-(t)$, again giving $x<a_-(t)+\varepsilon$. Therefore $c_-(\gamma)<c_-(\gamma,\varepsilon)$. [F1, F2, F5, algebra]

2.1 Put $y=a_+(u)$. Since $u<1=I(e)$, $1<y<e$. On $[y,y+\varepsilon]$ the derivative of $I(z)-z\log y$ is $\log z-\log y\ge0$. Therefore $I(y+\varepsilon)\ge I(y)+\varepsilon\log y>(1+\varepsilon)I(y)=t$. Strict increase on the upper branch gives $a_+(t)<y+\varepsilon$, hence $c_+(\gamma,\varepsilon)<c_+(\gamma)$. Together with F4 and $x>0$ this is the entire strict comparison. [F1, F2, F4, F5, step 1.1, algebra]

3.1 For fixed $\gamma>1$, all sufficiently small positive $\varepsilon$ obey the hypotheses: take $\varepsilon<\min\{1,\gamma-1,(\gamma-1)^{-1/2}\}$. Then $t\to u\in(0,1)$, and continuity of both inverses gives $a_\pm(t)\to a_\pm(u)$. The additive shifts tend to zero, proving both limits. [F3, algebra] ∎


## Extreme-value Lipschitz bounds and centered norm reduction

[Open item](item-lem-author-b9de37ca32a7-centered-extreme-reduction) · level 4


### Statement

Assume the Axiom of Choice. For a real symmetric $r\times r$ matrix $A$, $r\ge1$, define $\lambda_+(A)=\sup_{\|v\|_2=1}v^TAv$ and $\lambda_-(A)=\sup_{\|v\|_2=1}(-v^TAv)$ over real vectors. Use the operator norm on $\mathbb C^{\{1,\ldots,r\}}$ with its Euclidean norm. Put $N=r(r+1)/2$ and define $T:\mathbb R^N\to\mathbb R^{r\times r}$ by $T(z)_{ij}=T(z)_{ji}=z_{ij}$ for $1\le i\le j\le r$. Both functions $z\mapsto\lambda_\pm(T(z))$ are $\sqrt2$-Lipschitz, meaning that their absolute difference at $z,w$ is at most $\sqrt2\|z-w\|_2$.

Let $Z=(Z_{ij})_{i\le j}$ have mutually independent standard normal coordinates on a common probability space $(\Omega,\mathcal F,\mathbb P)$, and put $Y=T(Z)$. Set $m=\mathbb E\lambda_+(Y)=\mathbb E\lambda_-(Y)$ and $W=\max(|\lambda_+(Y)-m|,|\lambda_-(Y)-m|)$. Then $m$ is finite and nonnegative, $0\le\|Y\|\le m+W$, and $W$ has every finite positive even moment.

### Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments)

[lem-author-b9de37ca32a7-expected-extreme-eigenvalues](item-lem-author-b9de37ca32a7-expected-extreme-eigenvalues)

[math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)

[math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)

[math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)

[math:def-standard-real-and-normalized-complex-gaussian-matrix-law](https://alphabetamath.cc/item/def-standard-real-and-normalized-complex-gaussian-matrix-law)

[math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)

[math:def-moments-variance-and-covariance](https://alphabetamath.cc/item/def-moments-variance-and-covariance)

### Facts & Assumptions

[A1] The Axiom of Choice is assumed, as required by both Gaussian suppliers in [F1] and [F2]. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F1] Under Choice, the triangular map satisfies $\|T(z)-T(w)\|\le\sqrt2\|z-w\|_2$, and $\|Y\|$ is measurable with $\mathbb E\|Y\|^{2k}<\infty$ for every integer $k\ge1$. [lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments).

[F2] Under Choice, $\lambda_\pm(Y)$ are measurable integrable real random variables, their expectations have the common finite value $m\ge0$, and $\|Y\|=\max(\lambda_+(Y),\lambda_-(Y))$. [lem-author-b9de37ca32a7-expected-extreme-eigenvalues](item-lem-author-b9de37ca32a7-expected-extreme-eigenvalues).

[F3] Euclidean Cauchy–Schwarz gives $|v^TBv|\le\|v\|_2\|Bv\|_2$ for real $v,B$. The operator norm bounds $\|Bu\|_2\le\|B\|\|u\|_2$, including real vectors viewed in the complex space. [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm), [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm).

[F4] Finite sums, real scalar multiples and absolute values of measurable real-valued functions are measurable. [math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral).

[F5] If $h$ is a nonnegative finite-valued measurable function and $q>0$, then $h^q$ is measurable. [math:lem-real-power-preserves-measurability](https://alphabetamath.cc/item/lem-real-power-preserves-measurability).

[F6] The nonnegative integral is monotone, homogeneous for positive scalars, and additive for two nonnegative measurable functions, even before their finiteness is known. [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral), [math:cor-additivity-of-the-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/cor-additivity-of-the-nonnegative-lebesgue-integral).

[F7] A probability measure satisfies $\mathbb P(\Omega)=1$. A constant $c\ge0$ is the simple measurable function $c\chi_\Omega$; its simple integral is $c\mathbb P(\Omega)$, and its nonnegative Lebesgue integral agrees with that simple integral. [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure), [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function), [math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral).

[F8] Independence of the real coordinates means independence of their generated sigma-algebras. A standard real Gaussian scalar has Lebesgue density $(2\pi)^{-1/2}e^{-x^2/2}$. The Countable Choice hypothesis of the Gaussian-law definition follows from [A1] by restriction to countable families. [math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements), [math:def-standard-real-and-normalized-complex-gaussian-matrix-law](https://alphabetamath.cc/item/def-standard-real-and-normalized-complex-gaussian-matrix-law), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F9] For a nonnegative measurable random variable $X$, $\mathbb EX=\int_\Omega X\,d\mathbb P$, with an extended value allowed; for an integrable real random variable the same integral is its finite expectation and mean. For $p>0$, its $p$th absolute moment is $\mathbb E|X|^p$ when $|X|^p$ is integrable. [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable), [math:def-moments-variance-and-covariance](https://alphabetamath.cc/item/def-moments-variance-and-covariance).

### Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish all the stated estimates.

1.1 For every real unit $v$ and real symmetric $B$, [F3] gives $|v^TBv|\le\|B\|$. Thus the two signed suprema defining $\lambda_\pm(B)$ are finite and satisfy $|\lambda_\pm(B)|\le\|B\|$, because the real unit sphere is nonempty for $r\ge1$. For symmetric $A,B$, each signed quadratic value for $A$ is at most its value for $B$ plus $\|A-B\|$; taking suprema gives $\lambda_\pm(A)\le\lambda_\pm(B)+\|A-B\|$. Interchanging $A,B$ gives $|\lambda_\pm(A)-\lambda_\pm(B)|\le\|A-B\|$. Apply this with $A=T(z)$ and $B=T(w)$ and then use [F1], under [A1], to obtain the stated $\sqrt2$-Lipschitz bounds. [A1, F1, F3, algebra]

2.1 Under [A1], [F2] gives the common finite mean $m\ge0$ and $\|Y\|=m+\max(\lambda_+(Y)-m,\lambda_-(Y)-m)\le m+W$. Also $\|Y\|\ge0$. By step 1.1 and the scalar triangle inequality, $|\lambda_\pm(Y)-m|\le\|Y\|+m$, hence $0\le W\le\|Y\|+m$. [A1, F2, step 1.1, algebra]

3.1 By [F7], constants are simple measurable functions. With the measurability of $\lambda_\pm(Y)$ in [F2], [F4] therefore makes $a=|\lambda_+(Y)-m|$ and $b=|\lambda_-(Y)-m|$ measurable. The identity $W=(a+b+|a-b|)/2$ and [F4] prove that $W$ is measurable. It is finite-valued by step 2.1. For each integer $k\ge1$, [F5] applied with $q=2k>0$ to $W$ and to the nonnegative measurable $\|Y\|$ from [F1] proves measurability of $W^{2k}$ and $\|Y\|^{2k}$. [F1, F2, F4, F5, F7, step 2.1, algebra]

4.1 Fix an integer $k\ge1$. By [F9], expectations of the nonnegative measurable functions below are their nonnegative Lebesgue integrals. The nonnegative constant $C=m^{2k}$ is finite; by [F7], $\mathbb EC=C\mathbb P(\Omega)=C$. Step 2.1 gives $W^{2k}\le(\|Y\|+m)^{2k}\le2^{2k}(\|Y\|^{2k}+C)$: bound a sum of two nonnegative numbers by twice their maximum, raise to the positive integer power, and bound the maximum of the two powers by their sum. All functions here are measurable by step 3.1, [F4] and [F7]. Monotonicity, positive homogeneity and additivity in [F6] give $\mathbb EW^{2k}\le2^{2k}(\mathbb E\|Y\|^{2k}+C)<\infty$ by [F1]. Since $W\ge0$, this finite integral gives its finite $2k$th absolute moment in [F9]. Together with steps 1.1 and 2.1 this proves every assertion. [F1, F4, F6, F7, F9, step 1.1, step 2.1, step 3.1, algebra] ∎


## Uniform spectral control transfers past connectivity

[Open item](item-lem-author-fc0d6c95270f-uniform-spectrum-after-connectivity) · level 4


### Statement

Assume countable choice. Use the independent-label process, its exponential-clock form $H_t$, and $p_0=3\log n/(4n)$, $t_0=-\log(1-p_0)$, $d(t)=(n-1)(1-e^{-t})$. Let $Q$ be any predicate on connected graphs with the deterministic property that $\kappa(G)<2$ implies $Q(G)$. Suppose a constant $C>0$, independent of $n$, and events $E_n$ of probability tending to one satisfy: for every $t\ge t_0$ for which $H_t$ is connected, $\eta(H_t)<C/\sqrt{d(t)}$. Then with probability tending to one, $Q(G(n,m))$ holds simultaneously for every $\tau\le m\le\binom n2$.

### Facts & Assumptions

[F1] Normalized Laplacians and the quantities $\eta$ and $\kappa$ are defined in [def-author-fc0d6c95270f-normalized-laplacian](item-def-author-fc0d6c95270f-normalized-laplacian); a spectral window of width less than $1/3$ implies $\kappa<2$ by [lem-author-fc0d6c95270f-spectral-window-ratio](item-lem-author-fc0d6c95270f-spectral-window-ratio).

[F2] The exponential-clock process has the uniform edge ordering, and a pathwise assertion after its connectivity time transfers to every later edge index ([lem-author-fc0d6c95270f-exponential-process-transfer](item-lem-author-fc0d6c95270f-exponential-process-transfer)).

[F3] With probability tending to one the graph at $p_0$ has an isolated vertex, so the connectivity time is later than $t_0$ ([lem-author-fc0d6c95270f-isolated-vertex-before-onset](item-lem-author-fc0d6c95270f-isolated-vertex-before-onset)).

[F4] A probability measure is a nonnegative countably additive measure of total mass one, and high probability means convergence of event probabilities to one ([math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure), [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)).

[A1] Countable choice is assumed in the sense of [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice); it supplies the hypothesis required to invoke the process-transfer and isolated-vertex results in [F2] and [F3].

### Proof

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all stated claims.

1.1 Under [A1], intersect $E_n$ with the event in [F3] and the probability-one coupling event in [F2]. The complement of this intersection has probability at most the sum of the first two failure probabilities: decompose the union into the first event and the portion of the second outside it, use additivity on these disjoint sets, and then monotonicity. Thus the intersection still has probability tending to one. [A1, F2, F3, F4, algebra]

2.1 On this intersection, the connectivity time $s_\tau$ exceeds $t_0$. For every $t\ge s_\tau$, connectedness persists and the assumed bound applies. Since $p(t)$ is increasing, $d(t)\ge d(t_0)=3(n-1)\log n/(4n)\to\infty$. Therefore, for all sufficiently large $n$, the common upper bound $C/\sqrt{d(t_0)}$ is less than $1/3$, simultaneously for all such $t$. [given, F2, F3, F4, step 1.1, algebra]

3.1 By [F1], every graph on this whole time interval has $\kappa<2$, so the assumed deterministic implication gives $Q(H_t)$. Applying [F2] at every edge arrival proves the single simultaneous assertion for all indices from $\tau$ to $\binom n2$. The intersection already has probability tending to one, which proves the claim. [given, F1, F2, step 1.1, step 2.1] ∎


## Entropy rates, inverse branches and shifted root contracts

[Open item](item-prop-expander-prereq-entropy-root-geometry) · level 5


### Statement

For $a>0$, put $I(a)=a\log a-a+1$. Then $I\prime(a)=\log a$, $I\prime\prime(a)=1/a>0$, $I(1)=0$, $I(a)\to1$ as $a\downarrow0$, and $I(a)\to\infty$ as $a\to\infty$. Its lower inverse branch $a_-:(0,1)\to(0,1)$ and upper inverse branch $a_+:(0,\infty)\to(1,\infty)$ are smooth with $a_\pm\prime(t)=1/\log a_\pm(t)$. In $I(1+c+s)=t$, require $1+c+s>0$ and choose a branch, giving $c=a_\pm(t)-1-s$. Under $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, define $c_\pm(\gamma)=a_\pm(1/\gamma)-1$ and $c_\pm(\gamma,\varepsilon)=a_\pm((1+\varepsilon)/\gamma)-1\mp\varepsilon$. Then $-1<c_-(\gamma)<c_-(\gamma,\varepsilon)<0<c_+(\gamma,\varepsilon)<c_+(\gamma)$. For fixed $\gamma>1$ the shifted roots tend to the unshifted roots as $\varepsilon\downarrow0$. In particular $1+\varepsilon^{-2}<(1+\varepsilon)/I(1-\varepsilon)$. Different parameters or branches cannot be ordered without the corresponding right-hand sides and shifts.

### Facts & Assumptions

**Given:** The variables and hypotheses of the Statement.

[F1] [lem-author-2bcd11f9e275-logarithmic-tangent-bound](item-lem-author-2bcd11f9e275-logarithmic-tangent-bound) proves the elementary logarithmic and entropy inequalities.

[F2] [lem-author-2bcd11f9e275-entropy-branch-geometry](item-lem-author-2bcd11f9e275-entropy-branch-geometry) proves the derivatives, endpoint limits, monotone ranges and unique branch roots.

[F3] [lem-author-2bcd11f9e275-entropy-inverse-branches](item-lem-author-2bcd11f9e275-entropy-inverse-branches) proves smooth inverse branches, their derivatives, and every shifted solution formula.

[F4] [lem-author-2bcd11f9e275-shifted-root-signs](item-lem-author-2bcd11f9e275-shifted-root-signs) proves the parameter-specific admissibility, signs and displayed scalar bound.

[F5] [lem-author-2bcd11f9e275-shifted-root-comparisons](item-lem-author-2bcd11f9e275-shifted-root-comparisons) proves the inward comparisons and the fixed-parameter small-shift limits.

### Proof

**Goal:** Establish the full Statement.

1.1 The endpoint and derivative assertions are F2. F3 supplies the inverse-branch definitions, their smoothness, and the expression for all shifted roots, with the positive logarithm domain explicitly required. F1 supplies the inequalities underlying the parameter-specific estimates. [F1, F2, F3]

2.1 For the stated $\gamma,\varepsilon$, F4 proves $0<(1+\varepsilon)/\gamma<1$, both shifted signs and the scalar bound. Substitute $s=-\varepsilon$ on the lower branch and $s=\varepsilon$ on the upper branch in F3. F5 then supplies the full strict ordering and both limits. No ordering for an unchosen branch or unrelated right-hand side has been assumed. [F3, F4, F5, step 1.1] ∎


## An independent symmetric-Gaussian norm moment input

[Open item](item-thm-expander-prereq-gaussian-wigner-moment-input) · level 5


### Statement

Assume the Axiom of Choice. Let $Y$ be a real symmetric $r\times r$ matrix, $r\ge1$, whose entries on one triangular half including the diagonal are independent $N(0,1)$ variables. Mirrored entries coincide and the diagonal variance is one. With the vertex Hilbert-space operator norm, for every integer $\ell\ge2$,

$$(\mathbb E\|Y\|^{2\ell})^{1/(2\ell)}\le2\sqrt r+2\sqrt{2\ell}.$$

Moreover,

$$(\mathbb E\operatorname{Tr}(Y^{2\ell}))^{1/(2\ell)}\le r^{1/(2\ell)}(2\sqrt r+2\sqrt{2\ell}).$$

### Facts & Assumptions

[F1] The triangular realization has finite moments, the extreme values have common mean $0\le m\le2\sqrt r$, and the centered reduction gives $\|Y\|\le m+W$, where $W=\max(|\lambda_+-m|,|\lambda_--m|)$. [lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments), [lem-author-b9de37ca32a7-expected-extreme-eigenvalues](item-lem-author-b9de37ca32a7-expected-extreme-eigenvalues), [lem-author-b9de37ca32a7-centered-extreme-reduction](item-lem-author-b9de37ca32a7-centered-extreme-reduction).

[F2] Minkowski on a probability space gives the triangle inequality for the norm $\|X\|_{2\ell}=(\mathbb E|X|^{2\ell})^{1/(2\ell)}$; the nonnegative integral is monotone. [math:thm-minkowski-inequality-for-integrals](https://alphabetamath.cc/item/thm-minkowski-inequality-for-integrals), [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral).

[F3] The even trace moment is bounded by the corresponding operator-norm moment times $r^{1/(2\ell)}$. [lem-author-b9de37ca32a7-even-trace-transfer](item-lem-author-b9de37ca32a7-even-trace-transfer).

[F4] The specialized Gaussian concentration estimate in External input gives $\mathbb E W^{2\ell}\le\ell!4^{\ell+1}\le(2\sqrt{2\ell})^{2\ell}$ for this same triangular Gaussian matrix and every integer $\ell\ge2$.

### External input

For this same real symmetric variance-one triangular Gaussian matrix, set $S=\{v\in\mathbb R^r:\|v\|_2=1\}$. With $\lambda_+=\sup_{v\in S}v^TYv$ and $\lambda_-=-\inf_{v\in S}v^TYv$, Bandeira and van Handel prove the following Gaussian-concentration estimate in the proof of Lemma 2.2 (printed/PDF p. 7): for every integer $p\ge2$, $\mathbb E\max(|\lambda_+-\mathbb E\lambda_+|^{2p},|\lambda_--\mathbb E\lambda_-|^{2p})\le p!4^{p+1}\le(2\sqrt{2p})^{2p}$. This specialized estimate is imported. No local proof of Gaussian concentration is asserted.

### Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish all the stated estimates.

1.1 The upper-triangular formulation is the same law as the source lower-triangular formulation: reflection merely relabels independent coordinates and leaves the diagonal standard normal. The five local preparatory lemmas fix this realization, the quadratic-process increment comparison and mean, the centered maximum reduction, and the trace transfer. By [F1], the two extreme means both equal $m$. Consequently the imported estimate in External input applies with $p=\ell$ to precisely $W$, and gives $\|W\|_{2\ell}\le2\sqrt{2\ell}$. [F1, F4, given]

2.1 The pointwise bound $0\le\|Y\|\le m+W$, monotonicity, and Minkowski in [F2] give $(\mathbb E\|Y\|^{2\ell})^{1/(2\ell)}\le\|m+W\|_{2\ell}\le m+\|W\|_{2\ell}\le2\sqrt r+2\sqrt{2\ell}$. All moments used are finite by [F1]. Applying [F3] gives the stated trace bound with the factor $r^{1/(2\ell)}$. [F1, F2, F3, step 1.1, algebra] ∎

### Source notes

The five intermediate items are local proofs, preceding this remaining external import. Their mean comparison follows the method of Lemma 2.2, using the already authored finite-net supplier; the concentration display is explicitly retained as an external premise. Read Lemma 2.2 and its complete two-page proof, checked its variance-one diagonal convention and the following trace use, and inspected the corresponding PDF images. The cited general concentration theorems were not read. No claim of a wholly local concentration proof or independent review is made.


## Simultaneous global synchronization from connectivity

[Open item](item-thm-expander-prereq-synchronization-hitting-time-input) · level 5


### Statement

Assume countable choice. In the uniform random edge-addition process on $n\ge2$ vertices, let $\tau$ be the first index at which $G(n,m)$ is connected. With probability tending to one as $n\to\infty$, every graph $G(n,m)$ with $\tau\le m\le\binom n2$ is simultaneously globally synchronizing. This is one event controlling all later indices.

Here phases belong to $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$. For a simple graph with adjacency $A$, globally synchronizing means that, for almost every initial phase with respect to normalized phase volume, the unit-coupling homogeneous Kuramoto solution $\dot\theta_i=\sum_jA_{ij}\sin(\theta_j-\theta_i)$ converges in $T_V$ to a configuration in which all phases agree. The graph probability and initial-phase measure are separate; the simultaneous assertion is about graphs with this almost-everywhere deterministic property.

### Facts & Assumptions

[F1] The edge process and high-probability convention are those of [def-expander-prereq-edge-order-process-coupling](item-def-expander-prereq-edge-order-process-coupling) and [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers). Its exponential-clock form and all-index transfer are given by [lem-author-fc0d6c95270f-exponential-process-transfer](item-lem-author-fc0d6c95270f-exponential-process-transfer).

[F2] Phase configurations and normalized phase volume are defined in [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus) and [def-expander-prereq-phase-volume](item-def-expander-prereq-phase-volume). Smooth periodic potentials have complete unique trajectories under countable choice by [def-expander-prereq-gradient-trajectories](item-def-expander-prereq-gradient-trajectories) and [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice).

[F3] Hoffman–Kahle–Paquette, Theorem 6.1 at $k=1$, $\delta=1/4$, gives a constant $C>0$ and a single event of probability tending to one on which, for every $t\ge t_0$ with $p(t_0)=3\log n/(4n)$, the normalized-Laplacian eigenvalues after deletion of isolated vertices satisfy $\max_{i>1}|1-\lambda_i|<C/\sqrt{(n-1)p(t)}$. At every connected time no vertices are deleted. This is the first exact external input recorded below.

[F4] McRae, Theorem 3.4, states that a graph with positive degrees and $\lambda_2(L)>0$ is globally synchronizing whenever its normalized nonzero Laplacian condition number is less than two. Its model is the phase model above with a positive global coupling constant; take that constant equal to one. This is the second exact external input recorded below.

[F5] The normalized-Laplacian definitions and connectedness criteria are supplied by [def-author-fc0d6c95270f-normalized-laplacian](item-def-author-fc0d6c95270f-normalized-laplacian) and [prop-expander-prereq-laplacian-support-kernel](item-prop-expander-prereq-laplacian-support-kernel). The local transfer lemma [lem-author-fc0d6c95270f-uniform-spectrum-after-connectivity](item-lem-author-fc0d6c95270f-uniform-spectrum-after-connectivity) combines a uniform connected-time spectral event with a deterministic condition-number criterion.

[F6] Sine and cosine are $2\pi$-periodic, satisfy $\sin\prime t=\cos t$ and $\cos\prime t=-\sin t$, and satisfy $e^{-it}=\overline{e^{it}}=\cos t-i\sin t$; finite sums may be differentiated termwise ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)). Repeated differentiation therefore gives continuous derivatives of every order for each cosine of an angular coordinate difference.

### Proof

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all stated claims.

1.1 For each fixed graph, put $U(\theta)=\frac12\sum_{i,j}A_{ij}(1-\cos(\theta_i-\theta_j))$. By [F6], this finite sum is periodic in every angular coordinate and has continuous derivatives of every order, so it defines a smooth potential on the phase torus of [F2]. Differentiating the two ordered contributions for each edge, using $A_{ij}=A_{ji}$ and the oddness of sine, gives $-\partial_iU=\sum_jA_{ij}\sin(\theta_j-\theta_i)$. Oddness follows from $e^{-it}=\overline{e^{it}}$ in the phasor identities of [F6]. Thus [F2] gives the complete unique trajectories used in the statement. Its phase-volume convention is normalized Lebesgue volume on a fundamental angular box, the almost-everywhere phase convention in [F4]. [F2, F6, algebra]

2.1 Set $Q(G)$ to mean the global-synchronization property just specified for a connected graph. Such a graph has positive degrees. By [F5], its unnormalized Laplacian has a single zero eigenvalue and all others positive, so $\lambda_2(L)>0$. Therefore [F4] gives the deterministic implication $\kappa(G)<2\Rightarrow Q(G)$ with every hypothesis satisfied. [F4, F5, step 1.1]

3.1 In the exponential-clock coupling of [F1], apply [F3] with $\delta=1/4$. At every connected time after $t_0$ this is the required bound on $\eta(H_t)$ for the full normalized Laplacian of [F5]. The event controls all such times together, rather than just any fixed time. Thus the hypotheses of the local uniform-spectrum transfer in [F5] hold for the predicate in step 2.1. [F1, F3, F5, step 2.1]

4.1 The transfer lemma now gives, with probability tending to one, $Q(G(n,m))$ for every index from $\tau$ through $\binom n2$ simultaneously. Each $Q$ is the deterministic almost-everywhere phase property, so this event is precisely the graph event asserted in the statement. [F1, F5, step 3.1] ∎

### External input

The two imported premises are exactly the uniform normalized-spectrum result in [F3] and the deterministic synchronization criterion in [F4]. Their complete source contracts appear in the metadata. The process coupling, the pre-onset isolated-vertex estimate, the spectral-window arithmetic and the all-index application are local arguments.

### Source notes

The simultaneous hitting-time result was established by Jain, Mizgerd and Sawhney in Theorem 1.2 of [The random graph process is globally synchronizing](https://arxiv.org/pdf/2501.12205v1). Their original proof uses the defective-expander criterion of Theorem 1.6 and its random-process application in Sections 2–3. This citation records historical attribution; it is not a premise of the proof above.

The independent normalized-Laplacian composition above follows the route identified by McRae in Section 3.4.2; his deterministic argument is in Section 6.1. It combines the Hoffman–Kahle–Paquette spectral input with McRae's synchronization criterion and the local transfer lemmas. This does not describe the method used by Jain, Mizgerd and Sawhney.


## Extremal degrees at a fixed logarithmic mean

[Open item](item-prop-expander-prereq-logarithmic-extreme-degrees) · level 6


### Statement

Fix $\gamma>1$ and let $p=\gamma\log n/n$. For all sufficiently large integers $n$, let $G(n,p)$ be the random simple graph on $[n]=\{1,\ldots,n\}$ whose distinct possible edges occur independently with probability $p$. Write $d(v)$ for the number of edges incident to $v$, and let $d_{\min}=\min_v d(v)$ and $d_{\max}=\max_v d(v)$. Let $I(a)=a\log a-a+1$ for $a>0$, and let $a_-\in(0,1)$ and $a_+>1$ be the unique solutions of $\gamma I(a)=1$. Then $d_{\min}/(pn)\to a_-$ and $d_{\max}/(pn)\to a_+$ in probability as $n\to\infty$: for each $\varepsilon>0$, the probability that either normalized degree differs from its stated limit by more than $\varepsilon$ tends to zero.

### Facts & Assumptions

[F1] In $G(n,p)$ the edge indicators are independent Bernoulli variables. Each degree has law $\operatorname{Bin}(n-1,p)$; for distinct $u,v$, $d(u)=A_{uv}+R_u$ and $d(v)=A_{uv}+R_v$, where $A_{uv},R_u,R_v$ are independent, $A_{uv}$ is Bernoulli$(p)$ and each residual degree is $\operatorname{Bin}(n-2,p)$ ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph), [prop-expander-prereq-degree-law-and-dependence](item-prop-expander-prereq-degree-law-and-dependence)).

[F2] For $X\sim\operatorname{Bin}(N,p)$, $\mathbb P(X=k)=\binom Nk p^k(1-p)^{N-k}$ for $0\le k\le N$. In particular the probability envelope in [prop-expander-prereq-binomial-exponential-envelope](item-prop-expander-prereq-binomial-exponential-envelope) applies; the exact mass formula also permits adjacent masses to be compared ([math:lem-binomial-count-law](https://alphabetamath.cc/item/lem-binomial-count-law)).

[F3] Stirling's formula is $k!\sim\sqrt{2\pi k}(k/e)^k$ as $k\to\infty$ ([math:thm-real-stirling-formula](https://alphabetamath.cc/item/thm-real-stirling-formula)).

[F4] $I$ is strictly decreasing on $(0,1)$ and strictly increasing on $(1,\infty)$, with the two stated roots for $\gamma>1$ ([prop-expander-prereq-entropy-root-geometry](item-prop-expander-prereq-entropy-root-geometry)).

[F5] For a finite real random variable $Y$ and $t>0$, $\mathbb P(|Y-\mathbb EY|\ge t)\le\operatorname{Var}(Y)/t^2$; variance expands as the sum of pairwise covariances ([math:thm-chebyshev-inequality](https://alphabetamath.cc/item/thm-chebyshev-inequality), [math:lem-variance-and-covariance-identities-for-random-variables](https://alphabetamath.cc/item/lem-variance-and-covariance-identities-for-random-variables)).

[F6] The logarithm has derivative $1/x$ on $(0,\infty)$ ([math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral)). For positive $x,y$, $\log(xy)=\log x+\log y$ and $\log(x/y)=\log x-\log y$ ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)).

[F7] For any finite family of events $E_1,\ldots,E_m$ in one probability space, $\mathbb P(\bigcup_{i=1}^m E_i)\le\sum_{i=1}^m\mathbb P(E_i)$ ([math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound)).

### Proof

**Given:** The graph sequence and fixed $\gamma>1$ in the Statement. Put $\mu=np=\gamma\log n$.

**Goal:** Prove convergence in probability of both extreme degrees to the stated roots.

1.1 Fix $a>0$, let $k=\lfloor a\mu\rfloor$, and let $N=n-1$ or $n-2$. For sufficiently large $n$, $1\le k<N$. By [F2] and the logarithm laws in [F6], the logarithm of the mass at $k$ is $\sum_{j=0}^{k-1}\log(N-j)+k\log p-\log(k!)+(N-k)\log(1-p)$. Since $k=O(\log n)$, [F6] gives $\sum_{j=0}^{k-1}\log(N-j)=k\log N+O(k^2/N)$ and $(N-k)\log(1-p)=-Np+O(kp+Np^2)$. By [F3], $\log(k!)=k\log k-k+O(\log k)$. Thus the log mass is $-\mu I(a)+o(\log n)$, because $Np=\mu+o(1)$ and $k/\mu\to a$. Consequently this mass is $n^{-\gamma I(a)+o(1)}$. The same conclusion holds if $k$ is changed by a bounded integer amount. [F2, F3, F6, algebra]

2.1 For $X\sim\operatorname{Bin}(n-1,p)$, [F2] gives $\mathbb P(X=j-1)/\mathbb P(X=j)=j(1-p)/((n-j)p)$ for $1\le j\le n-1$. If $0<a<1$, this ratio is at most a fixed $\rho<1$ for all $j\le\lfloor a\mu\rfloor$ and all sufficiently large $n$. If $a>1$, the reciprocal ratio $\mathbb P(X=j+1)/\mathbb P(X=j)$ is at most a fixed $\rho<1$ for all $j\ge\lfloor a\mu\rfloor$ with $j<n-1$. Summing the corresponding finite geometric bounds and using step 1.1 shows that each respective lower or upper tail is at most $n^{-\gamma I(a)+o(1)}$. If $a<a_-$ or $a>a_+$, [F4] makes $\gamma I(a)>1$; the union bound [F7] over the $n$ vertices then makes the probability of a degree in that respective tail tend to zero. [F1, F2, F4, F7, step 1.1, algebra]

2.2 Fix $a>0$ with $\gamma I(a)<1$, and set $k=\lfloor a\mu\rfloor$. Let $Z$ count vertices of degree exactly $k$, and write $q=\mathbb P(d(v)=k)$. By step 1.1, $\mathbb EZ=nq=n^{1-\gamma I(a)+o(1)}\to\infty$. For distinct $u,v$, let $b_j=\mathbb P(R_u=j)$ and put $r=b_{k-1}/b_k$. The mass formula gives $r=k(1-p)/((n-1-k)p)\to a$. By the independent shared-edge decomposition in [F1], $q=b_k((1-p)+pr)$ and $\mathbb P(d(u)=k,d(v)=k)=b_k^2((1-p)+pr^2)$. Hence the ratio of this joint probability to $q^2$ is $1+p(1-p)(r-1)^2/((1-p)+pr)^2=1+O(p)=1+o(1)$. Expanding the variance using [F5] yields $\operatorname{Var}(Z)/(\mathbb EZ)^2\le 1/(nq)+o(1)\to0$. Chebyshev's inequality therefore gives $\mathbb P(Z=0)\to0$. [F1, F2, F5, step 1.1, algebra]

3.1 Given $\varepsilon>0$, choose $b_-,c_-,b_+,c_+$ with $0<b_-<a_-<c_-<1<c_+<a_+<b_+$, all within $\varepsilon$ of their respective roots. By [F4], the outer choices have $\gamma I>1$ and the inner choices have $\gamma I<1$. Step 2.1 excludes degrees at or below $\lfloor b_-\mu\rfloor$ and at or above $\lfloor b_+\mu\rfloor$ with probability tending to one. Step 2.2 supplies vertices of degrees $\lfloor c_-\mu\rfloor$ and $\lfloor c_+\mu\rfloor$ with probability tending to one. Since $\mu\to\infty$, the floor errors divided by $\mu$ vanish. By [F7], these four bounds hold simultaneously with probability tending to one and bracket $d_{\min}/\mu$ and $d_{\max}/\mu$ within $\varepsilon$ of their respective roots with probability tending to one, proving both asserted convergences. [F4, F7, step 2.1, step 2.2, algebra] ∎
