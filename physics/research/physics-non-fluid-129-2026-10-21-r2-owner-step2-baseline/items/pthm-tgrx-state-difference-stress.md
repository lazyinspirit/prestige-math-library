---
id: pthm-tgrx-state-difference-stress
kind: physics-theorem
title: State differences remove common local subtraction
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 5
deps:
  - def-tgrx-hadamard-stress-contract
dependency_roles:
  def-tgrx-hadamard-stress-contract: formulation-prerequisite
physical_scope: "A conditional identity for two Hadamard states on the same fixed smooth background under one identical local renormalization prescription. It does not assert independence of the absolute renormalized stress tensor from finite local curvature terms."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stefan Hollands and Robert M. Wald, Quantum fields in curved spacetime, complete review"
      url: "https://arxiv.org/pdf/1401.2026"
      locator: "Complete 77-page PDF retrieved; §2, PDF pp. 13–15, for the common state-independent Hadamard singular part; §3.1, PDF pp. 38–45, for state-independent normal ordering and smooth state-dependent stress expectations."
    - title: "Ted Jacobson, Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/0308048"
      locator: "Complete 59-page lecture-note PDF retrieved; §4.5, PDF p. 17, for finite stress differences between states with the same singular short-distance behavior and the local curvature ambiguity."
    - title: "L. H. Ford, Quantum Field Theory in Curved Spacetime, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9707062"
      locator: "Complete 44-page lecture-note PDF retrieved; §3, PDF pp. 19–21, for Hadamard point splitting, state dependence, and the common local counterterm ambiguity. Its differing curvature conventions are not used in the local proof."
verification:
  precheck: pass
---

## Statement

Let $g$ be one fixed smooth globally hyperbolic Lorentzian four-metric and
let $\omega_1,\omega_2$ be two positive Hadamard states for the same
real scalar Klein-Gordon operator. Use one identical prescription: the same
local parametrix $H_\mu$,
bidifferential operator $D_{ab}$, scale $\mu$, overlap convention, and
state-independent curvature correction $C_{ab}$. Then, on each convex
normal neighborhood,
$$T^{\mathrm{ren}}_{ab}[g,\omega_1]-T^{\mathrm{ren}}_{ab}[g,\omega_2]=\lim_{y\to x}D_{ab}(x,y)\bigl(W_{\omega_1}-W_{\omega_2}\bigr)(x,y),$$
where the difference on the right is smooth and its coincidence limit
exists. Adding the same state-independent local curvature tensor to both
stress prescriptions leaves this difference unchanged.

## Statement references

[[def-tgrx-hadamard-stress-contract]]

## Facts & Assumptions

**Given:** The same fixed metric, two positive Hadamard states for the same operator, and one common renormalization prescription as stated above.

[F1] [[def-tgrx-hadamard-stress-contract]]: for each Hadamard state the supplied local parametrix $H_\mu$ is state-independent, each remainder $W_\omega-H_\mu$ is smooth, $D_{ab}$ has finite order on smooth biscalars, and $T^{\mathrm{ren}}_{ab}$ is the coincidence limit of $D_{ab}(W_\omega-H_\mu)$ plus the same local tensor $C_{ab}$.

[A1] The two states use the same $H_\mu$, $D_{ab}$, $\mu$, overlap convention, and $C_{ab}$; this is the identical-prescription hypothesis in the Statement.

## Proof

1.1 For $i=1,2$, [F1] and [A1] give $W_{\omega_i}-H_\mu\in C^\infty(U\times U)$ on each prescribed neighborhood $U$. Their difference is therefore smooth:
$$(W_{\omega_1}-H_\mu)-(W_{\omega_2}-H_\mu)=W_{\omega_1}-W_{\omega_2}.$$
Since $D_{ab}$ is finite order and maps smooth biscalars to smooth tensor-valued functions, its application to this difference is smooth near the diagonal and has a coincidence limit. [given, F1, A1, algebra]

2.1 Apply [F1] separately to both states and subtract. The common $C_{ab}$ cancels, and linearity of $D_{ab}$ gives
$$T^{\mathrm{ren}}_{ab}[g,\omega_1]-T^{\mathrm{ren}}_{ab}[g,\omega_2]=\lim_{y\to x}\left(D_{ab}(W_{\omega_1}-H_\mu)-D_{ab}(W_{\omega_2}-H_\mu)\right)=\lim_{y\to x}D_{ab}(W_{\omega_1}-W_{\omega_2}),$$
where existence of the final limit follows from step 1.1. [given, F1, A1, step 1.1, algebra]

3.1 If a common state-independent local curvature tensor $K_{ab}[g]$ is added to both prescriptions, their difference becomes $(T^{\mathrm{ren}}[g,\omega_1]+K[g])-(T^{\mathrm{ren}}[g,\omega_2]+K[g])$, which equals the difference in step 2.1 by cancellation. This establishes only independence of common local additions to the difference, not independence of either absolute stress tensor. [given, step 2.1, algebra] ∎

