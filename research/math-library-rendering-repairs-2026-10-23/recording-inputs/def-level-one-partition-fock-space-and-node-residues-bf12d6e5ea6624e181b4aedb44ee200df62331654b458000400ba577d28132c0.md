---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-level-one-partition-fock-space-and-node-residues.json
  precheck: pass
id: def-level-one-partition-fock-space-and-node-residues
kind: definition
title: "The level-one partition Fock space and node residues"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 13
deps: [lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas,
       def-partition-young-diagram-and-conjugate-partition,
       def-removable-and-addable-nodes-of-a-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.9-3.10, printed pp. 23-24: the direct limit, the basis $|\\lambda\\rangle$ and the node formulas (38)-(39)."
    - title: "Kailash C. Misra and Tetsuji Miwa, Crystal base for the basic representation of $U_q(\\mathfrak{sl}(n))$, Comm. Math. Phys. 134 (1990), 79-88"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-134/issue-1/Crystal-base-for-the-basic-representation-of-U_qgerm-sgerm-ln/cmp/1104201614.pdf"
      locator: "sec. 2, printed pp. 80-82: colored Young diagrams, the weight formula and the $n$-regular/$n$-restricted partition conventions."
    - title: "Matthew Fayers, Partition models for the crystal of the basic $U_q(\\mathfrak{sl}_n)$-module, arXiv:0906.4129"
      url: "https://arxiv.org/pdf/0906.4129"
      locator: "sec. 2, printed pp. 2-4: $n$-regular and $n$-restricted label sets and the sign-reduction comparison."
---

## Definition

Let $F:=\bigoplus_{\lambda}\mathbb Q(q)|\lambda\rangle$ be the charge-$0$ part of
the Fock space of
[[lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas]],
with basis indexed by all partitions and with the node operators $F_i,E_i$
defined by the stable finite-prefix action. Assign to $|\lambda\rangle$ the
**level-one weight**

$$\mathrm{wt}(|\lambda\rangle):=\Lambda_0-\sum_{i\in I}m_i(\lambda)\,\alpha_i, \qquad m_i(\lambda):=\#\{\text{cells of }\lambda\text{ of residue }i\},$$

where the **residue** of a cell in row $r$ and column $c$ is $c-r\bmod e$, and
the **size** $|\lambda|$ is the separate grading. The vacuum is the empty
partition $\varnothing$; $F_i$ adds and $E_i$ removes a node by the explicit
finite node formulas of the same item. The toral action is
$K_i|\lambda\rangle=q^{N_i(\lambda)}|\lambda\rangle$ with $N_i$ the
addable-minus-removable count, proved to be the Cartan pairing in
[[lem-the-node-count-is-the-level-one-cartan-pairing]], and
$K_d|\lambda\rangle=q^{-m_0(\lambda)}|\lambda\rangle$.

A partition is **$e$-regular** if each positive part occurs with multiplicity
$<e$, and **$e$-restricted** if $\lambda_r-\lambda_{r+1}<e$ for every $r\ge1$
(with $\lambda_{r}=0$ beyond the length). These operators are declared linear
endomorphisms here; the affine relations proved later establish the actual
module structure, so nothing about $F$ is silently assumed in this Definition.

## Facts & Assumptions

**Given:** The charge-$0$ Fock space with its partition basis, the node formulas and the toral and loop actions, and the residue convention $c-r\bmod e$.

[F1] Normal wedges are bijective with partitions through $i_k=\lambda_k-k+1$, and the stable finite-prefix action gives the finite node formulas for $F_i,E_i,K_i,K_d$ ([[lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas]]).

[F2] A removable node of $\lambda$ is a cell $(r,\lambda_r)$ with $\lambda_r>\lambda_{r+1}$, and an addable node is $(r,\lambda_r+1)$ with $r=1$ or $\lambda_{r-1}>\lambda_r$; the conjugate partition $\lambda'$ has $\lambda'_j=\#\{r:\lambda_r\ge j\}$ ([[def-removable-and-addable-nodes-of-a-partition]], [[def-partition-young-diagram-and-conjugate-partition]]).

## Verification

**Proof technique:** transport the wedge basis to partitions, read the residues off the corners, and compare the multiplicity and difference conditions through conjugation.

1.1 The partition basis and the declared operators. By [F1] the map $\lambda\mapsto|\lambda\rangle$ is a bijection from partitions to normal semi-infinite words and the stable prefix action gives well-defined linear $F_i,E_i,K_i,K_d$; the weights, residues and size grading are read off literally from $i_k=\lambda_k-k+1$, so the Definition introduces no new structure beyond the wedge construction. [F1, given, algebra]

1.2 The regular/restricted equivalence. For each $r\ge1$, the number of columns of $\lambda$ of height exactly $r$ is $\lambda_r-\lambda_{r+1}$: such a column has index $c$ with $\lambda_{r+1}<c\le\lambda_r$. These column heights are the parts of $\lambda'$. Thus $\lambda$ is $e$-restricted exactly when every part of $\lambda'$ has multiplicity less than $e$, equivalently when $\lambda'$ is $e$-regular. Column height itself is unrestricted; for example $(1^e)$ has one column of height $e$ and its only nonzero adjacent row difference is $1<e$. [F2, given, algebra]

2.1 The boundary example. For $e\ge2$ the partition $(1^e)$ has parts of multiplicity exactly $e$, so it is not $e$-regular, while its adjacent differences are $0$ except for the final difference $1<e$, so it is $e$-restricted; this shows the two conditions are genuinely different and that the full Fock space contains non-regular labels. All partitions are vertices of the full Fock module; the regular ones will be the labels of the empty component. [step 1.2, given, algebra]

3.1 Conclusion. The level-one partition Fock space is the charge-$0$ Fock space with weight $\Lambda_0-\sum_im_i\alpha_i$ and residues $c-r\bmod e$, its operators are the stable finite-prefix node operators, and the $e$-regular and $e$-restricted conventions are conjugate to each other with the column-height dictionary. [step 1.1, step 1.2, step 2.1] ∎


## Remarks

For $e=3$ and $\lambda=(3,2)$, the English diagram below labels each cell
by its residue $c-r\bmod 3$. Rows increase downward and columns rightward.
Circled entries are removable nodes; dashed boxes marked $A_i$ are addable
nodes of residue $i$, outside the original diagram.

```tikz
\begin{tikzpicture}[x=1.05cm,y=1.05cm]
\draw (0,0) rectangle (1,-1);
\draw (1,0) rectangle (2,-1);
\draw (2,0) rectangle (3,-1);
\draw (0,-1) rectangle (1,-2);
\draw (1,-1) rectangle (2,-2);
\node at (0.5,-0.5) {$0$};
\node at (1.5,-0.5) {$1$};
\node at (2.5,-0.5) {$2$};
\node at (0.5,-1.5) {$2$};
\node at (1.5,-1.5) {$0$};
\draw (2.5,-0.5) circle (0.28);
\draw (1.5,-1.5) circle (0.28);
\draw[dashed] (3,0) rectangle (4,-1);
\draw[dashed] (2,-1) rectangle (3,-2);
\draw[dashed] (0,-2) rectangle (1,-3);
\node at (3.5,-0.5) {$A_0$};
\node at (2.5,-1.5) {$A_1$};
\node at (0.5,-2.5) {$A_1$};
\node at (0.5,0.45) {$c=1$};
\node at (1.5,0.45) {$2$};
\node at (2.5,0.45) {$3$};
\node at (3.5,0.45) {$4$};
\node at (-0.65,-0.5) {$r=1$};
\node at (-0.65,-1.5) {$2$};
\node at (-0.65,-2.5) {$3$};
\end{tikzpicture}
```

Indeed, [F2] gives removable nodes $(1,3),(2,2)$ and addable nodes
$(1,4),(2,3),(3,1)$. Their residues are respectively $2,0$ and $0,1,1$.
The five original cells give $(m_0,m_1,m_2)=(2,1,2)$ in the weight formula.
This illustration records the indexing and corners only; the verification
and the node-action formulas remain independent of the picture.
