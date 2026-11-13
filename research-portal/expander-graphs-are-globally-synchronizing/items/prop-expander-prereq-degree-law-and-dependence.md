---
id: prop-expander-prereq-degree-law-and-dependence
kind: proposition
title: Single-vertex degree laws and the shared-edge dependence
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-erdos-renyi-random-graph
  - math:def-finite-simple-graph
  - math:def-bernoulli-and-binomial-random-variables
  - math:def-independence-of-finite-random-variables
  - math:lem-bernoulli-and-binomial-mean-and-variance
  - math:def-variance-and-covariance
  - math:lem-variance-and-covariance-identities-for-random-variables
  - math:cor-covariance-vanishes-under-independence
dependency_roles:
  math:def-erdos-renyi-random-graph: mathematical-premise
  math:def-finite-simple-graph: mathematical-premise
  math:def-bernoulli-and-binomial-random-variables: mathematical-premise
  math:def-independence-of-finite-random-variables: mathematical-premise
  math:lem-bernoulli-and-binomial-mean-and-variance: mathematical-premise
  math:def-variance-and-covariance: mathematical-premise
  math:lem-variance-and-covariance-identities-for-random-variables: mathematical-premise
  math:cor-covariance-vanishes-under-independence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $n\geq 1$ and $p\in[0,1]$, and let $G(n,p)$ be the simple graph on $[n]$ whose possible edges occur independently with probability $p$. Write $A_{uv}=A_{vu}$ for the indicator that the edge $\{u,v\}$ occurs, and define the degree $d(u)=\sum_{w\in[n]\setminus\{u\}}A_{uw}$. Then $d(u)$ has law $\operatorname{Bin}(n-1,p)$ for every vertex $u$.

For distinct vertices $u,v$, put $R_u=\sum_{w\notin\{u,v\}}A_{uw}$ and $R_v=\sum_{w\notin\{u,v\}}A_{vw}$. The variables $A_{uv},R_u,R_v$ are mutually independent, while $d(u)=A_{uv}+R_u$ and $d(v)=A_{uv}+R_v$ share the same edge indicator. Consequently $\operatorname{Cov}(d(u),d(v))=p(1-p)$. Identically distributed degrees need not be independent; a count of vertices of a given degree is not in general binomial.

## Statement references

[[math:def-erdos-renyi-random-graph]]

[[math:def-finite-simple-graph]]

[[math:def-bernoulli-and-binomial-random-variables]]

[[math:def-independence-of-finite-random-variables]]

[[math:def-variance-and-covariance]]

## Facts & Assumptions

**Given:** $n\geq 1$, $p\in[0,1]$, and the graph and edge indicators in the Statement.

**Goal:** Establish the degree law, the independence of the three displayed terms, their covariance, and the qualification about degree counts.

[F1] The graph has one mutually independent Bernoulli$(p)$ indicator for each unordered pair of distinct vertices; a simple graph has no loops. ([[math:def-erdos-renyi-random-graph]], [[math:def-finite-simple-graph]])

[F2] A sum of $k$ mutually independent Bernoulli$(p)$ variables has the binomial$(k,p)$ law, including the empty sum when $k=0$. ([[math:def-bernoulli-and-binomial-random-variables]])

[F3] Mutual independence means that joint probabilities of specified values factor over any subfamily. ([[math:def-independence-of-finite-random-variables]])

[F4] Covariance is the expectation of the product of centered variables and is bilinear on finite linear combinations; independent square-integrable variables have zero covariance. ([[math:def-variance-and-covariance]], [[math:lem-variance-and-covariance-identities-for-random-variables]], [[math:cor-covariance-vanishes-under-independence]])

[F5] A Bernoulli$(p)$ variable has variance $p(1-p)$. ([[math:lem-bernoulli-and-binomial-mean-and-variance]])

## Proof

**Proof technique:** direct.

1.1 For a fixed $u$, its possible incident edges are precisely the $n-1$ distinct pairs $\{u,w\}$ with $w\ne u$. Their indicators are mutually independent Bernoulli$(p)$ variables, so their sum $d(u)$ is binomial$(n-1,p)$, also when $n=1$. [F1, F2]

1.2 For distinct $u,v$, the edge-index sets used by $A_{uv}$, $R_u$ and $R_v$ are pairwise disjoint. For prescribed values of the three variables, sum the joint probabilities over the edge-indicator configurations giving those values. The factorization in [F3] makes each configuration probability a product over the three disjoint blocks; the finite sum consequently factors into the three marginal probabilities. Thus the three variables are mutually independent. This includes $n=2$, when both residual sums are constant zero. The displayed degree decompositions follow by separating the edge $\{u,v\}$ from each incident-edge sum. [F1, F3, algebra]

2.1 All variables are bounded. Bilinearity and the zero covariance of independent variables give $\operatorname{Cov}(d(u),d(v))=\operatorname{Cov}(A_{uv},A_{uv})=\operatorname{Var}(A_{uv})=p(1-p)$. For $0<p<1$ this is nonzero, so the two degrees are not independent. [step 1.2, F4, F5]

3.1 For $n=2$ and $0<p<1$, the number of vertices of degree one is $2A_{12}$: it is zero with probability $1-p$ and two with probability $p$. A binomial law with two trials and success probability $p$ assigns probability $2p(1-p)>0$ to one, and no other binomial law can have exactly this nondegenerate support $\{0,2\}$. Hence even though the degrees have the same marginal law, their degree count need not be binomial. [step 1.1, F1, F2, algebra] ∎
