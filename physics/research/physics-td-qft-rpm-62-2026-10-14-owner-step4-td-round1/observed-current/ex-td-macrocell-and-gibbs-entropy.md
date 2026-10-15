---
id: ex-td-macrocell-and-gibbs-entropy
kind: example
domain: physics
library: physics
title: A macrocell count and a nonuniform microscopic distribution
status: draft
origin: pipeline
dependency_level: 6
deps:
  - def-td-macro-versus-micro-entropy-claim
  - def-td-si-quantities
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-finite-sum
dependency_roles:
  def-td-macro-versus-micro-entropy-claim: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  def-finite-sum: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: A stipulated two-microstate finite model with a nonuniform probability vector; it is not an equilibrium preparation, measurement or empirical claim.
sources:
  references: []
---

## Example

Let $\Omega=\{\omega_1,\omega_2\}$, put both states in one macrocell $M_m=\Omega$, and assign $p_1=1,\ p_2=0$. The model is deliberately nonuniform. It shows that the macrocell-count definition and the Gibbs–Shannon definition can take different values on separately specified inputs.

## Facts & Assumptions

**Given:** The finite model below and the entropy definitions.

[F1] [[def-td-macro-versus-micro-entropy-claim]]: $S_{\mathrm B}(m)=k_{\mathrm B}\log N_m$, while $S_{\mathrm G}(p)=-k_{\mathrm B}\sum_i p_i\log p_i$, with the zero-probability summand defined as zero.

[F2] [[def-td-si-quantities]]: $k_{\mathrm B}=1.380649\times10^{-23}\,\mathrm{J\,K^{-1}}>0$.

[L1] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing on $(0,\infty)$ and $\log 1=0$.

[A1] The two states share the single label $m$, so $N_m=2$, and $p=(1,0)$ is a probability vector.

## Verification

**Given:** [F1]–[F2], [L1], and [A1].

1.1 Since $N_m=2$, the macrocell entropy is $S_{\mathrm B}(m)=k_{\mathrm B}\log 2$. [F1, A1, algebra]

1.2 The only nonzero probability term is $1\log1=0$; the $p_2=0$ term is zero by definition. Hence $S_{\mathrm G}(p)=0$. [F1, L1, A1, algebra]

2.1 Since $2>1$, [L1] gives $\log2>\log1=0$. With $k_{\mathrm B}>0$ from [F2], step 1.1 is strictly positive while step 1.2 is zero, so these two defined quantities differ in this model. This example asserts no general inequality or thermodynamic identification. [F2, L1, step 1.1, step 1.2, algebra] ∎
