---
id: ex-pe18-pml-angle-dependent-attenuation
kind: example
title: PML attenuation vanishes at grazing and excludes evanescent modes
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-pe18-cartesian-complex-stretch-pml, thm-pe18-pml-perfect-matching-and-propagating-mode-decay]
proof_strategy: direct
generation:
  role: example
axiom_use: "No axiom is used; propagating and evanescent Cartesian modes are evaluated explicitly."
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Steven G. Johnson, Notes on Perfectly Matched Layers (PMLs), §§6, 7.2"
      url: "https://arxiv.org/pdf/2108.05348"
---

## Example

For a propagating angle $0\le\theta<\pi/2$, $q=k\cos\theta$ and the one-way PML amplitude after accumulated stretch $S$ is $e^{-kS\cos\theta}$. It equals $e^{-kS}$ at normal incidence and tends to $1$ as $\theta\uparrow\pi/2$. For a purely evanescent normal branch $q=i\alpha$ with $\alpha>0$, the factor $e^{iqX}=e^{-\alpha x-i\alpha S(x)}$ has modulus $e^{-\alpha x}$, so this imaginary stretch adds no modulus decay.

## Facts & Assumptions

**Given:** The Cartesian stretch [F1] and propagating-mode theorem [F2].

[F1] [[def-pe18-cartesian-complex-stretch-pml]]: $X=x+iS(x)$ and a separated normal mode has factor $e^{iqX}$.

[F2] [[thm-pe18-pml-perfect-matching-and-propagating-mode-decay]]: for real $q>0$, the one-way amplitude factor is $e^{-qS}$.

## Verification

**Given:** $k,S\ge0$ and the modes in [F1]–[F2].

1.1 For a propagating mode, substitute $q=k\cos\theta$ into [F2]. At $\theta=0$ the factor is $e^{-kS}$; as $\theta\uparrow\pi/2$, $\cos\theta\to0$, so it tends to $1$. [F1, F2, algebra]

2.1 For $q=i\alpha$, direct substitution into [F1] gives $e^{iqX}=e^{i(i\alpha)(x+iS)}=e^{-\alpha x-i\alpha S}$, whose modulus is $e^{-\alpha x}$. The added stretch contributes only a phase, confirming that the propagating attenuation theorem does not cover evanescent modes. [F1, step 1.1, algebra] ∎
