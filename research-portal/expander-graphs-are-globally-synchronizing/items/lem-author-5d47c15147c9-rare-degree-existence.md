---
id: lem-author-5d47c15147c9-rare-degree-existence
title: A rare logarithmic degree occurs with probability of its first-moment order
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - prop-expander-prereq-degree-law-and-dependence
  - lem-author-5d47c15147c9-logarithmic-boundary-mass
  - math:lem-binomial-count-law
  - math:def-expectation-on-a-finite-probability-space
dependency_roles:
  prop-expander-prereq-degree-law-and-dependence: mathematical-premise
  lem-author-5d47c15147c9-logarithmic-boundary-mass: mathematical-premise
  math:lem-binomial-count-law: mathematical-premise
  math:def-expectation-on-a-finite-probability-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Fix $\gamma>1$ and $a>0$ with $\gamma I(a)=1$, where $I(a)=a\log a-a+1$. Let $p=\gamma\log n/n$ and $k=a\gamma\log n+O(1)$ be integer. For the loop-free independent-edge graph $G(n,p)$, let $Z$ be the number of vertices of degree exactly $k$, and put $m_n=\mathbb EZ$. Then $m_n=\Theta((\log n)^{-1/2})$, and for all sufficiently large $n$,
$$\frac12m_n\le\mathbb P(Z>0)\le m_n.$$
No independence of the vertex degrees is assumed.

## Facts & Assumptions

[F1] Each degree is $\operatorname{Bin}(n-1,p)$; distinct degrees decompose as $d(u)=A_{uv}+R_u$, $d(v)=A_{uv}+R_v$, with three independent variables, $A_{uv}$ Bernoulli$(p)$ and $R_u,R_v$ binomial$(n-2,p)$ ([[prop-expander-prereq-degree-law-and-dependence]]).

[F2] For fixed $a,\gamma$ and bounded rounding, the binomial atom is $\Theta(n^{-\gamma I(a)}/\sqrt{\log n})$ ([[lem-author-5d47c15147c9-logarithmic-boundary-mass]]); adjacent binomial masses follow from their exact formula ([[math:lem-binomial-count-law]]).

[F3] On the finite graph probability space, expectation is the sum of each value times its outcome probability, and distributes over finite sums ([[math:def-expectation-on-a-finite-probability-space]]).

## Proof

**Given:** The parameters and count $Z$ in the Statement.

**Goal:** Compare the probability of an occurrence with $m_n$.

1.1 Write $q=\mathbb P(d(v)=k)$. By [F1] and [F2], $m_n=nq=\Theta((\log n)^{-1/2})\to0$. Put $b_i=\mathbb P(R_u=i)$ and $r=b_{k-1}/b_k=k(1-p)/((n-1-k)p)$, which tends to $a$. The shared-edge decomposition gives $q=b_k(1-p+pr)$ and $\mathbb P(d(u)=k,d(v)=k)=b_k^2(1-p+pr^2)$. Their ratio is $1+p(1-p)(r-1)^2/(1-p+pr)^2\to1$ and is at most $2$ eventually. [F1, F2, F3, given, algebra]

2.1 For every nonnegative integer $z$, $z-z(z-1)/2\le\mathbf1_{\{z>0\}}\le z$: check $z=0,1,2$ directly and note the left expression is nonpositive for $z\ge3$. Take expectations using [F3]. Step 1.1 bounds the ordered-pair sum $\mathbb E[Z(Z-1)]$ by $2n(n-1)q^2\le2m_n^2$. Therefore $m_n-m_n^2\le\mathbb P(Z>0)\le m_n$. Since $m_n\le1/2$ eventually, the asserted lower bound follows. [F3, step 1.1, algebra] ∎
