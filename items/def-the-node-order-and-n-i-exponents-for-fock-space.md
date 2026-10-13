---
id: def-the-node-order-and-n-i-exponents-for-fock-space
kind: definition
title: "The node order and the signed exponents $N_i^l$ and $N_i^r$"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 15
deps: [def-level-one-partition-fock-space-and-node-residues, lem-the-node-count-is-the-level-one-cartan-pairing, def-removable-and-addable-nodes-of-a-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.10, printed pp. 23-24: formulas (38)-(39), the right/left signed exponents and Exercise 15."
    - title: "Bernard Leclerc and Jean-Yves Thibon, Canonical bases of q-deformed Fock spaces, arXiv:q-alg/9602025"
      url: "https://arxiv.org/pdf/q-alg/9602025"
      locator: "sec. 2, printed pp. 2-3: node action (3)-(4) with signed exponents."
    - title: "Kashiwara-Miwa-Petersen-Yung, Perfect crystals and q-deformed Fock spaces"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 5.2, printed pp. 35-36: the $A_n^{(1)}$ energy values and the normal-ordering conventions compared with the node order."
---

## Definition

For a fixed residue $i$ list the addable and removable $i$-nodes of a partition
**by increasing content** $c-r$; larger content is read as further right or
higher. For an addable $i$-node $\gamma$ of $\lambda$ (so that
$\mu=\lambda+\gamma$) define

$$N_i^r(\lambda,\gamma):=\#\{\text{addable }i\text{-nodes of }\lambda\text{ with content}>\text{content}(\gamma)\}-\#\{\text{removable }i\text{-nodes of }\lambda\text{ with content}>\text{content}(\gamma)\},$$

and for a removable $i$-node $\gamma$ of $\mu$ (so that
$\lambda=\mu-\gamma$) define $N_i^l(\lambda,\mu)$ by the same formula inside the
smaller diagram $\lambda=\mu-\gamma$ with $>$ replaced by $<$, always excluding
$\gamma$ itself. The node formulas are then

$$F_i|\lambda\rangle=\sum_{\gamma}q^{N_i^r(\lambda,\gamma)}|\lambda+\gamma\rangle,\qquad E_i|\mu\rangle=\sum_{\gamma}q^{-N_i^l(\mu-\gamma,\mu)}|\mu-\gamma\rangle,$$

over the addable respectively removable $i$-nodes. The **node order** is the
content order just fixed, and it is used to define the finite signature
selection: a Chevalley coefficient minimiser is not in general a Kashiwara
arrow, and even a nonzero single Chevalley term can have zero crystal arrow.

## Facts & Assumptions

**Given:** The partition Fock space with residues $c-r\bmod e$, the stable node operators and the signed exponents $N_i^r,N_i^l$ defined above.

[F1] $F_i$ adds and $E_i$ removes a node of residue $i$; the sets of addable and removable $i$-nodes are finite for every partition and every residue ([[def-level-one-partition-fock-space-and-node-residues]], [[def-removable-and-addable-nodes-of-a-partition]]).

[F2] $N_i(\lambda)=\#\text{addable}_i(\lambda)-\#\text{removable}_i(\lambda)=\delta_{i0}-\sum_ja_{ij}m_j(\lambda)$ ([[lem-the-node-count-is-the-level-one-cartan-pairing]]).



## Verification

**Proof technique:** split the boundary nodes at the chosen node and verify the two identities by the content order, then calibrate at $e=2$.

1.1 The splitting identity. For an addable $i$-node $\gamma$ of $\lambda$, the addable $i$-nodes of $\lambda$ are $\{\gamma\}$, the nodes strictly above $\gamma$ in content and those strictly below, and likewise for the removable $i$-nodes; hence, with the two signed counts of the Definition, $N_i^r(\lambda,\gamma)+N_i^l(\lambda,\gamma)=\bigl(\#\text{addable}_i(\lambda)-1\bigr)-\#\text{removable}_i(\lambda)=N_i(\lambda)-1$, because $\gamma$ contributes to the addable count but to neither signed count and no removable node equals $\gamma$. The analogous identity holds for a removable node with $\mu$ and $\lambda$ exchanged. [F1, F2, given, algebra]

1.2 The node formulas are the ones of the stable prefix action. By the content order, the finite-prefix coefficient of an added node is the product of the preceding $K$-weights in decreasing-index order, which is exactly $q^{N_i^r}$ (each addable $i$-node to the right contributes $+1$, each removable $i$-node to the right contributes $-1$), and for a removed node the renormalised suffix coefficient is $q^{-N_i^l}$ with the smaller diagram $\mu-\gamma$; these are the formulas (38)-(39) of the stable action, restated in the content order. [F1, given, algebra]

1.3 Calibration at $e=2$. Take $\lambda=(3,1)$. Its cells have contents $0,1,2$ in row $1$ and $-1$ in row $2$, so mod $2$ the residues are $0,1,0,1$. The addable $0$-nodes are $(2,2)$, content $0$, and $(3,1)$, content $-2$; the removable $0$-node is $(1,3)$, content $2$. For $\gamma=(2,2)$: no addable $0$-node lies above content $0$ and the removable node $(1,3)$ does, so $N_0^r=-1$ and the coefficient of $|3,2\rangle$ is $q^{-1}$; for $\gamma=(3,1)$: the addable $(2,2)$ and the removable $(1,3)$ both lie above content $-2$, so $N_0^r=0$ and the coefficient of $|3,1,1\rangle$ is $1$; hence $F_0|3,1\rangle=q^{-1}|3,2\rangle+|3,1,1\rangle$, which is Leclerc's Exercise 15 value. For $E_0|3,1\rangle$: the only removable $0$-node is $\gamma=(1,3)$, whose smaller diagram is $\lambda=(2,1)$; inside $(2,1)$ the addable $0$-nodes below content $2$ are $(2,2)$ (content $0$) and $(3,1)$ (content $-2$), while no removable $0$-node lies below, so $N_0^l=2$ and $E_0|3,1\rangle=q^{-2}|2,1\rangle$, again matching the calibration. [F1, given, algebra]

2.1 Conclusion. The node order is the increasing-content order on the boundary nodes, the signed exponents satisfy $N_i^r+N_i^l=N_i(\lambda)-1$ at every node, the node formulas are the ones produced by the stable prefix action, and the $e=2$ calibration reproduces Leclerc's Exercise 15; no tilde operator is obtained by setting $q=0$ in these possibly singular coefficients. [step 1.1, step 1.2, step 1.3] ∎
