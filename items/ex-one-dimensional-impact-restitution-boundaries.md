---
id: ex-one-dimensional-impact-restitution-boundaries
kind: example
title: Inelastic and elastic endpoints of a scalar impact step
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-one-dimensional-first-impact-with-restitution
  - thm-first-impact-step-complementarity-momentum-and-energy
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
axiom_use: No choice axiom is used; the example is an exact scalar calculation.
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Section 1.1.1, pp. 2–3; the scalar ball-table restitution law.
---

## Example

Use $q=1$, $v=-2$, $a=0$, $h=1$, and $m=2$. Compare restitution values $e=0$ and $e=1$, with a root-search budget of two candidate roots.

## Facts & Assumptions

**Given:** The scalar impact inputs in the Example.

[F1] [[alg-one-dimensional-first-impact-with-restitution]]: the earliest root with incoming velocity is returned as an impact with $J=-m(1+e)v^-$ and $v^+=-ev^-$.

[F2] [[thm-first-impact-step-complementarity-momentum-and-energy]]: a resolved impact has nonnegative impulse, zero contact gap, momentum balance, and kinetic-energy ratio $e^2$ across the collision.

## Verification

1.1 The free-flight gap is $g(s)=1-2s$, whose unique root on $(0,1]$ is $s=1/2$ with $v^-=-2<0$. Hence the step returns an impact at contact for both restitution values. [F1, given, algebra]

2.1 If $e=0$, then $J=4$ and $v^+=0$; if $e=1$, then $J=8$ and $v^+=2$. In both cases $q_*J=0$ and $J\ge0$. The pre-impact kinetic energy is $\tfrac12(2)(-2)^2=4$; the post-impact energies are $0$ and $4$, respectively. The momentum identities are $2(-2)+4=0$ and $2(-2)+8=4=2(2)$. These equal the inelastic and elastic endpoints of [F2]. [F1, F2, step 1.1, given, algebra] ∎
