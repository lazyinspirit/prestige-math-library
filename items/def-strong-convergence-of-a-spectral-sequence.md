---
id: def-strong-convergence-of-a-spectral-sequence
kind: definition
title: Strong convergence of a spectral sequence
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["def-regular-spectral-sequence", "def-weak-convergence-of-a-spectral-sequence", "def-exhaustive-separated-bounded-and-finite-filtration", "def-limit-and-colimit-of-a-diagram"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Definition

A spectral sequence **converges strongly** to $(H_n,F)$ on this page if it converges weakly with specified identifications as in [[def-weak-convergence-of-a-spectral-sequence]], is two-sided regular as in [[def-regular-spectral-sequence]], and for each $n$ its target filtration is exhaustive, separated and complete. Here exhaustiveness and separatedness mean
$$\bigvee_pF_pH_n=H_n,\qquad \bigwedge_pF_pH_n=0,$$
as in [[def-exhaustive-separated-bounded-and-finite-filtration]], and completeness means that the canonical map
$$H_n\longrightarrow\varprojlim_{p\to-\infty}H_n/F_pH_n$$
is an isomorphism. All indicated subobject meets, joins and inverse limits must exist. The limit has the universal-property meaning of [[def-limit-and-colimit-of-a-diagram]]: the transition for $p'\le p$ is the quotient $H_n/F_{p'}H_n\to H_n/F_pH_n$. In modules the limit is the module of compatible residue classes. All these conditions are required; the weak-convergence identifications remain part of the data.

A finite filtration is complete: if $F_aH_n=0$, every quotient with $p\le a$ is canonically $H_n$, with identity transitions. A cone is determined by its component at any such index, and its components at larger indices are its quotient maps. Thus $H_n$ itself is the inverse limit, even if the ambient category does not admit arbitrary inverse limits. The same finite lower endpoint gives separatedness, and a finite upper endpoint $F_bH_n=H_n$ gives exhaustiveness. This includes $H_n=0$ and repeated filtration terms.

For decreasing cohomological filtrations use $H^n\to\varprojlim_{p\to+\infty}H^n/F^pH^n$ and graded pieces $F^p/F^{p+1}$. No splitting of the filtration and no choice axiom is included. The two-sided regularity convention is stronger than the outgoing-only meaning of regularity in [Stacks, Definition 12.24.9](https://stacks.math.columbia.edu/tag/012K); a source criterion must be checked against every condition above.
