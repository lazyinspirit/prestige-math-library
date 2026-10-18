---
id: thm-it-qudit-erasure-channel-is-cptp
kind: theorem
title: The finite-dimensional erasure map is a quantum channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-it-qudit-erasure-channel
  - thm-qc-isometry-partial-trace-is-channel
  - def-qc-isometric-stinespring-representation
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-qc-partial-trace
  - def-qc-tensor-register-and-permutation
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the dilation is explicit in finite dimension."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §8.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, §24.7.1"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

For every integer $d\ge1$ and $\epsilon\in[0,1]$, the map $\mathcal E_{d,\epsilon}$ defined in [[def-it-qudit-erasure-channel]] is a finite-dimensional quantum channel.

## Facts & Assumptions

**Given:** A $d$-dimensional complex inner-product space $A$, $d\ge1$, and $\epsilon\in[0,1]$.

[F1] [[def-it-qudit-erasure-channel]]: $B=A\oplus\mathbb C e$ with $e\perp A$, and $\mathcal E_{d,\epsilon}(X)=(1-\epsilon)JXJ^*\oplus\epsilon\operatorname{tr}(X)|e\rangle\langle e|$.

[F2] [[thm-qc-isometry-partial-trace-is-channel]]: if $V:A\to B\otimes E$ is a finite-dimensional linear isometry, then $X\mapsto\operatorname{Tr}_E(VXV^*)$ is a quantum channel.

[F3] [[def-qc-partial-trace]] and [[def-qc-tensor-register-and-permutation]]: partial trace sums matching diagonal environment coordinates in the ordered product basis.

## Proof

1.1 Let $E=A\oplus\mathbb C e_E$ with $e_E$ a unit vector orthogonal to the data summand, and write $J_B,J_E$ for the data inclusions. Define $V_\epsilon x:=\sqrt{1-\epsilon}\,J_Bx\otimes e_E+\sqrt\epsilon\,e\otimes J_Ex$. The summands lie in orthogonal subspaces of $B\otimes E$, so for all $x,y\in A$, $\langle V_\epsilon x,V_\epsilon y\rangle=(1-\epsilon)\langle x,y\rangle+\epsilon\langle x,y\rangle=\langle x,y\rangle$. Thus $V_\epsilon$ is a linear isometry, including at $\epsilon=0$ and $\epsilon=1$. [given, F1, construct, algebra]

2.1 Expanding $V_\epsilon X V_\epsilon^*$ gives two diagonal terms and two cross terms. The first diagonal term is $(1-\epsilon)J_BXJ_B^*\otimes|e_E\rangle\langle e_E|$, whose partial trace over $E$ is $(1-\epsilon)J_BXJ_B^*$. The second is $\epsilon|e\rangle\langle e|\otimes J_EXJ_E^*$, whose partial trace is $\epsilon\operatorname{tr}(X)|e\rangle\langle e|$. Each cross term has a partial-trace coefficient equal to the inner product of the orthogonal erasure flag with the data subspace, hence vanishes. Therefore $\operatorname{Tr}_E(V_\epsilon X V_\epsilon^*)=\mathcal E_{d,\epsilon}(X)$ for every $X$. [F1, F3, step 1.1, algebra]

3.1 By step 1.1, $V_\epsilon$ is an isometry; [F2] says its partial-trace map is completely positive and trace-preserving on the full operator space. Step 2.1 identifies that map with $\mathcal E_{d,\epsilon}$, proving the Statement. [F2, step 1.1, step 2.1] ∎
