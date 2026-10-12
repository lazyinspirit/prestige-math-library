---
id: def-higher-level-wedge-tensor-fock-module
kind: definition
title: "The higher-level wedge-tensor Fock module"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules,
       def-partition-young-diagram-and-conjugate-partition,
       def-young-tableau-standard-tableau-and-shape,
       def-semistandard-tableau-and-kostka-number,
       def-dominance-order-on-partitions,
       def-removable-and-addable-nodes-of-a-partition,
       lem-conjugation-reverses-dominance,
       def-quantum-weight-module-and-integrability]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Sections 2.1-2.2 (printed pp. 3-8): the diagram of $\\Lambda$, column-strict and standard $\\Lambda$-tableaux, the weights $\\mathrm{wt}_j(A)$, the Bruhat order on $\\mathrm{Col}^\\Lambda$, the monomials $M_A$ and the definition $F(\\Lambda)$; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Section 4.1 (printed pp. 16-18): the same combinatorial set-up in the higher-level Schur-Weyl paper, used to cross-check the column reading; complete passage read."
---

## Definition

Work with the type-$A$ coordinate lattice and the dictionary of
[[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]];
weights are written in the coordinates $\delta_a=\varepsilon_a$.

Fix a set $I$ of consecutive residues (for the finite box model
$I=\{k_0,\dots,k_0+N-1\}$ and $I^+=\{k_0,\dots,k_0+N-2\}$; $I$ may be
unbounded below or above), a positive **level** $l$, and
$$\Lambda=\Lambda_{m_1}+\cdots+\Lambda_{m_l}\in P^+,\qquad m_1\ge m_2\ge\cdots\ge m_l,$$
where $\Lambda_{m}=\delta_1+\delta_2+\cdots+\delta_m$ is the $m$-th fundamental
weight in the coordinate normalization. For $I$ bounded below put
$n_j=m_j+1-\inf(I)$ boxes in column $j$ and $n=\sum_j n_j$; for $I$ unbounded
below use semi-infinite columns with a common finite tail below, as explained
after the weight definition.

The **higher-level wedge-tensor Fock module** is
$$F(\Lambda):=V(\Lambda_{m_1})\otimes V(\Lambda_{m_2})\otimes\cdots\otimes V(\Lambda_{m_l}),$$
the tensor product of the fundamental modules of the dictionary item. When $I$
is bounded below, $V(\Lambda_{m_j})$ is the fundamental integrable highest
weight module of highest weight $\Lambda_{m_j}$ in the library algebra. When
$I$ is unbounded below, $V(\Lambda_{m_j})$ is the semi-infinite wedge
$\Lambda^{m_j+\infty}V$ with $V$ the natural module for the locally finite
type-$A$ algebra on $I$; its basis is the set of normally ordered wedges
$v_{i_1}\wedge v_{i_2}\wedge\cdots$ with $i_1>i_2>\cdots$ and the tail
$i_k=m_j+1-k$ for all sufficiently large $k$.

A **$\Lambda$-tableau** $A$ fills the diagram of $\Lambda$ — the columns
$1,\dots,l$ of heights $n_j$, with rows indexed by $I^+$ — with entries in
$I^+$; it is **column-strict** if in each column the entries strictly increase
from bottom to top and all but finitely many entries of row $i$ equal $i$, and
**standard** if in addition the entries weakly increase from left to right in
each row. Write $\mathrm{Col}^\Lambda$, respectively $\mathrm{Std}^\Lambda$,
for the sets of column-strict, respectively standard $\Lambda$-tableaux, and
$A_\Lambda$ for the **ground-state tableau** with row $i$ filled entirely
with $i$.

For $A\in\mathrm{Col}^\Lambda$ the **column monomial** is
$$M_A:=\left(v_{A(n_1,1)}\wedge v_{A(n_1-1,1)}\wedge\cdots\right)\otimes\cdots\otimes\left(v_{A(n_l,l)}\wedge v_{A(n_l-1,l)}\wedge\cdots\right),$$
with each wedge normally ordered (the entries strictly decrease from top to
bottom inside a column), and
$$\mathrm{wt}_j(A)=\sum_{m_j\ge i\in I^+}\delta_{A(i,j)},\qquad \mathrm{wt}(A)=\mathrm{wt}_1(A)+\cdots+\mathrm{wt}_l(A),\qquad \mathrm{Col}^\Lambda_\alpha=\{A:\mathrm{wt}(A)=\Lambda-\alpha\}$$
for $\alpha\in Q^+$. When a column is semi-infinite, the displayed sum means
its ground fundamental weight $\Lambda_{m_j}$ plus the finite sum of the
coordinate differences $\delta_{A(i,j)}-\delta_i$ over the finitely many
positions where $A$ differs from the ground state, evaluated on each
finite-support coroot or torus input; no divergent infinite coordinate sum is
asserted.

The **Bruhat order** on $\mathrm{Col}^\Lambda$ is defined by $A\le B$ iff
$\mathrm{wt}(A)=\mathrm{wt}(B)$ and
$\mathrm{wt}_1(A)+\cdots+\mathrm{wt}_j(A)\ge\mathrm{wt}_1(B)+\cdots+\mathrm{wt}_j(B)$
in the dominance order of [[def-dominance-order-on-partitions]] for every
$j<l$; then $A<B$ whenever $B$ is obtained from $A$ by swapping entries $a<b$
in columns $i<j$. The column reading of a tableau (list the columns from left
to right, each column read top to bottom) gives the passage to partitions and
to the Young-diagram conventions of
[[def-partition-young-diagram-and-conjugate-partition]] and
[[def-young-tableau-standard-tableau-and-shape]]; the removable- and
addable-node notation of [[def-removable-and-addable-nodes-of-a-partition]]
is used for the box moves of a tableau.

The vector $v_\Lambda:=M_{A_\Lambda}$ is called the **vacuum vector**. Weight
bookkeeping, the uniqueness of the monomial of weight $\Lambda$ and the
bijectivity of the column reading are verified below; no freeness or basis
statement for $F(\Lambda)$ is asserted here.

## Facts & Assumptions

**Given:** The coordinate lattice and dictionary of [[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]], a level $l$ and a dominant weight $\Lambda=\Lambda_{m_1}+\cdots+\Lambda_{m_l}$ with $m_1\ge\cdots\ge m_l$; the sets $\mathrm{Col}^\Lambda,\mathrm{Std}^\Lambda$ with the ground tableau $A_\Lambda$, the monomials $M_A$, the weights $\mathrm{wt}_j$ and $\mathrm{wt}$, and the Bruhat order of the Definition.

[F1] Dictionary and coordinate weights ([[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]]): the weight lattice is $\bigoplus_{a\in I}\mathbb Z\delta_a$ with the full central coordinate, the natural highest weight of the fundamental factor is $\delta_k$, the dual highest weight is $-\delta_r$, and the fundamental wedge carries $\delta_k+\cdots+\delta_m$.

[F2] Partitions and dominance ([[def-partition-young-diagram-and-conjugate-partition]], [[def-dominance-order-on-partitions]], [[lem-conjugation-reverses-dominance]]): dominance $\unrhd$ on partitions of a fixed integer is the termwise dominance of prefix sums, and conjugation reverses it.

[F3] Tableau conventions ([[def-young-tableau-standard-tableau-and-shape]], [[def-semistandard-tableau-and-kostka-number]], [[def-removable-and-addable-nodes-of-a-partition]]): standard and semistandard tableaux, shapes and removable/addable nodes in the Young-diagram normalization.

[F4] Wedge and tensor bases ([[def-quantum-weight-module-and-integrability]]): normally ordered wedges of a fixed number of natural vectors form a basis of the fundamental wedge, with the ground wedge the unique vector of weight $\Lambda_m$; tensor products of weight modules carry the product weights.

## Verification

1.1 **The monomials and the vacuum.** Inside a column the entries strictly increase from bottom to top, so $A(n_j,j)>A(n_j-1,j)>\cdots$ and the displayed wedge is already normally ordered; after the common ground tail below, every factor of $M_A$ is a basis wedge, so $M_A$ is a well-defined basis vector of the corresponding tensor product of fundamental modules. For $A_\Lambda$ the sum defining $\mathrm{wt}_j$ is $\delta_1+\cdots+\delta_{m_j}=\Lambda_{m_j}$, hence $\mathrm{wt}(A_\Lambda)=\Lambda$ and $v_\Lambda=M_{A_\Lambda}$ has weight $\Lambda$. [F1, F4, algebra]

1.2 **Column reading and the partition dictionary.** Reading a column-strict tableau column by column, each column top to bottom, gives its entries as a tuple of strictly decreasing finite blocks (with the common tail) and determines the tableau, so the column reading is injective on $\mathrm{Col}^\Lambda$; reading row by row gives row $i$ of length $\lambda'_i=\#\{j:m_j\ge i\}$, which is the conjugate of the partition $\lambda=(m_1,\dots,m_l)$. By [F2] conjugation reverses dominance, and in the standard case the row inequalities of the Definition are exactly the weak inequalities of a semistandard tableau of [[def-semistandard-tableau-and-kostka-number]]; this is the stated passage to the partition and tableau conventions. [F2, F3, algebra]

1.3 **The Bruhat order is well defined.** If $B$ is obtained from $A$ by swapping entries $a<b$ in columns $i<j$, then $\mathrm{wt}(A)=\mathrm{wt}(B)$, the prefix weights are equal for $j'\le i$ and for $j'\ge j$, and for $i\le j'<j$ the prefix weight of $A$ exceeds that of $B$ by $\delta_b-\delta_a=\delta_{a+1}+\cdots+\delta_b$, which is nonnegative in the dominance order of the coordinate lattice; hence $A<B$ in the order of the Definition. For a general pair $A\le B$ the defining prefix inequalities are those of [F2] applied to the prefix weights, so the order is a partial order on $\mathrm{Col}^\Lambda$. [F1, F2, algebra]

2.1 **Weight of a monomial.** Each wedge factor of the $j$-th tensor factor of $M_A$ has weight equal to the sum of the coordinates of its entries (with the semi-infinite tail contributing its ground coordinates, matched by the ground fundamental weight $\Lambda_{m_j}$), so $M_A$ has weight $\mathrm{wt}(A)$; in particular $M_A$ lies in the $\mathrm{wt}(A)$-weight space of $F(\Lambda)$. [F1, F4, step 1.1]

3.1 **Uniqueness of the $\Lambda$-weight monomial.** Suppose $\mathrm{wt}(A)=\Lambda$; compare with the ground tableau $A_\Lambda$, which also has weight $\Lambda$ by step 1.1. Equality of the two coordinate sums says that the multiset of entries of $A$ equals the multiset of entries of $A_\Lambda$, namely the multiset in which the value $i$ occurs once for each column $j$ with $m_j\ge i$. In the bounded-below case write $S_j$ for the (finite) set of entries of column $j$; column-strictness makes $S_j$ a set of $n_j=m_j+1-\inf(I)$ distinct values, all of them $\le m_1$ because no value above $m_1$ occurs in the ground multiset. For a threshold $t$ count entries at least $t$: the ground multiset contributes $\sum_j\max(m_j-t+1,0)$, so multiset equality gives $\sum_j|S_j\cap[t,\infty)|=\sum_j\max(m_j-t+1,0)$. On the other hand $|S_j\cap[t,\infty)|=n_j-|S_j\cap(-\infty,t)|$ with $|S_j\cap(-\infty,t)|\le t-\inf(I)$, so $|S_j\cap[t,\infty)|\ge\max(m_j-t+1,0)$; summing shows equality for every $t$ and every $j$. Taking $t=m_j+1$ gives $S_j\subseteq(-\infty,m_j]$; taking $t=m_j,m_j-1,\dots,\inf(I)$ successively shows $m_j,m_j-1,\dots,\inf(I)\in S_j$. Hence $S_j=\{\inf(I),\dots,m_j\}$ for every $j$, and since the entries of each column strictly increase bottom to top, the filling of every column is forced to be the ground filling. Thus $A=A_\Lambda$. In the semi-infinite case the same argument is applied after deleting the common tail below $\inf(I)$ (the tail is the same ground tail for $A$ and $A_\Lambda$, and every tableau differs from the ground state in finitely many positions), and in the unbounded-above case the computation is read on the finite lower cuts of the Definition. Therefore the $\Lambda$-weight space of $F(\Lambda)$ is spanned by $v_\Lambda$, and by [F4] it is one-dimensional. [F1, F4, step 1.1, step 2.1]

4.1 **Conclusion.** The module $F(\Lambda)$, its tableau sets, monomials, weights and Bruhat order are well defined; the vacuum $v_\Lambda$ is a nonzero basis vector of the one-dimensional $\Lambda$-weight space, and the column reading is the stated bijection to the partition conventions. No basis, freeness or crystal statement is asserted here; those are supplied by the column-monomial theorem following in this pair. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1] ∎
