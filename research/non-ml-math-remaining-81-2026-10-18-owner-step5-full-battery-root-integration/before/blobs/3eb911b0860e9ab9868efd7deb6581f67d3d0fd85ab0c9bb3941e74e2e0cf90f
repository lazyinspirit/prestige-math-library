---
id: thm-prime-power-specializations-of-the-integral-quantum-half-have-a-nondegenerate-green-form
kind: theorem
title: Prime-power specializations of the integral quantum half have a nondegenerate Green form
status: draft
dependency_level: 0
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-axiom-of-choice
- thm-integral-triangular-decomposition-for-the-lusztig-form
- thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis
- lem-crystal-lattice-polarizations-are-perfect-at-q-zero
- thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral
- thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing
- lem-quantum-pascal-recurrence-and-gaussian-integrality
- lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality
proof_strategy: direct
sources:
  references:
  - title: Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras
    url: https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf
---

## Statement

Assume the inherited Axiom of Choice of the global-basis suppliers. Let $I$ be a finite symmetric Cartan datum with symmetrizers $d_i=1$; its generalized Cartan matrix need not be of finite type. Write $A=\mathbb Z[t,t^{-1}]$, and let $U_A^-$ denote the divided-power integral half inside the generic quantum Serre algebra over $\mathbb Q(t)$. Let $Q=p^a>1$ be a prime power, let $\nu=\sqrt Q>1$, and set $K=\mathbb Q(\nu)$ and $H_\pm=K\otimes_{A,t\mapsto\nu^{\pm1}}U_A^-$.

The normalized Kashiwara form $B_t$ specializes to a nondegenerate symmetric form on every finite homogeneous component of both $H_+$ and $H_-$. Their component dimensions are the classical PBW ranks. On $H_-$ the primitive-generator coproduct has tensor multiplication
$$ (x\otimes y)(x'\otimes y')=\nu^{(\deg y,\deg x')}xx'\otimes yy'. $$
The rescaled homogeneous form $G(x,y)=(Q-1)^{-\operatorname{ht}\alpha}B_{\nu^{-1}}(x,y)$ for $x,y\in H_-[-\alpha]$, zero in different degrees, has $G(F_i,F_j)=\delta_{ij}/(Q-1)$ and both braided Hopf adjunctions. Thus it has exactly the generator values and symmetric tensor twist of the Green pairing.

This statement concerns the specialization of the integral half. It does not identify that algebra with the algebra presented at the numerical parameter by the quantum Serre relations alone.

## Facts & Assumptions

**Given:** The finite symmetric Cartan datum, $Q,\nu,K$, and the integral half and normalized generic half form $B_t$.

[F1] The integral half has, in each finite root degree, a finite $A$-basis $g_1,\ldots,g_N$ of bar-fixed lower global elements, and its rank is the classical PBW rank ([[thm-integral-triangular-decomposition-for-the-lusztig-form]], [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]]).

[F2] In that basis the Gram matrix of $B_t$ is regular at $t=0$ and congruent to the identity modulo $t$ ([[lem-crystal-lattice-polarizations-are-perfect-at-q-zero]]). All its entries lie in $\mathbb Z[t,t^{-1},D_m(t)^{-1}:m\ge1]$, where $D_m(t)=\prod_{r=1}^m(1+t^2+\cdots+t^{2(r-1)})$; this is the exact divided-power denominator bound of [[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]](iv).

[F3] The form is symmetric and homogeneous and satisfies both primitive braided Hopf adjunctions with tensor twist $t^{-(\deg y,\deg x')}$ and generator value $1$; on words its value is the sum over matching permutations $\pi$ of $t^{-\sum_{a<b,\pi(a)>\pi(b)}(\alpha_{i_a},\alpha_{i_b})}$ ([[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]], proof steps 1.1–2.1; [[thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing]]).

[F4] The integral bar fixes divided powers and sends $t$ to $t^{-1}$ ([[lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality]]). Gaussian-binomial coproduct coefficients are Laurent integral ([[lem-quantum-pascal-recurrence-and-gaussian-integrality]]).

## Proof

1.1 The minimal polynomial of $\nu$ is $X-\nu\in\mathbb Z[X]$ if $Q$ is a square, and $X^2-Q$ otherwise. In either case it is monic with constant term of absolute value greater than $1$. If an integer polynomial $P$ with $P(0)=1$ vanished at $\nu$, division by the monic minimal polynomial would express $P$ as its product with an integer polynomial: perform monic polynomial division in $\mathbb Z[X]$, and the remainder must be zero because it has smaller degree and vanishes at $\nu$. Comparing constant terms would make an integer of absolute value greater than $1$ divide $1$, a contradiction. Consequently no such $P$ vanishes at $\nu$. [given, algebra]

1.2 Reversal $R(F_{i_1}\cdots F_{i_n})=F_{i_n}\cdots F_{i_1}$ preserves the generic Serre ideal: reversing a Serre polynomial interchanges its summand indexed by $r$ with the summand indexed by $1-a_{ij}-r$, multiplying the whole polynomial by $(-1)^{1-a_{ij}}$. It therefore defines an involutive anti-automorphism of the generic half, and preserves $U_A^-$ since it reverses products of divided powers. Its matrix $T(t)$ in the global basis has entries in $A$ and inverse itself. In particular $T(\nu)$ is invertible. [F1, F4, algebra]

1.3 The primitive braided coproduct preserves $U_A^-$: on a divided power the quantum binomial formula gives $r(F_i^{(n)})=\sum_{r+s=n}t^{-rs}F_i^{(r)}\otimes F_i^{(s)}$, and the divided powers generate the integral half. Thus its coassociativity and counit specialize from the generic identities, as do both form adjunctions of [F3], because their coefficients lie in the localization at nonzero Gaussian factorials. At $t=\nu^{-1}$ the tensor scalar is $\nu^{(\deg y,\deg x')}$. The specialized algebra remains connected and root graded, so the usual height recursion $S(x)=-x-\sum S(x')x''$ for the reduced coproduct gives its antipode: the two convolution recursions give left and right inverses, and associativity makes them equal. [F3, F4, algebra]

2.1 Fix a root degree and its global basis in [F1]. By [F2], the determinant $\Delta(t)$ of its Gram matrix belongs to the indicated localization, is regular at zero and has $\Delta(0)=1$. Clear its finitely many Gaussian-factorial denominators, obtaining $\Delta(t)=L(t)/D(t)$ with $L\in\mathbb Z[t,t^{-1}]$ and $D\in\mathbb Z[t]$ with $D(0)=1$. Since $\Delta$ is regular at zero, $L=\Delta D$ has no negative Laurent powers, so in fact $L\in\mathbb Z[t]$ and $L(0)=1$. Each $D_m(\nu)$ is a product of positive geometric sums and is nonzero; step 1.1 gives $L(\nu)\ne0$. Hence the specialized Gram determinant is nonzero. The specialized global family is a basis because it was an $A$-basis. Thus $B_\nu$ is nondegenerate, and its component dimension is the rank in [F1]. [F1, F2, step 1.1, algebra]

3.1 For $\alpha=\sum_i n_i\alpha_i$ put $c_\alpha=((\alpha,\alpha)-\sum_i n_i(\alpha_i,\alpha_i))/2$, the integer sum of the pairings over all unordered pairs of letter positions in any word of degree $-\alpha$. Reversal of the first word complements the inversion set in the matching-permutation formula of [F3]; the color form is symmetric, so $B_{t^{-1}}(u,v)=t^{c_\alpha}B_t(Ru,v)$ for equal-degree words. For arbitrary generic elements, coefficient inversion consequently gives $\overline{B_t(x,y)}=t^{c_\alpha}B_t(R\bar x,\bar y).$ The global basis is bar fixed by [F1]. Therefore its Gram matrix $M$ satisfies $M(t^{-1})=t^{c_\alpha}T(t)^{\mathsf T}M(t)$. Evaluating at $t=\nu$ and using steps 1.2 and 2.1 proves that $M(\nu^{-1})$ is invertible. Its entries are evaluable since all Gaussian-factorial denominators are positive at $\nu^{-1}$. This proves nondegeneracy on $H_-$, with the same ranks from [F1]. [F1, F2, F3, step 2.1, step 1.2, algebra]

4.1 On a homogeneous degree $-\alpha$ multiply the form by $(Q-1)^{-\operatorname{ht}\alpha}$. In a nonzero summand of either adjunction the factor degrees add to $\alpha$, and heights add; hence the scaling factors multiply and both adjunctions remain true. Its simple-generator values are $\delta_{ij}/(Q-1)$ by [F3], and its nondegeneracy follows from step 3.1 since its scaling factors are nonzero. Together with steps 1.1–3.1 this proves every assertion. [F3, step 2.1, step 3.1, step 1.3, algebra] ∎ 
