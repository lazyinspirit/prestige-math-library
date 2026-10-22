---
id: ex-nrqmx-boost-interferometric-phase
kind: example
domain: mathematics
title: Boost-translation loop phase
status: draft
origin: pipeline
dependency_level: 2
deps:
  - thm-nrqmx-boost-translation-cocycle
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  thm-nrqmx-boost-translation-cocycle: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Domenico Giulini, On Galilei Invariance in Quantum Mechanics and the Bargmann Superselection Rule, §1, pp. 3–8
      url: https://arxiv.org/pdf/quant-ph/9508002
---

## Example

Assume AC and Countable Choice. For $d\ge1$, $m>0$, $\hbar>0$, and $a,v\in\mathbb R^d$, the loop $B_m(v)T(a)B_m(v)^*T(a)^*$ on $L^2(\mathbb R^d)$ equals $e^{imv\cdot a/\hbar}I$. The phase is global on a single branch. In the explicitly defined two-arm path model below, applying the loop to exactly one arm changes the squared overlap with the recombining path state.

## Example references

[[thm-nrqmx-boost-translation-cocycle]]

## Facts & Assumptions

**Given:** $d\ge1$, $m>0$, $\hbar>0$, vectors $a,v\in\mathbb R^d$, and the translation and modulation operators of the mathematical model.

[A1] Assume AC and Countable Choice, as required by the supplier theorem. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] The unitary families $T(a)$ and $B_m(v)$ satisfy $B_m(v)T(a)B_m(v)^*T(a)^*=e^{imv\cdot a/\hbar}I$. [[thm-nrqmx-boost-translation-cocycle]]

## Verification

1.1 Put $\theta=mv\cdot a/\hbar$. The loop identity in [F1] gives the scalar operator $e^{i\theta}I$ on the system Hilbert space, so one isolated branch acquires only a global phase. [given, A1, F1]

2.1 On the path-system space $\mathbb C^2\otimes L^2(\mathbb R^d)$ define the controlled loop $C=|0\rangle\langle0|\otimes L+|1\rangle\langle1|\otimes I$, where $L=B_m(v)T(a)B_m(v)^*T(a)^*$. By step 1.1, $C=U_\theta\otimes I$ with $U_\theta=\operatorname{diag}(e^{i\theta},1)$. Equip the path space with inner product $u^*w$ and put $u_+=(1,1)^T/\sqrt2$. The recombining path overlap is the matrix coefficient $u_+^*U_\theta u_+=(1+e^{i\theta})/2$, whose squared modulus is $(2+2\cos\theta)/4=\cos^2(\theta/2)$ by the cosine double-angle identity. If the same scalar is applied to both arms, the path gate is $e^{i\theta}I_2$, whose matrix coefficient has squared modulus $1$. [step 1.1, algebra] ∎
