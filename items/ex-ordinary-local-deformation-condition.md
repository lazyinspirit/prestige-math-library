---
id: ex-ordinary-local-deformation-condition
kind: example
title: "A fixed-flag ordinary local condition and its tangent space"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-global-selmer-deformation-condition
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
justified_by: []
proof_strategy: direct
axiom_use: >-
  The local invariant-subspace and continuous-cochain calculation is
  choice-free. No choice principle is used in this example.
provenance:
  statement: constructed
  proof: direct
verification:
  precheck: pass
---

## Example

Let \(K_v\) be a nonarchimedean local field, let \(G_{K_v}\) be its absolute
Galois group, let \(p\) be a prime, and let
\(\bar\rho:G_{K_v}\to\operatorname{GL}_2(\mathbb F_p)\) be a continuous
residual representation preserving the line \(\mathbb F_p e_1\). Put
\(\mathfrak b\subseteq\operatorname{End}_{\mathbb F_p}(\mathbb F_p^2)\) equal to the subspace of
upper-triangular matrices, with the conjugation action induced by
\(\bar\rho\). A first-order deformation is a continuous lift to
\(\operatorname{GL}_2(\mathbb F_p[\epsilon])\), where
\(\mathbb F_p[\epsilon]=\mathbb F_p[\epsilon]/(\epsilon^2)\). The
unrestricted first-order tangent set consists of all such lifts modulo
conjugation by \(1+\epsilon X\) for \(X\in
\operatorname{End}_{\mathbb F_p}(\mathbb F_p^2)\); it is identified with
\(H^1_{\mathrm{cts}}(G_{K_v},\operatorname{ad}(\bar\rho))\) by the local
cocycle calculation. The flag-preserving first-order deformations are the
lifts whose matrices preserve \(\mathbb F_p[\epsilon]e_1\), modulo
conjugation by \(1+\epsilon X\) with \(X\in\mathfrak b\). Their image in the
unrestricted tangent space is
\[
L_v=\operatorname{im}\!\left(
H^1_{\mathrm{cts}}(G_{K_v},\mathfrak b)
\longrightarrow
H^1_{\mathrm{cts}}(G_{K_v},\operatorname{ad}(\bar\rho))
\right).
\]
This is an ordinary local tangent condition of the type used in the
first-order Selmer definition.

## Example references

[[def-global-selmer-deformation-condition]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

## Facts & Assumptions

**Given:** The residual representation and upper-triangular coefficient subspace in the Example.

[F1] Continuous \(1\)-cohomology is the group of continuous \(1\)-cocycles modulo continuous \(1\)-coboundaries. [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[F2] A first-order Selmer condition chooses a subgroup of local \(H^1\); for \(\mathbb F_p\)-modules these are \(\mathbb F_p\)-linear subspaces. [[def-global-selmer-deformation-condition]]

## Verification

1.1 Every lift has a unique expression \(\rho_\epsilon(g)=(1+\epsilon c(g))\bar\rho(g)\). Multiplication using \(\epsilon^2=0\) shows that \(\rho_\epsilon\) is a homomorphism exactly when \(c(gh)=c(g)+g\cdot c(h)\); continuity of the lift is equivalent to continuity of \(c\). Conjugation by \(1+\epsilon X\) changes \(c\) by the coboundary \(X-g\cdot X\). Thus unrestricted strict-equivalence classes are \(H^1_{\mathrm{cts}}(G_{K_v},\operatorname{ad}(\bar\rho))\). [given, F1, algebra]

1.2 The residual matrices and their inverses are upper triangular, so conjugation preserves \(\mathfrak b\), making it a \(G_{K_v}\)-submodule. A lift preserves \(\mathbb F_p[\epsilon]e_1\) exactly when its cochain \(c(g)\) is upper triangular for every \(g\); the allowed strict conjugators change \(c\) by coboundaries from \(\mathfrak b\). Hence the image of the flag-preserving classes in unrestricted \(H^1\) is exactly the image of \(H^1_{\mathrm{cts}}(G_{K_v},\mathfrak b)\to H^1_{\mathrm{cts}}(G_{K_v},\operatorname{ad}(\bar\rho))\). By [F2], this is the stated local \(\mathbb F_p\)-subspace. [F1, F2, step 1.1, algebra] ∎
