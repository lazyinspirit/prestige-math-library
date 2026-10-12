---
id: thm-the-highest-weight-fock-submodule-has-the-qg-global-bases
kind: theorem
title: "The highest weight Fock submodule carries the quantum-group global bases"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 24
deps:
  - thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule
  - def-dual-canonical-canonical-and-quasi-canonical-fock-bases
  - thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations
  - thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis
  - thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix
  - def-lower-global-basis-of-a-quantum-highest-weight-module
  - def-upper-global-basis-by-the-contravariant-form
  - thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis
  - thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible
  - thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type
  - thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module
  - prop-global-bases-specialize-to-integral-weight-bases
  - def-contravariant-form-on-an-integrable-quantum-highest-weight-module
  - def-kashiwara-lattices-lambda-and-infinity
  - def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules
  - thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals
  - thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules
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
      locator: "Sections 2.3, 2.6 and 2.8, Theorems 2.2 and 2.7 and Corollary 2.8 (printed pp. 8-16 and 18-19): $D_A=\\pi(L_A)$ is the upper global crystal base, the normalization $P_A=q^{\\frac12(2\\Lambda-\\alpha,\\alpha)}T_{A^\\uparrow}$ and the integral forms $V(\\Lambda)_{\\mathcal A}\\subseteq V(\\Lambda)^*_{\\mathcal A}$; complete passage read."
    - title: "Jonathan Brundan, Dual canonical bases and Kazhdan-Lusztig polynomials, J. Algebra 306 (2006) 17-46 (complete 29-page arXiv v2 article)"
      url: "https://arxiv.org/pdf/math/0509700"
      locator: "Theorem 26, Remarks 27 and 30 (printed pp. 25-29): the dual-canonical basis of the irreducible polynomial representation as the upper global crystal base, independent of $\\mu$, and its comparison with Lusztig's dual canonical basis; complete passage read."
    - title: "Volodymyr Mazorchuk, Lectures on Algebraic Categorification, QGM Master Class Series, European Mathematical Society 2012 (complete 77-page arXiv lecture-note set)"
      url: "https://arxiv.org/pdf/1011.0144"
      locator: "Section 4.2 (printed pp. 18-19): highest weight modules and Verma modules in category O, used for the ungraded specialization language; complete passage read."
---

## Statement

Work in the conventions of
[[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]] and
[[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]]:
source parameter $s$, library parameter $t=s^{-1}$. On the highest constituent
$V(\Lambda)\subseteq F(\Lambda)$ put $a(\alpha)=(2\Lambda-\alpha,\alpha)/2$ at
weight $\Lambda-\alpha$.

(1) Under the proved convention and pairing dictionary, the library lower
global vector is
$$G_{\mathrm{low}}(A)=T_{A^{\uparrow}}=s^{-a(\alpha)}P_A\qquad(A\in\mathrm{Std}^\Lambda),$$
whereas the actual library form-dual upper vector is
$$G_{\mathrm{up}}(A)=s^{a(\alpha)}D_A,\qquad D_A=\pi L_A .$$
Source $D_A$ is ordinary-bar fixed; its rescaled library upper vector is fixed
by the form-adjoint upper bar, with the genuine dual integral lattices and
charts of [[def-upper-global-basis-by-the-contravariant-form]].

(2) The source upper/costandard image lattice is related to the lower lattice by
these weightwise Laurent units; it is not identified with the lower
divided-power lattice. All comparisons are integral and compatible with finite
cuts and their direct limits, and then with the supplier's permitted
specializations.

No ordinary-bar fixedness is asserted for the unqualified library upper family.

## Facts & Assumptions

**Given:** The Fock module with its four source families, the projection $\pi$ of [[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]], the forms $\langle-,-\rangle$, $C$, $C_0$, and the library based-module machinery.

[F1] Standard monomials and projection ([[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]]): the based highest inclusion, the $C_0$-adjoint projection $\pi$, the bases $S_A,D_A$ over $\mathrm{Std}^\Lambda$, the vanishing of $\pi L_A$ off $\mathrm{Std}$, the straightening formula and the saturated kernel.

[F2] Library global bases ([[def-lower-global-basis-of-a-quantum-highest-weight-module]], [[def-upper-global-basis-by-the-contravariant-form]], [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]], [[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]]): existence, bar invariance and uniqueness of the lower global basis, the form-dual upper family, the contravariant form and the nondegenerate normalized highest form.

[F3] Fock forms and bars ([[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], [[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]], [[def-kashiwara-lattices-lambda-and-infinity]]): the source forms, the bar normalization $\psi D=D^{-1}\psi$, the triangular charts and the integral lattices.

[F4] Finite products and specializations ([[thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules]], [[thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals]]).

## Proof

**Proof technique:** direct.

1.1 **The lower family and the pairing.** By [F1] the based highest inclusion identifies the corrected tensor family $T_{A^{\uparrow}}$ with the lower global basis on $\mathrm{Std}^\Lambda$, and the projection $\pi$ is its $C_0$-adjoint; hence $C_0(T_{A^{\uparrow}},D_B)=\delta_{AB}$. [F1, F2, algebra]

1.2 **The weight recursion $B_8=s^{-a}C_0$.** The generator identities of the dictionary determine the library contravariant form $B_8$ and the normalized source form $C_0$ compatibly; on weight $\Lambda-\alpha$ the semilinear normalization gives $B_8=s^{-a(\alpha)}C_0$. Indeed the dictionary sends the library $\sigma$ at $t=s^{-1}$ to the source anti-involution, whose action on a lowered vector of weight $\mu$ contributes $s^{-\langle\mu,h_i\rangle-1}$, and the exponent identity $a(\alpha)-a(\alpha-\alpha_i)=\langle\mu,h_i\rangle+1$ with highest normalization and induction on lowering monomials proves the equality on every weight space. [F2, F3, algebra]

2.1 **Identification of the upper family.** Applying step 1.2 to step 1.1 gives $B_8(T_{A^{\uparrow}},s^{a}D_B)=\delta_{AB}$; by the dual-family uniqueness in [F2], the vectors $G_{\mathrm{up}}(A)=s^{a}D_A$ are the actual library form-dual upper vectors, fixed by the form-adjoint upper bar with the genuine dual lattices and charts. [F1, F2, step 1.1, step 1.2]

3.1 **The quasi-canonical family on the constituent.** The source form satisfies $\langle x,y\rangle=s^{a}C_0(\psi x,y)$, proved by the same generator recurrence as step 1.2. The left annihilator of $\ker\pi$ under this form is $U$-stable by its anti-involution, contains the ground highest vector, and has dimension $\dim V(\Lambda)$; hence it is exactly the highest constituent. The delta evaluations of the quasi-canonical vectors show that $P_A$ lies in that annihilator for $A\in\mathrm{Std}^\Lambda$; on the constituent the candidate $s^{a}T_{A^{\uparrow}}$ has the same delta evaluations against the $D$-basis by step 1.2 and annihilates the off-standard $L$-vectors by [F1], so whole-Fock dual uniqueness gives $P_A=s^{a}T_{A^{\uparrow}}$ on $V(\Lambda)$. [F1, F3, step 1.2, step 2.1]

4.1 **Integrality, cuts and limits.** The units $s^{\pm a(\alpha)}$ are Laurent monomials, so the comparisons of steps 1.1-3.1 are weightwise integral; charts are the actual rescaled or dual charts. The finite double-cut compatibility of the Fock bases and of the library global bases, together with uniqueness of the normalized highest maps, proves the full direct-limit statement, and only the actual integral and specialization clauses of [F4] are used. [F1, F2, F3, F4, step 2.1, step 3.1]

5.1 **Conclusion.** The library lower global vector is $G_{\mathrm{low}}(A)=s^{-a}P_A$, the actual form-dual upper vector is $G_{\mathrm{up}}(A)=s^{a}D_A$, and the source quasi-canonical family satisfies $P_A=s^{a}T_{A^{\uparrow}}$ on the highest constituent; the source upper image lattice and the lower divided-power lattice are related by the weightwise Laurent units, never identified, and no ordinary-bar fixedness is claimed for the unqualified library upper family. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎
