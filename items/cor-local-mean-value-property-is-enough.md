---
id: cor-local-mean-value-property-is-enough
kind: corollary
title: "A pointwise local ball mean property is enough"
status: published
origin: pipeline
deps: [thm-continuous-mean-value-functions-are-harmonic]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Statement

If $u\in C(\Omega)$ and every $x\in\Omega$ has $r_x>0$ with $B_{r_x}(x)\Subset\Omega$ such that $u(y)=A_u(y,r)$ whenever $y\in B_{r_x}(x)$ and $0<r<r_x-|y-x|$, then $u$ is harmonic.

## Proof

**Given:** the displayed local ball-mean hypothesis.

1.1 Each $B_{r_x}(x)$ satisfies [[thm-continuous-mean-value-functions-are-harmonic]] [given].

2.1 Hence $\Delta u=0$ on these balls, which cover $\Omega$ [given]. ∎
