---
id: thm-first-impact-step-complementarity-momentum-and-energy
kind: theorem
title: Complementarity, momentum balance, and energy loss at a scalar impact
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-one-dimensional-first-impact-with-restitution
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
axiom_use: No choice axiom is used; the result follows from scalar algebra.
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Section 1.1.1, pp. 2–3; scalar impulse, unilateral complementarity, and restitution law.
    - title: Dimitri P. Bertsekas, 6.253 Convex Analysis and Optimization, Complete Lecture Notes
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Complete notes, Lecture 12, slides 158–161; normal-cone convention context.
---

## Statement

For any resolved output of [[alg-one-dimensional-first-impact-with-restitution]], let $q_*$ be the reported gap (zero at an impact, the free-flight endpoint gap otherwise), let $J$ be the reported impulse, and let $v_*$ be the reported endpoint velocity. Then $q_*\ge0$, $J\ge0$, and $q_*J=0$. On a free-flight branch, $J=0$ and $m v_*=m v+mah$. On an impact branch at time $s$, with incoming velocity $v^-=v+as$, the post-impact velocity satisfies $m v^+=m v^-+J$ and
$$\frac12m(v^+)^2-\frac12m(v^-)^2=-\frac12m(1-e^2)(v^-)^2\le0.$$
When $a=0$, the full resolved step has nonincreasing kinetic energy. For $a\ne0$, the displayed energy statement concerns only the instantaneous impact jump; work during free flight is not covered by it.

## Facts & Assumptions

**Given:** The inputs and resolved output of the algorithm in the Statement.

[F1] [[alg-one-dimensional-first-impact-with-restitution]]: an impact output has $q_*=0$, $v^-<0$, $J=-m(1+e)v^-$, and $v^+=-ev^-$; a free-flight output has $J=0$, $q_*=q+hv+\tfrac12ah^2\ge0$, and $v_*=v+ah$.

## Proof

1.1 On an impact branch, [F1] gives $q_*=0$, $J=-m(1+e)v^->0$, and $v^+=-ev^-\ge0$, since $m>0$, $e\in[0,1]$, and $v^-<0$. Hence $q_*J=0$. On a free-flight branch, [F1] gives $q_*\ge0$ and $J=0$, so complementarity also holds. [F1, given, algebra]

1.2 On a free-flight branch, $m v_*=m(v+ah)=mv+mah$. On an impact branch, [F1] gives $m v^-=m(v+as)$ and $J=-m(1+e)v^-$. Therefore $m v^-+J=m v^- -m(1+e)v^-=-mev^-=m v^+$, using $v^+=-ev^-$. [F1, given, algebra]

2.1 On an impact branch, [F1] gives $(v^+)^2=e^2(v^-)^2$, so the kinetic-energy difference is $\tfrac12m(e^2-1)(v^-)^2=-\tfrac12m(1-e^2)(v^-)^2\le0$. If $a=0$ and the branch is free flight, $v_*=v$ and kinetic energy is unchanged; impact branches have the nonincrease just established. For nonzero $a$, no claim is made about total free-flight work. [F1, step 1.1, given, algebra] ∎
