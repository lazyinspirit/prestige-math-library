---
id: lem-negative-half-reversal-preserves-integral-and-crystal-lattices
kind: lemma
title: "Reversal preserves the negative-half integral and crystal lattices"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-crystal-lattice-polarizations-are-perfect-at-q-zero, lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis, thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral, def-lusztig-divided-power-integral-form]
justified_by: []
aliases: []
landmark: false
dependency_level: 10
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
    - title: "Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras (1991)"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§5.2 Propositions5.2.1–5.2.4 and §6.1 Corollary6.1.2; printed pp.505–507, PDF pp.41–43. The latter states B∞star⊂B∞∪−B∞."
---

## Statement

Let $\star$ be the $\mathbb Q(q)$-linear anti-involution of $U_q^-$ fixing each generator $F_i$, so that for a word $F_{i_1}\cdots F_{i_r}$ one has $(F_{i_1}\cdots F_{i_r})^\star=F_{i_r}\cdots F_{i_1}$, and let $B$ be the normalized Kashiwara half form of [[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]]. Then $\star$ is a well-defined anti-involution of the Serre quotient, reverses negative words, preserves the divided-power integral form $U_A^-$ of [[def-lusztig-divided-power-integral-form]], commutes with the bar involution $\psi$, and preserves $B$: $B(P^\star,Q^\star)=B(P,Q)$. Consequently $\star$ preserves the crystal lattice $\mathcal L(\infty)$ of [[lem-crystal-lattice-polarizations-are-perfect-at-q-zero]], the integral residue lattice $L_{\mathbb Z}(\infty)=U_A^-\cap\mathcal L(\infty)$, and the bar lattice $L_{\mathbb Z}^-=U_A^-\cap\psi(\mathcal L(\infty))$ of [[lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis]]. On the integral crystal residue the induced map permutes $\mathcal B(\infty)\cup(-\mathcal B(\infty))$. Only this signed lattice preservation is asserted, not an unsigned $\star$-crystal theorem; the sign is what the gluing of the string-ideal global lifts requires.

## Facts & Assumptions

**Given:** The negative half $U_q^-$ with generators $F_i$, its divided-power form $U_A^-$, the normalized half form $B$, and the lattices $\mathcal L(\infty),L_{\mathbb Z}(\infty)$.

[F1] The word Gram formula and norm characterization ([[lem-crystal-lattice-polarizations-are-perfect-at-q-zero]], [[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]]): $B$ is the symmetric normalized form with $B(F_iP,Q)=B(P,e_i'Q)$; its value on two words is a finite sum over color-matching permutations with crossing exponents; $\mathcal L(\infty)=\{P:B(P,P)\in A_0\}=\{P:B(P,\mathcal L(\infty))\subseteq A_0\}$ and $B$ is positive definite on $\mathcal L(\infty)/q\mathcal L(\infty)$ with orthonormal basis $\mathcal B(\infty)$.

[F2] Integral residues ([[lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis]]): $L_{\mathbb Z}(\infty)$ is a $\mathbb Z[q]$-module whose residue image is $\bigoplus_{b\in\mathcal B(\infty)}\mathbb Zb$, the residue pairing is $\mathbb Z$-valued, and the norm-$1$ elements of the integral residue are exactly the signed basis classes $\mathcal B(\infty)\cup(-\mathcal B(\infty))$ modulo $qL_{\mathbb Z}$.

[F3] Divided-power form ([[def-lusztig-divided-power-integral-form]]): $U_A^-$ is the $A$-span of finite products of divided powers $F_i^{(r)}$, graded by $-Q_+$.

## Proof

**Proof technique:** direct.

1.1 **$\star$ is a well-defined anti-involution.** The assignment $F_i\mapsto F_i$ extended antimultiplicatively is defined on the free algebra, and applying it to a negative Serre relation $\sum_r(-1)^r\binom{1-a_{ij}}{r}_iF_i^{1-a_{ij}-r}F_jF_i^r=0$ and reversing the order of each monomial gives $\sum_r(-1)^r\binom{1-a_{ij}}{r}_iF_i^{r}F_jF_i^{1-a_{ij}-r}$, which is $(-1)^{1-a_{ij}}$ times the same relation after the substitution $r\mapsto1-a_{ij}-r$ and the exact symmetry $\binom{m}{r}_i=\binom{m}{m-r}_i$ of the Gaussian binomials. Hence $\star$ descends to $U_q^-$, fixes $F_i$, and is an anti-involution: it reverses words and its square is the identity. [F3, algebra]

1.2 **Integral and bar compatibility.** Since $\star$ fixes each divided power $F_i^{(r)}$ (it fixes $F_i$ and the scalar $[r]_i!$), it maps each generator of $U_A^-$ to a generator, so $\star(U_A^-)=U_A^-$. It commutes with $\psi$ because $\star$ is $\mathbb Q(q)$-linear while $\psi$ sends $q\mapsto q^{-1}$, and on generators $\psi\star(F_i)=\psi(F_i)=F_i=\star\psi(F_i)$. [F3, algebra]

2.1 **Isometry for the half form.** Write $P=F_{i_1}\cdots F_{i_r}$, $Q=F_{j_1}\cdots F_{j_s}$ as words. Reversing both words, $P^\star=F_{i_r}\cdots F_{i_1}$, $Q^\star=F_{j_s}\cdots F_{j_1}$, and the word Gram formula of [F1] expands both $B(P,Q)$ and $B(P^\star,Q^\star)$ as sums over bijections between matched colors with the same crossing exponents read backwards; reversing a permutation preserves the weight and the crossing number, so the two sums are termwise equal. Hence $B(P^\star,Q^\star)=B(P,Q)$ on words and, by bilinearity and descent through the Serre ideal, on all of $U_q^-$. [F1, step 1.1, algebra]

3.1 **Lattice stability.** For $P\in\mathcal L(\infty)$ one has $B(P^\star,P^\star)=B(P,P)\in A_0$ by step 2.1 and the norm characterization of [F1]; hence $P^\star\in\mathcal L(\infty)$ and $\star$ preserves $\mathcal L(\infty)$. It preserves $U_A^-$ by step 1.2, so it preserves $L_{\mathbb Z}=U_A^-\cap\mathcal L(\infty)$; since it commutes with $\psi$ and $\psi(L_{\mathbb Z})=L_{\mathbb Z}^-$, it also preserves the bar lattice $L_{\mathbb Z}^-$. [F1, step 1.2, step 2.1]

4.1 **The signed residue permutation.** Steps 2.1–3.1 induce an integral involutive isometry of $L_{\mathbb Z}/qL_{\mathbb Z}$. Each $b$ has residue norm $1$, so its image also has residue norm $1$ and is $\pm b'$ by [F2]. Involutivity makes this a signed permutation. No representative of $b$ is required to have exact field norm $1$. [F2, step 2.1, step 3.1, algebra]

5.1 **Conclusion.** Steps 1.1–1.2 prove that $\star$ is an anti-involution preserving $U_A^-$ and commuting with bar, step 2.1 proves that it is an isometry of the normalized half form, step 3.1 proves preservation of $\mathcal L(\infty)$, $L_{\mathbb Z}$ and $L_{\mathbb Z}^-$, and step 4.1 gives the signed permutation of the integral crystal residue. No unsigned star-crystal theorem is asserted. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎

