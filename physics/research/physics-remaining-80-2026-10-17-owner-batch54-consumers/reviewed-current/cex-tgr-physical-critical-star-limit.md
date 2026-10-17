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

For fixed energy density $\varepsilon_0>0$, there is a finite constant $K_0$ such that every radius $R>0$ with $u=8\pi G\varepsilon_0R^2/(3c^4)\in(0,8/9)$ in the constant-density family satisfies $P(0)\le K_0\varepsilon_0$.

## Facts & Assumptions

**Given:** The constant-density family from [[pthm-tgr-static-constant-density-star]], including its strict range $0<u<8/9$ and central-pressure formula.

[F1] [[pthm-tgr-static-constant-density-star]] states $P(0)/\varepsilon_0=(1-a)/(3a-1)$ with $a=\sqrt{1-u}$ for every $0<u<8/9$; this is a family-specific formula, not a general compactness theorem.

## Counterexample

**Given:** Fixed $\varepsilon_0>0$, varying radii with $u=8\pi G\varepsilon_0R^2/(3c^4)\in(0,8/9)$, the uniform-bound statement above, and the family-specific formula [F1].

1.1 For each integer $n\ge2$, set $u_n=8/9-1/n$ and $R_n=c^2\sqrt{3u_n/(8\pi G\varepsilon_0)}>0$. Keep $\rho_0=\varepsilon_0/c^2$ fixed and set $M_n=4\pi\rho_0R_n^3/3$. Then $2GM_n/(c^2R_n)=8\pi G\varepsilon_0R_n^2/(3c^4)=u_n\in(0,8/9)$, so every $(\rho_0,R_n)$ is an admissible member of [F1] at the fixed density. Moreover $a_n=\sqrt{1-u_n}=\sqrt{1/9+1/n}>1/3$ and $a_n\downarrow1/3$. [given, F1, construct, algebra]

2.1 By [F1], $P_n(0)/\varepsilon_0=(1-a_n)/(3a_n-1)$. The numerator tends to $2/3>0$ and the denominator tends to $0$ through positive values, so the ratios tend to $+\infty$. Therefore no finite $K_0$ can bound all ratios, refuting the displayed statement. At the limiting value $u=8/9$, the denominator is zero and the endpoint is not an admissible regular finite-pressure member. [F1, step 1.1, algebra] ∎

