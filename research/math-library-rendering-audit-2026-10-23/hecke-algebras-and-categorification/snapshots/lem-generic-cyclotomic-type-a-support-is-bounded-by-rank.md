---
id: lem-generic-cyclotomic-type-a-support-is-bounded-by-rank
kind: lemma
title: Generic cyclotomic type-A support is bounded by rank
status: published
origin: session
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
proof_strategy: direct
deps: [def-type-a-affine-presentations-and-charged-cyclotomic-quotients, lem-cyclotomic-hecke-bounded-ordered-monomials-span, def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]
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
The equal-color native dot moves become $\psi x-y\psi=-1$, $\psi y-x\psi=1$ for $\psi=-\tau$; adjacent unequal quadratic polynomials are $\pm(y-x)$. Finite-dimensionality and nilpotence for this specific integer-line quotient are proved below, rather than imported from a general-Cartan corner assertion.

## Proof

1.1 Work over a finite splitting extension for the finitely many minimal polynomials of the commuting polynomial generators in the finite regular module of [F1]. Simultaneous primary decomposition gives joint generalized eigenspaces. On such a weight, the first value is a charge root, because the first cyclotomic polynomial annihilates the module. In the degenerate case connect distinct values differing by $1$; in the nondegenerate case connect distinct nonzero values whose ratio is $\xi$ or $\xi^{-1}$. This defines a graph on the distinct values in each word, with at most $d$ vertices. [F1, given, algebra]

1.2 For a KLR word, form the induced line graph on its distinct colors. If a component contains no charge, move its first occurrence left across all earlier letters. These letters lie in other components, so their color differences exceed $1$; [F2] makes every crossing invertible. The resulting word idempotent is nonzero if the original was, but its first color has exponent zero, so the cyclotomic relation kills it. This contradiction shows that each component contains a charge. A component with at most $d$ vertices is an interval, and every color has distance at most $d-1$ from a charge in that component. [F2, given, algebra]

2.1 The mixed relations give intertwiners $\theta_r=s_r(x_r-x_{r+1})+1$ and $\Theta_r=T_r(1-X_rX_{r+1}^{-1})+1-\xi$. Direct multiplication gives $\theta_r^2=1-(x_r-x_{r+1})^2$ and $\Theta_r^2=(1-\xi X_{r+1}X_r^{-1})(1-\xi X_rX_{r+1}^{-1})$; they interchange the two polynomial generators and commute with the others. For example $s_r(x_r-x_{r+1})=-(x_r-x_{r+1})s_r-2$, which yields the first square identity; the second follows by inserting $T_r^2=(\xi-1)T_r+\xi$ and $T_rX_rT_r=\xi X_{r+1}$. Between values in different graph components these squares have nonzero constant terms, hence are invertible on the generalized weight space. Each intertwiner therefore gives an isomorphism onto the swapped generalized weight space. [F1, step 1.1, algebra]

2.2 **Global dot nilpotence in a finite interval.** At positive level put $N_1=\max_i\lambda_i\ge1$. The first-strand relations give $y_1^{N_1}=0$ in the ENTIRE finite-window quotient, since uncharged first colors already have zero idempotent and every charged exponent is at most $N_1$. Suppose globally $y_a^N=0$. On an equal pair put $x=y_a$, $y=y_{a+1}$, $\delta=x-y$, $\psi=-\tau_a$, and $\Phi=1+\delta\psi$. The mixed identities give $\psi\delta=-\delta\psi-2$, $\psi^2=0$, hence $\Phi^2=1$ and $\Phi x=y\Phi$. Therefore $y^Ne(\nu)=\Phi x^N\Phi e(\nu)=0$. On an unequal pair, multiplying the GLOBAL relation by crossings gives $0=\psi y_a^N\psi e(\nu)=y_{a+1}^NQ_{\nu_a\nu_{a+1}}(y_a,y_{a+1})e(\nu)$. This uses the annihilator in the swapped corner as well, which is justified by its global hypothesis. Distant colors have $Q=1$, giving $y^N=0$. Adjacent colors have $Q=\pm(y-x)$, giving $y^{N+1}=xy^N$; raising that commuting-polynomial identity to the Nth power gives $y^{N(N+1)}=x^Ny^{N^2}=0$. Thus the common global exponent $N_{a+1}=N_a(N_a+1)$ works on EVERY word. Induction proves nilpotence of all dots, without assuming a supported corner is the full algebra or transporting a corner-only annihilator through another color. [F2, step 1.2, algebra]

3.1 Suppose a component contains no charge root. Its earliest occurrence in the word can be moved to the first position by the invertible swaps of step 2.1: every preceding value belongs to a different component. The resulting nonzero weight space has an uncharged first value, contradicting the first cyclotomic relation. Consequently each component contains a charge root. A simple path from that root to any vertex has length at most $d-1$, so the value is an integer within $d-1$ of an integral charge, respectively a power $\xi^a$ with $|a-m_j|\le d-1$. Infinite order of $\xi$ makes the integer labels unique. All spectral values therefore belong to $k$, and their polynomial primary projectors descend to $k$ by the Chinese remainder identity. [step 1.1, step 2.1, algebra]

3.2 **Finite dimension and genuine full-line windows.** Move dots past crossings using the mixed relations. Repeated crossings reduce by the quadratic relation; braid changes to fixed reduced words have corrections with fewer crossings. Adjacent-transposition sorting supplies the symmetric-group word reductions, so induction on crossing count expresses every element as a finite sum of $\psi_wy^ae(\nu)$ for the finitely many permutations w and window words $\nu$. Step 2.2 reduces all exponents to $a_r<N_r$, giving finite-dimensionality of each finite-window content quotient. Only finitely many words satisfy the support bound of step 1.2. Each full-line content presentation uses only its own colors: permutations of a word and every local relation preserve its content. Thus a content wholly within the bound has exactly the same generators AND all relations in every sufficiently large interval; omitted contents have every word idempotent zero by step 1.2. Their whole content algebras are zero because those finitely many idempotents are their identity. Hence the full rank algebra is exactly the finite direct sum of surviving content quotients, not a selected supported corner. Enlarging a window creates only zero entire content algebras and changes no old relation. This proves the claimed equality and finite-dimensionality. [F2, step 1.2, step 2.2, algebra]

4.1 **Hecke nilpotent dots, descent and zero boundaries.** Step 3.1 places every Hecke spectral value in k. On its finite regular module the local differences $y_re(\nu)=(x_r-\nu_r)e(\nu)$ or $(1-\xi^{-\nu_r}X_r)e(\nu)$ are nilpotent by primary decomposition. The finitely many orthogonal commuting projectors sum to one, so their componentwise differences combine to globally commuting nilpotent dots with a common finite exponent in each rank. The primary projector is a polynomial in the generators, defined over k by the Chinese remainder identity; it acts in every representation because the regular-module polynomial annihilators hold as algebra identities. At level zero the first polynomial is1 and every positive Hecke rank is zero; every KLR word has first exponent zero and is likewise killed. Rank zero is k. Together with steps 3.1 and 3.2 this proves all support, finite-dimensionality, nilpotence and window conclusions without a Hecke–KLR isomorphism or a cyclotomic polynomial faithfulness claim. [F1, F2, step 3.1, step 3.2, algebra] ∎
