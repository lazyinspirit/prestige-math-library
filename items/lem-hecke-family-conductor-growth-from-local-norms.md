---
id: lem-hecke-family-conductor-growth-from-local-norms
kind: lemma
title: Hecke conductor growth from local norms
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
proof_strategy: direct
axiom_use: AC, CC and DC are inherited from the exact local and global reciprocity interfaces; the Newton iteration is explicit.
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- thm-global-artin-reciprocity-and-norm-index
- def-global-artin-map-as-product-of-local-reciprocity-maps
- def-local-artin-reciprocity-map
- thm-local-artin-reciprocity-and-norm-index
- lem-unramified-local-unit-norms-and-cohomology
- thm-weak-approximation-for-global-fields
- def-finite-order-ray-class-hecke-character-and-l-function
- thm-unique-extension-of-a-nonarchimedean-absolute-value
- thm-field-norm-and-trace-by-embeddings
- thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
- thm-fundamental-identity-for-primes-in-number-fields
- thm-ramified-primes-and-the-number-field-discriminant
- thm-number-field-integral-ideal-factorisation-in-zf
- thm-ideal-norm-is-multiplicative
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapters III and V, local/global reciprocity and conductor context; the explicit norm-root bound below is proved directly.
---

## Statement

Assume AC, Countable Choice and DC. Let $L/K$ be a finite abelian extension of number fields, put $h=[L:K]$, $n=[K:\mathbb Q]$, and $D_L=|d_L|$. Let $Q$ be the maximum of the absolute norms of the finite conductors of the primitive Hecke characters associated by Artin reciprocity to the characters of $\operatorname{Gal}(L/K)$. Then
$$\log Q\le n\bigl(\log D_L+2\log h\bigr).$$
The bound includes $h=1$, finite conductor one, and all wild or dyadic primes. It does not assume equality of Artin and Hecke conductor exponents.

## Facts & Assumptions

**Given:** The abelian extension, associated primitive family, discriminant and choice assumptions in the Statement.

[F1] Global reciprocity is the product of compatible local maps, is trivial on principal ideles, and identifies the global norm quotient with the abelian Galois group. Local reciprocity has the norm kernel and arithmetic unramified Frobenius normalization; unramified local unit norms are surjective. Weak approximation permits finite congruence and real-sign conditions. A primitive finite-order Hecke character is a ray-class character with its least full modulus. [[thm-global-artin-reciprocity-and-norm-index]] [[def-global-artin-map-as-product-of-local-reciprocity-maps]] [[def-local-artin-reciprocity-map]] [[thm-local-artin-reciprocity-and-norm-index]] [[lem-unramified-local-unit-norms-and-cohomology]] [[thm-weak-approximation-for-global-fields]] [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F2] Local extensions have unique extending absolute values and local degree $ef$; their norms are products over embeddings. In global number-field extensions the sums of $ef$ over primes above a fixed prime equal the degree. A ramified rational prime divides the absolute discriminant. [[thm-unique-extension-of-a-nonarchimedean-absolute-value]] [[thm-field-norm-and-trace-by-embeddings]] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]] [[thm-fundamental-identity-for-primes-in-number-fields]] [[thm-ramified-primes-and-the-number-field-discriminant]]

[F3] Integral ideals have unique finite prime factorizations and multiplicative norm. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-ideal-norm-is-multiplicative]]

[A1] The stated choice hypotheses cover the local and global reciprocity and completion interfaces. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Let $v$ be a finite place of $K$ of residue characteristic $p$, let $M/K_v$ be a local factor of $L/K$, and put $d=[M:K_v]$ and $a=v_K(d)$ for the normalized discrete valuation. For any $z\in1+\mathfrak p_v^{2a+1}$, define $f(X)=X^d-z$ and $x_0=1$. The explicit Newton iteration $x_{j+1}=x_j-f(x_j)/f'(x_j)$ remains in $1+\mathfrak p_v$: its derivative has valuation $a$ at each unit iterate, and the binomial expansion gives $$v_K(f(x_{j+1}))\ge2v_K(f(x_j))-2a.$$ Starting from $v_K(f(x_0))\ge2a+1$, the error valuations increase at least geometrically after subtracting $2a$, and the successive differences have valuations tending to infinity. Completeness of $K_v$ therefore gives a limit $x$ with $x^d=z$. The recursion is explicit and needs no selection from infinitely many sets. Since $x\in K_v^\times$, its norm from $M$ is $x^d=z$. Thus $1+\mathfrak p_v^{2a+1}$ lies in the local norm subgroup. [A1, F2, given, construct, algebra]

2.1 Let $\chi$ be a character of $\operatorname{Gal}(L/K)$. By [F1], its local idelic component kills the local norm subgroup, hence kills $1+\mathfrak p_v^{2a+1}$ by step 1.1. Finite weak approximation identifies this local unit condition with the corresponding congruence condition in the ray-ideal character; consequently the exponent of $v$ in its least finite Hecke conductor is at most $2a+1$. At an unramified $v$, [F1] makes every unit a local norm, so the conductor exponent is zero. This conclusion uses only the local norm kernel and primitive Hecke definition, not a comparison with Artin conductor exponents. [F1, step 1.1, algebra]

3.1 For a ramified place $v$ above $p$, the local Galois degree $d$ divides $h$, so $a=v_K(d)\le e(v/p)v_p(h)$, while $\log Nv=f(v/p)\log p$. Summing step 2.1 over the ramified primes in the conductor of $\chi$ gives $$\log N\mathfrak f_\chi\le\sum_{v\text{ ramified}}\log Nv+2\sum_{p\mid h}v_p(h)\log p\sum_{v\mid p}e(v/p)f(v/p).$$ The second sum is at most $2n\log h$ by [F2]. If $v$ ramifies in $L/K$, its rational prime $p$ ramifies in $L/\mathbb Q$ by multiplicativity of ramification indices, hence divides $D_L$ by [F2]. For each $p$, $\sum_{v\mid p}f(v/p)\le n$, so the first sum is at most $n\sum_{p\mid D_L}\log p\le n\log D_L$. Norm factorization [F3] gives the inequality for each $\chi$; the finite maximum gives the asserted bound for $Q$. The trivial extension has $h=1$ and only the conductor-one character, so it is included. [F1, F2, F3, step 2.1, algebra] ∎
