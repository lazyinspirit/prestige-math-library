---
id: thm-graded-specht-restriction-has-the-removable-node-filtration
kind: theorem
title: "Graded Specht restriction has the removable-node filtration"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 38
deps: [def-graded-specht-module-by-homogeneous-standard-tableaux,
       thm-graded-specht-module-has-homogeneous-tableau-basis,
       def-tableau-domination-order-garnir-tableaux-and-bricks,
       prop-shifted-degrees-and-garnir-exchanges-for-standard-tableaux,
       def-cyclotomic-klr-induction-and-restriction-functors,
       def-klr-induction-and-restriction-bimodules,
       def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras,
       lem-dj-bridge-murphy-cellular-basis-and-cell-form,
       thm-separated-hecke-residues-give-seminormal-idempotents-and-bases,
       def-generic-type-a-hecke-algebra,
       thm-standard-basis-of-the-generic-type-a-hecke-algebra]
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
      locator: "Section 4.4, printed p. 22: Theorem 4.11 with its proof, the removable-node filtration, and Proposition 4.5 on the induction/restriction of the standard basis. Complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 4.7-4.8, printed pp. 35-37: Theorem 4.11 and Proposition 5.5 on the filtration of restricted Specht modules. Complete passage read."
    - title: "Jun Hu and Andrew Mathas, Graded induction for Specht modules, arXiv:1008.1462v1 (complete 19-page article)"
      url: "https://arxiv.org/pdf/1008.1462"
      locator: "Main Theorem, printed pp. 1-2 and Section 4, printed pp. 14-19: the dual induced graded Specht filtration and its proof. Complete relevant passages read."
verification:
  precheck: pass
---

## Statement

Keep the notation of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]], let $\mu$ be a
partition of $d$, $\alpha=\operatorname{cont}(\mu)$, and let
$i\in I=\mathbb Z/e\mathbb Z$. Let $A_1,\dots,A_c$ be the removable $i$-nodes
of $\mu$ ordered from bottom to top, and let
$\mu^{A_m}=\mu\setminus A_m$. Write $E_i:=E_i^{\rm basic}$ for the restriction
functor $N\mapsto e(\alpha-\alpha_i,\alpha_i)N$ of
[[def-cyclotomic-klr-induction-and-restriction-functors]] (equivalently the
$i$-part of the tower restriction of
[[def-klr-induction-and-restriction-bimodules]]). Then $E_iS(\mu)$ has a
filtration
$$0=V_0\subset V_1\subset\cdots\subset V_c=E_iS(\mu)$$
of graded $R^\Lambda_{\alpha-\alpha_i}$-modules with
$V_m/V_{m-1}\cong S(\mu^{A_m})\{d_{A_m}(\mu)\}$ for $1\le m\le c$.

Equivalently, the restriction of $S(\mu)$ to the previous rank has the
removable-node filtration of [BKW, Theorem 4.11] over ALL removable nodes, and
$E_i$ selects the removable-$i$-node part. No choice is used.

## Facts & Assumptions

**Given:** A partition $\mu$ of $d$ with content $\alpha$, a residue $i$, the
removable $i$-nodes $A_1,\dots,A_c$ ordered bottom to top, and the graded
Specht module $S(\mu)$ with its homogeneous tableau basis.

[F1] The graded Specht module $S(\mu)$, its degree recursion and the standard
vectors $v_T$ are those of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]]; by
[[thm-graded-specht-module-has-homogeneous-tableau-basis]] the $v_T$ form a
homogeneous basis with $v_T\in e(i_T)S(\mu)$ and
$\deg(y_rv_T)=\deg(y_r)+\deg(T)$,
$\deg(\psi_rv_T)=\deg(\psi_re(i_T))+\deg(T)$.

[F2] The restriction functor $E_i$, the idempotent decomposition
$\operatorname{Res}=\bigoplus_iE_i$ and the tower induction/restriction
bimodules are those of
[[def-cyclotomic-klr-induction-and-restriction-functors]] and
[[def-klr-induction-and-restriction-bimodules]]; the type-$A$ specialization
and its Cartan data are those of
[[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]].

[F3] Tableaux, the weak Bruhat arrows and the removable/addable node
conventions, in particular the bottom-to-top order of removable nodes, are
those of [[def-tableau-domination-order-garnir-tableaux-and-bricks]]; the
shifted-degree and Garnir-exchange formulas are those of
[[prop-shifted-degrees-and-garnir-exchanges-for-standard-tableaux]].

[F4] Over $\mathcal R=\mathbb Z[u,u^{-1}]$ the left Murphy cell has the
free standard basis $z_T=T_{w_T}z_\mu$ and is compatible with every base
change ([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]],
[[def-generic-type-a-hecke-algebra]],
[[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]). Over its fraction
field $\mathcal K=\mathbb Q(u)$ the cell-level JM eigenbasis has
$f_T=z_T+\sum_{S\lhd T}b_Sz_S$. Its adjacent-generator coefficients are
$u$ on a row, $-1$ on a column, and on a standard swap are the two
seminormal coefficients of
[[thm-separated-hecke-residues-give-seminormal-idempotents-and-bases]],
clauses (2)–(4). These depend only on the two node contents and the relative
tableau dominance. We use its individual-cell diagonalization and generator
formulas, not a global JM label theorem or a finite-$e$ simple classification.
The right-cell formulas convert to left formulas by star, which fixes $T_r$
and the additive JM elements.

## Proof

**Proof technique:** direct.

1.1 **The ordered Murphy subspaces over the universal ring.** First work with the ungraded level-one left Murphy cell $S_{\mathcal R}(\mu)$ at the universal Hecke parameter $u$, where $\mathcal R=\mathbb Z[u,u^{-1}]$. List all removable corners as $B_1,\ldots,B_b$ from bottom to top. Define $W_j^{\mathcal R}$ to be the span of standard $z_T$ with the maximal entry $d$ in $B_1,\ldots,B_j$. Each is a free basis-coordinate subspace, with free quotient. If $S\unlhd T$ in the tableau Bruhat order, its prefix of size $d-1$ dominates the corresponding prefix of $T$ by [F3]. For corners of a fixed partition, $\mu\setminus B$ dominates $\mu\setminus A$ exactly when $B$ is lower than or equal to $A$: subtracting a node from a lower row retains one extra node in every intervening upper-row prefix sum. Thus every standard tableau below $T$ has $d$ in the same or a lower corner. This is the direction needed for the bottom-to-top filtration. [F3, F4, algebra]

2.1 **Prove stability generically and descend exact coefficients.** Extend scalars to $\mathcal K=\mathbb Q(u)$ and use the cell-level triangular eigenbasis of [F4]. Step 1.1 implies $W_j^{\mathcal K}=\operatorname{span}_{\mathcal K}\{f_T:d\text{ in }B_1,\ldots,B_j\}$: the triangular basis change and its inverse preserve each such set. For $1\le r<d-1$, the seminormal formula for $T_r f_T$ involves only $f_T$ and, when standard, $f_{s_rT}$. Both have $d$ in the same node, so every $W_j^{\mathcal K}$ is an $H_{\mathcal K,u}(S_{d-1})$-submodule. The action matrix of $T_r$ on the universal $z$-basis has coefficients in $\mathcal R$ by [F4]. Every coefficient exiting $W_j^{\mathcal R}$ vanishes after the injective extension $\mathcal R\hookrightarrow\mathcal K$, hence is zero already in $\mathcal R$. Therefore $W_j^{\mathcal R}$ is a submodule. This proves only stability of the ordered sums; it makes no claim that individual fixed-corner spans are stable after specialization. [F4, step 1.1, algebra]

3.1 **Identify the generic corner quotient on its standard vectors.** Fix $j$, put $A=B_j$ and $\nu=\mu\setminus A$, and let $T_A$ be the standard filling with $d$ in $A$ and the remaining entries row-filled in $\nu$. For any standard $T$ with $d$ in $A$, deletion gives $\bar T$ of shape $\nu$. On the eigenbasis quotient $W_j^{\mathcal K}/W_{j-1}^{\mathcal K}$ the map $f_T\mapsto f_{\bar T}$ is an $H_{d-1}$-isomorphism: for every generator $T_r$, $r<d-1$, the two contents, same-row/column alternatives, standardness of the swap and relative prefix dominance are unchanged by deleting $d$; hence the two displayed seminormal action matrices in [F4] are identical. The tableau $T_A$ is dominance-maximal among tableaux with $d$ in $A$, since its deleted tableau is row-filled. Thus the triangular correction to $f_{T_A}$ has only tableaux with $d$ in lower corners, so $f_{T_A}+W_{j-1}^{\mathcal K}=z_{T_A}+W_{j-1}^{\mathcal K}$. The initial eigenvector of $S_{\mathcal K}(\nu)$ is $f_{t^\nu}=z_\nu$. If the row-reading index of $A$ in $\mu$ is $k$, the permutation $w_{T_A}$ sends the initial entry $k$ to $d$ and shifts $k+1,\ldots,d$ down by one, and has length $d-k$. The factorization $w_T=w_{\bar T}w_{T_A}$ is length-additive: the $d-k$ inversions involving $d$ are fixed, and all other inversions are precisely those of $w_{\bar T}$. Therefore $z_T=T_{w_{\bar T}}z_{T_A}$, and the generic isomorphism sends $z_T+W_{j-1}^{\mathcal K}$ exactly to $z_{\bar T}$. This identifies the standardized quotient map, not just an unspecified generic module isomorphism. [F3, F4, step 1.1, step 2.1, algebra]

4.1 **The integral and specialized deletion quotient.** Define the $\mathcal R$-linear basis map $W_j^{\mathcal R}/W_{j-1}^{\mathcal R}\to S_{\mathcal R}(\nu)$ by $z_T\mapsto z_{\bar T}$. Both source and target are free with these corresponding bases. For each finite Hecke generator, both action matrices have entries in $\mathcal R$, and step 3.1 makes their difference zero in $\mathcal K$. Injectivity of $\mathcal R\to\mathcal K$ therefore makes that difference zero over $\mathcal R$. This is an integral module isomorphism. Base change $u\mapsto\xi$ gives the exact Murphy restriction filtration and deletion quotients over the original field $F$, including singular finite-$e$ parameters and positive characteristic. Because every inclusion was a basis-coordinate inclusion with free quotient, these scalar extensions preserve the entire filtration and its quotients; no flatness assumption on $F$ is needed and no generic denominator is specialized. [F4, step 2.1, step 3.1, algebra]

5.1 **Pass to the selected homogeneous basis and establish the shift.** Return to the fixed graded Hecke–KLR presentation. Its homogeneous theorem [F1] gives a triangular change $v_T=a_Tz_T+\sum_{S\lhd T}a_Sz_S$, $a_T\ne0$. Step 1.1 therefore identifies every specialized $W_j$ with the span of the selected $v_T$ having $d$ in $B_1,\ldots,B_j$, so $W_j$ is a graded submodule. To verify that the deletion isomorphism of step 4.1 is homogeneous, choose compatible reduced words $w_T=w_{\bar T}w_{T_A}$, which are reduced by step 3.1. The grading is independent of this selected-word change by [F1]. The triangular expansion of $v_{T_A}$ has only lower-corner terms besides its nonzero leading term, so its image under the ungraded deletion quotient is $a_Az_\nu$ for a fixed scalar $a_A\ne0$. The previous-rank generators have the same tower images under the transported KLR presentation: the inclusion keeps $X_r,T_r$ for $r<d$; hence its weight idempotent $e(\mathbf i)$ becomes $\sum_j e(\mathbf i,j)$, since both project onto the generalized eigenspaces of those same first $d-1$ commuting $X$ operators. The defining dot formula and fixed crossing normalizing series use only the same adjacent $X$ operators, so $y_r$ for $r\le d-1$ and $\psi_r$ for $r<d-1$ are unchanged. This is the tower transport in [F2], without assigning any simple-module shape from a JM tuple; consequently the deletion map sends $v_T+W_{j-1}=\psi_{w_{\bar T}}v_{T_A}+W_{j-1}$ to $a_Av_{\bar T}$. Rescaling the quotient map by $a_A^{-1}$ gives the homogeneous-basis correspondence. The degree recursion [F1] gives $\deg T=\deg\bar T+d_A(\mu)$, so $W_j/W_{j-1}\cong S(\nu)\{d_A(\mu)\}$ as graded modules. Other preferred words preserve the same graded subspaces and graded isomorphism by [F1]; no word-independence of the individual vectors is asserted. [F1, F2, F3, step 1.1, step 4.1, algebra]

6.1 **Select the removable-$i$-node filtration.** The residue projector $e(\alpha-\alpha_i,\alpha_i)$ on restriction selects exactly the homogeneous basis vectors whose last residue is $i$ by [F1, F2]. Apply this exact idempotent summand to the all-corner filtration of step 5.1. A quotient for a corner $B_j$ of residue different from $i$ becomes zero, while a quotient for an $i$-corner remains $S(\mu\setminus B_j)\{d_{B_j}(\mu)\}$. Removing the repeated zero steps leaves precisely the bottom-to-top sequence $A_1,\ldots,A_c$ of the Statement, with $V_m$ spanned by the selected $v_T$ whose last node is among $A_1,\ldots,A_m$. This proves the asserted filtration and all graded quotients. If there are no removable $i$-nodes the selected module is zero and the filtration is empty; rank zero has no restriction assertion. The entire argument uses finite bases, finite spectra and explicit scalar extension, so no choice principle or cellular head classification is used. [F1, F2, step 5.1, algebra] ∎
