---
id: thm-weyl-lemma-for-the-laplacian
kind: theorem
title: "Weyl's lemma for the Laplacian"
status: published
origin: pipeline
deps: [def-countable-choice, def-distributional-harmonicity-and-poisson-equation-in-rn, cor-ball-mean-value-property-for-harmonic-functions, lem-radial-mollification-fixes-local-mean-value-functions, lem-distributional-laplacian-commutes-with-mollification]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (thm-weyl-lemma-for-the-laplacian). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$.

If $T\in\mathcal D'(\Omega)$ and $\Delta T=0$, there is a unique smooth harmonic $h$ with $T=T_h$.

## Proof

**Given:** Countable Choice ([[def-countable-choice]]) and $\Delta T=0$ on the open set $\Omega$.

1.1 [[lem-distributional-laplacian-commutes-with-mollification]] makes $h_\varepsilon=T*\rho_\varepsilon$ smooth and harmonic on $\Omega_\varepsilon$ [given].

2.1 Each $h_\varepsilon$ is harmonic by step 1.1, so the ball and spherical mean-value properties apply under Countable Choice. Radial mollification therefore fixes it: $h_\varepsilon*\rho_\delta=h_\varepsilon$ on $\Omega_{\varepsilon+\delta}$, and likewise $h_\delta*\rho_\varepsilon=h_\delta$. Associativity of distributional convolution with these compactly supported test kernels identifies the two double convolutions on that common shrunken domain. Hence $h_\varepsilon=h_\delta$ there. [step 1.1]

3.1 On each compact subset of $\Omega$, all sufficiently small regularizations agree by step 2.1; their common value defines a smooth harmonic $h$. For a test function $\phi$ supported in that compact subset, $\langle T_{h_\varepsilon},\phi\rangle=\langle T,\check\rho_\varepsilon*\phi\rangle\to\langle T,\phi\rangle$: the mollified tests converge to $\phi$ with all derivatives on one fixed compact support, so distributional continuity applies. Since $h_\varepsilon=h$ on the support for small $\varepsilon$, this gives $T_h=T$. [step 2.1]

4.1 If $T_h=T_k$, then $h=k$ almost everywhere; continuity makes $h=k$ everywhere [given]. ∎
