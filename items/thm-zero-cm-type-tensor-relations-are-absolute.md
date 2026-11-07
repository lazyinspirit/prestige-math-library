---
id: thm-zero-cm-type-tensor-relations-are-absolute
kind: theorem
title: Zero CM-type tensor relations are absolute
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-axiom-of-choice
- def-dependent-choice
- lem-balanced-cm-type-relations-have-effective-generators
- lem-cm-action-admits-conjugation-compatible-polarization-and-tate-pairing
- lem-balanced-cm-hermitian-forms-are-split
- thm-split-cm-weil-determinant-tensors-are-absolute
- thm-rational-riemann-form-makes-complex-torus-projective
- lem-embedded-analytic-torus-operation-graphs-are-algebraic
- thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: P. Deligne, Hodge Cycles on Abelian Varieties, Section 5
      url: https://www.jmilne.org/math/Documents/Deligne82.pdf
      locator: "Printed pp. 37–40, read: balanced CM-type determinant tensors, their generation of CM Hodge relations, and the reduction to absolute Hodge tensors. The zero-type tensor assertion below is the scoped direct consequence proved here."
verification: {}
---

## Statement

Assume AC and DC. Let $E$ be a CM field with complex embeddings $\Sigma$, and let $\mathcal T$ be its finite set of CM types. For every $\Phi\in\mathcal T$, let $A_\Phi/\mathbb C$ be an abelian variety of CM type $(E,\Phi)$ and put $V_\Phi=H^1(A_\Phi,\mathbb Q)$, a one-dimensional $E$-vector space. Suppose integers $n_\Phi$ satisfy
$$\sum_{\Phi\in\mathcal T}n_\Phi\mathbf1_\Phi(\sigma)=0\qquad(\sigma\in\Sigma).$$
Then every element of the rational tensor line
$$\bigotimes_{\Phi\in\mathcal T,E}V_\Phi^{\otimes_E n_\Phi}$$
is an absolute Hodge tensor in the first-cohomology realizations, where negative tensor powers mean $E$-linear duals and the $E$-tensor products and duals are embedded as rational direct summands using the separability idempotent and trace pairing. The assertion is restricted to zero CM-type relations and does not claim the general absolute-Hodge theorem for non-CM abelian varieties.

## Facts & Assumptions

**Given:** AC, DC, the CM field, the finite family of CM-type abelian varieties and the integer relation in the Statement.

[F1] A balanced integral relation of CM-type characteristic functions is the difference of two balanced relations with all coefficients nonnegative, the second a sum of complementary-type pairs ([[lem-balanced-cm-type-relations-have-effective-generators]]).

[F2] A complex CM abelian variety admits an ample polarization whose Rosati involution restricts to CM conjugation ([[lem-cm-action-admits-conjugation-compatible-polarization-and-tate-pairing]]).

[F3] A balanced CM Hermitian space of dimension $2m$ with determinant class $(-1)^m$ is split ([[lem-balanced-cm-hermitian-forms-are-split]]).

[F4] Determinant tensors of a polarized split CM Hermitian abelian variety are absolute ([[thm-split-cm-weil-determinant-tensors-are-absolute]]).

[F5] A positive rational Riemann form on a complex torus yields a holomorphic projective embedding after a positive integral scaling; its embedded torus and the induced group isomorphisms algebraize ([[thm-rational-riemann-form-makes-complex-torus-projective]], [[lem-embedded-analytic-torus-operation-graphs-are-algebraic]], [[thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic]]).

## Proof

**Proof technique:** express a zero relation as a difference of effective balanced relations, and make each corresponding Hermitian determinant split by positive rescaling.

1.1 Apply [F1] to the given relation with weight zero. It gives nonnegative balanced relations $d=(d_\Phi,w_d)$ and $e=(e_\Phi,w_e)$ with $n_\Phi=d_\Phi-e_\Phi$ and $w_d-w_e=0$. Summing each balanced equation over a conjugate pair of embeddings gives $\sum d_\Phi=2w_d$ and $\sum e_\Phi=2w_e$. Thus both total multiplicities are even and their Tate twists agree. [F1, given, construct, algebra]

2.1 We prove that every effective balanced relation $d$ gives an absolute $E$-determinant line. If $\sum d_\Phi=0$, the tensor line is $E$, not a one-dimensional $\mathbb Q$-space. Choose one CM-type factor $A_{\Phi_0}$ and identify this $E$-line with $\operatorname{End}_E(H^1(A_{\Phi_0},\mathbb Q))$; each of its elements is induced by a rational $E$-endomorphism of $A_{\Phi_0}$ and is absolute because pullback in all three realizations is algebraic and commutes with field conjugation. Otherwise write $\sum d_\Phi=2m$ and form the finite product $A=\prod_\Phi A_\Phi^{d_\Phi}$ with diagonal $E$-action. For each factor choose a polarization from [F2] and an $E$-basis vector in its rational homology. Compatibility with conjugation and nondegeneracy of the trace pairing give its Riemann form as $\operatorname{Tr}_{E/\mathbb Q}(\xi_i x\bar y)$ for a nonzero $\xi_i\in E$ with $\bar\xi_i=-\xi_i$. Put $f=\xi_1$ and $\alpha_i=\xi_i/f\in F^\times$, where $F$ is the maximal totally real subfield. The orthogonal product Riemann form is $\operatorname{Tr}_{E/\mathbb Q}(fh)$ with diagonal Hermitian coefficients $\alpha_i$. [F2, given, step 1.1, choose, construct, algebra]

3.1 At each real place of $F$, the balancing equations say precisely that the corresponding $E$-eigenspace has $m$ holomorphic and $m$ antiholomorphic dimensions. Positivity of the product Riemann form therefore makes the associated Hermitian signature $(m,m)$. Consequently $a=(-1)^m\prod_i\alpha_i$ is totally positive. Multiply one factor's Riemann form by $a^{-1}$; its values at all real embeddings are positive, so the new rational alternating form is again a Riemann form for the same complex structure. Its Hermitian determinant is exactly $(-1)^m$. By [F5], after a common positive integral scaling it comes from an algebraic polarization: the associated theta embedding has an algebraic abelian-variety model, and the holomorphic group isomorphism to $A$ is algebraic. Absorb the common scaling into $f$ rather than $h$, so the determinant remains $(-1)^m$. [F5, given, step 2.1, construct, algebra]

4.1 By [F3], the resulting balanced Hermitian form is split. The hypotheses of [F4] now hold, so every tensor in $\bigwedge_E^{2m}H^1(A,\mathbb Q)(m)$ is absolute. The direct-sum decomposition of $H^1(A)$ into its one-dimensional $E$-lines identifies this determinant with $$\bigotimes_{\Phi,E} V_\Phi^{\otimes_E d_\Phi}(w_d),$$ up to the harmless sign arising from a chosen finite ordering. The determinant embedding and this identification commute with the de Rham, Betti and étale tensor constructions and with field conjugation, since they are induced by algebraic product projections, the $E$-action and the separability idempotent obtained from the rational trace pairing. Hence every tensor in this effective balanced line is absolute. The same argument applies to $e$. [F3, F4, given, step 2.1, step 3.1, construct, algebra]

5.1 Scalar extension of a finite-dimensional rational vector space is faithful. For any nonzero rational vector in a tensor line all of whose vectors are absolute, choose a rational basis of that line as a $\mathbb Q$-space. Under each field automorphism, its realization images are a rational Betti basis by absoluteness and injectivity of comparison; the dual basis is therefore rational too. This proves that the $E$-linear dual of an absolute $E$-line is absolute. Tensor products and contractions of absolute tensors are absolute because all realization comparisons commute with these operations. Apply this to the two balanced lines from step 4.1. Their Tate twists cancel by step 1.1, and their tensor quotient is precisely the line with exponents $n_\Phi=d_\Phi-e_\Phi$. Every element of that line is therefore absolute, as required. [given, step 1.1, step 4.1, choose, construct, algebra] ∎
