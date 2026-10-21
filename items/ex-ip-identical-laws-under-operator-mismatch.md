---
id: ex-ip-identical-laws-under-operator-mismatch
kind: example
title: Distinct truths and operators with identical noisy data laws
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-operator-and-prior-mismatch
  - thm-ip-no-uniform-recovery-under-unrestricted-operator-mismatch
  - lem-real-line-is-a-metric-space
justified_by: []
proof_strategy: direct
axiom_use: "No choice principle is used."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let the truth space and target space both be $\mathbb R$ with their absolute-value metric, and take the action sigma-algebra to be the power set $\mathcal P(\mathbb R)$, so every absolute metric-loss section is measurable. Let the admissible truth/operator pairs be $\mathbb R\times\{A_0,A_1\}$ and take target map $q(x)=x$. Define the linear forward operators $A_0(x)=x$ and $A_1(x)=x/2$. Equip the data space $\mathbb R$ with its power-set sigma-algebra and usual addition, so every translation is measurable, and let $\nu$ be any probability measure on that measurable space, for example the Dirac measure at $0$. The specifications $(1,A_0,\nu)$ and $(2,A_1,\nu)$ have the same data law, since both forward signals equal $1$, while their targets are distance $1$ apart. Every randomized decision rule into the stated action space therefore has maximum expected absolute loss at least $1/2$.

## Facts & Assumptions

**Given:** The truth/target space $\mathbb R$, the two admissible linear operators, the additive measurable data space, the common noise law $\nu$, and the target map in the Example.

[F1] [[def-ip-operator-and-prior-mismatch]]: the sampling law of an additive-noise specification is the law of the measurable random element $e\mapsto F_A(x)+e$ under $\nu$.

[F2] [[thm-ip-no-uniform-recovery-under-unrestricted-operator-mismatch]]: if two specifications have the same sampling law and targets at distance $\Delta$, every randomized decision rule has maximum expected metric risk at least $\Delta/2$.

[F3] [[lem-real-line-is-a-metric-space]]: the absolute-value distance on $\mathbb R$ is a metric, with triangle inequality.


## Verification

1.1 Every translation of $\mathbb R$ is measurable for its power-set sigma-algebra, since every preimage is a subset of $\mathbb R$. For every $B\in\mathcal Y$, the law formulas from [F1] give $P_{1,A_0,\nu}(B)=\nu(\{e:1+e\in B\})=P_{2,A_1,\nu}(B)$ because $A_0(1)=1=A_1(2)$. Thus the two sampling laws are equal. [given, F1, algebra]

2.1 For each $t\in\{1,2\}$ and each Borel set $B\subseteq[0,+\infty]$, the preimage $\{a\in\mathbb R:|t-a|\in B\}$ is a subset of $\mathbb R$ and hence belongs to the action sigma-algebra $\mathcal P(\mathbb R)$. Thus both loss sections are measurable. The target separation is $|q(1)-q(2)|=|1-2|=1$ by [F3]. Applying [F2] to step 1.1 gives maximum expected absolute loss at least $1/2$. [given, F2, F3, step 1.1, algebra] ∎
