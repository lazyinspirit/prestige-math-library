---
id: lem-expander-sync-trace-comparison
title: Trace-moment comparison with Gaussian matrices
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-even-walks
  - lem-expander-sync-symmetrized-moments
  - def-expander-sync-gaussian-comparator
  - prop-expander-prereq-random-matrix-walk-expansion
  - prop-expander-prereq-gaussian-entry-moments
  - prop-expander-prereq-symmetric-bernoulli-difference-moments
  - math:def-axiom-of-choice
  - math:def-erdos-renyi-random-graph
  - math:def-adjacency-matrix-of-a-finite-simple-graph
dependency_roles:
  def-expander-sync-even-walks: mathematical-premise
  lem-expander-sync-symmetrized-moments: mathematical-premise
  def-expander-sync-gaussian-comparator: mathematical-premise
  prop-expander-prereq-random-matrix-walk-expansion: mathematical-premise
  prop-expander-prereq-gaussian-entry-moments: mathematical-premise
  prop-expander-prereq-symmetric-bernoulli-difference-moments: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-erdos-renyi-random-graph: mathematical-premise
  math:def-adjacency-matrix-of-a-finite-simple-graph: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 34, proof of Proposition 6.3, trace comparison
      statement: The article gives the even-walk expansion and bounds it above by
        $(2p(1-p))^\ell|\mathcal C_{2\ell}|$; it also compares $|\mathcal
        C_{2\ell}|$ with the Gaussian trace moment.
      hypotheses: The proof concerns the loop-free $G(n,p)$ adjacency matrix, an
        independent copy, $p\in(0,1)$ and a positive integer moment parameter.
      reading_limits: The supplied article text at PDF pp. 33–34 was inspected. This
        citation attributes the original passage; it is not used to prove the
        corrected statement.
dependency_level: 4
---

## Statement

Assume the Axiom of Choice for the adopted Gaussian-law construction. Let $n\geq1$ and $\ell\geq1$ be integers, and let $0\leq p\leq1$. Let $A$ be the adjacency matrix of the loop-free Erdős–Rényi graph $G(n,p)$, let $A'$ be an independent copy, and put $W=A-A'$ and $q=2p(1-p)$. Thus $W$ is symmetric, its diagonal is zero, and its entries above the diagonal are independent differences of independent Bernoulli$(p)$ variables. Let $G$ be the symmetric Gaussian comparator: its entries $G_{ij}$ for $i\leq j$ are mutually independent standard real Gaussian variables, and $G_{ji}=G_{ij}$ for $i<j$.

For $u=(u_1,\ldots,u_{2\ell})\in\{1,\ldots,n\}^{2\ell}$ put $u_{2\ell+1}=u_1$. Let $\mathcal C_{2\ell}$ consist of those ordered tuples with $u_i\ne u_{i+1}$ and with each unordered edge traversed an even number of times. For $u\in\mathcal C_{2\ell}$, let $n_k(u)$ count its distinct unordered edges traversed exactly $k$ times, and put $r(u)=\sum_{k\geq1}n_k(u)$. Rotations and reversals are not identified unless they are equal as tuples. Write $\operatorname{Tr}M=\sum_i M_{ii}$.

Then $1\leq r(u)\leq\ell$ for every $u\in\mathcal C_{2\ell}$, and

$$\mathbb E\operatorname{Tr}W^{2\ell}=\sum_{u\in\mathcal C_{2\ell}}q^{r(u)},\qquad q^\ell|\mathcal C_{2\ell}|\leq\mathbb E\operatorname{Tr}W^{2\ell}\leq q|\mathcal C_{2\ell}|.$$

Moreover, $\mathbb E\operatorname{Tr}G^{2\ell}\geq|\mathcal C_{2\ell}|$. Consequently $\mathbb E\operatorname{Tr}W^{2\ell}\leq q\,\mathbb E\operatorname{Tr}G^{2\ell}$.

## Facts & Assumptions

[F1] The even-walk definition fixes the ordered tuples, their loop-free edges and traversal counts $n_k(u)$ ([[def-expander-sync-even-walks]]).

[F2] The adjacency difference has zero diagonal and off-diagonal positive odd moments zero and positive even moments $q$ ([[lem-expander-sync-symmetrized-moments]]). The differences for distinct unordered edges are mutually independent ([[prop-expander-prereq-symmetric-bernoulli-difference-moments]]).

[F3] The trace of an even power expands over ordered closed walks. For a symmetric matrix with independent triangular entries and finite moments, the expectation of a walk product factors over its distinct unordered endpoint pairs ([[prop-expander-prereq-random-matrix-walk-expansion]]).

[F4] Under Choice, the comparator has mutually independent standard Gaussian triangular entries ([[def-expander-sync-gaussian-comparator]], [[math:def-axiom-of-choice]]). Their odd moments vanish, their positive even moments are at least one, and all their moments exist absolutely ([[prop-expander-prereq-gaussian-entry-moments]]).

## Proof

**Given:** The matrices, parameters and Choice assumption in the Statement.

**Goal:** Establish the walk expansion, corrected bounds and Gaussian comparison.

1.1 By [F3], expand the trace of $W^{2\ell}$ over ordered closed walks and factor each expected walk product by unordered endpoint pair. A walk containing a diagonal step has zero product by [F2]. Among the remaining walks, an odd traversal multiplicity gives a zero factor by [F2]. For a surviving walk every distinct traversed edge contributes $q$, so its contribution is $q^{r(u)}$. These surviving walks are exactly the tuples in $\mathcal C_{2\ell}$ from [F1], including when $q=0$. Finite summation proves the displayed equality. [F1, F2, F3, given]

2.1 Each $u\in\mathcal C_{2\ell}$ has $2\ell$ steps and at least one traversed edge. Every traversed edge has positive even multiplicity, so $2r(u)\leq2\ell$. Also $0\leq q\leq1$, since $p\in[0,1]$. Thus $q^\ell\leq q^{r(u)}\leq q$; these inequalities include $q=0$ because all exponents are positive. Summing and using step 1.1 gives both bounds. [F1, step 1.1, given, algebra]

3.1 Apply [F3] to $G$. By [F4], every walk with an odd multiplicity has zero expected product, while every walk with all multiplicities even has a product of moments at least one. Diagonal steps are allowed in this Gaussian expansion, so its nonnegative surviving terms include every loop-free even tuple in $\mathcal C_{2\ell}$. Therefore $\mathbb E\operatorname{Tr}G^{2\ell}\geq|\mathcal C_{2\ell}|$. Multiplying by $q\geq0$ and using step 2.1 gives the final comparison. The stated expansion and comparisons follow. [F1, F3, F4, step 2.1, algebra] ∎

## Source notes

The article attributes the expansion and comparison to the passage cited above. Its displayed upper bound with $q^\ell$ is reversed term by term: $r(u)\leq\ell$ and $0\leq q\leq1$. The corrected upper bound here uses $q$; it does not imply the article's subsequent $q^{1/2}$ norm estimate with the same power of $q$ after taking a $2\ell$-th root.
