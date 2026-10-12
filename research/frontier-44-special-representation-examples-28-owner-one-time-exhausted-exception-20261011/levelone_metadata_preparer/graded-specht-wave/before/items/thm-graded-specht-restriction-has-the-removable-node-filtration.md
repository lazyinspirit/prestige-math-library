---
id: thm-graded-specht-restriction-has-the-removable-node-filtration
kind: theorem
title: "Graded Specht restriction has the removable-node filtration"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 38
deps: [def-graded-specht-module-by-homogeneous-standard-tableaux,
       thm-graded-specht-module-has-homogeneous-tableau-basis,
       def-tableau-domination-order-garnir-tableaux-and-bricks,
       prop-shifted-degrees-and-garnir-exchanges-for-standard-tableaux,
       def-cyclotomic-klr-induction-and-restriction-functors,
       def-klr-induction-and-restriction-bimodules,
       def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]
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

## Proof

**Proof technique:** direct.

1.1 **The idempotent projection and the filtration by nodes.** By [F1] the homogeneous basis vectors satisfy $v_T\in e(i_T)S(\mu)$, so the projection $e(\alpha-\alpha_i,\alpha_i)S(\mu)$ is spanned by those $v_T$ whose last letter is $i$, equivalently whose maximal entry $d$ occupies a removable $i$-node [F1]. Define $V_m:=\operatorname{span}\{v_T:d\text{ lies in }A_1\cup\cdots\cup A_m\}$ for $1\le m\le c$ and $V_0:=0$; each $V_m$ is a graded subspace and $V_c=E_iS(\mu)$ because every standard tableau with a removable last node has that node among the $A_m$ [F1, F3]. [F1, F3]

1.2 **Submodules and quotients.** Each $V_m$ is a graded $R^\Lambda_{\alpha-\alpha_i}$-submodule: the generators of the previous rank act on $v_T$ by the degree-preserving formulas of [F1], and moving $d$ by $y_r$ or $\psi_r$ never changes the node of $d$, so the action stays inside the span of the same block of tableaux [F1]. Deleting the maximal entry from a standard tableau with $d$ in $A_m$ gives a standard $\mu^{A_m}$-tableau, and the map $v_T+V_{m-1}\mapsto v_{T_{\le d-1}}$ is a module isomorphism $V_m/V_{m-1}\to S(\mu^{A_m})$: surjectivity and injectivity follow from the basis theorem applied to the two modules, and the action is respected because the generators of rank $d-1$ act on $T_{\le d-1}$ exactly as the same generators act on $T$ before deletion [F1, F3]. [F1, F3]

2.1 **The grading shift.** For $T$ with $d$ in $A_m$, the degree recursion gives $\deg(T)=\deg(T_{\le d-1})+d_{A_m}(\mu)$ [F1, F3]. Since the isomorphism of step 1.2 sends the homogeneous vector $v_T$ of degree $\deg(T)$ to the homogeneous vector $v_{T_{\le d-1}}$ of degree $\deg(T_{\le d-1})$, it is an isomorphism $V_m/V_{m-1}\cong S(\mu^{A_m})\{d_{A_m}(\mu)\}$ of graded modules; the shift is by the node count $d_{A_m}(\mu)$ [F1, F3]. [F1, F3, step 1.2]

3.1 **Passage from the whole restriction to $E_i$.** The tower restriction decomposes as $\operatorname{Res}=\bigoplus_iE_i$ over the residue idempotents [F2]; intersecting the removable-node filtration with the $i$-part selects precisely the removable $i$-nodes and gives the displayed filtration with the bottom-to-top order of $A_1,\dots,A_c$, while the other residues contribute their own filtrations [F1, F2]. No choice is used: the filtration is defined from the homogeneous basis and the finite list of removable nodes. [F1, F2, F3, given] ∎
