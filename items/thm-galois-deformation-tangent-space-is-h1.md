---
id: thm-galois-deformation-tangent-space-is-h1
kind: theorem
title: "Tangent space of the deformation functor is H¹"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-deformation-functor-of-a-residual-galois-representation
  - def-group-cohomology-as-a-derived-functor
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
  - def-axiom-of-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: >-
  The cochain calculation is choice-free. The Axiom of Choice is inherited
  through the chosen residual representation; Dependent Choice is inherited
  only when H¹ is read through the separate derived-functor convention.
provenance:
  statement: literature-derived
  proof: reconstructed
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let \(K\) be a number field, \(p\) a prime, \(S\)
a finite set of places containing all archimedean places, every finite place
of residue characteristic \(p\), and all places where the residual
representation ramifies. Let \(G=G_{K,S}\) be the Galois group of the maximal
extension unramified outside \(S\), and let
\(\bar\rho:G\to\operatorname{GL}_n(\mathbb F_p)\) be a fixed continuous
residual representation obtained by semisimplifying the reduction of a
specified stable lattice; no independence from another lattice is asserted.
Let \(\mathcal O\) be a complete discrete valuation
ring with residue \(\mathbb F_p\), and let \(D_{\bar\rho}\) be its continuous
lifts to local Artinian \(\mathcal O\)-algebras with residue \(\mathbb F_p\)
and nilpotent maximal ideals, modulo conjugation by matrices reducing to the
identity. Put \(V=\mathbb F_p^n\). Give
\(\operatorname{ad}(\bar\rho)=\operatorname{End}_{\mathbb F_p}(V)\) the \(G\)-action
\(g\cdot X=\bar\rho(g)X\bar\rho(g)^{-1}\). Then there is a canonical
\(\mathbb F_p\)-linear isomorphism
\[
D_{\bar\rho}(\mathbb F_p[\epsilon])\ \cong\
H^1_{\mathrm{cts}}(G,\operatorname{ad}(\bar\rho)),
\]
where \(\mathbb F_p[\epsilon]=\mathbb F_p[\epsilon]/(\epsilon^2)\), and \(H^1_{\mathrm{cts}}\)
is the cohomology of continuous inhomogeneous cochains with the discrete
coefficient module.

## Statement references

[[def-deformation-functor-of-a-residual-galois-representation]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[def-group-cohomology-as-a-derived-functor]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[Barry Mazur, “Deforming Galois Representations,” Chapter I §1.1, tangent-space calculation](https://bpb-us-e1.wpmucdn.com/sites/harvard.edu/dist/a/189/files/2023/01/Deforming-Galois-Representations.pdf)

## Facts & Assumptions

**Given:** The residual representation, the deformation functor, and the continuous-cochain convention in the Statement.

[A1] AC is assumed for the chosen residual representation in the deformation-functor convention. [[def-axiom-of-choice]]

[F1] \(D_{\bar\rho}(A)\) consists of lifts reducing to \(\bar\rho\), modulo conjugation by matrices reducing to the identity. [[def-deformation-functor-of-a-residual-galois-representation]]

[F2] Continuous \(1\)-cochains \(c:G\to M\) have differential \((dc)(g,h)=g\cdot c(h)-c(gh)+c(g)\); continuous \(1\)-cocycles modulo \(1\)-coboundaries are \(H^1_{\mathrm{cts}}(G,M)\). [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[F3] The derived-functor convention identifies this continuous group cohomology with the corresponding derived group cohomology; that convention uses the Dependent Choice hypothesis recorded by its supplier. [[def-group-cohomology-as-a-derived-functor]] [[def-dependent-choice]]

[F4] The deformation convention fixes the residual representation and takes lifts modulo strict conjugation. [[def-deformation-functor-of-a-residual-galois-representation]]

## Proof

**Given:** The Statement and facts [F1]–[F4].

1.1 Every lift to \(\mathbb F_p[\epsilon]\) has a unique expression
\(\rho_\epsilon(g)=(1+\epsilon c(g))\bar\rho(g)\) with a function
\(c:G\to\operatorname{End}_{\mathbb F_p}(V)\). Continuity of \(\rho_\epsilon\) is
equivalent to continuity of \(c\), since \(\mathbb F_p[\epsilon]\) is finite discrete.
[given, F1, algebra]

1.2 Using \(\epsilon^2=0\), the equality
\(\rho_\epsilon(g)\rho_\epsilon(h)=\rho_\epsilon(gh)\) is equivalent to
\(c(gh)=c(g)+g\cdot c(h)\). This is exactly \(dc=0\) under [F2], so lifts as homomorphisms correspond bijectively to continuous \(1\)-cocycles. [F2, step 1.1, algebra]

2.1 Conjugation by \(1+\epsilon X\), \(X\in\operatorname{End}_{\mathbb F_p}(V)\), changes \(c(g)\) by \(X-g\cdot X\), a \(1\)-coboundary up to sign. Conversely every \(1\)-coboundary is obtained by such a conjugation. Thus strict-equivalence classes of lifts are the quotient of continuous \(1\)-cocycles by continuous \(1\)-coboundaries, which is the group in [F2]. [F1, F2, step 1.2, algebra]

2.2 The correspondence is additive and \(\mathbb F_p\)-linear because multiplication of first-order lifts adds their \(c\)-cochains and scalar multiplication scales them. It is independent of the representative of each strict-equivalence class by step 2.1, so it is canonical. [step 2.1, algebra] ∎
