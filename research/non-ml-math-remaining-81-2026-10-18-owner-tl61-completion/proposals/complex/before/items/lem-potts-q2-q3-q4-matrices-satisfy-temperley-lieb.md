---
id: lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb
kind: lemma
title: "The Q = 2, 3, 4 open Potts matrices satisfy Temperley–Lieb"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-potts-open-chain-clock-shift-representation
  - def-temperley-lieb-generator-presentation
justified_by: []
aliases: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. Nichols, The Temperley-Lieb Algebra and its Generalizations in the Potts and XXZ Models"
      url: "https://arxiv.org/pdf/hep-th/0509069"
      locator: "§2.1.2–2.1.4, equations (2.4), (2.6)–(2.10), PDF pp. 4–6: the clock-shift matrices and loop parameters; local projector proof below."
    - title: "David Penneys, Exercises in Quantum Algebra"
      url: "https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf"
      locator: "Chapter 2, §§2.1.1–2.1.4, PDF pp. 4–6: diagram and loop normalization."
---

## Statement

For each $Q\in\{2,3,4\}$, the operators $e_i$ defined in [[def-potts-open-chain-clock-shift-representation]] satisfy $e_i^2=\sqrt Q\,e_i$, $e_i e_{i+1}e_i=e_i=e_{i+1}e_i e_{i+1}$, and commute at distance greater than one. Their loop parameter is $\delta=\sqrt Q=q+q^{-1}$ with the separate $q$ values given there.

## Facts & Assumptions

**Given:** $Q\in\{2,3,4\}$ and the clock, shift, and generator definitions of [[def-potts-open-chain-clock-shift-representation]].

[F1] $R_Q|a\rangle=\omega_Q^a|a\rangle$, $M_Q|a\rangle=|a-1\pmod Q\rangle$, and $R_Q^Q=M_Q^Q=I$. ([[def-potts-open-chain-clock-shift-representation]])

[F2] The presented Temperley–Lieb relations have loop parameter $\delta$ and the two adjacent triple products equal the generator. ([[def-temperley-lieb-generator-presentation]])

## Proof

**Given:** The finite clock-shift operators in [F1].

1.1 Let $P=Q^{-1}\sum_{r=0}^{Q-1}M_Q^r=|+\rangle\langle+|$, where $|+\rangle=Q^{-1/2}\sum_a|a\rangle$, and let $D=\sum_a|aa\rangle\langle aa|$. The finite geometric sum gives $P^2=P$; orthogonality of the $R_Q$ eigenvalues gives $Q^{-1}\sum_r R_{Q,1}^rR_{Q,2}^{-r}=D$, since its action on $|ab\rangle$ is $Q^{-1}\sum_r\omega_Q^{r(a-b)}|ab\rangle$, equal to $1$ if $a=b$ and $0$ otherwise. Thus odd and even generators are $\sqrt Q P_j$ and $\sqrt Q D_{j,j+1}$. Their idempotence gives $e_i^2=\sqrt Q e_i$. [F1, construct]

2.1 On three sites, $P_1D_{12}P_1=Q^{-1}P_1$ and $D_{12}P_2D_{12}=Q^{-1}D_{12}$. For the first identity, $P|a\rangle=Q^{-1/2}|+\rangle$ and $\langle a|P|a\rangle=Q^{-1}$, so summing $P|a\rangle\langle a|P$ over the second-site labels yields $Q^{-1}P_1$. For the second, $P_2|a\rangle=Q^{-1}\sum_b|b\rangle$ and $D_{12}$ retains only the term $b=a$, giving coefficient $Q^{-1}$ on each $|aa\rangle$. Multiplying each identity by $(\sqrt Q)^3$ proves both adjacent triple relations. [F1, step 1.1, algebra]

3.1 Odd generators on distinct sites commute because they act on disjoint factors. Every even generator is a sum of products of the diagonal matrices $R_Q$ on its two sites, so any two even generators commute, including when their bonds overlap in one site. An odd and an even generator whose indices differ by more than one have disjoint supports, so commute. Finally $\sqrt2=2\cos(\pi/4)$, $\sqrt3=2\cos(\pi/6)$, and $2=2\cos0$, verifying the three declared $q$ normalizations. These are exactly the relations in [F2]. [F1, F2, step 1.1, step 2.1, algebra] ∎
