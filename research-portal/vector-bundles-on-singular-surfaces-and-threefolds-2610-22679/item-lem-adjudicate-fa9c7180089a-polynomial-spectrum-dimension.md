---
title: Dimension and purity of an affine polynomial cylinder
status: draft
research_item: lem-adjudicate-fa9c7180089a-polynomial-spectrum-dimension
dependency_level: 0
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals)
- [math:thm-prime-spectrum-of-a-quotient-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-quotient-bijection)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)
- [math:cor-polynomial-ring-over-a-domain-is-a-domain](https://alphabetamath.cc/item/cor-polynomial-ring-over-a-domain-is-a-domain)
- [math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring](https://alphabetamath.cc/item/thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring)
- [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)
- [math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal)
- [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)
- [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)
- [math:def-polynomial-ring-over-a-commutative-ring](https://alphabetamath.cc/item/def-polynomial-ring-over-a-commutative-ring)
- [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets)
- [math:lem-zariski-closed-set-axioms](https://alphabetamath.cc/item/lem-zariski-closed-set-axioms)
- [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)
- [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)
- [math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)
- [math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space)
- [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)
- [math:thm-polynomial-ring-is-a-commutative-ring](https://alphabetamath.cc/item/thm-polynomial-ring-is-a-commutative-ring)
- [math:prop-canonical-quotient-ring-map](https://alphabetamath.cc/item/prop-canonical-quotient-ring-map)
- [math:thm-prime-spectrum-map-by-contraction](https://alphabetamath.cc/item/thm-prime-spectrum-map-by-contraction)
- [math:thm-quotient-is-domain-iff-ideal-prime](https://alphabetamath.cc/item/thm-quotient-is-domain-iff-ideal-prime)
- [math:thm-first-isomorphism-theorem-rings](https://alphabetamath.cc/item/thm-first-isomorphism-theorem-rings)


## Statement
Assume AC. Let $R$ be a nonzero noetherian commutative ring. Then $\dim\operatorname{Spec}R=\dim R$, where ring dimension is Krull dimension and scheme dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets. If $\dim R=d<\infty$, then $\dim\operatorname{Spec}R[t]=d+1$. If $\operatorname{Spec}R$ has pure dimension $d$, meaning that every irreducible component has dimension $d$, then $\operatorname{Spec}R[t]$ has pure dimension $d+1$ for every finite $d$.

## Facts & Assumptions

**Given:** AC and the ring $R$ in the statement. All prime ideals are proper; an irreducible component is a maximal irreducible closed subset. A minimal prime is a prime with no strictly smaller prime. All spectra carry the Zariski topology and all subsets carry the subspace topology.

[F0] Commutative rings, ideals and prime ideals have their usual unital-ring meanings. Noetherian means that every ideal is finitely generated. Polynomials are finite coefficient sequences with coefficientwise addition and convolution multiplication; $\operatorname{Spec}R$ is the set of prime ideals, and $V(I)$ is the set of primes containing $I$. The sets $V(I)$ are precisely its Zariski-closed sets. Irreducible means nonempty and not the union of two proper closed subsets, using the subspace topology for subsets. [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring), [math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal), [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals), [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module), [math:def-polynomial-ring-over-a-commutative-ring](https://alphabetamath.cc/item/def-polynomial-ring-over-a-commutative-ring), [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets), [math:lem-zariski-closed-set-axioms](https://alphabetamath.cc/item/lem-zariski-closed-set-axioms), [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)

[F1] Ring dimension counts strict prime chains, whereas dimension of a noetherian space counts strict chains of nonempty irreducible closed subsets. [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring), [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[F2] Under AC, the nonempty irreducible closed subsets of a spectrum are exactly the sets $V(\mathfrak p)$ for prime ideals $\mathfrak p$, each with unique radical defining ideal $\mathfrak p$. Thus inclusion is reversed, and irreducible components correspond to minimal prime ideals. [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals) Primes of $R/I$ correspond, preserving strict inclusions, to primes of $R$ containing $I$. [math:thm-prime-spectrum-of-a-quotient-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-quotient-bijection)

[F3] A finite-type algebra over a noetherian ring is noetherian, quotients of noetherian rings are noetherian, and under AC the spectrum of a noetherian ring is a noetherian space. [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian), [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations), [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)

[F4] A polynomial ring over a domain is a domain. Under AC a noetherian ring of finite Krull dimension gains exactly one dimension on adjoining a variable. [math:cor-polynomial-ring-over-a-domain-is-a-domain](https://alphabetamath.cc/item/cor-polynomial-ring-over-a-domain-is-a-domain), [math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring](https://alphabetamath.cc/item/thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring)

[F5] AC is assumed through the spectrum and polynomial-dimension results; the coefficient calculations below make no additional infinite choices. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F6] A unital homomorphism of commutative rings contracts prime ideals to prime ideals. For an ideal $I$ of a commutative ring $A$, the quotient $A/I$ is a domain exactly when $I$ is prime. A ring homomorphism $f$ induces $A/\ker f\cong\operatorname{im}f$. [math:thm-prime-spectrum-map-by-contraction](https://alphabetamath.cc/item/thm-prime-spectrum-map-by-contraction), [math:thm-quotient-is-domain-iff-ideal-prime](https://alphabetamath.cc/item/thm-quotient-is-domain-iff-ideal-prime), [math:thm-first-isomorphism-theorem-rings](https://alphabetamath.cc/item/thm-first-isomorphism-theorem-rings)

[F7] A quotient ring has additive cosets and multiplication $(a+I)(b+I)=ab+I$; its canonical projection is a surjective unital homomorphism with kernel $I$. Polynomial convolution makes $A[t]$ a commutative ring with injective constant homomorphism $A\to A[t]$. Ring homomorphisms preserve addition, multiplication and identity; a bijective such map is an isomorphism. A domain is a nonzero commutative ring without zero divisors. [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring), [math:prop-canonical-quotient-ring-map](https://alphabetamath.cc/item/prop-canonical-quotient-ring-map), [math:thm-polynomial-ring-is-a-commutative-ring](https://alphabetamath.cc/item/thm-polynomial-ring-is-a-commutative-ring), [math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism), [math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain)

[F8] Noetherian topological spaces satisfy the descending chain condition on closed subsets. Closed subsets of a subspace are intersections with ambient closed subsets, and subspace topologies are transitive under inclusions. [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space), [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)

[F9] A commutative $R$-algebra is of finite type when finitely many elements generate it as an $R$-algebra. In particular every polynomial is a finite sum of coefficient multiples of powers of $t$. [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras), [math:def-polynomial-ring-over-a-commutative-ring](https://alphabetamath.cc/item/def-polynomial-ring-over-a-commutative-ring)

## Proof

**Given:** The ring and AC hypothesis in the Statement.

**Goal:** Establish all three dimension and purity assertions.

1.1 The constant map of [F7] makes $R[t]$ an $R$-algebra, generated by $t$ by [F9], so [F3] makes both spectra noetherian. For primes $\mathfrak p,\mathfrak q$, the definition of $V$ gives $\mathfrak p\subseteq\mathfrak q$ if and only if $V(\mathfrak q)\subseteq V(\mathfrak p)$: the reverse implication follows by testing the point $\mathfrak q\in V(\mathfrak q)$. Thus the bijection of [F2] reverses each finite prime chain without changing its length; [F1] gives $\dim\operatorname{Spec}R=\dim R$ and $\dim\operatorname{Spec}R[t]=\dim R[t]$ without a finiteness assumption on dimension. If $\dim R=d<\infty$, [F4] makes the latter dimension $d+1$. More generally, for a proper ideal $I$ of either ring, $V(I)$ is closed by [F0]. By [F8], its closed subsets are closed in the ambient spectrum, so it is noetherian and its irreducible closed subsets are exactly the ambient ones contained in $V(I)$. By [F2] these correspond to primes containing $I$, and the quotient-prime bijection preserves their strict inclusions. Hence [F1] gives $\dim V(I)=\dim(R/I)$. [F0, F1, F2, F3, F4, F5, F7, F8, F9, given]

2.1 For any ideal $I$ of $R$, write $I[t]$ for the polynomials all of whose coefficients lie in $I$. It is an ideal: addition and negatives preserve this condition, and each coefficient of a product with an arbitrary polynomial is a finite sum of multiples of elements of $I$. Coefficient reduction defines $\rho_I:R[t]\to(R/I)[t]$ by $\sum_i a_it^i\mapsto\sum_i(a_i+I)t^i$. This is well-defined on finite coefficient sequences, preserves addition and identity, and preserves multiplication because its degree-$n$ coefficient is $\sum_{i+j=n}(a_i+I)(b_j+I)=(\sum_{i+j=n}a_ib_j)+I$. It is surjective by lifting the finitely many coefficients of a target polynomial, and its kernel is exactly $I[t]$ by [F7]. Thus [F6] gives $R[t]/I[t]\cong(R/I)[t]$. If $I$ is prime, [F6] makes $R/I$ a domain and [F4] makes $(R/I)[t]$ a domain; the isomorphism and [F6] therefore show that $I[t]$ is prime. Now suppose $\operatorname{Spec}R$ is pure of finite dimension $d$. For a minimal prime $Q$ of $R[t]$, its contraction $\mathfrak p=Q\cap R$ is prime by [F6] applied to the injective constant map in [F7]. Every coefficient in $\mathfrak p$ lies in $Q$, so $\mathfrak p[t]\subseteq Q$; the primeness just proved and minimality give $Q=\mathfrak p[t]$. Any prime $\mathfrak q\subsetneq\mathfrak p$ would give $\mathfrak q[t]\subsetneq\mathfrak p[t]$, with strictness witnessed by a constant in $\mathfrak p\setminus\mathfrak q$, contradicting minimality of $Q$. Conversely, for minimal $\mathfrak p$ and prime $Q'\subseteq\mathfrak p[t]$, contraction is prime and contained in $\mathfrak p$ (the constant coefficients of $\mathfrak p[t]$ are exactly $\mathfrak p$), hence equals $\mathfrak p$. The ideal $Q'$ then contains $\mathfrak p[t]$, so equality follows. These are exactly the minimal primes of $R[t]$, and [F2] identifies their vanishing sets with its components. For each minimal $\mathfrak p$ of $R$, purity and step 1.1 give $\dim(R/\mathfrak p)=\dim V(\mathfrak p)=d$; [F3] makes this nonzero quotient noetherian. By [F4], $\dim((R/\mathfrak p)[t])=d+1$. The coefficient isomorphism gives the same dimension for $R[t]/\mathfrak p[t]$: contracting primes along a ring isomorphism and its inverse gives inverse inclusion-preserving prime bijections by [F6]. Step 1.1 now gives $\dim V(\mathfrak p[t])=d+1$ for every component, proving purity. [F0, F1, F2, F3, F4, F5, F6, F7, step 1.1, construct, algebra] ∎
