---
id: prop-shifted-degrees-and-garnir-exchanges-for-standard-tableaux
kind: proposition
title: "Shifted degrees and Garnir exchanges for standard tableaux"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 36
deps: [def-tableau-domination-order-garnir-tableaux-and-bricks,
       lem-degree-and-codegree-of-standard-tableaux,
       def-graded-specht-module-by-homogeneous-standard-tableaux,
       def-klr-grading-and-diagrammatic-composition,
       def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras,
       def-removable-and-addable-nodes-of-a-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan, Alexander Kleshchev and Weiqiang Wang, Graded Specht modules, arXiv:0901.0218v3, J. reine angew. Math. 655 (2011) 61-87 (complete 23-page article)"
      url: "https://arxiv.org/pdf/0901.0218"
      locator: "Section 3.5, printed pp. 13-15: Props 3.13 and 3.16, Cor 3.14 and Lemma 3.15 with their proofs; Section 3.3-3.4, printed pp. 11-12: Lemmas 3.7 and 3.9 on the vertical swap and the agreement outside the Garnir belt. Complete passages read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 3.3, printed pp. 18-20: the degree, codegree and defect conventions; Section 6.6, printed pp. 29-31: graded branching. Complete passages read."
verification:
  precheck: pass
---

## Statement

In the situation of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]]:

1. If $T\xrightarrow{\,r\,}S$ (i.e. both tableaux are standard, $S=s_rT$, and
$r$ occupies an earlier row-reading node than $r+1$, as in
[[def-tableau-domination-order-garnir-tableaux-and-bricks]]), then
$\deg(S)-\deg(T)=-a_{i_ri_{r+1}}$, where $i_T=(i_1,\dots,i_d)$ and $a$ is the
Cartan matrix of the regime.

2. More generally, if $w_T=s_{r_1}\cdots s_{r_m}$ is a reduced decomposition,
then $\deg(T)-\deg(t^\mu)=\deg\bigl(\psi_{r_1}\cdots\psi_{r_m}e(i_{t^\mu})\bigr)$
in the grading of [[def-klr-grading-and-diagrammatic-composition]].

3. If $T$ is the $(a,b)$-Garnir tableau with entry $r$ in the node $(a,b)$, and
$S$ is a standard $\mu$-tableau with $S\lhd T$ and $i_S=i_{s_rT}$, then
$\deg(S)-\deg(T)=-a_{i_ri_{r+1}}$ as well.

No choice is used.

## Facts & Assumptions

**Given:** A partition $\mu$, standard tableaux $S,T$ of shape $\mu$, and the
degree function of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]].

[F1] The weak Bruhat arrows, the Garnir belt and tableau, the brick notion and
the terminal alternatives are those of
[[def-tableau-domination-order-garnir-tableaux-and-bricks]]; in particular a
tableau below a Garnir tableau agrees with $t^\mu$ outside the belt.

[F2] The degree $d_A(\mu)$, the codegree recursion, the defect and the identities
$d_A(\mu)+d^A(\mu^A)=d_i(\mu)+1$, $d_i(\mu)=(\Lambda_0-\alpha,\alpha_i)$,
$\operatorname{def}(\alpha)=\operatorname{def}(\alpha-\alpha_i)+d_i(\mu)+1$ and
$\deg(T)+\operatorname{codeg}(T)=\operatorname{def}(\alpha)$ are the content of
[[lem-degree-and-codegree-of-standard-tableaux]], including the brick lemma
$\operatorname{codeg}(S)=\operatorname{codeg}(T)$ for a removed brick.

[F3] The KLR generators, their degrees $\deg e(i)=0$, $\deg y_r=2$ and
$\deg\psi_re(i)=-a_{i_ri_{r+1}}$, and the Cartan coefficients $a_{ij}$ of the
cyclic affine type-$A$ specialization are those of
[[def-klr-grading-and-diagrammatic-composition]] and
[[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]].

[F4] Addable and removable nodes are as declared in
[[def-removable-and-addable-nodes-of-a-partition]].

## Proof

**Proof technique:** direct.

1.1 **One edge (1).** Since both tableaux are standard with the same shape and content, we may reduce to the case $r=d-1$ by the following standard trimming: deleting the entry $d$ from $T$ and $S$ gives standard tableaux of the shape $\mu^A$ with the same relation at $d-1$, and the degree recursion expresses both degrees through this smaller pair plus the boundary counts at the node $A$ of $d$; iterating leaves the comparison local [F2, F4]. Write $A$ for the node containing $d$ and $B$ for the node containing $d-1$; the two degrees differ by $d_B(\mu^A)-d_B(\mu)$, where $d_B$ counts addable minus removable $i$-nodes strictly below $B$ [F2]. Splitting the $i$-nodes of $\mu$ and $\mu^A$ below $B$ gives the same four cases for the residues $i$ of $A$ and $j$ of $B$: if $i=j$ the difference is $d_i(\mu^A)-d_i(\mu)=-2=-a_{ii}$; if $i,j$ are joined by a single edge the difference is $1=-a_{ij}$; at $e=2$ the double edge gives $2=-a_{ij}$; and if the residues are non-adjacent the difference is $0=-a_{ij}$ [F3, F4]. Since the weak arrow swaps $r$ and $r+1$, the residue pair is $(i_{d-1},i_d)$ and the claimed formula follows. [F2, F3, F4]

2.1 **Reduced words (2).** The KLR element $\psi_{r_1}\cdots\psi_{r_m}e(i_{t^\mu})$ is homogeneous of degree $\sum_{l}\deg\psi_{r_l}e(i_{t^\mu})$, and the reduced word moves $t^\mu$ to $T$ by successive weak edges; by step 1.1 each edge changes the degree by the negative of the corresponding Cartan coefficient $a_{i_ri_{r+1}}=\deg\psi_re(i)$ [F3]. Summing over the $m$ edges gives $\deg(T)-\deg(t^\mu)=\deg(\psi_{r_1}\cdots\psi_{r_m}e(i_{t^\mu}))$, independent of the word because the degree is a function of $T$ [F2, F3]. [F2, F3, step 1.1]

3.1 **The Garnir exchange (3).** Let $T$ be the $(a,b)$-Garnir tableau with entry $r$ at $(a,b)$ and let $S$ be standard with $S\lhd T$ and $i_S=i_{s_rT}$. By the agreement lemma of [F1], $S$ agrees with $t^\mu$ outside the belt, so the comparison reduces to the two-row belt ending at its final node. Removing complete horizontal $e$-bricks does not change the codegree, by the brick lemma of [F2]; what remains of the belt splits, per row, into bricks of size divisible by $e$ plus at most one exceptional brick. The codegree of the residual lower tableau is $-1$ precisely when the position $b$ is nonzero modulo $e$ and $0$ otherwise, while the codegree of the Garnir tableau is $0$ or $1$ for $e>2$ and $1$ or $2$ for $e=2$; taking differences gives degree $1$ in the single-edge case and $2$ in the $e=2$ double-edge case, i.e. $-a_{i_ri_{r+1}}$ in both, since an equal-colour exchange contributes $-2$ from the Cartan diagonal [F1, F2, F3]. All splits are finite residue and brick counts. [F1, F2, F3, step 2.1]

4.1 **No choice.** The reductions use the finitely many nodes of the two tableaux, the finite belt and its finitely many bricks, and the finitely many residue comparisons; no family of nonempty sets is selected. Hence no choice is used. [F1, F4, given] ∎
