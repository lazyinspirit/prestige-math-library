---
id: lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis
kind: lemma
title: "Integral residues of the negative half: freeness, the crystal basis and the form characterization"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules, def-kashiwara-lattices-lambda-and-infinity, thm-crystal-basis-of-the-negative-half, lem-crystal-lattice-polarizations-are-perfect-at-q-zero, lem-divided-power-half-has-integral-skew-string-coefficients, thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral, def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 9
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§6.1, printed pp. 507–509 (PDF pp. 43–45): (6.1.4)–(6.1.11) and Proposition 6.1.1 with its proof, Corollary 6.1.2; §5.1–5.2, printed pp. 503–506: the polarization, Proposition 5.1.3 and Proposition 5.2.4."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§6, printed pp. 40–42 and §7 for the form and its valuedness; §10, printed p. 54, equation (10.1): $\\epsilon_i'^{(n)}U_A^-\\subseteq U_A^-$ and Lemma 10.1, the integrality of the $i$-string components."
---

## Statement

Let $L_{\mathbb Z}(\infty)=U_A^-\cap\mathcal L(\infty)$ be the integral residue lattice of [[def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules]], with $L_{\mathbb Z}/qL_{\mathbb Z}\to\mathcal L(\infty)/q\mathcal L(\infty)$ the canonical injection. Then the image of this injection is exactly $\bigoplus_{b\in\mathcal B(\infty)}\mathbb Z b$; in particular $L_{\mathbb Z}/qL_{\mathbb Z}$ is a free $\mathbb Z$-module with basis $\mathcal B(\infty)$, and after tensoring with $\mathbb Q$ it is the full rational crystal space $\mathbb Q\otimes_{\mathbb Z}\bigoplus_b\mathbb Zb=\mathcal L(\infty)/q\mathcal L(\infty)$.

The normalized Kashiwara half form of [[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]] takes values on $U_A^-$ in $K_{\mathbb Z}=\mathbb Z[q,q^{-1},(1-q^{2n})^{-1}:n\ge1]$ and on $L_{\mathbb Z}$ in $A_{\mathbb Z}=\mathbb Z[q,(1-q^{2n})^{-1}:n\ge1]$; consequently its residue pairing on $L_{\mathbb Z}/qL_{\mathbb Z}$ is $\mathbb Z$-valued. In the residue basis $\mathcal B(\infty)$ the coefficients of an integral element are its integer pairings with the basis vectors, and the norm-$1$ elements of the integral residue $L_{\mathbb Z}/qL_{\mathbb Z}$ are exactly $\mathcal B(\infty)\cup(-\mathcal B(\infty))$. The Kashiwara operators $\tilde e_i,\tilde f_i$ preserve $L_{\mathbb Z}$, hence induce endomorphisms of the integral residue subgroup. No $A$-module structure on $L_{\mathbb Z}$, no identification of the integral residue with the rational residue as a $\mathbb Z$-module, and no unsigned norm-$1$ characterization is asserted; the module integral residue basis is established only in the globalization theorem of this page.

## Facts & Assumptions

**Given:** The negative half $U_q^-$ with its divided-power form $U_A^-$, the crystal lattice $\mathcal L(\infty)$ and residue basis $\mathcal B(\infty)$, and the integral residue lattice $L_{\mathbb Z}(\infty)=U_A^-\cap\mathcal L(\infty)$.

[F1] Integral residue lattice ([[def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules]]): $L_{\mathbb Z}$ is a $\mathbb Z[q]$-module, $M_A\cap q\mathcal L=qL_{\mathbb Z}$ with $M_A=U_A^-$, and $L_{\mathbb Z}/qL_{\mathbb Z}\to\mathcal L(\infty)/q\mathcal L(\infty)$ is injective; also $\overline{L_{\mathbb Z}}=U_A^-\cap\psi(\mathcal L(\infty))$.

[F2] Integral skew-string coefficients ([[lem-divided-power-half-has-integral-skew-string-coefficients]]): the string coefficients of the divided-power half are integral and both Kashiwara operators together with the skew derivations preserve $U_A^-$.

[F3] Crystal basis of the negative half ([[thm-crystal-basis-of-the-negative-half]]): $(\mathcal L(\infty),\mathcal B(\infty))$ is a crystal basis, $\mathcal B(\infty)$ is a basis of $\mathcal L(\infty)/q\mathcal L(\infty)$, and $\tilde e_i,\tilde f_i$ preserve $\mathcal L(\infty)$.

[F4] Polarization values at $q=0$ ([[lem-crystal-lattice-polarizations-are-perfect-at-q-zero]]): the normalized Kashiwara form is the $q=0$ polarization; $B(P,Q)\in A_0$ whenever $P,Q\in\mathcal L(\infty)$, and the induced form on $\mathcal L(\infty)/q\mathcal L(\infty)$ is the positive definite $\mathbb Q$-valued form in which $\mathcal B(\infty)$ is orthonormal.

[F5] Half form values ([[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]], [[def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half]]): $B$ is the unique normalized homogeneous form with $B(F_iP,Q)=B(P,e_i'Q)$; its divided-power word denominator bound is $\prod_i\prod_{r\ge1}(1-q_i^{2r})^{-\nu_i}$-admissible, and $B(U_A^-,U_A^-)\subseteq K_{\mathbb Z}$.

[C1] Choice: the Axiom of Choice is inherited only through the supplied grand-loop and crystal-basis results ([[def-axiom-of-choice]]); no additional selection is made in this item, and all stated bases are the supplied ones.

## Proof

**Proof technique:** direct.

1.1 **Integral representatives of the crystal basis.** By [F2] every divided-power lowering word $\tilde f_{i_1}\cdots\tilde f_{i_r}\mathbf 1$ lies in $U_A^-$, and by [F3] it lies in $\mathcal L(\infty)$; hence its class lies in $L_{\mathbb Z}/qL_{\mathbb Z}$ and is a nonzero element of $\mathcal B(\infty)$, and every $b\in\mathcal B(\infty)$ is represented by such a word. [F2, F3]

1.2 **The value rings.** The explicit rank-one divided-word norms $B(F_i^{(a)},F_i^{(a)})=1/[a]_{q_i^2}!=\prod_{r=1}^a(1+q_i^2+\cdots+q_i^{2(r-1)})^{-1}$ and the word Gram expansion of [F5] show that every value on $U_A^-$ is a $\mathbb Z[q,q^{-1}]$-combination of reciprocal products $\prod(1-q_i^{2r})^{-1}$ with bounded $r$, i.e. lies in $K_{\mathbb Z}$; and every value on $L_{\mathbb Z}=U_A^-\cap\mathcal L(\infty)$ lies in $A_0\cap K_{\mathbb Z}$ by [F4]. The intersection is $A_{\mathbb Z}$: clearing denominators in $A_0\cap K_{\mathbb Z}$ writes the value as a Laurent polynomial with denominator $\prod(1-q^{2n})^{e}$ of constant term $1$, regularity at $q=0$ forces the Laurent polynomial to have no negative powers, and evaluation at $0$ gives an integer. Hence the residue pairing of $L_{\mathbb Z}/qL_{\mathbb Z}$ is $\mathbb Z$-valued. [F4, F5, algebra]

2.1 **Integrality of coefficients against representatives.** For $x\in L_{\mathbb Z}$ with rational residue $\sum_ba_bb\in\mathcal L(\infty)/q\mathcal L(\infty)$, choose for each $b$ an integral representative $w_b$ of $b$ from step 1.1 and pair modulo $q$: by [F4] the residue form is the positive definite form with orthonormal basis $\mathcal B(\infty)$, so $a_b=(x,w_b)$ modulo $q$, and by [F5] this value lies in $A_{\mathbb Z}$; evaluating the resulting $\mathbb Z[q]$-element at $q=0$ gives an integer because $A_{\mathbb Z}$ consists of quotients with denominator $\equiv1\pmod q$. Hence every coefficient $a_b$ is an integer and the image of the injection of [F1] is contained in $\bigoplus_b\mathbb Zb$; conversely finite integer combinations of the classes of the $w_b$ lie in the image, so the image is exactly $\bigoplus_b\mathbb Zb$. [F1, F4, F5, step 1.1]

3.1 **Norm-one residue classes.** For an integral residue $\bar x=\sum_ba_bb$, step 2.1 gives $a_b\in\mathbb Z$, and [F4] gives $B_0(\bar x,\bar x)=\sum_ba_b^2$. This equals $1$ exactly when $\bar x=\pm b$ for one crystal element. This class statement does not characterize the exact norm of its lattice representatives: in rank one $F^{(2)}$ represents a crystal element but has norm $1/(1+q^2)$. In particular an exact norm-$1$ lattice vector has a signed basis residue, while the converse need not hold. [F4, F5, step 2.1, algebra]

4.1 **Operator stability and conclusion.** By [F2] and [F3] the operators $\tilde e_i,\tilde f_i$ preserve both $U_A^-$ and $\mathcal L(\infty)$, hence preserve $L_{\mathbb Z}=U_A^-\cap\mathcal L(\infty)$ and descend to the integral residue subgroup, which by steps 1.1–1.2 is the free $\mathbb Z$-module $\bigoplus_b\mathbb Zb$; tensoring with $\mathbb Q$ gives the full rational crystal space by [F3]. Together with steps 2.1 and 3.1 this proves all the assertions, with the stated $\mathbb Z$-valued pairing and signed norm-$1$ characterization. [F2, F3, step 1.2, step 2.1, step 3.1] ∎

