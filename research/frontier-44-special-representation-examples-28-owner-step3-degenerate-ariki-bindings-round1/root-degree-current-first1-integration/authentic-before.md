---
id: lem-degree-and-codegree-of-standard-tableaux
kind: lemma
title: "Degree and codegree of standard tableaux"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 35
deps: [def-tableau-domination-order-garnir-tableaux-and-bricks,
       def-graded-specht-module-by-homogeneous-standard-tableaux,
       def-dominance-order-on-partitions,
       def-removable-and-addable-nodes-of-a-partition,
       def-kac-moody-root-lattice-height-and-positive-cone,
       def-cyclic-affine-type-a-cartan-datum]
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
      locator: "Section 3.5, printed pp. 13-15: definitions (3.1)-(3.6) of dA, dB, di and the defect, and Lemmas 3.11-3.12 with their proofs; Section 3.6, printed p. 15: Lemma 3.15 on bricks. Complete passages read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 3.3, printed pp. 18-20: dA, dB, di and the defect with the same conventions. Complete passage read."
verification:
  precheck: pass
---

## Statement

In the situation of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]], define
$d^A(\lambda)$ for an ADDABLE $i$-node $A$ to be the number of addable
$i$-nodes strictly ABOVE $A$ minus the number of removable $i$-nodes strictly
ABOVE $A$. Define the codegree of a standard tableau $T$ by
$\operatorname{codeg}(\varnothing):=0$ and
$\operatorname{codeg}(T):=d^A(\mu^A)+\operatorname{codeg}(T_{\le d-1})$, where
$A$ is the node containing $d$ and $\mu^A=\mu\setminus A$. Define the defect of
a residue content $\alpha\in Q_+$ by
$\operatorname{def}(\alpha):=(\Lambda_0,\alpha)-(\alpha,\alpha)/2$ (the
symmetric form of [[def-cyclic-affine-type-a-cartan-datum]]). Then for every
partition $\mu$ with content $\alpha$ and every standard $\mu$-tableau $T$:

1. $d_A(\mu)+d^A(\mu^A)=d_i(\mu)+1$ where $i$ is the residue of the removable
node $A$ and
$d_i(\mu)=\#\{\text{addable }i\text{-nodes of }\mu\}-\#\{\text{removable }i\text{-nodes of }\mu\}$;

2. $d_i(\mu)=(\Lambda_0-\alpha,\alpha_i)$;

3. $\operatorname{def}(\alpha)=\operatorname{def}(\alpha-\alpha_i)+d_i(\mu)+1$;

4. $\deg(T)+\operatorname{codeg}(T)=\operatorname{def}(\alpha)$;

5. removing a brick does not change the codegree: if
$m\to_Tm+1\to_T\cdots\to_Td$ and $S=T_{\le m-1}$, then
$\operatorname{codeg}(S)=\operatorname{codeg}(T)$ whenever (i) $m,\dots,d$
occupy nodes in the first row of the first component of $T$, or (ii)
$d-m+1=e$ (the quantum characteristic).

No choice is used.

## Facts & Assumptions

**Given:** A partition $\mu$ with content $\alpha$ and a standard $\mu$-tableau
$T$, the addable and removable nodes of partitions, the symmetric form of the
cyclic affine type-$A$ Cartan datum, and the degree recursion of the graded
Specht definition.

[F1] Addable and removable nodes of a partition are as declared in
[[def-removable-and-addable-nodes-of-a-partition]]; node positions are
compared in the English diagram, with strictly above/below meaning in an
earlier/later row of the same component.

[F2] The degree $d_A(\mu)$ and the degree recursion
$\deg(T)=\deg(T_{\le d-1})+d_A(\mu)$ are those of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]].

[F3] The symmetric form, the simple roots $\alpha_i$ and the weight $\Lambda_0$
with $(\alpha_i,\alpha_i)=2$ are those of
[[def-cyclic-affine-type-a-cartan-datum]]; the root lattice and its positive
cone are those of [[def-kac-moody-root-lattice-height-and-positive-cone]].

[F4] The weak Bruhat arrows $\to_T$ and the notion of a horizontal brick are
those of [[def-tableau-domination-order-garnir-tableaux-and-bricks]].

## Proof

**Proof technique:** direct.

1.1 **Counting addable and removable nodes (1).** Delete the removable $i$-node $A$ from $\mu$; in $\mu^A$ the node $A$ itself is addable, and no node strictly below $A$ changes its addable or removable status, because the shape on and below the row of $A$ is unchanged there [F1]. Among the $i$-nodes strictly above $A$, only the two nodes adjacent to $A$ in the row above can change status, and they change simultaneously: the node directly above $A$'s column becomes removable in $\mu^A$ exactly when the node one step to its right becomes addable, both conditions being $\mu_{r-1}=\mu_r$ for $A$ in row $r$ [F1]. Hence the number of addable $i$-nodes strictly above $A$ minus removable ones is the same in $\mu^A$ as in $\mu$, and $d_A(\mu)+d^A(\mu^A)=\#\{\text{addable }i\text{-nodes of }\mu\}-\#\{\text{removable }i\text{-nodes of }\mu\}+1=d_i(\mu)+1$, the $+1$ recording that $A$ was removable in $\mu$ and is addable in $\mu^A$. [F1, F2]

1.2 **The Cartan formula (2).** For the empty partition $d_i=0=(\Lambda_0,\alpha_i)$ because $\alpha=0$; adding one node of residue $i$ changes the left side by $d_i(\mu)-d_i(\mu^A)=1$ and the right side by $-(\alpha_i,\alpha_i)=-2$ relative to $\Lambda_0-(\alpha-\alpha_i)$, i.e. by $(\Lambda_0-\alpha,\alpha_i)-(\Lambda_0-\alpha+\alpha_i,\alpha_i)=-2$; the two differences agree, so induction on $d$ proves the identity for every partition [F1, F3]. [F1, F3]

2.1 **The defect recursion (3).** Expanding, $\operatorname{def}(\alpha)-\operatorname{def}(\alpha-\alpha_i)=(\Lambda_0,\alpha_i)-((\alpha,\alpha)-(\alpha-\alpha_i,\alpha-\alpha_i))/2=(\Lambda_0,\alpha_i)-(\alpha,\alpha_i)+(\alpha_i,\alpha_i)/2=d_i(\mu)+1$ by (2) and $(\alpha_i,\alpha_i)=2$, which is the displayed recursion [F3]. [F3, step 1.2]

3.1 **Degree plus codegree (4).** For $d=0$ both definitions give $0=\operatorname{def}(0)$. For $d>0$ let $A$ be the node containing $d$ and $i=\operatorname{res}A$; by the induction hypothesis applied to $T_{\le d-1}$ and by step 2.1, $\deg(T)+\operatorname{codeg}(T)=\deg(T_{\le d-1})+\operatorname{codeg}(T_{\le d-1})+d_A(\mu)+d^A(\mu^A)=\operatorname{def}(\alpha-\alpha_i)+d_i(\mu)+1=\operatorname{def}(\alpha)$, where the middle equality uses (1) [F2, F3]. [F2, F3, step 1.1, step 2.1]

4.1 **Bricks (5).** For (i): the nodes of a horizontal terminal brick lie in the first row of the first component; an addable or removable $i$-node strictly above such a node would have to lie in a row above row one, and there is none, so every contribution $d^A(\mu^A)$ to the codegree recursion along the brick vanishes and the codegree of $T$ equals that of $T_{\le m-1}$ [F1, F4]. For (ii): an $e$-brick runs through each of the $e$ residues exactly once; summing the boundary counts $d^A$ over a full residue cycle cancels every addable against the corresponding removable contribution above the brick, so the total codegree increment along the brick is zero [F1, F4]. Both statements are finite boundary counts and use no choice. [F1, F4, step 1.2, step 3.1] ∎
