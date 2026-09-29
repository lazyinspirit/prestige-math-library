---
id: lem-robust-edge-circuit-has-distance-gap
kind: lemma
title: "A violated decoded edge is far from edge-circuit acceptance"
status: published
origin: pipeline
deps:
  - def-robust-codeword-blocks-for-constraint-graphs
  - def-assignment-tester-and-rejection-ratio
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification, §5 proof of Lemma 1.8, printed pp. 18–19"
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Use the code $C:\Sigma\to\{0,1\}^{\ell}$ and edge circuit $E_{R_e}$ of
[[def-robust-codeword-blocks-for-constraint-graphs]], where $\Sigma$ is finite,
ordered, $|\Sigma|=W\ge2$, and distinct codewords have relative distance
$\delta=1/2$. For any physical block $B_v\in\{0,1\}^{\ell}$ at each graph
vertex, decode $B_v$ to a closest codeword, breaking ties by the fixed alphabet
order, and write the decoded label as $a_v$. Regard the $2\ell$ formal input
bits of $E_{R_e}$ as all named inputs, so its accepting set is
$\operatorname{SAT}(E_{R_e})\subseteq\{0,1\}^{2\ell}$. Measure relative
Hamming distance on these $2\ell$ bits and use distance $1$ when the accepting
set is empty, as in [[def-assignment-tester-and-rejection-ratio]].

If edge $e=(v,w)$ is violated by the decoded labels, then
$$\operatorname{dist}_{\rm rel}\bigl((B_v,B_w),\operatorname{SAT}(E_{R_e})\bigr)\ge \frac{\delta}{4}=\frac18.$$
For a loop $v=w$, the displayed input is $(B_v,B_v)$ and the same bound holds.

## Facts & Assumptions

**Given:** A finite ordered alphabet with $W\ge2$, its Walsh–Hadamard code
blocks, an edge circuit, and arbitrary physical blocks at its vertices.

[F1] The selected codewords are injective and every two distinct codewords
have relative distance $\delta=1/2$.
([[def-robust-codeword-blocks-for-constraint-graphs]])

[F2] The edge circuit accepts exactly pairs of valid codewords whose decoded
labels lie in the ordered edge relation $R_e$.
([[def-robust-codeword-blocks-for-constraint-graphs]])

[F3] Distance from a named input to a circuit's accepting inputs is relative
Hamming distance, with value $1$ when the accepting set is empty.
([[def-assignment-tester-and-rejection-ratio]])

## Proof

1.1 For each block $B_v$, the fixed alphabet order makes its nearest valid codeword label $a_v$ deterministic; a minimizer exists because $\Sigma$ is finite and nonempty. For every $a'\ne a_v$, nearestness and the triangle inequality give $\delta\ell\le d_H(C(a_v),C(a'))\le d_H(C(a_v),B_v)+d_H(B_v,C(a'))\le2d_H(B_v,C(a'))$. Hence every changed decoded label has $d_H(B_v,C(a'))\ge\delta\ell/2=\ell/4$. [F1, given, construct, algebra]

2.1 Suppose $(a_v,a_w)\notin R_e$. By [F2], every accepting formal input $(X,Y)$ is $(C(a'),C(b'))$ for some $(a',b')\in R_e$, so at least one decoded endpoint changes. By step 1.1, the corresponding formal block differs from the actual block by at least $\ell/4$ bits; division by the $2\ell$ formal input bits gives relative distance at least $\delta/4=1/8$. If $v=w$, the actual formal pair is $(B_v,B_v)$ and the violated loop pair is $(a_v,a_v)\notin R_e$, so every accepting pair still changes at least one of the two decoded labels and the same bound applies to that formal block. If there are no accepting inputs, [F3] sets the distance to $1\ge1/8$. [F2, F3, step 1.1, construct, algebra, discharge-construct] ∎
