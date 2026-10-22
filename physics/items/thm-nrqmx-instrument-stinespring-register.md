---
id: thm-nrqmx-instrument-stinespring-register
kind: theorem
title: "Finite instrument dilation with an outcome register"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-qsm-dt-channel-definition
  - thm-qsm-dt-choi-kraus
dependency_roles:
  def-qsm-dt-channel-definition: mathematical-premise
  thm-qsm-dt-choi-kraus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2, §2.2.2, Theorem 2.22"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
    - title: "Richard Cleve, Quantum Information Processing, QIC 710 course notes, Fall 2023, §§3.3–3.5"
      url: "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F23/Qic710QuantumInformationTheory2023V2.pdf"
---

## Statement

Let $d,e\ge1$ and let $\mathcal A$ be a finite nonempty outcome set. A finite completely positive instrument from $\mathbb C^d$ to $\mathbb C^e$ is a family of completely positive complex-linear maps $I_a:M_d(\mathbb C)\to M_e(\mathbb C)$, indexed by $a\in\mathcal A$, whose sum is trace-preserving. Then there are an integer $q\ge1$, an isometry $V:\mathbb C^d\to\mathbb C^e\otimes\mathbb C^q$, and pairwise orthogonal projections $Q_a$ on $\mathbb C^q$ with $\sum_aQ_a=I_q$ such that, for every $X\in M_d(\mathbb C)$,
$$
I_a(X)=\operatorname{Tr}_E\!\left[(I_e\otimes Q_a)VXV^*(I_e\otimes Q_a)\right].
$$
Here $E=\mathbb C^q$ is the finite register space with its displayed orthonormal basis, and the partial trace is defined on its matrix units by $\operatorname{Tr}_E(Y\otimes|e_{a,r}\rangle\langle e_{b,s}|)=\delta_{(a,r),(b,s)}Y$, extended linearly. The register basis is indexed by the Kraus labels $(a,r)$; a zero outcome map has no labels and corresponds to $Q_a=0$.

## Statement references

[[def-qsm-dt-channel-definition]]

[[thm-qsm-dt-choi-kraus]]

## Facts & Assumptions

**Given:** $d,e\ge1$, a finite nonempty set $\mathcal A$, and completely positive maps $I_a:M_d(\mathbb C)\to M_e(\mathbb C)$ such that $\sum_aI_a$ is trace-preserving.

[A1] The outcome set $\mathcal A$ is finite and nonempty, each $I_a$ is completely positive, and their sum is trace-preserving, exactly as in the Statement.

[F1] [[def-qsm-dt-channel-definition]]: complete positivity means every finite ancilla amplification $\operatorname{id}_r\otimes\Phi$ preserves positive semidefinite matrices; trace preservation means $\operatorname{Tr}\Phi(X)=\operatorname{Tr}X$ for every input matrix.

[F2] [[thm-qsm-dt-choi-kraus]]: every finite completely positive map $\Phi:M_d(\mathbb C)\to M_e(\mathbb C)$ has a finite Kraus representation $\Phi(X)=\sum_rK_rXK_r^*$; for any such representation, $\Phi$ is trace-preserving exactly when $\sum_rK_r^*K_r=I_d$.

## Proof


1.1 By [F1], each $I_a$ is completely positive in the finite matrix sense. Apply [F2] to obtain a finite Kraus family $(K_{a,r})_r$ for it, allowing the empty family for a zero map. Since $\mathcal A$ is finite, these finitely many choices require only finite choice. Put $q=\sum_aq_a$, where $q_a$ is the number of Kraus operators for outcome $a$. [given, A1, F1, F2, construct]

2.1 The combined map $\sum_aI_a$ has Kraus family $(K_{a,r})_{a,r}$ and is trace-preserving by [A1] and [F1]. Thus [F2] gives $\sum_{a,r}K_{a,r}^*K_{a,r}=I_d$. Since $d\ge1$, this identity implies $q\ge1$. [given, A1, F1, F2, step 1.1, algebra]

3.1 Let $(e_{a,r})_{a,r}$ be the standard orthonormal basis of $\mathbb C^q$ indexed by these labels. Define $Vx=\sum_{a,r}K_{a,r}x\otimes e_{a,r}$ and $Q_a=\sum_r|e_{a,r}\rangle\langle e_{a,r}|$. Then $V^*V=\sum_{a,r}K_{a,r}^*K_{a,r}=I_d$, so $V$ is an isometry. Disjoint label sets make the $Q_a$ pairwise orthogonal and their sum $I_q$. [A1, step 2.1, construct, algebra]

4.1 Expanding the sandwich gives $\sum_{r,s}K_{a,r}XK_{a,s}^*\otimes|e_{a,r}\rangle\langle e_{a,s}|$ with both labels restricted to outcome $a$. The partial trace sends each register matrix unit $|e_{a,r}\rangle\langle e_{a,s}|$ to $\delta_{rs}$, leaving $\sum_rK_{a,r}XK_{a,r}^*=I_a(X)$ by step 1.1. This proves the claimed formula. [A1, step 1.1, step 3.1, algebra] ∎

## Remarks

The finite Kraus family in this proof carries both the outcome label and its internal Kraus label. The projection $Q_a$ groups all labels that yield the same outcome; tracing out the register after that projection removes cross terms. The identity is a finite-dimensional algebraic dilation statement and makes no claim about a laboratory apparatus.

The following diagram records the factorization of the displayed map. Its arrows name the maps in the formula; the proof is the matrix expansion in step 4.1 and does not rely on the diagram.

```tikzcd
M_d(\mathbb C)
  \arrow[r, "X\mapsto VXV^*"]
  \arrow[dr, "I_a"']
&
M_e(\mathbb C)\otimes M_q(\mathbb C)
  \arrow[r, "Z\mapsto(I_e\otimes Q_a)Z(I_e\otimes Q_a)"]
&
M_e(\mathbb C)\otimes M_q(\mathbb C)
  \arrow[dl, "\operatorname{Tr}_E"]
\\
& M_e(\mathbb C)
```
