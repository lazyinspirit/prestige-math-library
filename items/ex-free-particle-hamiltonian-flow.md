---
id: ex-free-particle-hamiltonian-flow
kind: example
title: Free particle Hamiltonian flow
status: draft
origin: pipeline
deps: ["def-countable-choice", "thm-hamilton-equations-in-canonical-cotangent-coordinates"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, §18.2, pp. 107--108
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. On $T^*\mathbb R^d$ let
$H(q,p)=|p|^2/(2m)$ with $m>0$. The trajectory from $(q_0,p_0)$ is

$$q(t)=q_0+\frac{t}{m}p_0,\qquad p(t)=p_0,$$

and is defined for every $t\in\mathbb R$.

## Facts & Assumptions

**Given:** The mass $m>0$, the initial point, and the library cotangent and
Hamiltonian sign conventions.

[F1] Under the stated choice assumption, Hamilton's equations are
$\dot q=H_p$ and $\dot p=-H_q$.
[[thm-hamilton-equations-in-canonical-cotangent-coordinates]].

## Verification

**Proof technique:** direct.

1.1 Here $H_p=p/m$ and $H_q=0$, so [F1] gives $\dot q=p/m$ and $\dot p=0$. [F1, given, algebra]

2.1 The second equation gives $p(t)=p_0$; substituting into the first and integrating gives $q(t)=q_0+tp_0/m$. These formulas exist for all real time and directly satisfy the initial condition. [step 1.1, algebra] ∎
