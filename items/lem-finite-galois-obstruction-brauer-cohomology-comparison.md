---
id: lem-finite-galois-obstruction-brauer-cohomology-comparison
kind: lemma
title: Finite factor-set comparison and qualified absolute Brauer cohomology
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
- def-axiom-of-choice
- def-dependent-choice
- lem-central-division-algebra-separable-maximal-subfield
- lem-finite-galois-factor-set-obstruction
- lem-finite-density-and-central-simple-base-change
- thm-uniqueness-of-wedderburn-artin-data
- thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
justified_by: []
proof_strategy: direct
axiom_use: Finite comparison uses no choice axiom; AC and DC are used only for the absolute continuous comparison.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03; locally adapted intermediate
      lemma
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter IV §3, Theorems5.11–5.14 and Corollary5.16; tensor law and inflation
      compatibility are explicitly reconstructed rather than imported from the source
      sketch/footnote.
verification: {}
---

## Statement

Use normalized cochains for finite-group cohomology. Let $\operatorname{Br}_{\mathrm{alg}}(K)$ be the similarity classes of finite-dimensional central simple $K$-algebras, with tensor product as addition and matrix algebras as zero. This is an abelian group. For any finite Galois $E/K$, the factor-set obstruction induces an isomorphism
$$o_E:\ker(\operatorname{Br}_{\mathrm{alg}}(K)\to\operatorname{Br}_{\mathrm{alg}}(E))    \xrightarrow{\ \sim\ }H^2(\operatorname{Gal}(E/K),E^\times).$$
The usual crossed-product comparison is $b_E=-o_E$, normalized by $b_E([A(c)])=[c]$ for the crossed product with multiplication factor $c$. These maps commute with enlargement of Galois splitting fields and with scalar extension. Under AC and DC with the supplied derived-cohomology conventions, for a fixed separable closure $K_s$ they induce the canonical group isomorphism
$$\operatorname{Br}_{\mathrm{alg}}(K)\xrightarrow{\sim}H^2_{\mathrm{cts}}(G_K,K_s^\times).$$
The finite-level assertions and the algebraic group law need no additional choice axiom; only this last absolute comparison is asserted under AC and DC.

## Statement references

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[lem-central-division-algebra-separable-maximal-subfield]]

[[lem-finite-galois-factor-set-obstruction]]

[[lem-finite-density-and-central-simple-base-change]]

[[thm-uniqueness-of-wedderburn-artin-data]]

[[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

## Facts & Assumptions

**Given:** The algebraic objects in the Statement; for the final absolute comparison assume AC and DC.

[F1] Central simple algebras have division representatives, and $A\otimes A^{\mathrm{op}}=\operatorname{End}_K(A)$. [[lem-finite-density-and-central-simple-base-change]]

[F2] Every such algebra splits over a finite Galois extension. [[lem-central-division-algebra-separable-maximal-subfield]]

[F3] The factor-set obstruction is independent of choices, zero exactly for split algebras, unchanged by matrix stabilization, compatible with field extension, and every cohomology class occurs. [[lem-finite-galois-factor-set-obstruction]]

[F4] Matrix sizes and division rings in a semisimple decomposition are unique. [[thm-uniqueness-of-wedderburn-artin-data]]

[F5] Under AC and DC, absolute continuous cohomology is the direct limit over finite Galois levels with inflation and coefficient inclusion. [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[A1] AC and DC are assumed only for the final absolute comparison. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 The matrix identification $M_r(A)=A\otimes_KM_r(K)$ makes stable matrix similarity an equivalence relation. To see tensor products stay central simple, split the two factors over a common finite Galois extension by [F2]; there their tensor product is a matrix algebra. A nonzero proper two-sided ideal would stay nonzero proper after tensoring with a field, which is impossible. Center is the kernel of finitely many linear commutator equations, so it descends as $K$ as well. Associativity and the factor swap give an associative commutative operation on similarity classes. Matrix algebras give the identity and [F1] gives the inverse $A^{\mathrm{op}}$. There is a set of representatives, since all finite-dimensional algebra structures are given by finite arrays of structure constants, and taking their union over finite dimensions and quotienting is a set. [F1, F2, algebra]

2.1 A class is zero precisely when its division representative is $K$: matrix algebras and their column-ideal decompositions are semisimple, so [F4] identifies their unique division factor. In particular zero similarity class is equivalent to the algebra itself being split. This identifies the displayed kernel with the algebras split by $E$. By [F3] stabilization does not change their obstruction, so $o_E$ is well defined on that kernel. [F1, F3, F4, step 1.1, algebra]

3.1 To check the group law without importing a crossed-product tensor identity, split $A$ and $B$ over $E$ as $\operatorname{End}_E(V)$ and $\operatorname{End}_E(W)$. Their tensor product is $\operatorname{End}_E(V\otimes_EW)$. If semilinear implementations have factors $c$ and $d$, then $T_\sigma\otimes S_\sigma$ is a well-defined semilinear implementation on the tensor product and has factor $c(\sigma,\tau)d(\sigma,\tau)$. Thus $o_E(A\otimes B)=o_E(A)+o_E(B)$. Its kernel is zero by [F3] and step 2.1. It is onto by [F3], using the opposite crossed product with obstruction exactly the prescribed cocycle. Hence it is an isomorphism. Set $b_E=-o_E$. The tensor law just proved gives $o_E(B^{\mathrm{op}})=-o_E(B)$ because $B\otimes B^{\mathrm{op}}$ is split by [F1], while [F3] gives $o_E(A(c)^{\mathrm{op}})=[c]$; hence $b_E([A(c)])=[c]$. [F1, F3, step 2.1, algebra]

4.1 For enlargement $E\subseteq F$, write an implementation as $P_\sigma\sigma$ in a splitting basis. Extending scalars and using $P_{\gamma|E}\gamma$ gives the factor $c(\gamma|E,\eta|E)$ in $F^\times$. For scalar extension to a finite separable $M/K$, use the same matrices over $EM$ and the restriction map $\operatorname{Gal}(EM/M)\to\operatorname{Gal}(E/K)$. Thus the actual cochain maps are the inflation/coefficient and restriction/coefficient maps, as already checked in [F3]. For an arbitrary field extension $M/K$, $EM$ is a finite Galois splitting extension of $M$ by taking one field factor of the finite étale $M$-algebra $E\otimes_KM$ (equivalently, a splitting field over $M$ of a separable defining polynomial of $E/K$). The induced map of its finite Galois group to $G$ and the identical matrix computation prove scalar-extension compatibility; no generic algebraic closure is selected. [F3, step 3.1, algebra]

5.1 By [F2], every algebraic class appears at a finite Galois splitting level in a fixed separable closure. Given a continuous cohomology class, [F5] represents it at a finite Galois level, and step 3.1 gives its algebraic preimage. If an algebraic class maps to zero in the continuous group, its obstruction becomes zero at some later finite level by [F5]; [F3] then says its algebra is already split over $K$, so its class is zero. Compatibility in step 4.1 makes these maps independent of the level and homomorphisms. Use the already normalized finite maps $b_E=-o_E$ for the continuous comparison. This proves the claimed canonical continuous isomorphism with its crossed-product normalization and the stated AC/DC scope. [A1, F1, F2, F3, F5, step 3.1, step 4.1, algebra] ∎
