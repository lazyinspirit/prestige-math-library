---
id: ex-grid-fourier-stability-needs-a-common-space-lift
kind: example
title: Grid Fourier stability alone does not instantiate Lax equivalence
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-periodic-one-way-advection-schemes, thm-periodic-advection-power-stability, def-common-space-linear-scheme-interface, thm-lax-equivalence-for-common-banach-space-schemes, def-dependent-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods, Chapter 4, §4.2"
      url: "https://people.maths.ox.ac.uk/trefethen/4all.pdf"
      locator: "Complete PDF §4.2, pp. 8–13: the common Banach-space interface and same-norm requirement. Trefethen explicitly omits a complete proof; this example uses the inspected batch-5 theorem and its local proof only for the conditional theorem statement."
---

## Example

For periodic upwind updates at fixed $0<\nu<1$, every individual grid family is power stable in its grid norm. The family on the varying spaces $\mathbb C^N$ is not, as stated, an instance of the common-space Lax theorem.

## Facts & Assumptions

**Given:** The periodic upwind updates on $G_N=\mathbb C^N$ for varying $N$, with fixed $0<\nu<1$.

[F1] A common-space time-scheme family consists of bounded maps $S_\nu:X\to X$ on one Banach space $X$ ([[def-common-space-linear-scheme-interface]]).

[F2] Consistency, stability, and convergence in that interface use the same norm of $X$ ([[def-common-space-linear-scheme-interface]]).

[F3] Under Dependent Choice, a consistent scheme in that common-space interface is convergent on finite time intervals if and only if it is stable there ([[thm-lax-equivalence-for-common-banach-space-schemes]]).

[F4] For each N-point periodic grid, the upwind update is power stable when $0<\nu<1$ ([[thm-periodic-advection-power-stability]]).

[A1] Dependent Choice is the axiom assumed by [F3] ([[def-dependent-choice]]).

## Verification

1.1 By [F4], each N-point upwind update has $\|T_N^m\|_{2,h\to2,h}\le1$ for all $m\ge0$ when $0<\nu<1$. [given, F4]

1.2 The declared operators have domains and codomains $G_N=\mathbb C^N$, which vary with N; no fixed Banach space or projection/reconstruction lift is supplied in this example. Thus they do not meet [F1]'s fixed-space interface, and no same-space norm for comparing their errors is supplied under [F2]. [given, F1, F2]

2.1 The theorem [F3] has the common-space interface and consistency among its hypotheses. Since step 1.2 shows that this example supplies no such interface, the grid power bounds alone do not imply convergence by [F3]. A separate common-space lift and its norm/consistency checks would be needed; this example makes no claim that such a lift cannot be constructed. [F1, F2, F3, A1, step 1.2] ∎
