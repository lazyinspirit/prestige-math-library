---
id: ex-ewald-source-collision-field-singularity
kind: example
title: "A point-source potential is singular at a source"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-countable-choice, def-ewald-three-dimensional-periodic-source-data, lem-ewald-screened-coulomb-kernel-and-self-limit, thm-ewald-alpha-independent-energy-and-potential]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
---

## Example

On the unit cubic torus take charges $q_1=1$ at $x_1=(0,0,0)$ and $q_2=-1$ at
$x_2=(1/2,0,0)$. The exact Ewald potential is unbounded near $x_1$, so a
pointwise potential-error claim cannot include a source collision.

## Facts & Assumptions

**Given:** Countable Choice, this neutral dipole configuration, and its exact
mean-zero Ewald potential $U_\alpha$ for any $\alpha>0$.

[A1] The Gaussian Ewald representation assumes Countable Choice ([[def-countable-choice]]).

[F1] For distinct neutral sources, the Ewald potential has a finite regular part after subtracting $q_i/|x-x_i|$ at each source ([[thm-ewald-alpha-independent-energy-and-potential]]).

[F2] $\operatorname{erfc}(\alpha r)/r=1/r-2\alpha/\sqrt\pi+O(r^2)$ as $r\downarrow0$ ([[lem-ewald-screened-coulomb-kernel-and-self-limit]]).

## Verification

**Proof technique:** direct.

1.1 The configuration is neutral, and its two torus positions are distinct. At $x_1$, [F1] states that $\lim_{x\to x_1}(U_\alpha(x)-1/|x-x_1|)$ is finite; [F2] identifies the local screened self term as $1/r-2\alpha/\sqrt\pi+O(r^2)$. Thus the remainder after the Coulomb singularity stays bounded near $x_1$. [given, A1, F1, F2]

2.1 Writing $r=|x-x_1|$, step 1.1 gives $U_\alpha(x)=1/r+O(1)$ as $r\downarrow0$. Since $1/r\to+\infty$, the potential is unbounded and has no finite value at the source. A uniform pointwise error bound for this point-source potential must therefore exclude source collisions. [step 1.1, algebra] ∎

