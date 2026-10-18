---
id: "ex-afem-coarse-convection-mesh-misses-smallness-condition"
kind: "example"
title: "A coarse mesh can miss the convection smallness condition"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 2
deps:
  - "def-afem-nvb-labelled-triangulation-family"
  - "lem-afem-convection-quasi-orthogonality-under-fine-mesh"
  - "def-countable-choice"
proof_strategy: direct
provenance:
  statement: "ai-generated"
  proof: "ai-altered"
generation:
  role: example
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 3"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture3.pdf"
      locator: "§§3.1–3.3, quasi-orthogonality and convection fine-mesh condition, PDF
        pp. 1–5."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods
        (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and
        cumulative closure complexity."
verification:
  precheck: pass
---
## Example

Assume Countable Choice for the cited Sobolev/L2 interface.

Fix a positive mesh diameter $h_0$, exponent $s>0$, and a stipulated positive dual-pickup constant $C_D$. The sufficient small-mesh parameter in [[lem-afem-convection-quasi-orthogonality-under-fine-mesh]] is $\mu=C_Dh_0^s|b|$.

## Facts & Assumptions

[A1] Countable Choice is the background assumption in the cited Sobolev and $L^2$ suppliers ([[def-countable-choice]]).

**Given:** Countable Choice, A prescribed mesh scale $h_0>0$, $s>0$, $C_D>0$, and a constant divergence-free vector $b\in\mathbb R^2$.

[F1] The nonsymmetric quasi-orthogonality estimate assumes $\mu=C_Dh_0^s|b|<1$ ([[lem-afem-convection-quasi-orthogonality-under-fine-mesh]]).

## Verification

1.1 Choose any unit vector $e$ and set $b=2(C_Dh_0^s)^{-1}e$. This is constant and divergence-free, and direct substitution gives $\mu=2$. [A1, F1, given, construct, algebra]

2.1 The strict sufficient condition $\mu<1$ therefore fails on this prescribed mesh. This only shows that the stated sufficient estimate cannot be invoked from its hypotheses; it does not imply failure of convergence or of the PDE solution. [step 1.1, algebra] ∎

## Finite check

The substitution is exact: $C_Dh_0^s\cdot2(C_Dh_0^s)^{-1}=2$.
