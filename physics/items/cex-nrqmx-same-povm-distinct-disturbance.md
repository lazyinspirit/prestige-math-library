---
id: cex-nrqmx-same-povm-distinct-disturbance
kind: counterexample
title: "Outcome probabilities do not determine the state update"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - thm-nrqmx-instrument-stinespring-register
  - lem-nrqm-composites-finite-effects-and-instruments
  - thm-qsm-dt-choi-kraus
dependency_roles:
  thm-nrqmx-instrument-stinespring-register: mathematical-premise
  lem-nrqm-composites-finite-effects-and-instruments: mathematical-premise
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
    - title: "Richard Cleve, Quantum Information Processing, QIC 710 course notes, Fall 2023, §§3.3–3.5"
      url: "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F23/Qic710QuantumInformationTheory2023V2.pdf"
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2, §2.1.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
---

## Statement refuted

For finite quantum instruments on $\mathbb C^2$, equality of all outcome effects forces equality of the outcome update maps on every input matrix.

## Statement references

[[thm-nrqmx-instrument-stinespring-register]]

[[lem-nrqm-composites-finite-effects-and-instruments]]

## Facts & Assumptions

**Given:** The standard basis $|0\rangle,|1\rangle$ of $\mathbb C^2$, the associated projections $P_a=|a\rangle\langle a|$, and $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$.

[A1] The state $\rho=P_0$ and the Kraus families are exactly those specified in the Counterexample.

[F1] [[lem-nrqm-composites-finite-effects-and-instruments]]: Kraus operators $M_{a,r}$ define effects $E_a=\sum_rM_{a,r}^*M_{a,r}$ and outcome maps $I_a(\rho)=\sum_rM_{a,r}\rho M_{a,r}^*$; the family is normalized when all effects sum to $I$.

[F2] [[thm-nrqmx-instrument-stinespring-register]]: a finite family of completely positive outcome maps whose sum is trace-preserving admits the finite orthogonal outcome-register dilation proved on the A page.

[F3] [[thm-qsm-dt-choi-kraus]]: a finite Kraus representation defines a completely positive map, and the map is trace-preserving when the Kraus adjoint products sum to identity.

## Counterexample

Consider the two-outcome sharp measurement $P_0,P_1$. The Lüders instrument has one Kraus operator $M^L_a=P_a$ per outcome. The measure-and-prepare instrument has $M^R_a=|+\rangle\langle a|$ per outcome. Both have effects $E_0=P_0,E_1=P_1$, but their update maps differ on the input $\rho=P_0$.

1.1 Since $P_a^*=P_a=P_a^2$, the Lüders Kraus operators have $M^{L*}_aM^L_a=P_a$. For the other family, $M^{R*}_aM^R_a=(|a\rangle\langle+|)(|+\rangle\langle a|)=\langle+|+\rangle P_a=P_a$, since the displayed normalized vector satisfies $\langle+|+\rangle=1$. Thus both families are normalized, with the same outcome effects, because $P_0+P_1=I$. [given, A1, F1, algebra]

2.1 By [F3], the one-operator Kraus forms give completely positive maps, and their sum is trace-preserving because the combined adjoint products sum to identity by step 1.1. Hence both are finite instruments in the sense of the A-page theorem, and each admits its stated outcome-register dilation by [F2]. [A1, F2, F3, step 1.1, algebra]

3.1 On $\rho=P_0$, the Lüders update for outcome $0$ is $I^L_0(P_0)=P_0$, whereas the other update is $I^R_0(P_0)=|+\rangle\langle+|$. These matrices differ: $P_0=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and $|+\rangle\langle+|=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$. The outcome probabilities are nevertheless identical, $\operatorname{Tr}(P_0P_0)=1$ and $\operatorname{Tr}(P_0P_1)=0$. This refutes the statement. [A1, F1, step 1.1, step 2.1, algebra] ∎ 

