---
id: ex-td-macrocell-and-gibbs-entropy
kind: example
domain: physics
library: physics
title: A macrocell count and a nonuniform microscopic distribution
status: published
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
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Let $\Omega=\{\omega_1,\omega_2\}$ with $\omega_1\ne\omega_2$, and declare the finite numerical energy map $\epsilon:\Omega\to\mathbb R$ by $\epsilon(\omega_1)=\epsilon(\omega_2)=0$, so the assigned physical energies are $E(\omega_i)=0\,\mathrm J$. This supplies the finite microstate pair $(\Omega,\epsilon)$ required in [[def-td-macro-versus-micro-entropy-claim]]; no mechanical internal-energy or equilibrium-macrostate identification is assumed. Choose $\mathcal M=\{m\}$ and the constant coarse-graining map $\pi:\Omega\to\mathcal M$, so both states belong to the macrocell $M_m=\Omega$, and assign $p_1=1,\ p_2=0$. The probability vector is deliberately nonuniform. The example shows that the macrocell-count definition and the Gibbs–Shannon definition can take different values on separately specified inputs.

## Facts & Assumptions

**Given:** The finite model below and the entropy definitions.

[F1] [[def-td-macro-versus-micro-entropy-claim]]: $S_{\mathrm B}(m)=k_{\mathrm B}\log N_m$, while $S_{\mathrm G}(p)=-k_{\mathrm B}\sum_i p_i\log p_i$, with the zero-probability summand defined as zero.

[F2] [[def-td-si-quantities]]: $k_{\mathrm B}=1.380649\times10^{-23}\,\mathrm{J\,K^{-1}}>0$.

[L1] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing on $(0,\infty)$ and $\log 1=0$.

[A1] The two states are distinct, $\epsilon:\Omega\to\mathbb R$ is identically zero, and $\pi:\Omega\to\{m\}$ is constant. Thus $M_m=\Omega$ has $N_m=2$, and $p=(1,0)$ is a probability vector.

## Verification

**Given:** [F1]–[F2], [L1], and [A1].

1.1 Since $N_m=2$, the macrocell entropy is $S_{\mathrm B}(m)=k_{\mathrm B}\log 2$. [F1, A1, algebra]

1.2 The only nonzero probability term is $1\log1=0$; the $p_2=0$ term is zero by definition. Hence $S_{\mathrm G}(p)=0$. [F1, L1, A1, algebra]

2.1 Since $2>1$, [L1] gives $\log2>\log1=0$. With $k_{\mathrm B}>0$ from [F2], step 1.1 is strictly positive while step 1.2 is zero, so these two defined quantities differ in this model. This example asserts no general inequality or thermodynamic identification. [F2, L1, step 1.1, step 1.2, algebra] ∎
