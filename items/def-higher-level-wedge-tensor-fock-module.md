---
id: def-higher-level-wedge-tensor-fock-module
kind: definition
title: "The higher-level wedge-tensor Fock module"
status: published
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
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
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
$I=\{k_0,\dots,k_0+N-2\}$ and $I^+=I\cup(I+1)=\{k_0,\dots,k_0+N-1\}$; $I$ may be
unbounded below or above), a positive **level** $l$, and
$$\Lambda=\Lambda_{m_1}+\cdots+\Lambda_{m_l}\in P^+,\qquad m_1\ge m_2\ge\cdots\ge m_l,$$
where $m_j\in I^+$ and, if $I$ has lower endpoint $k$, $\Lambda_m=\sum_{k\le a\le m}\delta_a$. When $I$ is unbounded below, $\Lambda_m$ is the ground semi-infinite fundamental weight with the finite-coordinate-difference interpretation below. For $I$ bounded below put
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
$$M_A:=\left(v_{A(m_1,1)}\wedge v_{A(m_1-1,1)}\wedge\cdots\right)\otimes\cdots\otimes\left(v_{A(m_l,l)}\wedge v_{A(m_l-1,l)}\wedge\cdots\right),$$
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
in root dominance for every $j<l$: the difference of the two prefix weights
is a nonnegative integral combination of the simple roots $\alpha_a=\delta_a-\delta_{a+1}$. This is the coordinate-prefix criterion verified below, and
is defined for these weight vectors rather than only for partitions
([[def-dominance-order-on-partitions]]); then $A<B$ whenever $B$ is obtained from $A$ by swapping entries $a<b$
in columns $i<j$. The column reading of a tableau (list the columns from left
to right, each column read top to bottom) gives the passage to partitions and
to the Young-diagram conventions of
[[def-partition-young-diagram-and-conjugate-partition]] and
[[def-young-tableau-standard-tableau-and-shape]]; the removable- and
addable-node notation of [[def-removable-and-addable-nodes-of-a-partition]]
is used for the box moves of a tableau.

The vector $v_\Lambda:=M_{A_\Lambda}$ is called the **vacuum vector**. Weight
bookkeeping, the uniqueness of the monomial of weight $\Lambda$ and the
bijectivity of the column reading are verified below; the column-monomial theorem records the full integral tensor-basis statement. The well-definedness verification here constructs each fundamental factor explicitly without treating a citation to integrability as a wedge-basis theorem.

## Facts & Assumptions

**Given:** The coordinate lattice and dictionary of [[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]], a level $l$ and a dominant weight $\Lambda=\Lambda_{m_1}+\cdots+\Lambda_{m_l}$ with $m_1\ge\cdots\ge m_l$; the sets $\mathrm{Col}^\Lambda,\mathrm{Std}^\Lambda$ with the ground tableau $A_\Lambda$, the monomials $M_A$, the weights $\mathrm{wt}_j$ and $\mathrm{wt}$, and the Bruhat order of the Definition.

[F1] Dictionary and coordinate weights ([[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]]): the weight lattice is $\bigoplus_{a\in I^+}\mathbb Z\delta_a$ with the full central coordinate, the natural highest weight of the fundamental factor is $\delta_k$, the dual highest weight is $-\delta_r$, and the fundamental wedge carries $\delta_k+\cdots+\delta_m$.

[F2] Partitions and dominance ([[def-partition-young-diagram-and-conjugate-partition]], [[def-dominance-order-on-partitions]], [[lem-conjugation-reverses-dominance]]): dominance $\unrhd$ on partitions of a fixed integer is the termwise dominance of prefix sums, and conjugation reverses it.

[F3] Tableau conventions ([[def-young-tableau-standard-tableau-and-shape]], [[def-semistandard-tableau-and-kostka-number]], [[def-removable-and-addable-nodes-of-a-partition]]): standard and semistandard tableaux, shapes and removable/addable nodes in the Young-diagram normalization.

[F4] The dictionary supplies the natural representation and its Hopf action, and the existence and uniqueness of its integrable highest-weight quotients. The elementary ordered-wedge construction is proved in step 1.1, not imported from the definition of integrability.

## Verification

1.1 **Elementary fundamental modules.** On a finite coordinate interval $[k,r]$ let $W_n$ have vectors $w_S$ indexed by $n$-element subsets $S$. Put $D_aw_S=s^{\mathbf1_{a\in S}}w_S$, and let $E_a$ replace $a+1\in S$ by $a\notin S$, while $F_a$ makes the opposite replacement, both with coefficient one and zero otherwise. The toral relations follow from the changed coordinate; $[E_a,F_a]$ is $1$, $-1$ or zero on the three possible $a,a+1$ occupation patterns, exactly the toral fraction. Different-root mixed commutators vanish by the same replacement test. Distant replacements commute; for adjacent roots $E_a^2=F_a^2=0$ and $E_aE_bE_a=F_aF_bF_a=0$, since the last replacement encounters the already occupied endpoint. These are the adjacent Serre relations. Distinct subset weights are separated by the toral operators, and successive raising replacements take any subset to $\{k,\ldots,k+n-1\}$; lowering generates every subset from it. Thus this module is integrable and irreducible, of highest weight $\Lambda_{k+n-1}$, and is the fundamental module in the dictionary. The ordered wedge symbol denotes this model; the primitive antisymmetrizer realizes it integrally, without any assertion that the raw tensor lower chart makes that embedding based. [F1, F4, construct, algebra]

2.1 **Root rows and physical rows.** In column $j$ the root row runs from $k$ to $m_j$, whereas its physical height is $n_j=m_j+1-k$. The monomial therefore starts at $A(m_j,j)$ and descends through $A(m_j-1,j),\ldots,A(k,j)$. Its entries are strictly decreasing in that order and define a nonzero $w_S$ from step 1.1. Physical row $h$ means root row $k+h-1$; its row length is $\#\{j:n_j\ge h\}$. Hence the ordinary partition diagram is the conjugate of $(n_1,\ldots,n_l)$, not of the possibly negative multicharge. Column reading is a bijection to tuples of strictly decreasing entry blocks of these fixed lengths; the standard row inequalities are the corresponding semistandard inequalities. [F2, F3, step 1.1]

3.1 **Weights and the vacuum.** The toral formula in step 1.1 gives precisely $\mathrm{wt}_j(A)$ and their sum on the tensor monomial. The ground column is $\{k,\ldots,m_j\}$, with weight $\Lambda_{m_j}$. Every other column weight differs from its ground by a nonzero element of the positive root cone: repeatedly raise its subset to the initial segment, decreasing its weight difference by a simple root at every step. The tensor top weight can therefore occur only when every factor is its ground vector. Its weight space is one-dimensional, spanned by $v_\Lambda$. This argument uses the explicit finite factor construction, not a yet unproved global-basis inclusion. [F1, step 1.1, step 2.1]

3.2 **The prefix order.** Use root dominance: a weight difference is nonnegative when it is a nonnegative integral combination of $\alpha_a=\delta_a-\delta_{a+1}$; on fixed-total-coordinate weights this agrees with the usual coordinate prefix criterion. Reflexivity and transitivity are immediate; equality of every factor-prefix weight forces equality of each column subset, hence of the column-strict tableaux, proving antisymmetry. If $A$ has $a$ in an earlier column $i$ and $b>a$ in a later column $j$, and $B$ swaps them, the prefix difference $\mathrm{wt}_{\le u}(A)-\mathrm{wt}_{\le u}(B)$ is $\delta_a-\delta_b=\sum_{v=a}^{b-1}\alpha_v$ for $i\le u<j$ and zero otherwise. Thus $A<B$. [F1, F2, step 2.1, algebra]

4.1 **Infinite intervals.** Every fixed tableau differs from its ground only finitely many times. Choose an actual finite lower cut below all those changes, never an undefined $\inf I$ when $I$ is unbounded below, and a finite upper cut above all displayed entries and charges. Appending a common ground tail gives the same action of every root generator in the common subinterval: its adjacent occupation pattern is unchanged. The finite weight differences and all prefix comparisons are unchanged. The compatible union constructs the semi-infinite factors and tensor module; each fixed finite-support calculation is one of the finite computations above. Highest-weight uniqueness and the ground argument remain valid on those finite cuts. [F1, F4, step 1.1, step 2.1, step 3.1, step 3.2]

5.1 **Conclusion.** The module, tableau labels, column monomials, root-coordinate weights and prefix order are well defined, and the vacuum is the unique normalized highest-weight tensor monomial. Ordinary physical partitions use the shifted column heights. All admitted consecutive intervals and multicharges are retained; no raw-chart basedness or additional choice is asserted. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1] ∎

