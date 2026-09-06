---
id: thm-continuous-mean-value-functions-are-harmonic
kind: theorem
title: "Continuous ball-mean-value functions are harmonic"
status: draft
origin: pipeline
deps: [def-laplacian-of-a-c2-function, def-spherical-averages-and-local-ball-means-in-rn, lem-radial-mollification-fixes-local-mean-value-functions, cor-second-order-taylor-expansion-with-the-hessian]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
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

If $u\in C(\Omega)$ has the ball mean-value property, then $u\in C^\infty(\Omega)$ and $\Delta u=0$.

## Proof

**Given:** $u\in C(\Omega)$ has the ball mean-value property.

1.1 Integrating the ball identity in radius gives the spherical identity; [[lem-radial-mollification-fixes-local-mean-value-functions]] then gives $u=u*\rho_\varepsilon$ on $\Omega_\varepsilon:=\{x:B_\varepsilon(x)\Subset\Omega\}$ [given].

2.1 Thus $u$ is smooth locally. Taylor's formula [[cor-second-order-taylor-expansion-with-the-hessian]] and rotational symmetry give $A_u(x,r)=u(x)+r^2\Delta u(x)/(2(n+2))+o(r^2)$ [step 1.1].

3.1 The ball identity and division by $r^2$ force $\Delta u(x)=0$ for every $x\in\Omega$ [step 2.1]. ∎
