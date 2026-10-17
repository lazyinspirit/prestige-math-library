---
id: ex-tgr-physical-star-half-compactness
kind: example
title: "Half-compactness constant-density Einstein star"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 9
deps:
  - pthm-tgr-static-constant-density-star
dependency_roles:
  pthm-tgr-static-constant-density-star: physical-result
justified_by: []
physical_scope: >-
  The explicit constant-density family at u=1/2, with its adopted vacuum
  exterior; not an observed star, realistic EOS, or generic compactness result.
empirical_premises: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lecture 21, PDF pp. 8–10"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
verification:
  precheck: pass
---

## Example

Specialize the constant-density family of [[pthm-tgr-static-constant-density-star]] to $u=1/2$. Then
$$a=\frac1{\sqrt2},\qquad \frac{P(0)}{\varepsilon_0}=\frac{\sqrt2-1}{3-\sqrt2}\in(0,1),\qquad e^{\phi(0)}=\frac{3/\sqrt2-1}{2}>0.$$
At the surface, $b(R)=1/2$ and $e^{\phi(R)}=1/\sqrt2$. The prescribed vacuum exterior has $M=M_R$, $b(r)=1-R/(2r)$ and $e^{\phi(r)}=\sqrt{b(r)}$ for $r\ge R$.

## Facts & Assumptions

**Given:** The exact static star family and its equations from [[pthm-tgr-static-constant-density-star]], with the specialization $u=1/2$.

[F1] [[pthm-tgr-static-constant-density-star]] gives $a=\sqrt{1-u}$, $B(r)=\sqrt{1-ur^2/R^2}$, $P(0)/\varepsilon_0=(1-a)/(3a-1)$, $e^{\phi(0)}=(3a-1)/2$, and the vacuum exterior $b(r)=1-uR/r$, $e^\phi=\sqrt b$.

## Verification

1.1 Substitution of $u=1/2$ gives $a=1/\sqrt2$ and hence $P(0)/\varepsilon_0=(\sqrt2-1)/(3-\sqrt2)$. Both numerator and denominator are positive, and $\sqrt2-1<3-\sqrt2$ because $\sqrt2<2$; thus the ratio lies strictly between zero and one. Also $e^{\phi(0)}=(3/\sqrt2-1)/2>0$, $b(R)=a^2=1/2$, and $e^{\phi(R)}=a=1/\sqrt2$. [given, F1, algebra]

2.1 With $u=1/2$, the exterior formula in [F1] becomes $b(r)=1-R/(2r)$; it is positive for $r\ge R$ and has $e^\phi=\sqrt b$. The theorem supplies the matching and field-equation verification for this family, so this specialization is a finite, positive-pressure example within the adopted model. [F1, step 1.1] ∎

