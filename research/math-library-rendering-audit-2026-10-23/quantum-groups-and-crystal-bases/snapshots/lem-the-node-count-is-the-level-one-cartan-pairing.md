---
id: lem-the-node-count-is-the-level-one-cartan-pairing
kind: lemma
title: "The addable-minus-removable node count is the level-one Cartan pairing"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 14
deps: [def-level-one-partition-fock-space-and-node-residues, def-cyclic-affine-type-a-cartan-datum, def-removable-and-addable-nodes-of-a-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.10, printed pp. 23-24: Exercise 16, $t_i|\\lambda\\rangle=q^{N_i(\\lambda)}|\\lambda\\rangle$ with $N_i$ the addable-minus-removable count, and the level-one consequence for $K=t_0\\cdots t_{n-1}$."
    - title: "Kailash C. Misra and Tetsuji Miwa, Crystal base for the basic representation of $U_q(\\mathfrak{sl}(n))$, Comm. Math. Phys. 134 (1990), 79-88"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-134/issue-1/Crystal-base-for-the-basic-representation-of-U_qgerm-sgerm-ln/cmp/1104201614.pdf"
      locator: "sec. 2, printed pp. 80-82: the Fock space action and the weight formula $\\mathrm{wt}(\\lambda)=\\Lambda_0-\\sum_im_i\\alpha_i$."
    - title: "Bernard Leclerc and Jean-Yves Thibon, Canonical bases of q-deformed Fock spaces, arXiv:q-alg/9602025"
      url: "https://arxiv.org/pdf/q-alg/9602025"
      locator: "sec. 2, printed pp. 2-3: node action (3)-(4)."
---

## Statement

For every partition $\lambda$, every residue $i\in I$, and
$N_i(\lambda):=\#\{\text{addable }i\text{-nodes of }\lambda\}
-\#\{\text{removable }i\text{-nodes of }\lambda\}$ one has

$$N_i(\lambda)=\delta_{i0}-\sum_{j\in I}a_{ij}\,m_j(\lambda),$$

where $m_j(\lambda)$ is the number of residue-$j$ cells of $\lambda$ and
$A=(a_{ij})$ is the cyclic affine type $A$ Cartan matrix. Consequently
$\sum_{i\in I}N_i(\lambda)=1$; the toral operator acts by
$K_i|\lambda\rangle=q^{N_i(\lambda)}|\lambda\rangle=q^{\langle
h_i,\mathrm{wt}(|\lambda\rangle)\rangle}$, the central product
$K_0K_1\cdots K_{e-1}$ acts by $q$, and $\mathrm{wt}(|\lambda\rangle)
=\Lambda_0-\sum_jm_j\alpha_j$ has level $1$. In particular
$N_i(\varnothing)=\delta_{i0}$, and adding a node of residue $k$ changes $N_i$
by $-a_{ik}$, hence the weight by $-\alpha_k$.

## Facts & Assumptions

**Given:** The partition Fock space with residues $c-r\bmod e$, weight $\Lambda_0-\sum_jm_j\alpha_j$, the node formulas, and the Cartan datum with row sums $\sum_j a_{ij}=0$.

[F1] An addable node of $\lambda$ is $(r,\lambda_r+1)$ with $r=1$ or $\lambda_{r-1}>\lambda_r$, and a removable node is $(r,\lambda_r)$ with $\lambda_r>\lambda_{r+1}$ ([[def-removable-and-addable-nodes-of-a-partition]]).

[F2] The residues of the nodes around a corner are determined by the row and column indices as $c-r$; in particular the new bottom row $(k,1)$ has residue $1-k$ and the node $(r,\lambda_r+1)$ has residue $\lambda_r+1-r$ ([[def-level-one-partition-fock-space-and-node-residues]]).

[F3] $\langle\alpha_j,h_i\rangle=a_{ij}$, $\langle c,\Lambda_i\rangle=1$, and $\sum_j a_{ij}=0$ ([[def-cyclic-affine-type-a-cartan-datum]]).

## Proof

**Proof technique:** verify the identity on the empty partition and then induct on the number of cells by the local corner change.

1.1 The empty partition. The empty partition has exactly one addable node, the cell $(1,1)$ of residue $0$, and no removable nodes; hence $N_i(\varnothing)=\delta_{i0}$. The right-hand side is $\delta_{i0}-\sum_ja_{ij}\cdot0=\delta_{i0}$. [F1, F2, given, algebra]

2.1 The local step. Encode $\lambda$ by its occupied integer indices $S_\lambda=\{\lambda_r-r+1:r\ge1\}$, with trailing zero rows understood, and let $\chi_m$ be the indicator of $m\in S_\lambda$. A pair $(m,m+1)$ of occupancy $(1,0)$ is exactly an addable node of content $m$; occupancy $(0,1)$ is exactly a removable node of content $m$. Indeed increasing or decreasing the corresponding row length by one is admissible exactly when the neighbouring occupied index does not collide, by [F1]. Hence $N_i(\lambda)=\sum_{m\equiv i}(\chi_m-\chi_{m+1})$, a finite sum because all sufficiently negative indices are occupied and all sufficiently positive indices are empty. Adding a node of residue $k$ changes $\chi_m$ from $1$ to $0$ and $\chi_{m+1}$ from $0$ to $1$ at an index $m\equiv k$. Thus the count changes by $-2\delta_{ik}+\delta_{i,k-1}+\delta_{i,k+1}=-a_{ik}$; at $e=2$ the last two contributions coincide and give the double edge. Also $m_j(\mu)=m_j(\lambda)+\delta_{jk}$, so the claimed right side changes by the same $-a_{ik}$. [F1, F2, step 1.1, algebra]

3.1 The identity and its consequences. Induction on the number of cells from step 1.1 with the local step 2.1 gives $N_i(\lambda)=\delta_{i0}-\sum_ja_{ij}m_j(\lambda)$ for every partition. Summing over $i$ and using $\sum_ia_{ij}=0$ and $\sum_i\delta_{i0}=1$ gives $\sum_iN_i(\lambda)=1$. Therefore the toral action $K_i|\lambda\rangle=q^{N_i(\lambda)}|\lambda\rangle$ equals $q^{\delta_{i0}-\sum_ja_{ij}m_j}=q^{\langle h_i,\Lambda_0-\sum_jm_j\alpha_j\rangle}$, and the product over $i$ acts by $q^{\sum_iN_i}=q$, so $\mathrm{wt}(|\lambda\rangle)=\Lambda_0-\sum_jm_j\alpha_j$ has $\langle c,\mathrm{wt}\rangle=\sum_iN_i=1$ and level one; adding a node of residue $k$ replaces $m_k$ by $m_k+1$, changing the weight by $-\alpha_k$ and $N_i$ by $-a_{ik}$. [step 2.1, F3, given, algebra]

4.1 Conclusion. The addable-minus-removable count is the level-one Cartan pairing, the sum of the counts is $1$, the central product acts by $q$, and the declared toral action of the partition Fock space is the one required for a level-one module. [step 1.1, step 2.1, step 3.1] ∎
