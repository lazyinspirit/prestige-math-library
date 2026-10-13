---
id: ex-level-one-fock-node-actions-for-partitions-up-to-three
kind: example
title: "Node actions for partitions of size at most three"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 18
deps: [def-the-node-order-and-n-i-exponents-for-fock-space, def-level-one-partition-fock-space-and-node-residues, thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations,
       def-removable-and-addable-nodes-of-a-partition, lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas, lem-the-node-count-is-the-level-one-cartan-pairing]
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
    - title: "Bernard Leclerc, Fock space representations (complete author-hosted 38-page body)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.10, printed pp. 23-24: formulas (38)-(39) and Exercise 15 for $n=2$."
    - title: "Bernard Leclerc and Jean-Yves Thibon, Canonical bases of q-deformed Fock spaces, arXiv:q-alg/9602025"
      url: "https://arxiv.org/pdf/q-alg/9602025"
      locator: "sec. 2, printed pp. 2-3: node action (3)-(4)."
    - title: "Matthew Fayers, Partition models for the crystal of the basic $U_q(\\mathfrak{sl}_n)$-module, arXiv:0906.4129"
      url: "https://arxiv.org/pdf/0906.4129"
      locator: "sec. 2, printed pp. 2-4: signature reduction used for the normalized arrows."
---

## Example

For charge $0$ the following tables give all $E_i,F_i$ actions on the standard
partition vectors of size $\le3$ (outputs of size $4$ included) and all Cartan
exponents $N_i=\#\text{addable}_i-\#\text{removable}_i$. A shape denotes its
standard vector; omitted terms have coefficient $0$. Entries are ordered
$i=0,\dots,e-1$.

**$e=2$:**

| shape | $N$ | $F$ | $E$ |
|---|---|---|---|
| $\varnothing$ | $(1,0)$ | $(\,(1)\,,\ 0\,)$ | $(0,0)$ |
| $(1)$ | $(-1,2)$ | $(\,0,\ (2)+q(1,1)\,)$ | $(\,\varnothing,\ 0\,)$ |
| $(2)$ | $(1,0)$ | $(\,(3)\,,\ q^{-1}(2,1)\,)$ | $(\,0,\ q^{-1}(1)\,)$ |
| $(1,1)$ | $(1,0)$ | $(\,(1,1,1)\,,\ (2,1)\,)$ | $(\,0,\ (1)\,)$ |
| $(3)$ | $(-1,2)$ | $(\,0,\ (4)+q(3,1)\,)$ | $(\,(2)\,,\ 0\,)$ |
| $(2,1)$ | $(3,-2)$ | $(\,(3,1)+q(2,2)+q^2(2,1,1)\,,\ 0\,)$ | $(\,0,\ (2)+q(1,1)\,)$ |
| $(1,1,1)$ | $(-1,2)$ | $(\,0,\ (2,1,1)+q(1,1,1,1)\,)$ | $(\,(1,1)\,,\ 0\,)$ |

**$e=3$:**

| shape | $N$ | $F$ | $E$ |
|---|---|---|---|
| $\varnothing$ | $(1,0,0)$ | $(\,(1),0,0\,)$ | $(0,0,0)$ |
| $(1)$ | $(-1,1,1)$ | $(\,0,(2),(1,1)\,)$ | $(\,\varnothing,0,0\,)$ |
| $(2)$ | $(0,-1,2)$ | $(\,0,0,(3)+q(2,1)\,)$ | $(\,0,(1),0\,)$ |
| $(1,1)$ | $(0,2,-1)$ | $(\,0,(2,1)+q(1,1,1),0\,)$ | $(\,0,0,(1)\,)$ |
| $(3)$ | $(1,0,0)$ | $(\,(4),0,q^{-1}(3,1)\,)$ | $(\,0,0,q^{-1}(2)\,)$ |
| $(2,1)$ | $(1,0,0)$ | $(\,(2,2),q^{-1}(2,1,1),(3,1)\,)$ | $(\,0,q^{-1}(1,1),(2)\,)$ |
| $(1,1,1)$ | $(1,0,0)$ | $(\,(1,1,1,1),(2,1,1),0\,)$ | $(\,0,(1,1),0\,)$ |

In both tables $\sum_iN_i=1$ and $K_i$ acts by $q^{N_i}$, so the central product
acts by $q$. The normalized crystal arrows on the same residues are computed
separately by signature reduction; a minimal exponent of ordinary $F$ is not
their definition. The source calibration is Leclerc Exercise 15 at $e=2$:
$F_0|3,1\rangle=q^{-1}|3,2\rangle+|3,1,1\rangle$ and
$E_0|3,1\rangle=q^{-2}|2,1\rangle$.

## Facts & Assumptions

**Given:** The charge-$0$ partition Fock space with its node formulas and the content order, and all partitions of size $\le3$.

[F1] $F_i|\lambda\rangle=\sum_\gamma q^{N_i^r(\lambda,\gamma)}|\lambda+\gamma\rangle$ over addable $i$-nodes $\gamma$, and $E_i|\mu\rangle=\sum_\gamma q^{-N_i^l(\mu-\gamma,\mu)}|\mu-\gamma\rangle$ over removable $i$-nodes, with the signed counts of [[def-the-node-order-and-n-i-exponents-for-fock-space]]; the counts are taken in the smaller diagram ([[lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas]]).

[F2] Addable nodes are $(r,\lambda_r+1)$ with $r=1$ or $\lambda_{r-1}>\lambda_r$; removable nodes are $(r,\lambda_r)$ with $\lambda_r>\lambda_{r+1}$; the residue is $c-r\bmod e$ ([[def-removable-and-addable-nodes-of-a-partition]], [[def-level-one-partition-fock-space-and-node-residues]]).

[F3] $N_i(\lambda)=\#\text{addable}_i-\#\text{removable}_i$ and $\sum_iN_i=1$ ([[lem-the-node-count-is-the-level-one-cartan-pairing]]).

## Verification

1.1 Every listed entry is a direct finite evaluation of [F1] on the partitions of size $\le3$. For $e=2$: at $(1)$ the addable $1$-nodes are $(1,2)$ (content $1$) and $(2,1)$ (content $-1$), with signed counts $0$ and $1$, giving $F_1|1\rangle=|2\rangle+q|1,1\rangle$ and $N=(-1,2)$; at $(2)$ the $0$-addable cell $(1,3)$ has exponent $0$ and the $1$-addable cell $(2,1)$ has signed count $-1$, giving $F_0|2\rangle=|3\rangle$, $F_1|2\rangle=q^{-1}|2,1\rangle$, $E_1|2\rangle=q^{-1}|1\rangle$; at $(2,1)$ the three $0$-addable cells $(1,3),(2,2),(3,1)$ have signed counts $0,1,2$, giving $F_0|2,1\rangle=|3,1\rangle+q|2,2\rangle+q^2|2,1,1\rangle$, while the two $1$-removable-node computations give $E_1|2,1\rangle=|2\rangle+q|1,1\rangle$ and $N=(3,-2)$; at $(3)$ the node $(4)$ has count $0$ and $(3,1)$ count $1$, giving $F_1|3\rangle=|4\rangle+q|3,1\rangle$; at $(1,1,1)$ the signed counts $0$ and $1$ give $F_1|1,1,1\rangle=|2,1,1\rangle+q|1,1,1,1\rangle$; the empty and $(1,1)$ rows are immediate. [F1, F2, given, algebra]

1.2 The $e=3$ table is evaluated the same way: at $(2)$ the $2$-addable nodes $(3)$ and $(2,1)$ have counts $0$ and $1$, so $F_2|2\rangle=|3\rangle+q|2,1\rangle$, and $E_1|2\rangle=|1\rangle$; at $(1,1)$ the $1$-addable nodes give $F_1|1,1\rangle=|2,1\rangle+q|1,1,1\rangle$ and $E_2|1,1\rangle=|1\rangle$; at $(3)$ the $2$-addable node $(3,1)$ has count $-1$ and $E_2|3\rangle=q^{-1}|2\rangle$; at $(2,1)$ the counts give $F_0|2,1\rangle=|2,2\rangle$, $F_1|2,1\rangle=q^{-1}|2,1,1\rangle$, $F_2|2,1\rangle=|3,1\rangle$ and $E_1|2,1\rangle=q^{-1}|1,1\rangle$, $E_2|2,1\rangle=|2\rangle$; at $(1,1,1)$ one gets $F_0|1,1,1\rangle=|1,1,1,1\rangle$, $F_1|1,1,1\rangle=|2,1,1\rangle$. [F1, F2, given, algebra]

2.1 Cartan exponents and Calibration. The $N$ columns are computed from the addable/removable counts and satisfy $\sum_iN_i=1$ by [F3]; the $e=2$ entries at $(3,1)$ reproduce the source calibration $F_0|3,1\rangle=q^{-1}|3,2\rangle+|3,1,1\rangle$, $E_0|3,1\rangle=q^{-2}|2,1\rangle$ when evaluated by the same formulas on the size-$4$ shape $(3,1)$ (its addable/removable data is used in both calibration formulas and lies outside the displayed size-$\le3$ table). [step 1.1, F1, F3, algebra]

3.1 Conclusion. The tables list all ordinary $E_i,F_i$ actions on all standard vectors of size $\le3$ for $e=2,3$ with their Cartan exponents, they are derived from the node formulas rather than copied from a printed table, and the normalized crystal arrows on the same residues are computed separately by signature reduction. [step 1.1, step 1.2, step 2.1] ∎
