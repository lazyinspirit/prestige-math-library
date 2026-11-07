---
id: lem-hecke-congruence-family-cardinality-and-primitive-reduction
kind: lemma
title: Effective Hecke congruence-family cardinality and primitive reduction
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-primitive-congruence-family-modulus-and-smoothed-coset-bound
- lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness
- lem-imprimitive-hecke-logarithmic-derivative-finite-euler-control
- lem-character-orthogonality-for-finite-abelian-groups
- thm-ray-class-exact-sequence
- thm-minkowski-bound-for-ideal-classes
- thm-dedekind-zeta-euler-product
- thm-ideal-norm-is-multiplicative
- thm-number-field-integral-ideal-factorisation-in-zf
- thm-fundamental-identity-for-primes-in-number-fields
- cor-norm-of-a-prime-ideal
- lem-qa-13-pi-rational-bounds
- thm-geometric-series
- thm-logarithm-derivative-and-integral
- thm-natural-logarithm-laws
- def-axiom-of-choice
- def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: AC and CountableChoice retain the literal arithmetic/ray/Hecke interfaces;
  no class-field realization is used.
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the
      Chebotarev density theorem
    url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
    locator: §2 Lemmas2.2,2.5,2.11–2.13 and §5C Lemma5.4, full cached text read. Exact
      local proofs below use the already accepted canonical-product/real-zero and
      finite ray inputs; no source theorem is imported.
---

## Statement

Assume AC and Countable Choice. Let $K$ have degree $n\ge1$ and absolute discriminant $D$, and let $H$ be a congruence class group modulo a full ray modulus, with quotient order $h$. Put $Q=\max_{\chi\bmod H}N\mathfrak f_{\chi,0}\ge1$. For every $\epsilon>0$ there is an effective constant $C_\epsilon\ge1$, depending only on $\epsilon$, such that
$$h\le C_\epsilon^nD^{1/2+\epsilon}Q^{1+\epsilon}.$$
The family has a primitive congruence-group representative at the lcm of its full character conductors. Pullback gives a bijection of the two finite character families, preserves $h,Q$, and preserves all zero occurrences and multiplicities in $\operatorname{Re}s>0$ away from the possible pole at one. For that primitive representative its finite modulus satisfies $N\operatorname{rad}(\mathfrak m_0)\le Q^2$. No ray class field is constructed or assumed.

## Facts & Assumptions

**Given:** The number field and finite ray quotient, with the stated AC+CC branch.

[F1] Conductors are unique least full divisor moduli; natural divisor-modulus ray maps are onto, and quotient characters have finite character orthogonality. Finite Euler correction factors have no zeros on $\operatorname{Re}s>0$ and preserve critical zero multiplicities. [[lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness]] [[lem-character-orthogonality-for-finite-abelian-groups]] [[lem-imprimitive-hecke-logarithmic-derivative-finite-euler-control]]

[F2] A primitive congruence family has $2^{\omega(\mathfrak m_0)}\le e^{c_vn}Q^v$ for every $v>0$ and $N\operatorname{rad}(\mathfrak m_0)\le Q^2$, with effective constants. [[lem-primitive-congruence-family-modulus-and-smoothed-coset-bound]]

[F3] Minkowski supplies an integral representative of norm at most $(4/\pi)^{r_2}(n!/n^n)\sqrt D$ in every ideal class. The exact ray sequence has finite residue/sign group mapping to the ray class group and then surjecting onto the ordinary ideal class group. [[thm-minkowski-bound-for-ideal-classes]] [[thm-ray-class-exact-sequence]] The scalar bound $\pi>3$ is available. [[lem-qa-13-pi-rational-bounds]]

[F4] Ideals have finite factorization and multiplicative integer norm. The positive ideal zeta series converges above one; grouping prime ideals over rational primes bounds $\zeta_K(s)\le\zeta(s)^n$ on real $s>1$. Scalar geometric sums and logarithmic product laws apply. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-ideal-norm-is-multiplicative]] [[thm-dedekind-zeta-euler-product]] [[thm-fundamental-identity-for-primes-in-number-fields]] [[cor-norm-of-a-prime-ideal]] [[thm-geometric-series]] [[thm-logarithm-derivative-and-integral]] [[thm-natural-logarithm-laws]]

[A1] AC and Countable Choice are the actual arithmetic/ray interfaces; no class-field correspondence is used. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 Let $G$ be the original finite ray quotient and let $\mathfrak f$ be the lcm of the full conductors of its characters. Every character factors through $\operatorname{Cl}_{\mathfrak f}$. The kernel of the onto ray map from the original modulus to $\mathfrak f$ therefore has trivial image in $G$: finite orthogonality separates every nonidentity element of $G$ from the identity. Thus the subgroup defining $G$ is the pullback of its image at $\mathfrak f$, and the resulting quotient and its full character group are isomorphic to the original ones. If the new subgroup descended farther, every character conductor would divide that smaller modulus, contradicting the lcm. It is therefore primitive. Its characters have the same primitive ancestors and the same $Q,h$. The finite Euler factors in [F1] are nonzero on the right half-plane, so corresponding $L$-functions have equal zero orders there away from the pole at one. [A1, F1, given, construct, algebra]

2.1 For $\epsilon>0$, Minkowski's representative bound is at most $2^n\sqrt D$: $n!\le n^n$ and $(4/\pi)^{r_2}<2^n$. The bounded-norm ideal set is finite, since its cardinality is at most $R^{1+2\epsilon}\zeta_K(1+2\epsilon)$ for $R=2^n\sqrt D$, by [F4]. It maps onto the ordinary class group, so $h_K\le C_\epsilon^nD^{1/2+\epsilon}$. The constants are effective since integral comparison gives $\zeta(1+2\epsilon)\le1+1/(2\epsilon)$. The exact ray sequence then gives $\#\operatorname{Cl}_{(\mathfrak d,\text{all real})}\le2^nh_KN\mathfrak d$: each local residue-unit group has at most the size of its full quotient ring, their product is $N\mathfrak d$, and there are at most $2^n$ sign tuples. Ordinary and ray class groups here are finite by these same surjections; no ray class field is needed. [F3, F4, step 1.1, algebra]

3.1 Work at the primitive representative of step 1.1. Distinct family characters have distinct primitive ancestors, by uniqueness of primitive induction. For a fixed finite conductor $\mathfrak d\mid\mathfrak f_0$, all possible infinite-place conductors pull back injectively into the ray group at $(\mathfrak d,\text{all real})$. Hence the number with that finite conductor is at most $2^nh_KN\mathfrak d$, without a further count of infinite-place subsets. Set $\eta=\epsilon/2$. Since every occurring $N\mathfrak d\le Q$, $$h\le2^nh_KQ^{1+\eta}\sum_{\mathfrak d\mid\mathfrak f_0}(N\mathfrak d)^{-\eta}.$$ The divisor sum is at most $\prod_{\mathfrak p\mid\mathfrak f_0}(1-(N\mathfrak p)^{-\eta})^{-1}\le(1-2^{-\eta})^{-\omega(\mathfrak f_0)}$. Put $c=-\log(1-2^{-\eta})>0$ and apply [F2] with $v=\eta\log2/c$. Its bound gives this product at most $C_\epsilon^nQ^\eta$. Together with step 2.1 this proves $h\le C_\epsilon^nD^{1/2+\epsilon}Q^{1+\epsilon}$, after absorbing fixed factors into the effective constant. Unit moduli and $Q=1$ use the same empty-product conventions. The radical conclusion is exactly [F2] for this primitive representative. [F1, F2, F4, step 1.1, step 2.1, algebra] ∎