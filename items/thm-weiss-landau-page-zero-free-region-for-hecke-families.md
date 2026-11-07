---
id: thm-weiss-landau-page-zero-free-region-for-hecke-families
kind: theorem
title: Weiss Landau–Page zero-free region for bounded-conductor Hecke families
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- lem-primitive-hecke-analytic-landau-page-family-core
- lem-hecke-analytic-family-exception-implies-cutoff-greater-than-one
- lem-three-case-dedekind-zero-gap-up-to-absolute-constant
- thm-number-field-ray-class-field-artin-isomorphism
- thm-global-artin-reciprocity-and-norm-index
- thm-weak-approximation-for-global-fields
- def-finite-order-ray-class-hecke-character-and-l-function
- lem-quadratic-number-field-principal-product-and-canonical-hecke-character
- lem-quadratic-hecke-conductor-discriminant-and-real-signs
- lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness
- thm-fundamental-theorem-of-finite-galois-theory
- thm-primitive-hecke-l-analytic-continuation-and-functional-equation
- thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
- thm-minkowski-bound-for-ideal-classes
- def-absolute-norm-of-an-ideal
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
axiom_use: AC, CC and DC remain the original hypotheses and cover the actual analytic and class-field interfaces.
sources:
  references:
  - title: A. R. Weiss, The least prime ideal
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: Section 1, Theorem 1.9 and proof sketch, printed pp. 59–61; the proof below uses locally reconstructed family and three-case gap inputs.
  - title: H. M. Stark, Some Effective Cases of the Brauer–Siegel Theorem
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0023/PPN356556735_0023.pdf
    locator: Lemmas 8, 10, 12 and 13, and Theorem 1′ proof, printed pp. 145–148 and 151–152; the locally proved three-case gap carries an absolute constant.
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $K$ be a number field of degree $n$, and for a primitive finite-order Hecke character $\chi$ of $K$ write $d_\chi:=|d_K|\,N_{K/\mathbb Q}\mathfrak f_\chi$, where $\mathfrak f_\chi$ is its conductor. There are absolute constants $C_0,c_1>0$ such that, whenever $Q\ge1$, $T\ge1$, $\log(QT^n)\ge C_0n$, and $d_\chi\le Q$, the family of all such pairs $(\chi,\rho)$ with $L(\rho,\chi)=0$, $0<\operatorname{Re}\rho<1$, $\operatorname{Re}\rho\ge1-c_1/\log(QT^n)$, and $|\operatorname{Im}\rho|\le T$ contains at most one zero, counted with multiplicity. If that zero exists, it is a real simple zero $\beta_*$ of a real-valued character $\chi_*$. If $\chi_*$ is nontrivial, its kernel has index two and Artin reciprocity identifies the corresponding quadratic extension $E_*/K$; for the trivial character put $E_*=K$. Put $m_*=[E_*:\mathbb Q]$, set $\nu(\mathbb Q)=1$ as a convention, and for $E_*\ne\mathbb Q$ define $\nu(E_*)$ by the first applicable case: $\nu(E_*)=1$ if there is a tower $\mathbb Q=E_0\subset E_1\subset\cdots\subset E_r=E_*$ with each $E_j/E_{j-1}$ normal; $\nu(E_*)=m_*$ if every Artin $L$-function of $E_*/\mathbb Q$ is entire; and $\nu(E_*)=m_*!$ otherwise. Then $Q>1$ and
$$1-\beta_*\gg\min\left\{\frac{1}{\nu(E_*)\log Q},\;Q^{-1/n}\right\},$$
where $\nu(E_*)$ has the three cases stated in Stark's exceptional Dedekind-zeta bound above. The implicit constant is absolute.

## Statement references

[[def-finite-order-ray-class-hecke-character-and-l-function]]

[[lem-primitive-hecke-analytic-landau-page-family-core]]

[[lem-three-case-dedekind-zero-gap-up-to-absolute-constant]]

## Facts & Assumptions

**Given:** The original field, primitive character family, cutoff parameters and choice assumptions in the Statement.

[F1] For $\log(QT^n)\ge n$, the precise original family has at most one zero occurrence in the asserted region, and any such zero is real and simple with real-valued primitive character. A nontrivial real primitive character has kernel of index two. [[lem-primitive-hecke-analytic-landau-page-family-core]]

[F2] If such a real zero exists then $Q>1$, and any primitive character with $d_\chi\le1$ is trivial over $\mathbb Q$ and has no real zero in $(0,1)$. [[lem-hecke-analytic-family-exception-implies-cutoff-greater-than-one]]

[F3] The ray-class field and Artin reciprocity identify the idelic ray quotient with a finite abelian Galois group; the Artin map sends an unramified prime to its arithmetic Frobenius. Weak approximation prescribes finitely many finite-place open conditions and real signs. [[thm-number-field-ray-class-field-artin-isomorphism]] [[thm-global-artin-reciprocity-and-norm-index]] [[thm-weak-approximation-for-global-fields]]

[F4] Every given quadratic extension $E/K$ has its canonical primitive quadratic Hecke character, with full factorization $\zeta_E=\zeta_KL(s,\chi_{E/K})$ in the Euler half-plane and exact $D_E=D_K^2N\mathfrak f_{\chi_{E/K}}$. Primitive characters whose pullbacks agree on a common modulus are equal and have equal conductors. [[lem-quadratic-number-field-principal-product-and-canonical-hecke-character]] [[lem-quadratic-hecke-conductor-discriminant-and-real-signs]] [[lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness]]

[F5] The three-case effective real-zero gap is $$1-\beta\ge c\min\{(\nu(E)\log D_E)^{-1},D_E^{-1/m}\}$$ for an absolute effective $c>0$, with the tower, Artin-holomorphy and factorial cases as in the Statement. The input is the bounded three-case local proof and does not use the earlier coefficient-one formulation. [[lem-three-case-dedekind-zero-gap-up-to-absolute-constant]]

[F6] The Dedekind zeta function and primitive Hecke functions extend holomorphically to the open critical strip. The finite Galois correspondence identifies an index-two subgroup with a quadratic intermediate field. Absolute discriminants and conductor norms are positive integers; Minkowski shows $D_K>1$ for $K\ne\mathbb Q$. [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]] [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]] [[thm-fundamental-theorem-of-finite-galois-theory]] [[thm-minkowski-bound-for-ideal-classes]] [[def-absolute-norm-of-an-ideal]]

[A1] AC, CC and DC are retained from the actual local interfaces. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Choose $C_0=1$ and $c_1=1/4{,}000{,}000$ from [F1]. The original condition $\log(QT^n)\ge C_0n$ is exactly its hypothesis. Consequently the stated family contains at most one zero occurrence; if present it is real and simple and its primitive character $\chi_*$ is real. If no zero exists, all remaining assertions are vacuous. Otherwise [F2] gives $Q>1$ and $d_{\chi_*}>1$; since $d_{\chi_*}$ is an integer, $Q\ge d_{\chi_*}\ge2$. [A1, F1, F2, F6, given, choose, algebra]

1.2 We identify the ideal and idelic ray-class conventions used in [F3] without assuming they are definitionally identical. For every fractional ideal prime to the finite modulus, take the idele whose component is the appropriate uniformizer power at each prime in the finite support and one elsewhere. Multiplication gives a homomorphism from the prime-to-modulus ideal group to the idelic ray quotient. It is surjective: by weak approximation choose a principal multiplier so the finitely many specified local components become congruent to one at the modulus and have the required real signs; every remaining component decomposes into a uniformizer power and a unit. The kernel is exactly the principal ideals generated by elements congruent to one at the finite modulus and positive at its real places, because a class is trivial exactly when the idele is a principal idele times an idelic congruence unit. This proves that the ideal ray class group in the original character definition is canonically the idelic quotient of [F3], with prime classes sent to arithmetic Frobenius. [F3, given, construct, algebra]

2.1 If $\chi_*$ is nontrivial, [F1] gives an index-two kernel. Use step 1.2 and the ray-class Artin isomorphism [F3] to identify it with an index-two subgroup of the ray-class-field Galois group. Its fixed field $E_*/K$ is quadratic by [F6]. At every prime away from a common modulus containing the conductor and all ray-field ramified primes, the given character and the canonical character $\chi_{E_*/K}$ from [F4] have the same value: both evaluate the image of the same Frobenius in the quotient of order two. Equality on all such prime generators identifies their common-modulus pullbacks, and [F4] therefore identifies the primitive characters and conductors. Consequently $D_{E_*}=D_K^2N\mathfrak f_{\chi_*}=D_Kd_{\chi_*}\le Q^2$ and $m_*=[E_*:\mathbb Q]=2n$. The factorization in [F4], extended by [F6], shows $\zeta_{E_*}(\beta_*)=0$. If $\chi_*$ is trivial, set $E_*=K$, $m_*=n$, and $D_{E_*}=D_K=d_{\chi_*}\le Q$; then $\zeta_{E_*}(\beta_*)=0$ directly. [F1, F3, F4, F6, step 1.1, step 1.2, given, construct, algebra]

3.1 The case $E_*=\mathbb Q$ cannot occur, since [F2] excludes the corresponding real zero; otherwise [F6] gives $D_{E_*}>1$ and [F5] applies. If $E_*/\mathbb Q$ is in a normal tower, its first-applicable $\nu$ equals one in both statements. Otherwise the original condition that every Artin $L$-function be entire implies the holomorphy-at-$\beta_*$ condition of [F5]; hence [F5] applies with $\nu=m_*$ in that case. If neither original condition holds, [F5] gives a bound with $\nu\le m_*!$, because its holomorphy-at-$\beta_*$ test may also succeed; the original factorial bound follows. Thus in all cases $$1-\beta_*\gg\min\{(\nu(E_*)\log D_{E_*})^{-1},D_{E_*}^{-1/m_*}\}.$$ Here $\log D_{E_*}\le2\log Q$. In the quadratic case $D_{E_*}\le Q^2$ and $m_*=2n$, so $D_{E_*}^{-1/m_*}\ge Q^{-1/n}$; in the trivial case $D_{E_*}\le Q$ and $m_*=n$, giving the same inequality. This proves the original lower bound, all three cases and the absolute implicit constant. [F2, F5, F6, step 2.1, given, algebra] ∎
