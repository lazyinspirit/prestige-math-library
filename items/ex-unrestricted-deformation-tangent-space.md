---
id: ex-unrestricted-deformation-tangent-space
kind: example
title: "An unrestricted deformation tangent space computed by H¹"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - thm-galois-deformation-tangent-space-is-h1
  - def-deformation-functor-of-a-residual-galois-representation
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: >-
  The cochain and matrix calculation is choice-free once the trivial residual
  character is fixed. The inherited residual convention records AC.
provenance:
  statement: constructed
  proof: direct
verification:
  precheck: pass
---

## Example

Let \(K\) be a number field, let \(S\) be a finite set of places, and let
\(p\) be a prime. For the
one-dimensional trivial residual character
\(\bar\chi:G_{K,S}\to\mathbb F_p^\times\), where \(G_{K,S}\) is the Galois group of
the maximal extension unramified outside \(S\), the unrestricted first-order deformation
classes over \(\mathbb F_p[\epsilon]\), modulo strict equivalence, form
\[
D_{\bar\chi}(\mathbb F_p[\epsilon])
\cong H^1_{\mathrm{cts}}(G_{K,S},\mathbb F_p)
\cong \operatorname{Hom}_{\mathrm{cts}}(G_{K,S},(\mathbb F_p,+)).
\]

## Example references

[[thm-galois-deformation-tangent-space-is-h1]]

[[def-deformation-functor-of-a-residual-galois-representation]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The trivial residual character and the deformation convention in the Example.

[F1] First-order deformation classes are identified with continuous \(H^1\) of the adjoint module. [[thm-galois-deformation-tangent-space-is-h1]]

[F2] The adjoint module is the endomorphism space over \(\mathbb F_p\) with the conjugation action. [[thm-galois-deformation-tangent-space-is-h1]]

[F3] The residual character and its deformation convention are fixed by the deformation-functor definition. [[def-deformation-functor-of-a-residual-galois-representation]]

[F4] Continuous degree-one cohomology is continuous cocycles modulo continuous coboundaries. [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

## Verification

1.1 Since \(\operatorname{End}_{\mathbb F_p}(\mathbb F_p)=\mathbb F_p\) and conjugation by a scalar is trivial, the adjoint action of \(G_{K,S}\) is trivial. By [F1], the tangent space is \(H^1_{\mathrm{cts}}(G_{K,S},\mathbb F_p)\). [given, F1, F2, F3, algebra]

1.2 With trivial action, the continuous \(1\)-cocycle equation is \(c(gh)=c(g)+c(h)\), and every \(1\)-coboundary is zero. Thus \(H^1_{\mathrm{cts}}(G_{K,S},\mathbb F_p)\) is exactly the continuous homomorphisms into the additive group of \(\mathbb F_p\). [F4, step 1.1, algebra] ∎
