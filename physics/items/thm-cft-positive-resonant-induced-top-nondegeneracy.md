---
id: thm-cft-positive-resonant-induced-top-nondegeneracy
kind: theorem
title: Positive resonant nondegeneracy of universal top induction
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
deps:
  - lem-cft-resonant-finite-root-and-first-kernel-reduction
  - lem-cft-resonant-universal-top-jacobi-realization
  - def-cft-resonant-induced-top-return-data
dependency_roles:
  lem-cft-resonant-finite-root-and-first-kernel-reduction: mathematical-premise
  lem-cft-resonant-universal-top-jacobi-realization: mathematical-premise
  def-cft-resonant-induced-top-return-data: mathematical-premise
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: voa-resonant-induction-and-projective-socles
physical_scope: Pure mathematics; no physical premises or physical claim.
axiom_base: ZF
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras
      url: https://arxiv.org/pdf/math/0607679v1
      locator: "§3, Theorem 3.4, complete published argument; the exact tensor-to-multiplication-image injection used there is not established by the stated algebraic inputs, as detailed below."
    - title: Chongying Dong, Haisheng Li, and Geoffrey Mason, Vertex operator algebras and associative algebras
      url: https://arxiv.org/pdf/q-alg/9612010
      locator: "§§2–4, induced-mode and Zhu interfaces inspected; these do not supply the missing resonant top-return nondegeneracy."
verification:
  precheck: pending
---

## Statement

Let $V$ be simple of CFT type over $\mathbb C$, assume its regular Zhu module is semisimple and every irreducible admissible module is ordinary. For the actual universal modules $M(U_i)$ and conformal top weights $h_i$,
$$
\operatorname{Hom}_{A(V)}\bigl(U_j,\Omega_0(M(U_i))(d)\bigr)=0
$$
whenever $d=h_j-h_i$ is a positive integer.

## Statement references

[[lem-cft-resonant-finite-root-and-first-kernel-reduction]]

[[lem-cft-resonant-universal-top-jacobi-realization]]

## Facts & Assumptions

**Given:** A simple CFT-type VOA $V$ over $\mathbb C$, semisimplicity of its regular left Zhu module $A(V)$, and ordinarity of every irreducible admissible $V$-module.

[F1] [[lem-cft-resonant-finite-root-and-first-kernel-reduction]]: $A(V)$ is finite dimensional with simple modules $U_1,\ldots,U_s$; if the largest top-disjoint graded submodule of $M(U_i)$ is nonzero, its first nonzero grade is some $d=h_j-h_i\in\mathbb Z_{>0}$ and contains a copy of $U_j$ in $\Omega_0(M(U_i))(d)$. Thus the stated Hom vanishing is precisely the remaining first-kernel obstruction.

[F2] [[lem-cft-resonant-universal-top-jacobi-realization]] defines the actual $M(U_i)$, its noncollapsed Zhu top, and $\Omega_0$ from the mode action. The all-word return forms in [[def-cft-resonant-induced-top-return-data]] are well-defined on these modules; they are not asserted to be nondegenerate.

[F3] Dong–Jiang, *Rationality of Vertex Operator Algebras*, Theorem 3.4, is the published source for the broader conclusion. Its proof's multiplication-injection inference, and the algebraic countermodel showing that inference unsupported in general, are documented in the inspected full-text source review and research/conformal-field-theory-string-theory-all-97-2026-10-26-owner-step1-genus-one-continuation/reverse-zhu/direct-splitting-and-exact-root.md §B. The countermodel is not a VOA.

## Proof

1.1 By [F1], only the finite positive integral differences $d=h_j-h_i$ can occur as the first grade of a top-disjoint kernel. At each such grade, an $A(V)$-map $U_j\to\Omega_0(M(U_i))(d)$ would give the first singular top of that kernel. This reduces the theorem's conclusion to eliminating these actual singular top maps; it does not establish their vanishing. [F1, F2, algebra]

1.2 A proof must use the full mode/Jacobi relations on $M(U_i)$. The zero-mode Zhu action only describes degree zero and does not identify the positive-degree raising operations with that action. In particular, the top-return pairings in [F2] are defined, but no nondegeneracy statement about them follows from the definition or from [F1]. [F1, F2, algebra]

2.1 Dong–Jiang, *Rationality of Vertex Operator Algebras*, Theorem 3.4, is the published source for the broader conclusion. Its proof's passage from a tensor involving the top-pairing radical to its multiplication image uses an injectivity assertion for that multiplication map. The complete local proof record and a finite radical-square-zero algebra countermodel show that the general algebraic implication is false without an additional hypothesis. The model is not a VOA and therefore does not refute the theorem; it only prevents importing that step as a proof. The later Jacobi calculations recorded in the pair research dossier retain non-top circle corrections and still do not imply the required vanishing. [F1, F3, algebra]

2.2 The exact required conclusion is therefore not established in this carrier. No complete VOA/Jacobi argument eliminating the positive-resonance Hom spaces is present in the inspected proof attempts; no counterexample to the stated VOA theorem is established either. This remains an unresolved proof obligation; no conclusion about falsity or open-problem status is made. [F1, F3, algebra]
