---
id: ex-frictionless-sphere-binary-impact-calculation
kind: example
title: A two-sphere impact with unequal masses
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - thm-frictionless-sphere-binary-impact-impulse-laws
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
axiom_use: No choice axiom is used; the calculation is finite-dimensional algebra.
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Section 1.1.1, pp. 2–3; single-contact impulse and restitution conventions.
---

## Example

Take $m_1=2$, $m_2=3$, any radii $r_1,r_2>0$, centers with $q_1-q_2=(r_1+r_2)n$ for $n=(1,0)$, pre-impact velocities $v_1^-= -n$, $v_2^-=n$, and restitution $e=\tfrac12$. The incoming relative normal speed is $-2$.

## Facts & Assumptions

**Given:** The two-sphere impact data in the Example.

[F1] [[thm-frictionless-sphere-binary-impact-impulse-laws]]: for $v_n<0$, $J=-(1+e)v_n/(1/m_1+1/m_2)$, the post-impact velocities are updated by equal and opposite normal impulses, and the kinetic-energy change is $-(1-e^2)v_n^2/[2(1/m_1+1/m_2)]$.

## Verification

1.1 The inverse reduced mass is $1/m_1+1/m_2=1/2+1/3=5/6$, and $v_n=\langle -n-n,n\rangle=-2$. Thus $J=-(3/2)(-2)/(5/6)=18/5$. The post-impact velocities are $v_1^+=-n+(9/5)n=(4/5)n$ and $v_2^+=n-(6/5)n=(-1/5)n$. [F1, given, algebra]

2.1 Total momentum is $2(-n)+3n=n$ before impact and $2(4n/5)+3(-n/5)=n$ after. The relative normal speed after impact is $4/5-(-1/5)=1=-e v_n$. The kinetic energies are $K^-=1+3/2=5/2$ and $K^+=16/25+3/50=7/10$, so $K^+-K^-=-9/5$, matching $-(3/4)\cdot4/(2\cdot5/6)=-9/5$ from [F1]. [F1, step 1.1, given, algebra] ∎
