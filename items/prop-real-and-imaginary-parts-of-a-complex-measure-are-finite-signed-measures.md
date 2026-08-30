---
id: prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures
kind: proposition
title: "The real and imaginary parts of a complex measure are finite signed measures, and nu = Re nu + i Im nu"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complex-measure, def-signed-measure, def-complex-conjugate-real-imaginary-part-and-modulus]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Example 9.2"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, §6.9"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $\nu$ be a complex measure on $(X,\mathcal A)$. Then the set functions
$$\operatorname{Re}\nu(E):=\operatorname{Re}(\nu(E)),\qquad \operatorname{Im}\nu(E):=\operatorname{Im}(\nu(E))$$
are finite signed measures on $(X,\mathcal A)$, and
$$\nu(E)=\operatorname{Re}\nu(E)+i\,\operatorname{Im}\nu(E)\qquad(E\in\mathcal A).$$

## Facts & Assumptions

**Given:** A complex measure $\nu$ on $(X,\mathcal A)$.

[L1] A complex measure is a finite-valued countably additive set function on a sigma-algebra. ([[def-complex-measure]])

[L2] Every complex number $z$ has real and imaginary parts and satisfies $z=\operatorname{Re}z+i\,\operatorname{Im}z$. ([[def-complex-conjugate-real-imaginary-part-and-modulus]])

[L3] A signed measure is countably additive and takes at most one infinite sign. ([[def-signed-measure]])

## Proof

**Proof technique:** direct.

1.1 Because $\nu(E)\in\mathbb C$ for every $E\in\mathcal A$, [L2] makes $\operatorname{Re}\nu(E)$ and $\operatorname{Im}\nu(E)$ honest real numbers for every measurable $E$. In particular neither set function takes an infinite value. [L1, L2]

1.2 If $(E_n)$ is pairwise disjoint, then [L1] gives $$\nu\left(\bigcup_n E_n\right)=\sum_{n=0}^\infty \nu(E_n).$$ Taking real parts and imaginary parts termwise yields $$\operatorname{Re}\nu\left(\bigcup_n E_n\right)=\sum_{n=0}^\infty \operatorname{Re}\nu(E_n),\qquad \operatorname{Im}\nu\left(\bigcup_n E_n\right)=\sum_{n=0}^\infty \operatorname{Im}\nu(E_n).$$ Also $\operatorname{Re}\nu(\varnothing)=\operatorname{Im}\nu(\varnothing)=0$. [L1, L2]

2.1 Step 1.1 supplies the finiteness clause and step 1.2 supplies countable additivity, so [L3] shows that $\operatorname{Re}\nu$ and $\operatorname{Im}\nu$ are finite signed measures. The decomposition $\nu(E)=\operatorname{Re}\nu(E)+i\,\operatorname{Im}\nu(E)$ is exactly the identity from [L2] applied to the complex number $\nu(E)$. [L2, L3, step 1.1, step 1.2] ∎
