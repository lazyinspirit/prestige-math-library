---
id: lem-distributional-laplacian-commutes-with-mollification
kind: lemma
title: "The distributional Laplacian commutes with local mollification"
status: draft
origin: pipeline
deps: [def-distributional-harmonicity-and-poisson-equation-in-rn, def-radial-mollifier-family-in-rn]
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

For $T\in\mathcal D'(\Omega)$, put $\Omega_\varepsilon:=\{x\in\Omega:B_\varepsilon(x)\Subset\Omega\}$ and define $(T*\rho_\varepsilon)(x)=T(\rho_\varepsilon(x-\cdot))$ on $\Omega_\varepsilon$. Then $\Delta(T*\rho_\varepsilon)=(\Delta T)*\rho_\varepsilon$ there.

## Proof

**Given:** $\phi\in C_c^\infty(\Omega_\varepsilon)$.

1.1 The support margin makes $\widetilde\phi(y):=\int\rho_\varepsilon(x-y)\phi(x)dx$ a test function in $C_c^\infty(\Omega)$ [given].

2.1 Differentiating the kernel and using [[def-distributional-harmonicity-and-poisson-equation-in-rn]] gives $\langle\Delta(T*\rho_\varepsilon),\phi\rangle=\langle\Delta T,\widetilde\phi\rangle$ [step 1.1].

3.1 This is $\langle(\Delta T)*\rho_\varepsilon,\phi\rangle$ for all $\phi$ [step 2.1]. ∎
