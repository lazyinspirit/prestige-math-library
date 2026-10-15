---
id: ex-qftmath-x09
kind: example
title: Formal Dirac spin coefficient in a uniform field
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - lem-qft-example-dirac-pauli-square
dependency_roles:
  lem-qft-example-dirac-pauli-square: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Mark Srednicki, Quantum Field Theory, author-posted prepublication draft, section 64
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted textbook draft; printed pp. 383–385, minimal Dirac magnetic term and electron g-factor.
    - title: David Tong, Quantum Field Theory, Chapter 4, section 4.7
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html
      locator: Complete author-hosted HTML chapter; finite Dirac spinors and Pauli spin basis.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Facts & Assumptions

**Given:** Use the formal spin term and magnetic-moment convention of [[lem-qft-example-dirac-pauli-square]]. Let $m>0$ be its mass in kilograms, $q=-e$ with $e>0$ in coulombs, and define $A:\mathbb R^3\to\mathbb R^3$ by $A(\mathbf x)=\tfrac12 B_0\mathbf e_3\times\mathbf x$, where $B_0>0$ is in tesla; this is smooth with tesla-metre components and its curl is the constant field $\mathbf B=\nabla\times A:\mathbb R^3\to\mathbb R^3$, $\mathbf B(\mathbf x)=B_0\mathbf e_3$, where $\mathbf e_3=(0,0,1)$. Use $\chi_+=(1,0)^{\mathsf T}$ and $\chi_-=(0,1)^{\mathsf T}$ in $\mathbb C^2$, which satisfy $\sigma_3\chi_\pm=\pm\chi_\pm$ for the matrix in the supplier.

[F1] [[lem-qft-example-dirac-pauli-square]]: the formal magnetic term is $-(q/m)\mathbf S\cdot\mathbf B$ with $\mathbf S=\hbar\boldsymbol\Sigma/2$ and the minimal coefficient convention has $g_s=2$.

## Example

The two spin eigenvalues give opposite formal energy coefficients in the same uniform field. For comparison only, define the formal frequency coefficient $\nu_{\rm comp}:=eB_0/(2\pi m)$, whose SI unit is $\mathrm C\,\mathrm T\,\mathrm{kg}^{-1}=\mathrm{s}^{-1}$, equivalently the formal angular-frequency coefficient $\omega_{\rm comp}:=2\pi\nu_{\rm comp}=eB_0/m$. This is a formal comparison only, not a trajectory law or empirical prediction.

## Verification

1.1 With $q=-e$, the supplier's term is $(e/m)S_3B_0$. Since $\sigma_3$ has eigenvalues $\pm1$, $S_3$ has eigenvalues $\pm\hbar/2$, so the two coefficients are $\pm e\hbar B_0/(2m)=\pm\mu_BB_0$, where $\mu_B=e\hbar/(2m)$. Their gap is $e\hbar B_0/m$. [given, F1, algebra]

2.1 Dividing that formal energy gap by $\hbar$ gives the angular-frequency coefficient $\omega_s=eB_0/m$ in $\mathrm{rad\,s^{-1}}$. The cyclic-frequency coefficient is $\nu_s:=\omega_s/(2\pi)=eB_0/(2\pi m)$ in hertz, so $\nu_s=\nu_{\rm comp}$ and $\omega_s=\omega_{\rm comp}$. This compares formal coefficients only; it is not a full Landau-spectrum result or an empirical prediction. [step 1.1, F1, algebra] ∎
