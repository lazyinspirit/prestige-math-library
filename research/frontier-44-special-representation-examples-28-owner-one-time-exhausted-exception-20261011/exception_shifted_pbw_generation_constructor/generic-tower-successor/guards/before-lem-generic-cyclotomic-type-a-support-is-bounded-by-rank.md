---
id: lem-generic-cyclotomic-type-a-support-is-bounded-by-rank
kind: lemma
title: Generic cyclotomic type-A support is bounded by rank
status: draft
origin: session
pipeline_run: frontier-44-special-representation-examples-28
proof_strategy: direct
deps: [def-type-a-affine-presentations-and-charged-cyclotomic-quotients, lem-cyclotomic-hecke-bounded-ordered-monomials-span, def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum, lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Brundan and Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras
      url: https://arxiv.org/pdf/0808.2032v4
---

## Statement

Let $k$ have characteristic zero, let $\xi\in k^\times$ have infinite
multiplicative order, and fix a finite integral multicharge
$m_1,\ldots,m_\ell$. Write $S=\{m_j:1\le j\le\ell\}$.
Use the arbitrary-base presentations of
[[def-type-a-affine-presentations-and-charged-cyclotomic-quotients]] to define
$H_d^{\deg}$ by $\prod_j(x_1-m_j)=0$ and $H_d^{\xi}$ by
$\prod_j(X_1-\xi^{m_j})=0$.
For $d>0$, every nonzero joint generalized weight in the regular module has
labels $\nu\in\mathbb Z^d$, with eigenvalues $\nu_r$ respectively
$\xi^{\nu_r}$, and
$$\min_{s\in S}|\nu_r-s|\le d-1.$$
Thus both algebras have finite joint spectral decompositions defined over $k$.

Use the directed line $i\to i+1$ on $\mathbb Z$, with $d_i=1$,
$Q_{i,i+1}(u,v)=v-u$, $Q_{i+1,i}(u,v)=u-v$ and $Q_{ij}=1$ for
$|i-j|>1$. Define the rank-$d$ cyclotomic KLR algebra as the direct sum of its
finite-content presentations, with first-strand exponents
$\lambda_i=\#\{j:m_j=i\}$. Every nonzero word idempotent satisfies the same
bound, so this rank algebra is a finite sum of finite-dimensional graded
content algebras. Any interval containing
$[\min S-d+1,\max S+d-1]$ gives exactly the same rank-$d$ algebra;
enlarging it introduces only zero word idempotents. Rank zero is $k$.
At level zero every positive rank is zero. This lemma supplies support and
finite windows; it asserts no Hecke--KLR isomorphism or basis correspondence.

## Facts & Assumptions

**Given:** The presentations and parameters of the Statement.

[F1] The arbitrary monic cyclotomic Hecke quotients are finite-dimensional by
[[lem-cyclotomic-hecke-bounded-ordered-monomials-span]]. Their mixed and
quadratic relations are those of
[[def-type-a-affine-presentations-and-charged-cyclotomic-quotients]].

[F2] In the KLR presentation, a crossing between distant colors has square
$1$ and interchanges their word idempotents
([[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]).
On any finite color interval, homogeneous cyclotomic content algebras are
finite-dimensional with nilpotent dots
([[lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings]]).

## Proof

1.1 Work over a finite splitting extension for the finitely many minimal polynomials of the commuting polynomial generators in the finite regular module of [F1]. Simultaneous primary decomposition gives joint generalized eigenspaces. On such a weight, the first value is a charge root, because the first cyclotomic polynomial annihilates the module. In the degenerate case connect distinct values differing by $1$; in the nondegenerate case connect distinct nonzero values whose ratio is $\xi$ or $\xi^{-1}$. This defines a graph on the distinct values in each word, with at most $d$ vertices. [F1, given, algebra]

1.2 For a KLR word, form the induced line graph on its distinct colors. If a component contains no charge, move its first occurrence left across all earlier letters. These letters lie in other components, so their color differences exceed $1$; [F2] makes every crossing invertible. The resulting word idempotent is nonzero if the original was, but its first color has exponent zero, so the cyclotomic relation kills it. This contradiction shows that each component contains a charge. A component with at most $d$ vertices is an interval, and every color has distance at most $d-1$ from a charge in that component. [F2, given, algebra]

2.1 The mixed relations give intertwiners $\theta_r=s_r(x_r-x_{r+1})+1$ and $\Theta_r=T_r(1-X_rX_{r+1}^{-1})+1-\xi$. Direct multiplication gives $\theta_r^2=1-(x_r-x_{r+1})^2$ and $\Theta_r^2=(1-\xi X_{r+1}X_r^{-1})(1-\xi X_rX_{r+1}^{-1})$; they interchange the two polynomial generators and commute with the others. For example $s_r(x_r-x_{r+1})=-(x_r-x_{r+1})s_r-2$, which yields the first square identity; the second follows by inserting $T_r^2=(\xi-1)T_r+\xi$ and $T_rX_rT_r=\xi X_{r+1}$. Between values in different graph components these squares have nonzero constant terms, hence are invertible on the generalized weight space. Each intertwiner therefore gives an isomorphism onto the swapped generalized weight space. [F1, step 1.1, algebra]

3.1 Suppose a component contains no charge root. Its earliest occurrence in the word can be moved to the first position by the invertible swaps of step 2.1: every preceding value belongs to a different component. The resulting nonzero weight space has an uncharged first value, contradicting the first cyclotomic relation. Consequently each component contains a charge root. A simple path from that root to any vertex has length at most $d-1$, so the value is an integer within $d-1$ of an integral charge, respectively a power $\xi^a$ with $|a-m_j|\le d-1$. Infinite order of $\xi$ makes the integer labels unique. All spectral values therefore belong to $k$, and their polynomial primary projectors descend to $k$ by the Chinese remainder identity. [step 1.1, step 2.1, algebra]

4.1 Only finitely many words satisfy this bound. In every content presentation the generators and relations use only colors already present in that content, so replacing the full line by a finite interval containing the bound changes none of these presentations. All omitted contents have zero word idempotents by step 1.2. On the finite interval [F2] supplies finite-dimensionality and nilpotent dots, and the finite sum is finite-dimensional. This identifies the full rank algebra with each sufficiently large finite window, including compatibility of larger windows on the same generators. At level zero the first exponent is always zero, killing every positive-rank word; the Hecke polynomial is $1$ and gives the same zero quotient. Rank zero is the ground field by definition. No basis correspondence or Hecke--KLR inverse map has been used. [step 3.1, step 1.2, F1, F2, given] ∎

