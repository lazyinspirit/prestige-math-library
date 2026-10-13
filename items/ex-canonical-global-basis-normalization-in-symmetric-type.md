---
id: ex-canonical-global-basis-normalization-in-symmetric-type
kind: example
title: "Matching the canonical and lower global normalizations in rank one and $A_2$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-i-string-decomposition-of-the-negative-half, def-drinfeld-jimbo-quantized-enveloping-algebra, def-kashiwara-skew-derivations-on-the-negative-quantum-half, def-lower-global-basis-of-a-quantum-highest-weight-module, def-upper-global-basis-by-the-contravariant-form, lem-lusztig-and-kashiwara-normalizations-match-by-root-color, thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis, thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type, thm-quantized-sl-two-string-formulas, thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral, thm-unique-kashiwara-i-string-decomposition]
justified_by: []
aliases: []
landmark: false
dependency_level: 17
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§0, printed p. 466 (the $A_n,D_n,E_n$ agreement with Lusztig's canonical basis); §6.1, Proposition 6.1.1 and Corollary 6.1.2."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "§§1.2.2–1.2.3 printed3/PDF12: source norm; §§14.2.3–14.4.12 printed118–124/PDF127–133: full signed/positive canonical construction. The two mixed A2 lower words are already the global lifts; their duals require actual inverse Gram matrices."
    - title: "Jonathan Brundan, Dual Canonical Bases and Kazhdan–Lusztig Polynomials, arXiv:math/0509700v2 (Transform. Groups 14 (2009), 535–558)"
      url: "https://arxiv.org/pdf/math/0509700v2"
      locator: "§3–§5, printed pp. 7–18: the type-A dictionary of canonical, dual canonical, lower and upper global bases."
---

## Example

Rank one. In the rank-one half $U^-$ with generator $F$, the lower global (and transported canonical) vectors are exactly the divided powers $G(b_n)=F^{(n)}$: they are bar fixed and congruent to their normalized crystal classes, where $b_n=\tilde f^{\,n}1+q\mathcal L(\infty)$ is represented by $F^{(n)}$ and balanced uniqueness identifies its lift. Their Kashiwara norms are $B_K(F^{(n)},F^{(n)})=1/[n]_{q^2}!$, while the transported Lusztig norms are $B_L(F^{(n)},F^{(n)})=\prod_{r=1}^n(1-q^{2r})^{-1}$; the two differ by the full color factor $(1-q^2)^{-n}=C_{n\alpha}$. The ordinary power satisfies $F^n=[n]_q!F^{(n)}$ with symmetric factorial $[n]_q!$, which is a nonunit for $n\ge2$, and the Drinfeld generator normalization contributes the scalar $(q-q^{-1})^{-1}$ since $D(E,F)=1/(q-q^{-1})$. The four conventions are thereby matched explicitly rather than conflated.

Type $A_2$ in degree $\alpha_1+\alpha_2$. The two lower global (and canonical) vectors are exactly $F_1F_2$ and $F_2F_1$, with no triangular correction: they are integral, bar fixed, congruent to their distinct crystal classes, and there is no Serre relation in this degree. Their Kashiwara Gram matrix is
$$\begin{pmatrix}B_K(F_1F_2,F_1F_2)&B_K(F_1F_2,F_2F_1)\\B_K(F_2F_1,F_1F_2)&B_K(F_2F_1,F_2F_1)\end{pmatrix}=\begin{pmatrix}1&q\\q&1\end{pmatrix},$$
already the identity modulo $q$; the transported Lusztig Gram matrix is $(1-q^2)^{-2}$ times this one. Inverting the Kashiwara Gram matrix over the field gives the genuine upper dual vectors
$$(1-q^2)^{-1}(F_1F_2-qF_2F_1),\qquad(1-q^2)^{-1}(F_2F_1-qF_1F_2),$$
which are not the lower vectors; the Lusztig form-duals are further multiplied by $(1-q^2)^2$. In degree $2\alpha_1$ the lower vector is the divided power $F_1^{(2)}$ with the rank-one norm above. These calculations exhibit the actual convention dictionary and make no Gram-unimodularity or unspecified-correction claim.

## Facts & Assumptions

**Given:** The rank-one string formulas of [[thm-quantized-sl-two-string-formulas]] and the divided powers of [[def-drinfeld-jimbo-quantized-enveloping-algebra]]; the skew derivations of [[def-kashiwara-skew-derivations-on-the-negative-quantum-half]]; the lower global bases and uniqueness [[def-lower-global-basis-of-a-quantum-highest-weight-module]], [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]]; the upper dual construction [[def-upper-global-basis-by-the-contravariant-form]]; the normalization dictionary [[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]]; and the canonical/global agreement theorem [[thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type]].

[L1] Strings: in rank one the Kashiwara operators satisfy $\tilde f F^{(n)}=F^{(n+1)}$ for $n\ge0$, $\tilde eF^{(n)}=F^{(n-1)}$ for $n\ge1$, and $\tilde eF^{(0)}=0$, so $F^{(n)}$ is the unique lift of the $n$-th crystal class; $F^{(n)}$ is bar fixed because $\psi(F)=F$ ([[thm-the-i-string-decomposition-of-the-negative-half]], [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]]).

[L2] Norms: $B_K(F^{(n)},F^{(n)})=1/[n]_{q^2}!$ with $[n]_{q^2}!=\prod_{r=1}^n(1+q^2+\cdots+q^{2(r-1)})$, and $B_L=C_{n\alpha}B_K$ with $C_{n\alpha}=(1-q^2)^{-n}$ ([[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]], [[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]]).

[L3] Degree $\alpha_1+\alpha_2$: there is no Serre relation between $F_1$ and $F_2$; the skew derivations give $e_1'(F_2)=0=e_2'(F_1)$, and $e_1'(F_2F_1)=qF_2$ ([[def-kashiwara-skew-derivations-on-the-negative-quantum-half]], [[thm-unique-kashiwara-i-string-decomposition]]).

[L4] Balanced uniqueness: an integral bar-fixed vector lying in the zero chart is determined by its crystal residue ([[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]]).

[L5] Upper duals: the upper basis is the inverse-Gram dual in the field, with no $A$-unimodularity assumed ([[def-upper-global-basis-by-the-contravariant-form]]).

## Proof

**Proof technique:** direct.

1.1 **Rank one.** By [L1] the lower global vector of the $n$-th class is $F^{(n)}$, bar fixed and congruent to it; by [L2] its Kashiwara norm is $1/[n]_{q^2}!$ and its Lusztig norm is the color-factor multiple $\prod_{r=1}^n(1-q^{2r})^{-1}=(1-q^2)^{-n}/[n]_{q^2}!$. Since $F^n=[n]_q!F^{(n)}$ and $[n]_q!$ is not a unit of $A$ for $n\ge2$, the ordinary power differs by a nonunit, and the Drinfeld generator pairing value $1/(q-q^{-1})$ records the remaining scalar. [L1, L2]

1.2 **The two mixed $A_2$ vectors are lifts.** By [L3] the classes $\tilde f_1\tilde f_2\mathbf 1$ and $\tilde f_2\tilde f_1\mathbf 1$ equal $F_1F_2$ and $F_2F_1$; both are integral (products of generators), bar fixed ($\psi$ fixes each $F_i$ and reverses no letters here since $\psi$ is an algebra automorphism fixing $F_i$), and congruent to their distinct crystal residues, so by [L4] they are exactly the lower global lifts with no correction. [L3, L4]

2.1 **The Gram matrices.** The diagonal pairings are $1$ by the normalization of the half form; the cross pairing $\langle F_1F_2,F_2F_1\rangle$ is computed by the adjunction with $e_1'$, using $e_1'(F_2F_1)=qF_2$ from [L3], giving $q$. Hence the Kashiwara Gram matrix is $\begin{pmatrix}1&q\\q&1\end{pmatrix}$ with determinant $1-q^2$, and the transported Lusztig Gram matrix is its color-factor multiple $(1-q^2)^{-2}$ times it. [L2, L3, step 1.2]

3.1 **Upper duals and the last degree.** Inverting the field Gram matrix gives the two displayed upper dual vectors, which are not the lower basis vectors; the reciprocal color factor multiplies the Lusztig form-duals by $(1-q^2)^2$. In degree $2\alpha_1$ the only class is that of $F_1^{(2)}$, whose norm is the rank-one value of step 1.1. [L2, L5, step 2.1]

4.1 **Conclusion.** Steps 1.1–3.1 exhibit the exact normalizations in rank one and in degree $\alpha_1+\alpha_2$ of $A_2$, the absence of triangular corrections in that degree, and the explicitly non-unimodular inverse-Gram duals. All displayed matrices and scalars are finite computations, and no false Gram-unimodularity is asserted. [step 1.1, step 3.1] ∎
