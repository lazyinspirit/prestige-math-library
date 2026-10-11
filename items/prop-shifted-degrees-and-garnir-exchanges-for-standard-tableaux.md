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
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
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

**Given:** A partition $\mu$, standard tableaux $S,T$ of shape $\mu$, and the degree function of [[def-graded-specht-module-by-homogeneous-standard-tableaux]].

[F1] The weak Bruhat arrows, the Garnir belt and tableau, the brick notion and the terminal alternatives are those of [[def-tableau-domination-order-garnir-tableaux-and-bricks]]; in particular a tableau below a Garnir tableau agrees with $t^\mu$ outside the belt.

[F2] The degree $d_A(\mu)$, the codegree recursion, the defect and the identities $d_A(\mu)+d^A(\mu^A)=d_i(\mu)+1$, $d_i(\mu)=(\Lambda_0-\alpha,\alpha_i)$, $\operatorname{def}(\alpha)=\operatorname{def}(\alpha-\alpha_i)+d_i(\mu)+1$ and $\deg(T)+\operatorname{codeg}(T)=\operatorname{def}(\alpha)$ are the content of [[lem-degree-and-codegree-of-standard-tableaux]], including the brick lemma $\operatorname{codeg}(S)=\operatorname{codeg}(T)$ for a removed brick.

[F3] The KLR generators, their degrees $\deg e(i)=0$, $\deg y_r=2$ and $\deg\psi_re(i)=-a_{i_ri_{r+1}}$, and the Cartan coefficients $a_{ij}$ of the cyclic affine type-$A$ specialization are those of [[def-klr-grading-and-diagrammatic-composition]] and [[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]].

[F4] Addable and removable nodes are as declared in [[def-removable-and-addable-nodes-of-a-partition]].

## Proof

**Proof technique:** direct.

1.1 **One edge (1).** Delete entries greater than $r+1$ from both tableaux. These occupy the same nodes and have equal degree-recursion contributions, so they cancel and we may assume $r=d-1$. Write $A$ for the node of $d$ in $T$ and $B$ for the node of $d-1$. In a weak edge $B$ is above $A$, and removing $B$ does not change the boundary counts strictly below $A$. Expanding the two recursions therefore gives $\deg S-\deg T=d_B(\mu)-d_B(\mu\setminus A)$. Removing the $i$-node $A$ changes the addable-minus-removable $j$-node count below $B$ by $a_{ji}$: when $i=j$ one loses a removable node and gains an addable one, giving $2$; at a single edge one loses one addable $j$-node or gains one removable $j$-node, giving $-1$; at $e=2$ the two adjacent colors coincide and the two contributions give $-2$; otherwise it gives zero. Thus $d_B(\mu\setminus A)-d_B(\mu)=a_{ji}$ and the desired difference is $-a_{ji}$. [F2, F3, F4, algebra]

2.1 **Reduced words (2).** The KLR element $\psi_{r_1}\cdots\psi_{r_m}e(i_{t^\mu})$ is homogeneous of degree $\sum_l(-a_{j_l,k_l})$, where $(j_l,k_l)$ is the residue pair at the crossing after the generators to its right have acted, and the reduced word moves $t^\mu$ to $T$ by successive weak edges. Indeed, read the word from right to left: each consecutive-value swap increases inversion length by one and changes only the relative order of its two occupied nodes. No such inversion can be removed along a reduced word, so every inverted node pair also occurs in the final tableau. Nodes comparable along a row or column have the same increasing order in $t^\mu$ and $T$, so no intermediate tableau reverses them; each intermediate tableau is therefore standard. Thus by step 1.1 each edge changes the degree by the negative of the corresponding Cartan coefficient $a_{i_ri_{r+1}}=\deg\psi_re(i)$ [F3]. Summing over the $m$ edges gives $\deg(T)-\deg(t^\mu)=\deg(\psi_{r_1}\cdots\psi_{r_m}e(i_{t^\mu}))$, independent of the word because the degree is a function of $T$ [F2, F3]. [F2, F3, step 1.1]

3.1 **The Garnir exchange (3).** By [F1], $S$ and $T$ agree outside the belt. The prefix shapes immediately before and after the belt coincide for $S,T$, so the outside-label contributions coincide. For belt labels, the rows strictly above its upper row are fixed. Their contribution to each upper-row addition depends only on that node's column, so the sum over the fixed upper-tail node set is identical. For a lower-row addition, subtract the local signed corners of the upper belt row from the actual above-node count. This leaves a fixed external signed-corner count: if the upper row reaches the length of the preceding row, the lost external removable corner and the suppressed local addable corner have exactly the same residue, so their changes cancel in this difference. The sum of that fixed correction over the lower-prefix node set is therefore identical as well. Thus outer contributions cancel in the codegree difference. Translate the belt row indices and residues to the two-row diagram $(m,b)$ with Garnir node $(1,b)$; the calculations below give these residual codegrees. The initial upper head has entries $1,\ldots,b-1$. The Garnir filling puts $b,\ldots,2b-2$ in the lower prefix, $r=2b-1$ at the upper node $(1,b)$, $r+1=2b$ at the lower node $(2,b)$, and the remaining entries along the upper tail. If $e=0$, the upper-belt contents $b-1,\ldots,m-1$ and lower-belt contents $-1,\ldots,b-2$ are disjoint, with each integer appearing once. Consequently the prescribed residue sequence $i_S=i_{s_rT}$ forces every belt label to occupy exactly its node in $s_rT$. That filling has $r+1$ above $r$ in column $b$, so is not standard. Thus no $S$ in the hypothesis exists for $e=0$; clause (3) is vacuous in that extension, without assigning a codegree to a nonexistent standard tableau. Now let $e\ge2$ be finite, and write $\delta_e(t)=1$ if $e\mid t$ and $0$ otherwise. In any standard two-row filling, a lower-row brick occupying columns $p,\ldots,q$ while the upper row has fixed length $x$ contributes $\sum_{c=p}^q(\delta_e(x-c+2)-\delta_e(x-c+1))=\delta_e(x-p+2)-\delta_e(x-q+1)$ to codegree: the addable upper corner has content $x$, the removable upper corner content $x-1$, and the added lower node content $c-2$. In particular a complete $e$-brick contributes zero, agreeing with [F2]. For $S$, the target belt residue word is the single consecutive run $-1,0,\ldots,m-1$ modulo $e$. Every lower brick starting after an upper brick has first endpoint indicator $1$, by comparing the preceding upper residue $x-1$ with the next lower residue $p-2$. Every lower brick has last endpoint indicator $1$: if followed by an upper brick this follows by comparing $q-2$ with $x$, while if it ends the whole belt then $x=m$, $q=b$, and the final prescribed residue gives $m-b+1\equiv0$. Hence every such brick contributes zero except possibly the initial lower brick, whose first indicator is $\delta_e(b)$ since $x=b-1$ and $p=1$. If $S$ starts instead in the upper row, its first residue forces $b\equiv0$, so the same total follows. Therefore $\operatorname{codeg}(S)=\delta_e(b)-1$. For $T$, the lower-prefix additions at columns $1,\ldots,b-1$ occur with upper length $b-1$ and contribute $\delta_e(b)-\delta_e(1)=\delta_e(b)$; the lower node in column $b$ is then added with upper length $b$, contributing $\delta_e(2)-\delta_e(1)=\delta_e(2)$; all upper additions contribute zero. Thus $\operatorname{codeg}(T)=\delta_e(b)+\delta_e(2)$. The matched residual count table is $$\begin{array}{c|c|r|r|r}e&b\bmod e&\operatorname{codeg}(S)&\operatorname{codeg}(T)&\operatorname{codeg}(T)-\operatorname{codeg}(S)\\\hline e>2&\ne0&-1&0&1\\e>2&0&0&1&1\\e=2&1&-1&1&2\\e=2&0&0&2&2\end{array}.$$ By [F2], degree difference is the reverse codegree difference at fixed shape and content. The vertically adjacent residues at $r,r+1$ are distinct and joined by one edge for $e>2$ and by a double edge for $e=2$; hence every row of the table gives $\deg S-\deg T=-a_{i_ri_{r+1}}$. All signs are accounted for by the explicit addable-minus-removable endpoint count. [F1, F2, F3, step 2.1, algebra]

4.1 **No choice.** The reductions use the finitely many nodes of the two tableaux, the finite belt and its finitely many bricks, and the finitely many residue comparisons; no family of nonempty sets is selected. Hence no choice is used. [F1, F4, given] ∎
