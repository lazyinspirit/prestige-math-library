---
id: lem-crystal-lattice-polarizations-are-perfect-at-q-zero
kind: lemma
title: "Crystal lattice polarizations are perfect at $q=0$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-crystal-lattice-and-crystal-basis, def-kashiwara-lattices-lambda-and-infinity, thm-grand-loop-existence-of-highest-weight-crystal-bases, thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral, lem-cartan-projection-constructs-the-quantum-verma-contravariant-form]
justified_by: []
aliases: []
landmark: false
dependency_level: 7
proof_strategy: direct
verification:
  precheck: pass
axiom_use: "Inherited AC from the field negative-half rank/form supplier only; no additional choice in finite Gram inversion."
sources:
  scraped: []
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§7, printed pp. 41-49: Lemma 7.25 and its proof, Corollary 7.37, Remark 7.38 and Lemma 7.39, giving the module and negative-half polarizations, the perfect pairing and the norm criterion after the grand loop."
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991), no. 2, 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§4.7 Lemma 4.7.1 (consistent degree/color constant term); §5.1, printed pp. 503-505: residue orthonormality, duality and the norm criterion."
---

## Statement

For the highest-module and negative-half Kashiwara lattices, their respective normalized polarizations take values in $A_0$ and their crystal residue bases are orthonormal. On every finite label or root component the Gram determinant is a unit of $A_0$, the $A_0$-pairing is perfect and $\mathcal L^\vee=\mathcal L$. Moreover $\mathcal L=\{x:\langle x,x\rangle\in A_0\}$ inside the field scalar extension of the lattice. These are consequences after the grand loop, not prerequisites for it. Only the field-half supplier's inherited AC hypothesis is retained.

## Facts & Assumptions

**Given:** A dominant integral weight $\lambda$, the lattices $\mathcal L(\lambda)$ and $\mathcal L(\infty)$ with their residue bases from the grand loop, and the normalised $\sigma$-contravariant forms of [[lem-cartan-projection-constructs-the-quantum-verma-contravariant-form]] and [[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]].

[F1] Grand loop: the pairs $(\mathcal L(\lambda),\mathcal B(\lambda))$ and $(\mathcal L(\infty),\mathcal B(\infty))$ are crystal bases with the partial-inverse and projection clauses C, J, L, N, O and the module/lattice pairing properties; the induced pairing is $A_0$-valued and satisfies $\langle\tilde f_iu,v\rangle\equiv\langle u,\tilde e_iv\rangle\bmod q$ on the lattices ([[thm-grand-loop-existence-of-highest-weight-crystal-bases]]).

[F2] The forms: the module form on each finite-dimensional weight space is nondegenerate, the half form is symmetric nondegenerate and integral on the divided lattice, and the large-weight comparison of the half and module pairings has constant term $C_\nu=\prod_i(1-q_i^2)^{-n_i}\in1+qA_0$ for $\nu=\sum_in_i\alpha_i$; the operator $Q_i$ of the source's Lemma 7.25 is the identity because $a_{ii}=2$ ([[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]], [[lem-cartan-projection-constructs-the-quantum-verma-contravariant-form]]).

[F3] Finite linear algebra over $A_0$: a matrix congruent to the identity modulo $q$ has determinant a unit of $A_0$ and is invertible; over the field the same matrix is invertible, and the inverse pairing matrix identifies the dual lattice with the lattice ([[def-crystal-lattice-and-crystal-basis]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct. Residue orthonormality is an induction on root height using the grand-loop partial inverses; perfection and self-duality follow from a Gram matrix congruent to the identity; the norm criterion follows from positivity of the rational residue form.

1.1 Residue orthonormality. Induct on $\operatorname{ht}(\alpha)$. For residues $b,b'\in\mathcal B(\lambda)_{\lambda-\alpha}$ choose $i$ with $\tilde e_ib\neq0$; then $b=\tilde f_i\tilde e_ib$ by clause C(r) and J(r), so the adjunction of [F1] gives $\langle b,b'\rangle_0=\langle\tilde e_ib,\tilde e_ib'\rangle_0$. If $\tilde e_ib'=0$ this is $0$; otherwise $\tilde e_ib'$ lies at lower height and, by the lower-height orthonormality and the injectivity of $\tilde e_i$ on the surviving string positions, the pairing is $\delta_{b,b'}$. The top vector has norm $1$, and since all $a_{ii}=2$ the operator $Q_i$ of [F2] is the identity, so no norm larger than $1$ occurs. [F1, F2, given]

2.1 Perfection and self-duality. By step 1.1 the Gram matrix of the finite component in the residue basis is congruent to the identity modulo $q$; by [F3] its determinant is a unit of $A_0$ and the matrix is invertible, so the pairing on the finite component is perfect and the dual lattice with respect to the field form equals the lattice itself: $\mathcal L^\vee=\mathcal L$. [F3, step 1.1]

3.1 The negative half. For $U_q^-$ use the corrected degree/colour comparison of [F2] with a sufficiently large regularised dominant weight: $\pi_\lambda$ is a lattice isomorphism on the component and a bijection on its crystal residue sets, and $C_\nu\equiv1\bmod q$; hence the Gram residue of the half lattice is the identity as well, and the same finite-matrix argument gives $A_0$-valuedness, perfection and $\mathcal L(\infty)^\vee=\mathcal L(\infty)$ on each finite component. [F2, F3, step 2.1]

4.1 The norm criterion. Suppose $\langle x,x\rangle\in A_0$ but $x$ has a pole in the lattice. Choose the minimal $N>0$ with $q^Nx\in\mathcal L$ and let $\bar x\neq0$ be its residue. In the orthonormal residue basis of step 1.1, $\langle\bar x,\bar x\rangle$ is a sum of squares of rational coordinates, hence a positive rational; on the other hand $q^{2N}\langle x,x\rangle\in qA_0$ has residue $0$, a contradiction. Therefore $\mathcal L=\{x:\langle x,x\rangle\in A_0\}$ inside the field scalar extension. [F3, step 1.1, step 3.1]

5.1 Choice. The only choice used is the inherited hypothesis of the negative-half field form, already declared in [F2]; the finite Gram computations and the norm criterion use no further choice. [F2, F3] ∎
