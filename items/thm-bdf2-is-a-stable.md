---
id: thm-bdf2-is-a-stable
kind: theorem
title: "Constant-step BDF2 is A-stable under the multistep root condition"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-absolute-stability-regions-for-one-step-and-multistep-methods
  - lem-bdf2-root-locus-location
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III, §III.9"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Masayuki Yano, James Douglass Penn, George Konidaris, and Anthony T. Patera, Math, Numerics, and Programming (for Mechanical Engineers), Unit IV, Chapter 21"
      url: "https://ocw.mit.edu/courses/2-086-numerical-computation-for-mechanical-engineers-spring-2013/64e7bed65373841c988a0fd98e1ae16e_MIT2_086S13_Unit4_Textbook.pdf"

---
## Statement

For each $z=h\lambda$ with $\operatorname{Re}z\le0$, the constant-step BDF2 test polynomial $P_z(\zeta)=(3-2z)\zeta^2-4\zeta+1$ has degree two, all its roots have modulus at most one, and every root of modulus one is simple. Thus its multistep absolute-stability region contains the closed left half-plane, so BDF2 is A-stable.

## Facts & Assumptions

**Given:** Constant-step BDF2 on $y'=\lambda y$ with $h>0$ and $\operatorname{Re}(h\lambda)\le0$.

[F1] [[def-absolute-stability-regions-for-one-step-and-multistep-methods]]: a multistep test polynomial gives absolute stability when its degree is unchanged, every root has modulus at most one, and any unit-modulus root is simple; A-stability means the closed left half-plane lies in this region.

[F2] [[lem-bdf2-root-locus-location]]: any root of $P_z$ with modulus at least one forces $\operatorname{Re}z\ge0$, with equality only at $z=0,\zeta=1$.

## Proof
1.1 The leading coefficient of $P_z$ is $3-2z$. If it vanished, then $z=3/2$, contradicting $\operatorname{Re}z\le0$. Thus $P_z$ has degree two. [given, F1, algebra]

1.2 By [F2], a root with modulus greater than one would force $\operatorname{Re}z>0$, which is impossible. A root with modulus one can occur only when $z=0$ and $\zeta=1$. At $z=0$, $P_0(\zeta)=3\zeta^2-4\zeta+1=(3\zeta-1)(\zeta-1)$, so the unit root is simple and the other root is $1/3$. [given, F2, algebra]

2.1 The degree and root properties in steps 1.1–1.2 satisfy the multistep criterion in [F1] for every $\operatorname{Re}z\le0$. Hence the closed left half-plane lies in the absolute-stability region, proving A-stability. [F1, step 1.1, step 1.2] ∎
