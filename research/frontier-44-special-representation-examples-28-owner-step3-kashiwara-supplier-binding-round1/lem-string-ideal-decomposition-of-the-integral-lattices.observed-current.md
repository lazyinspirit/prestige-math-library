---
id: lem-string-ideal-decomposition-of-the-integral-lattices
kind: lemma
title: "Integrality of the string decomposition and the divided-power string ideals"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules, lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis, lem-divided-power-half-has-integral-skew-string-coefficients, def-kashiwara-skew-derivations-on-the-negative-quantum-half, def-lusztig-divided-power-integral-form, def-kashiwara-lattices-lambda-and-infinity, thm-crystal-basis-of-the-negative-half, lem-quantum-pascal-recurrence-and-gaussian-integrality, thm-unique-kashiwara-i-string-decomposition, lem-crystal-operators-commute-with-highest-weight-projection-modulo-q]
justified_by: []
aliases: []
landmark: false
dependency_level: 10
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§6.1, printed pp. 507–509 (PDF pp. 43–45): (6.1.2)–(6.1.5), Proposition 6.1.3 and Lemma 6.1.4 with the $q$-binomial identity (6.1.19); §7.4, printed pp. 513–515: Corollary 7.4.2 and (7.5.2)."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§10, printed p. 54: equation (10.1), Lemma 10.1 and Lemma 10.2 (the integral $i$-string components and the divided-power string ideals), and Corollary 10.6, printed pp. 56–57 (the residue form of the string ideal for the negative half)."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "§§2.1.6–2.1.12 printed5–7/PDF14–16: full skew coefficient identities. Actual integral extraction uses the early ordinary-power local supplier and Kashiwara91§6.1, not the modified-algebra basis of Chapter31."
---

## Statement

Let $i\in I$ and let $e_i'$ be the skew derivation of [[def-kashiwara-skew-derivations-on-the-negative-quantum-half]], with string decomposition $u=\sum_lF_i^{(l)}u_l$, $u_l\in\ker e_i'$ ([[thm-unique-kashiwara-i-string-decomposition]]).

(i) If $u\in U_A^-$ then all $u_l$ lie in $U_A^-$. The integral projector is
$$P_i=\sum_l(-1)^lq_i^{-l(l-1)/2}F_i^{(l)}(e_i')^l,\qquad u_l=q_i^{l(l-1)/2}P_i(e_i')^lu,$$
where all powers of $e_i'$ are ordinary powers, not divided by $[l]_i!$.

(ii) Define
$$I_{(i,n)}^A:=U_A^-\cap F_i^nU_q^-=\bigoplus_{l\ge n}F_i^{(l)}\bigl(\ker e_i'\cap U_A^-\bigr)=\sum_{l\ge n}F_i^{(l)}U_A^-,$$
$$J_{(i,n)}^A:=\pi_\lambda\bigl(I_{(i,n)}^A\bigr)=\sum_{l\ge n}F_i^{(l)}V_A(\lambda),$$
with $\pi_\lambda(P)=Pv_\lambda$ and $V_A(\lambda)=U_A^-v_\lambda$ as in [[def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules]]. The latter is an $A$-submodule inside the field string-image subspace $F_i^nV(\lambda)$, not a $U_q$-submodule or a $U_A$-stable lattice in general; its equality with $V_A(\lambda)\cap F_i^nV(\lambda)$ is proved after the adapted global basis construction, not presumed here.

(iii) The integral residue of $I_{(i,n)}^A\cap\mathcal L(\infty)$ is the free $\mathbb Z$-span of $\mathcal B(\infty)\cap\tilde f_i^n\mathcal B(\infty)$, and the corresponding rational residue of $F_i^nU_q^-\cap\mathcal L(\infty)$ is its $\mathbb Q$-span. Integral balancedness of the zero/infinity triple of $I_{(i,n)}^A$ is a conclusion of the subsequent string-ideal induction, not an input.

(iv) On every $U_A$-stable integrable module lattice $M_A$, if a label $\mu$ satisfies $\langle h_i,\mu\rangle=-n\le-1$, then every $u\in(M_A)_\mu$ satisfies the finite identity
$$u=\sum_{k\ge n}(-1)^{k-n}\binom{k-1}{k-n}_iF_i^{(k)}E_i^{(k)}u,$$
and consequently $(M_A)_\mu=\sum_{k\ge n}F_i^{(k)}(M_A)_{\mu+k\alpha_i}$. This is the exact boundary generation supplier used in the string-ideal induction.

## Facts & Assumptions

**Given:** The negative half with skew derivations $e_i',e_i''$, the divided-power form $U_A^-$, the crystal lattice $\mathcal L(\infty)$ with basis $\mathcal B(\infty)$, and the integral residue lattice of [[def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules]].

[F1] Integral string coefficients ([[lem-divided-power-half-has-integral-skew-string-coefficients]]): the string decomposition coefficients of $u\in U_A^-$ are integral: $u_l\in U_A^-$, $P_i``(U_A^-)\subseteq U_A^-$, and both $e_i'$ and its conjugate preserve $U_A^-$.

[F2] Unique string decomposition ([[thm-unique-kashiwara-i-string-decomposition]]): every $u\in U_q^-$ has a unique finite decomposition $u=\sum_lF_i^{(l)}u_l$ with $u_l\in\ker e_i'$; for $u\in F_i^nU_q^-$ one has $u_l=0$ for $l<n$, and conversely.

[F3] Crystal and projection compatibility ([[thm-crystal-basis-of-the-negative-half]], [[lem-crystal-operators-commute-with-highest-weight-projection-modulo-q]]): $\tilde f_i\mathcal L(\infty)\subseteq\mathcal L(\infty)$, $\tilde e_i,\tilde f_i$ act on $\mathcal B(\infty)$ as the crystal operators, and the highest-weight projection is compatible with the crystal operators modulo $q$.

[F4] Integral residues ([[lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis]]): $L_{\mathbb Z}(\infty)/qL_{\mathbb Z}(\infty)=\bigoplus_{b\in\mathcal B(\infty)}\mathbb Zb$, the residue pairing is $\mathbb Z$-valued, and the norm-$1$ elements are signed basis classes.

[F5] Gaussian calculus ([[lem-quantum-pascal-recurrence-and-gaussian-integrality]]): the Gaussian binomials satisfy the Pascal recurrence and the finite $q$-binomial theorem used below; all coefficients in the boundary identity are in $A$.

[F6] Definitions ([[def-kashiwara-skew-derivations-on-the-negative-quantum-half]], [[def-lusztig-divided-power-integral-form]], [[def-kashiwara-lattices-lambda-and-infinity]]): $e_i'$ removes one letter, lowers positive height by one and is locally nilpotent; $U_A^-$ is the $A$-span of the divided powers; $\mathcal L(\infty)$ is the $A_0$-lattice generated by the lowering words.

## Proof

**Proof technique:** direct.

1.1 **The integral string decomposition and projector.** For $u\in U_A^-$ the unique decomposition of [F2] has $u_l=q_i^{l(l-1)/2}P_i(e_i')^lu$ with $P_i=\sum_l(-1)^lq_i^{-l(l-1)/2}F_i^{(l)}(e_i')^l$, the powers of $e_i'$ being ordinary; by [F1] the coefficients $q_i^{\pm l(l-1)/2}$ and the operators $F_i^{(l)}$ and $(e_i')^l$ preserve $U_A^-$, so every $u_l$ lies in $U_A^-$. [F1, F2, algebra]

1.2 **The finite Gaussian identity.** Put $z=q_i$, $Q=z^2$ and $H(t)=\prod_{j=1}^{n-1}(1-Q^{-j}t)\prod_{j=1}^{m-n}(1-Q^jt)$, a polynomial of degree $m-1$. For every polynomial of degree $\le m-1$ the finite $q$-binomial theorem of [F5] gives $\sum_{k=0}^m(-1)^kQ^{k(k-1)/2-k(m-1)}\binom{m}{k}_QH(Q^k)=0$: on the monomial $t^s$ the sum factors as $\prod_{j=0}^{m-1}(1-Q^{j+s-m+1})$, which contains the zero factor $j=m-1-s$. For $1\le k<n$ one has $H(Q^k)=0$; for $k\ge n$, $H(Q^k)/[(Q;Q)_{n-1}(Q;Q)_{m-n}]=\binom{k-1}{n-1}_Q\binom{m-n+k}{k}_Q$; and the $k=0$ term equals $(-1)^{n-1}Q^{-n(n-1)/2}$. Multiplying the vanishing sum by $(-1)^nQ^{n(n-1)/2}$ divided by the two factorials turns it into $\sum_{k=n}^m(-1)^{k-n}\binom{k-1}{k-n}_z\binom{m-n+k}{k}_z\binom{m}{k}_z=1$, using $\binom{a}{b}_z=z^{-b(a-b)}\binom{a}{b}_Q$ and the exponent identity $k(k-1)/2-k(m-1)+n(n-1)/2=-(k-n)(m-k)$. [F5, algebra]

2.1 **String ideals.** By [F2], $u\in F_i^nU_q^-$ if and only if $u_l=0$ for $l<n$; hence $I_{(i,n)}=U_A^-\cap F_i^nU_q^-$ equals $\bigoplus_{l\ge n}F_i^{(l)}(\ker e_i'\cap U_A^-)$ directly, and this equals the sum $\sum_{l\ge n}F_i^{(l)}U_A^-$ because $F_i^{(l)}U_A^-=F_i^{(l)}(\ker e_i'\cap U_A^-)\oplus F_i^{(l+1)}U_A^-$ by the same decomposition; the sum is not direct as written. Applying the $A$-linear projection $\pi_\lambda$ of [[def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules]] gives $J_{(i,n)}^A=\sum_{l\ge n}F_i^{(l)}V_A(\lambda)$, an $A$-submodule of the field subspace $F_i^nV(\lambda)$, with no $U_q$- or $U_A$-stability asserted. [F2, F6, step 1.1]

2.2 **Boundary generation on a module lattice.** Let $u=F_i^{(m)}v$ with $e_i'v=0$ and $2m-n\ge0$, so that $m\ge n$; the rank-one divided-power formulas give $F_i^{(k)}E_i^{(k)}u=\binom{m-n+k}{k}_z\binom{m}{k}_zu$ for $k\le m$ and $0$ for $k>m$. Substituting step 1.2, the alternating sum of step (iv) is $u$: the coefficients are exactly those of the proved identity, with finite support because $k\le m$. Every $u\in(M_A)_\mu$ is a finite sum of such string vectors, and all operators and coefficients involved lie in $A$ and preserve $M_A$ ([[def-lusztig-divided-power-integral-form]]), so $(M_A)_\mu=\sum_{k\ge n}F_i^{(k)}(M_A)_{\mu+k\alpha_i}$, with finiteness supplied by integrability. [F5, F6, step 1.2]

3.1 **The integral residue of a string ideal.** Every word representative $\tilde f_{i_1}\cdots\tilde f_{i_r}\mathbf 1$ lies in $U_A^-\cap\mathcal L(\infty)=L_{\mathbb Z}$ by [F1] and [F3]; those whose words begin with $n$ letters equal to $i$ lie in $I_{(i,n)}^A\cap\mathcal L(\infty)$, and prepending $n$ copies of $i$ to the word of $b$ shows that the residue classes in $\mathcal B(\infty)\cap\tilde f_i^n\mathcal B(\infty)$ have integral representatives there. Conversely, if $x\in I_{(i,n)}^A\cap\mathcal L(\infty)$, then by [F2] its string expansion has no components of degree $<n$ along $i$, so by [F3] its residue lies in the span of $\mathcal B(\infty)\cap\tilde f_i^n\mathcal B(\infty)$; the residue basis being integral by [F4], the residue subgroup is exactly the free $\mathbb Z$-span of that subset, and the rational residue of $F_i^nU_q^-\cap\mathcal L(\infty)$ is its $\mathbb Q$-span. [F1, F2, F3, F4, step 2.1]

4.1 **Conclusion.** Steps 1.1–2.1 prove (i) and (ii), step 3.1 proves (iii), step 2.2 proves (iv); integral balancedness of the string-ideal triple is left to the subsequent induction and no saturation of $J_{(i,n)}^A$, no $U_q$-structure on it and no divided-derivation integrality are asserted. [step 1.1, step 2.1, step 3.1, step 2.2] ∎

## Remarks

The ordinary powers of $e_i'$ in the projector are essential: in rank one the divided expression $(e_i')^2/[2]_i$ applied to $F_i^{(2)}$ gives $1/(1+q_i^2)$, which is not in $A$; the integrality of the decomposition rests instead on the ordinary-power skew-string supplier [F1] and the exact finite Gaussian identity of step 1.2.

