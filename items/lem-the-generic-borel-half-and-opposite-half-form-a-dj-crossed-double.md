---
id: lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double
kind: lemma
title: The generic quantum halves form a Drinfeld–Jimbo crossed double
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-symmetrizable-cartan-datum-for-a-quantum-group
- def-drinfeld-jimbo-quantized-enveloping-algebra
- def-positive-negative-and-toral-quantum-subalgebras
- def-quantum-integers-factorials-and-divided-powers-at-q-i
- lem-quantum-pascal-recurrence-and-gaussian-integrality
- thm-right-exactness-of-tensor-products
- thm-universal-property-of-the-tensor-algebra
- thm-quotient-ring-universal-property
aliases: []
dependency_level: 4
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
  - title: Benjamin Enriquez, PBW and Duality Theorems for Quantum Groups and Quantum
      Current Algebras, Journal of Lie Theory 13 (2003), 21-64
    url: https://www.heldermann-verlag.de/jlt/jlt13/enrila.pdf
    locator: '§2.3, printed p.38: double algebra on the tensor factors with the toral
      and mixed cross-relations. The local proof establishes the tensor decomposition
      without assuming that construction.'
  - title: Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin
      and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length
      lecture notes, last updated 18 January 2024)
    url: https://categorified.net/LieQuantumGroups.pdf
    locator: 'Ch.13, Lemma 13.1.3.21 and Theorem 13.1.3.22, printed pp.309–310: opposite-generator
      annihilation of Serre elements and the factor-ideal identity. The local proof
      supplies the Serre-free normal-form argument and both finite commutator calculations.'
pipeline_run: frontier-43-complex-representation-15
---

## Statement

Fix a finite symmetrizable Cartan datum over $k=\mathbb Q(q)$, with $q_i=q^{d_i}$ and $K_i=K_{d_i h_i}$. Let $A^+$ and $A^-$ be the independently presented $k$-algebras on $e_i$ and $f_i$, respectively, modulo their separate symmetric quantum Serre relations, and let $C=k[P^\vee]$ have basis $K_h$, $h\in P^\vee$. Then the vector space
$$D=A^-\otimes_k C\otimes_k A^+$$
carries a unique associative unital algebra structure in which $a_-\otimes K_h\otimes a_+$ equals the product of the three embedded factors, the factors retain their algebra structures, and
$$K_h e_i=q^{\alpha_i(h)}e_iK_h,\qquad K_h f_i=q^{-\alpha_i(h)}f_iK_h,\qquad [e_i,f_j]=\delta_{ij}\frac{K_i-K_i^{-1}}{q_i-q_i^{-1}}.$$
This is the Drinfeld–Jimbo crossed double. Its normal-factor multiplication map to the presented algebra $U_q(\mathfrak g)$ of [[def-drinfeld-jimbo-quantized-enveloping-algebra]] is an algebra isomorphism, whose inverse sends $E_i,F_i,K_h$ to the indicated factor generators. Thus all three abstract factor maps are injective; their images are the subalgebras of [[def-positive-negative-and-toral-quantum-subalgebras]].

In the presentation $\widetilde U$ obtained by omitting both Serre families, the halves $T^\pm$ are free, the toral factor is $C$, and multiplication identifies $\widetilde U=T^-\otimes C\otimes T^+$. Every Serre element satisfies
$$[F_k,S^+_{ij}]=[E_k,S^-_{ij}]=0.$$
Writing $I^\pm\trianglelefteq T^\pm$ for the separate Serre ideals, the full Serre ideal of $\widetilde U$ is exactly
$$I^-\otimes C\otimes T^+ + T^-\otimes C\otimes I^+.$$
No nonsingularity of the Cartan matrix and no choice principle is required.

## Facts & Assumptions

**Given:** A finite symmetrizable Cartan datum and its Drinfeld–Jimbo presentation.

[F1] The toral, toral-action and mixed relations give the Serre-free presentation; adding the separate Serre sums gives $U_q(\mathfrak g)$, and assignments satisfying these relations extend uniquely ([[def-drinfeld-jimbo-quantized-enveloping-algebra]], [[thm-universal-property-of-the-tensor-algebra]], [[thm-quotient-ring-universal-property]]).

[F2] The integral weight characters are additive, $q_i=q^{d_i}$, and $q_j^{a_{ji}}=q_i^{a_{ij}}$ by symmetrizability ([[def-symmetrizable-cartan-datum-for-a-quantum-group]]).

[F3] For $t=q_i$, the symmetric Gaussian coefficients satisfy $C_{N,r}[N-r]_i=C_{N,r+1}[r+1]_i$ and $\sum_{s=0}^N(-1)^s C_{N,s}t^{\pm(N-1)s}=0$ for $N\ge1$. The first identity is factorial cancellation and the second follows from the Gauss formula and its inverse-parameter substitution ([[def-quantum-integers-factorials-and-divided-powers-at-q-i]], [[lem-quantum-pascal-recurrence-and-gaussian-integrality]]).

[F4] Tensoring quotient maps is surjective and has kernel the sum of the factor kernels, by repeated right exactness ([[thm-right-exactness-of-tensor-products]]).

[F5] The positive, negative and toral subalgebras are the generated images of the corresponding presentation generators ([[def-positive-negative-and-toral-quantum-subalgebras]]).

## Proof

1.1 Put $c_i=(K_i-K_i^{-1})/(q_i-q_i^{-1})$. In the free Serre-free presentation reduce $E_iF_j$ to $F_jE_i+\delta_{ij}c_i$, $E_iK_h$ to $q^{-\alpha_i(h)}K_hE_i$, $K_hF_j$ to $q^{-\alpha_j(h)}F_jK_h$, $K_hK_g$ to $K_{h+g}$, and $K_0$ to $1$. For each monomial use the lexicographic triple consisting of the number of $E/F$ letters, the number of inverted type pairs for $F<K<E$, and the number of toral letters. Every resulting term decreases this triple: the mixed correction decreases the first coordinate, the other mixed or crossing terms decrease inversions, and toral merging or deletion decreases inversions or the final coordinate. Each rule has finitely many outputs, so the finitely branching reduction tree terminates; an infinite tree of arbitrarily deep descendants would give an infinite decreasing path by choosing its first such child at each stage. The irreducible words are precisely $F_{i_1}\cdots F_{i_a}K_h E_{j_1}\cdots E_{j_b}$, with $K_0$ interpreted as the empty toral factor. [F1, F2, construct]

1.2 Fix $i\ne j$, set $t=q_i$, $a=a_{ij}$, $N=1-a$, and $C_s=\binom Ns_i$, so $S^+_{ij}=\sum_s(-1)^s C_s E_i^{N-s}E_jE_i^s$. Expanding the commutator in each position and moving toral factors to the right gives $[F_i,E_i^m]=-[m]_i E_i^{m-1}(t^{m-1}K_i-t^{-(m-1)}K_i^{-1})/(t-t^{-1})$ for $m\ge1$: the two geometric sums are $\sum_{r=0}^{m-1}t^{\pm2r}=t^{\pm(m-1)}[m]_i$. For $k\ne i,j$, the commutator $[F_k,S^+_{ij}]$ is zero because every letter commutes with $F_k$. For $k=j$, only the $E_j$ contributes, and moving $K_j$ past the last $s$ copies of $E_i$ gives $$[F_j,S^+_{ij}]=-\frac{E_i^N}{q_j-q_j^{-1}}\left(\left(\sum_s(-1)^s C_s t^{as}\right)K_j-\left(\sum_s(-1)^s C_s t^{-as}\right)K_j^{-1}\right)=0.$$ The crossing uses $q_j^{a_{ji}}=t^a$ from [F2], and both sums vanish by [F3] because $a=1-N$. [F1, F2, F3, algebra]

2.1 The overlapping reductions are $K_hK_gK_l$, $E_iK_hK_g$, $K_hK_gF_j$, and $E_iK_hF_j$, together with deletion of $K_0$ against an adjacent crossing or toral product. The first three give respectively $K_{h+g+l}$, $q^{-\alpha_i(h+g)}K_{h+g}E_i$, and $q^{-\alpha_j(h+g)}F_jK_{h+g}$ along both routes. In the fourth, the two routes give the common term $q^{-\alpha_i(h)-\alpha_j(h)}F_jK_hE_i$ and corrections $\delta_{ij}q^{-\alpha_i(h)}K_hc_i$ and $\delta_{ij}q^{-\alpha_j(h)}c_iK_h$; they agree since the toral elements commute and $i=j$ whenever the correction is present. The zero-index cases and a toral sum $h+g=0$ agree by character additivity and $\alpha_i(0)=0$. There is no overlapping pair of $EF$ rules, since its shared letter would have to be both $E$ and $F$. Disjoint reductions commute by distributivity. Inducting on the decreasing triple in step 1.1, these joined first reductions therefore have the same final normal form in every word context. The linear normal-form map kills each relation multiplied on the left and right by arbitrary words, while every word minus its normal form lies in the relation ideal. It consequently induces inverse linear maps between $\widetilde U$ and the freely based normal-word space. This proves the full Serre-free tensor decomposition, including injectivity on arbitrary finite sums. [F1, F2, step 1.1, algebra]

2.2 For $k=i$, expand in the left and right $E_i$ blocks using step 1.2. The left-block term with $s=r$ and right-block term with $s=r+1$ both have positive word $E_i^{N-1-r}E_jE_i^r$. In the left-block term, the exponent after moving $K_i$ to the right is $N-r-1+a+2r=r$, since $N-1+a=0$; the inverse toral exponent is $-r$. The right-block term has those same exponents. Thus $$[F_i,S^+_{ij}]=-\frac1{t-t^{-1}}\sum_{r=0}^{N-1}(-1)^r\left(C_r[N-r]_i-C_{r+1}[r+1]_i\right)E_i^{N-1-r}E_jE_i^r(t^rK_i-t^{-r}K_i^{-1})=0.$$ The coefficient identity is [F3], including both endpoints. The assignment $\omega(E_i)=F_i$, $\omega(F_i)=E_i$, $\omega(K_h)=K_{-h}$ is an involutive algebra map of the Serre-free presentation: toral actions reverse their signs, and both the mixed commutator and $c_i$ change sign. Applying it proves $[E_k,S^-_{ij}]=0$. Toral conjugation of either Serre generator is scalar, since its color degree is homogeneous. [F1, F2, F3, step 1.2, algebra]

3.1 In the normal-word space put $X=I^- C T^++T^- C I^+$. It contains the Serre generators and is a two-sided ideal. Same-side multiplication and toral multiplication preserve its two summands, using homogeneous toral conjugation. For the remaining crossed multiplications, expanding $[F_k,w]$ for a positive word $w$ yields positive-word/toral terms, and expanding $[E_k,w]$ for a negative word yields negative-word/toral terms, by the mixed relation. If $w=u S^+_{ij}v$, the Leibniz rule gives $[F_k,w]=[F_k,u]S^+_{ij}v+uS^+_{ij}[F_k,v]$ because the middle commutator vanishes by steps 1.2 and 2.2. Moving the resulting toral factors past the homogeneous Serre sum preserves its ideal. Hence $[F_k,I^+]\subseteq C I^+$, and similarly $[E_k,I^-]\subseteq I^-C$. When moving a crossed generator through an arbitrary normal product, these inclusions show that every term still belongs to $X$; multiplication in the other half only multiplies the existing ideal factor. This checks closure under all $E_k,F_k,K_h$ on both sides. Conversely each summand of $X$ lies in the ambient two-sided Serre ideal, by its definition. Therefore $X$ equals that ideal, with the exact tensor-factor description claimed. [F1, F2, step 2.1, step 1.2, step 2.2, algebra]

4.1 By [F4], the tensor quotient $(T^-/I^-)\otimes C\otimes(T^+/I^+)$ is the quotient of $T^-\otimes C\otimes T^+$ by precisely $X$. Steps 2.1 and 3.1 therefore identify it linearly with $\widetilde U/X=U_q(\mathfrak g)$, proving genuine tensor injectivity. Transport the associative quotient multiplication to this tensor space to define $D$. Its factor products, normal-factor products and cross-relations are as stated, and the factor embeddings are injective because $1$ survives both homogeneous positive-height Serre ideals. Conversely any multiplication with those properties is determined by repeatedly using the crossing rules to rewrite a product of two normal tensors; these rules terminate by step 1.1. Thus the algebra structure is unique. Its generator map to $U_q(\mathfrak g)$ and its inverse respect the defining relations by [F1] and the factor Serre relations, so are mutually inverse algebra homomorphisms. Their factor images are exactly [F5]. This proves all assertions. [F1, F4, F5, step 1.1, step 2.1, step 3.1, algebra] ∎
