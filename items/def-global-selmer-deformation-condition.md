---
id: def-global-selmer-deformation-condition
kind: definition
title: "Global deformation problem with specified local Selmer conditions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-deformation-functor-of-a-residual-galois-representation
  - thm-galois-deformation-tangent-space-is-h1
  - def-group-cohomology-as-a-derived-functor
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
  - def-axiom-of-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: >-
  The general kernel and quotient construction is choice-free. In the
  deformation specialization the chosen residual representation carries the
  Axiom of Choice dependency from its supplier;
  Dependent Choice enters only through the derived-functor cohomology
  convention.
provenance:
  statement: literature-derived
  proof: direct
verification:
  precheck: pass
---

## Definition

Let \(K\) be a number field, \(p\) a prime, and \(S\) a finite set containing
all archimedean places and every finite place of residue characteristic \(p\).
Write \(G_{K,S}\) for the Galois group of the maximal extension unramified
outside \(S\). Let \(M\) be any finite abelian \(p\)-group with continuous
\(G_{K,S}\)-action. For each place \(v\), let \(K_v\)
be the completion of \(K\) and \(G_{K_v}\) its absolute Galois group; use
fixed embeddings of separable closures for localization. For each
\(v\in S\), choose a subgroup
\(L_v\subseteq H^1_{\mathrm{cts}}(G_{K_v},M)\). The associated global Selmer
group is
\[
H^1_{\mathcal L}(G,M)=
\ker\!\left(
H^1_{\mathrm{cts}}(G,M)\longrightarrow
\bigoplus_{v\in S}H^1_{\mathrm{cts}}(G_{K_v},M)/L_v
\right),
\]
where the map is the sum of the localization maps induced by fixed embeddings
of separable closures. The data \(\mathcal L=(L_v)_{v\in S}\) are local
Selmer conditions. In the deformation application they are first-order
conditions: assume AC and take \(M=\operatorname{ad}(\bar\rho)\) for a fixed continuous residual
representation \(\bar\rho:G_{K,S}\to\operatorname{GL}_n(\mathbb F_p)\)
obtained by semisimplifying reduction of a specified stable lattice, with no
independence from another lattice assumed; the
tangent-space theorem identifies this module's global \(H^1\) with the
unrestricted deformation tangent space. A fixed
determinant, a full local deformation subfunctor, or a liftability condition
is not specified by this definition and must be supplied separately when
needed.

## Definition references

[[def-deformation-functor-of-a-residual-galois-representation]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[def-group-cohomology-as-a-derived-functor]]

[[thm-galois-deformation-tangent-space-is-h1]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

**Given:** The deformation functor, continuous cohomology, and the local subspaces in the Definition.

[A1] AC is required only in the residual-representation specialization and is assumed by the residual supplier. [[def-axiom-of-choice]]

[F1] In the deformation specialization, the residual representation is fixed and its tangent space is \(H^1\) of its adjoint module. [[def-deformation-functor-of-a-residual-galois-representation]] [[thm-galois-deformation-tangent-space-is-h1]]

[F2] Continuous \(1\)-cohomology is the abelian group of continuous \(1\)-cocycles modulo continuous \(1\)-coboundaries; for \(\mathbb F_p\)-modules it is an \(\mathbb F_p\)-vector space. [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[F3] The derived-functor convention identifies the displayed cohomology with the corresponding derived group cohomology under its Dependent Choice hypothesis. [[def-group-cohomology-as-a-derived-functor]] [[def-dependent-choice]]

[F4] The deformation specialization uses a fixed residual representation over \(\mathbb F_p\) and its adjoint coefficient module. [[def-deformation-functor-of-a-residual-galois-representation]]

## Verification

1.1 Each localization map is a homomorphism of abelian groups, and each \(L_v\) is a subgroup. Therefore the displayed map to the direct sum of quotient groups is a homomorphism, so its kernel is a well-defined subgroup of \(H^1_{\mathrm{cts}}(G,M)\). In the deformation specialization all groups and conditions are \(\mathbb F_p\)-vector spaces and subspaces. [given, F2, algebra]

1.2 A class lies in this kernel exactly when each localized class has zero image in \(H^1_{\mathrm{cts}}(G_{K_v},M)/L_v\), equivalently when its localization belongs to every \(L_v\). In the deformation specialization, this kernel realizes the chosen family of first-order tangent conditions without asserting any higher-order liftability. [F2, step 1.1, algebra] ∎
