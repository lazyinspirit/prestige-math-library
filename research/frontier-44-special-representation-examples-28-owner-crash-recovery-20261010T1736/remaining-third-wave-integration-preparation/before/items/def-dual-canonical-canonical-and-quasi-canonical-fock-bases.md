---
id: def-dual-canonical-canonical-and-quasi-canonical-fock-bases
kind: definition
title: "The dual-canonical, canonical and quasi-canonical Fock bases"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations,
       thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis,
       def-higher-level-wedge-tensor-fock-module,
       def-lower-global-basis-of-a-quantum-highest-weight-module,
       def-upper-global-basis-by-the-contravariant-form,
       thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis,
       def-the-bar-lattice-and-integral-lattice-of-a-based-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Sections 2.3, 2.5-2.6 (printed pp. 8-9 and 11-16): definitions (2.14), (2.16)-(2.17), (2.28)-(2.30), (2.34)-(2.37), the twisted module and rectification (2.31), the forms (2.38)-(2.44), Lemma 2.6 and Theorem 2.7; complete passage read."
    - title: "Jonathan Brundan, Dual canonical bases and Kazhdan-Lusztig polynomials, J. Algebra 306 (2006) 17-46 (complete 29-page arXiv v2 article)"
      url: "https://arxiv.org/pdf/math/0509700"
      locator: "Sections 4-5 (printed pp. 11-19): the dual-canonical and canonical bases of tensor space, the pairings $L_\\alpha$, $L^*_\\alpha$, Theorem 4 and Corollary 5; complete passage read."
---

## Definition

Work in the conventions of
[[def-higher-level-wedge-tensor-fock-module]] and
[[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]]: the
**source parameter** is $s$, the **library parameter** is $t=s^{-1}$, the
monomial basis of the Fock module is $\{M_A\}$, and $\psi$ is the ordinary
compatible bar of
[[thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations]],
which is triangular and integral on the monomial basis.

The **source dual-canonical family** $(L_A)$ is the unique $\psi$-fixed family
with
$$L_A=M_A+\sum_{B<A}s\,\mathbb Z[s]\,M_B,$$
and the **canonical family** $(T_A)$ is the unique $\psi$-fixed family with
$$T_A=M_A+\sum_{B<A}s^{-1}\mathbb Z[s^{-1}]\,M_B .$$

Let $d_{A,B}(s)$ and $p_{A,B}(-s)$ be the transition coefficients defined by
$$M_B=\sum_A d_{A,B}(s)\,L_A,\qquad L_B=\sum_A p_{A,B}(-s)\,M_A,$$
and define the **quasi-canonical family** by
$$P_A:=\sum_B d_{A,B}(s)\,M_B,\qquad\text{so that}\qquad M_A=\sum_B p_{A,B}(-s)\,P_B .$$
The families $L$ and $T$ are ordinary-bar fixed; $P$ generally is not.

The **reverse-factor monomials** $\widetilde M_A$ use the reverse-column
reading of the tableau $A$; the corresponding bar-fixed families
$\widetilde L_A,\widetilde T_A$ are defined by the same triangular conditions
with respect to $\widetilde M_A$, so that $\widetilde L_A$ is supported on
$B>A$. **Rectification** is the weight-preserving combinatorial identification
of the original lower ground component $\mathrm{Rev}^\Lambda$ with the
reverse-factor lower ground component $\mathrm{Std}^\Lambda$, given by reading
down columns and reverse row insertion.

The **source sesquilinear form** is the $\mathbb C$-antilinear-in-the-first
argument pairing with
$$\langle M_A,\psi M_B\rangle=\delta_{AB},$$
and the **bilinear reverse-factor form** is
$$C(\widetilde M_A,\psi M_B)=\delta_{AB}.$$
Thus the labelled monomial Gram matrices of the two forms are the inverse
ordinary-bar matrix, not the identity. Transition duality gives
$$\langle P_A,L_B\rangle=\delta_{AB},\qquad C(\widetilde L_A,T_B)=\delta_{AB},\qquad C(\widetilde T_A,L_B)=\delta_{AB}.$$

All four families are Laurent-integral bases of the finite Fock cuts and
commute with the upper-cut and common-bottom-tail embeddings. On a highest
constituent, the source bilinear normalization $C_0$ and the library
polarization of [[def-upper-global-basis-by-the-contravariant-form]] differ by
an explicit weight power, proved in the global-basis comparison later in this
pair; no unqualified library-upper/ordinary-bar identification is asserted.

## Facts & Assumptions

**Given:** A finite cut of the Fock module with its monomial basis $\{M_A\}$, the ordinary compatible bar $\psi$ with $\psi M_A=M_A+\sum_{B<A}\mathbb Z[s^{\pm1}]M_B$, the reverse-column reading and rectification, and the two forms of the Definition.

[F1] Fock bar and monomial basis ([[thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations]], [[thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis]], [[def-higher-level-wedge-tensor-fock-module]]): $\psi$ is involutive, triangular with coefficients in $\mathbb Z[s^{\pm1}]$, preserves the integral monomial lattice, and commutes with the cut embeddings; the monomials form a Laurent-integral basis.

[F2] Global bases in the library ([[def-lower-global-basis-of-a-quantum-highest-weight-module]], [[def-upper-global-basis-by-the-contravariant-form]], [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]], [[def-the-bar-lattice-and-integral-lattice-of-a-based-module]]): existence, bar invariance and uniqueness of the lower global basis, the form-dual upper basis, and the bar lattice/based-module framework.

## Verification

1.1 **The two triangular charts.** Since $\psi M_B=M_B+\sum_{C<B}(\dots)M_C$, the equation $\psi X=X$ for an element $X=\sum_A c_A M_A$ is equivalent, by triangularity of the monomial basis and [F1], to the triangular system $c_A=c_A+\sum_{B<A}(\dots)c_B$; solving it over the lower ideals in increasing order determines both a $s\mathbb Z[s]$-valued and an $s^{-1}\mathbb Z[s^{-1}]$-valued chart, and the two resulting $\psi$-fixed families are $L$ and $T$. Their coefficient matrices are unitriangular with diagonal $1$; in particular each of $L,T$ is a $\mathbb Z[s^{\pm1}]$-basis. [F1, algebra]

1.2 **Rectification of the ground components.** The reverse-column reading and the ordinary reading differ by reversal of the tensor positions; the finite column signature rule and the insertion/reverse-insertion rectification move both readings with the same selected cancelling signs, so the original lower ground component $\mathrm{Rev}^\Lambda$ is identified with the reverse-factor lower ground component $\mathrm{Std}^\Lambda$ by the stated weight-preserving combinatorial dictionary. This is a statement about the ground components only. [F1, algebra]

2.1 **The quasi-canonical family and the inverse charts.** The displayed definitions set the transition matrices of $L$, $P$ and $M$ to be mutually inverse triangular matrices. Because both are unitriangular with unit diagonal, the coefficients $d_{A,B}(s)$ and $p_{A,B}(-s)$ are well defined Laurent polynomials and the relations $M_B=\sum_A d_{A,B}L_A$ and $M_A=\sum_B p_{A,B}(-s)P_B$ hold simultaneously. If $B$ is the matrix of the ordinary bar on the monomial basis, then the defining equations of a bar-fixed chart are $(\psi\text{-matrix})\,(\text{transition})=(\text{transition})\,(\text{conjugation})$, and solving them gives the complementary charts of $L$ and $T$; this is the same computation as in step 1.1, performed between the two sides. [F1, step 1.1, algebra]

2.2 **Cuts and integrality.** All four families are computed weight by weight from the same triangular equations, so they are Laurent-integral bases of each finite cut. Since the embeddings of [F1] preserve the monomial basis and the bar, they preserve these equations and hence the four families; on the highest constituent the normalized source pairing is $C_0$ up to the explicit weight rescaling proved in the global-basis comparison. [F1, step 1.1, step 1.2]

3.1 **The Gram matrices.** For the sesquilinear form, the defining normalization $\langle M_A,\psi M_B\rangle=\delta_{AB}$ says that the Gram matrix of the form in the monomial basis is the inverse of the ordinary-bar matrix: if $\psi M_B=\sum_C B_{C,B}M_C$ then the matrix of the form is $(B^{-1})^{\mathsf T}$ in the corresponding labelling, and the same computation with the bilinear reverse-factor form gives $B^{-1}$ for the reverse-factor monomials. Hence the two forms have the inverse ordinary-bar matrix as their labelled monomial Gram matrix, as asserted, and not the identity. [F1, F2, step 2.1, algebra]

4.1 **The three delta identities.** Substitute the two charts into the Gram matrix computations of step 2.1: writing the coefficient variation as $P$-versus-$L$ transition, the products of a unitriangular matrix with its triangular inverse collapse to the identity, giving $\langle P_A,L_B\rangle=\delta_{AB}$; the bilinear reverse-factor form gives $C(\widetilde L_A,T_B)=\delta_{AB}$ and, applying coefficient conjugation in the reverse reading, $C(\widetilde T_A,L_B)=\delta_{AB}$. The bar in the second argument of $C$ accounts for the conjugation, and the toral identity is checked with $\psi D=D^{-1}\psi$ from the dictionary. [F1, step 2.1, step 3.1, algebra]

5.1 **Conclusion.** The four families $L,T,P$ and their reverse-factor counterparts are well-defined Laplace-integral bases of the finite Fock cuts with the stated triangular charts and delta pairings, and the reverse ground component is identified with $\mathrm{Std}^\Lambda$ by rectification. All later comparisons with the library upper family use the explicit weight rescaling of the global-basis theorem, never the bare names of the families. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1] ∎
