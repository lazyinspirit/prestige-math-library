---
id: cex-tgr-physical-critical-star-limit
kind: counterexample
title: "Central pressure is unbounded at the constant-density branch limit"
status: draft
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
  A counterexample within the explicit constant-density branch as u approaches
  8/9 from below; no general Buchdahl theorem or claim about realistic matter.
empirical_premises: []
generation:
  role: counterexample
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

## Statement refuted

For fixed $\varepsilon_0>0$ and $R>0$, there is a finite constant $K_0$ such that every member of the constant-density family with $0<u<8/9$ satisfies $P(0)\le K_0\varepsilon_0$.

## Facts & Assumptions

**Given:** The constant-density family from [[pthm-tgr-static-constant-density-star]], including its strict range $0<u<8/9$ and central-pressure formula.

[F1] [[pthm-tgr-static-constant-density-star]] states $P(0)/\varepsilon_0=(1-a)/(3a-1)$ with $a=\sqrt{1-u}$ for every $0<u<8/9$; this is a family-specific formula, not a general compactness theorem.

## Counterexample

**Given:** Fixed $\varepsilon_0>0$ and $R>0$, the uniform-bound statement above, and the family-specific formula [F1].

1.1 For each integer $n\ge2$, set $u_n=8/9-1/n$. Then $0<u_n<8/9$, and $a_n=\sqrt{1-u_n}=\sqrt{1/9+1/n}>1/3$ with $a_n\downarrow1/3$; every term is therefore an admissible member of [F1]. [given, F1, algebra]

2.1 By [F1], $P_n(0)/\varepsilon_0=(1-a_n)/(3a_n-1)$. The numerator tends to $2/3>0$ and the denominator tends to $0$ through positive values, so the ratios tend to $+\infty$. Therefore no finite $K_0$ can bound all ratios, refuting the displayed statement. At the limiting value $u=8/9$, the denominator is zero and the endpoint is not an admissible regular finite-pressure member. [F1, step 1.1, algebra] ∎

