---
id: thm-primitive-hecke-l-analytic-continuation-and-functional-equation
kind: theorem
title: Analytic continuation and functional equation for primitive finite-order Hecke L-functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
- def-finite-order-ray-class-hecke-character-and-l-function
- thm-finiteness-of-the-number-field-class-group
- thm-finite-order-hecke-l-euler-product
- lem-ray-hecke-ideal-number-residue-gauss-reassembly
- lem-ray-hecke-signed-gaussian-theta-transformation
- lem-ray-hecke-unit-domain-mellin-identity
- lem-ray-hecke-theta-tail-and-meromorphic-mellin
- lem-ray-class-character-finite-part-decomposition
- lem-character-orthogonality-for-finite-abelian-groups
- thm-ray-class-exact-sequence
- def-different-of-a-number-field
- def-discriminant-of-a-number-field-basis-and-order
- def-archimedean-embeddings-and-number-field-signature
- def-axiom-of-choice
- def-countable-choice
proof_strategy: direct
axiom_use: AC enters through the unit theorem, regulator, finite class representatives, and ray-class
  interfaces. Countable Choice is used by full-lattice Poisson summation and the integration/convergence
  suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jürgen Neukirch, Algebraic Number Theory, Chapter VII §§7–8
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: Printed pp.489–503, residue-class theta transformations, unit-domain Mellin representation,
      Theorem 8.5 and its proof.
  - title: J. S. Milne, Class Field Theory, version 4.03
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter VI §§1–2, Hecke L-series, partial zeta functions, and analytic properties; independent
      convention check.
---

## Statement

Assume AC and Countable Choice. Let $K$ be a number field with signature $(r_1,r_2)$, let $\mathfrak m=(\mathfrak m_0,S_\infty)$ be a modulus, and let $\chi$ be a primitive finite-order ray-class Hecke character modulo $\mathfrak m$. Let $\operatorname{Cl}(\mathcal O_K)$ be the group of nonzero fractional ideals modulo principal fractional ideals, and define the conjugate ray-class character by $\overline\chi(g)=\overline{\chi(g)}$ for $g\in\operatorname{Cl}_{\mathfrak m}(K)$. For each ordinary ideal class $C\in\operatorname{Cl}(\mathcal O_K)$ and $\operatorname{Re}(s)>1$, define
$$L_C(s,\chi)=\sum_{\substack{0\ne\mathfrak b\subseteq\mathcal O_K,\ [\mathfrak b]=C\\(\mathfrak b,\mathfrak m_0)=1}}\chi(\mathfrak b)(N\mathfrak b)^{-s},\qquad \Lambda_C(s,\chi)=\bigl(|d_K|N\mathfrak m_0\bigr)^{s/2}\prod_{\sigma\text{ real}}\Gamma_{\mathbb R}(s+\epsilon_\sigma)\prod_{j=1}^{r_2}\Gamma_{\mathbb C}(s)L_C(s,\chi),$$
where $d_K$ is the field discriminant, $\epsilon_\sigma$ are the real parities of $\chi$, $\Gamma_{\mathbb R}(z)=\pi^{-z/2}\Gamma(z/2)$, and $\Gamma_{\mathbb C}(z)=2(2\pi)^{-z}\Gamma(z)$. Let $\mathfrak D_K$ be the different and set $C^\#=[\mathfrak m_0\mathfrak D_K]C^{-1}$. Then each $\Lambda_C(s,\chi)$ has a meromorphic continuation to $\mathbb C$, and there is a constant $W_\chi$, independent of $C$, with $|W_\chi|=1$ such that
$$\Lambda_C(s,\chi)=W_\chi\Lambda_{C^\#}(1-s,\overline\chi).$$
The full completed function $\Lambda(s,\chi)=\sum_C\Lambda_C(s,\chi)$ has the same continuation and satisfies $\Lambda(s,\chi)=W_\chi\Lambda(1-s,\overline\chi)$. It is entire for nontrivial primitive $\chi$; for the trivial primitive character its only possible poles are simple poles at $s=0$ and $s=1$.

## Statement references

[[def-finite-order-ray-class-hecke-character-and-l-function]]

[[thm-ray-class-exact-sequence]]

[[def-different-of-a-number-field]]

[[def-discriminant-of-a-number-field-basis-and-order]]

[[def-archimedean-embeddings-and-number-field-signature]]

## Facts & Assumptions

**Given:** AC and Countable Choice; the number field, modulus, primitive finite-order character and partial-class normalization in the Statement.

[F1] The ordinary ideal class group is finite, and the Hecke ideal series converges absolutely in $\operatorname{Re}s>1$. [[thm-finiteness-of-the-number-field-class-group]] [[thm-finite-order-hecke-l-euler-product]]

[F2] The ideal-number finite Gauss reassembly and signed Gaussian Poisson transform give class theta functions with a scalar $W_\chi$ independent of the class, $|W_\chi|=1$, and the class change $C\mapsto[\mathfrak m_0\mathfrak D_K]C^{-1}$. [[lem-ray-hecke-ideal-number-residue-gauss-reassembly]] [[lem-ray-hecke-signed-gaussian-theta-transformation]]

[F3] The full unit-domain unfolding gives $\Lambda_C(s,\chi)=M_{f_{C,\chi}}((s+e/n)/2)$, with the exact gamma and discriminant/conductor factors in the Statement, and $f_{C,\chi}(1/t)=W_\chi t^{1/2+e/n}f_{C^\#,\bar\chi}(t)$. [[lem-ray-hecke-unit-domain-mellin-identity]]

[F4] These theta functions have uniform exponential tails; their Mellin transforms have the explicit entire-tail continuation and reflected functional equation, with only the two zero-vector constants contributing poles. [[lem-ray-hecke-theta-tail-and-meromorphic-mellin]]

[F5] The zero coefficient is zero unless $\mathfrak m_0=\mathcal O_K$ and every parity is zero. In that remaining case $\chi$ is an ordinary ideal-class character and $a_C=\chi(C)\operatorname{vol}(F)/|\mu_K|$. [[lem-ray-hecke-signed-gaussian-theta-transformation]] [[lem-ray-hecke-unit-domain-mellin-identity]] [[lem-ray-class-character-finite-part-decomposition]]

[F6] The sum of a nontrivial character over a finite abelian group is zero. [[lem-character-orthogonality-for-finite-abelian-groups]]

[A1] AC and CC are retained through the actual unit, finite ideal-class, lattice Poisson and integration suppliers of [F2]–[F4]. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 Put $n=[K:\mathbb Q]$ and $e=\sum_{i\text{ real}}\epsilon_i$. The unit-domain construction of [F3] applies to every ordinary class $C$; its orbit sum is exactly the ideals in that class prime to the finite modulus. It proves the displayed completed partial L-function is the Mellin transform with $z=(s+e/n)/2$ in its absolute-convergence half-plane. In particular this supplies the full normalization, rather than only a cosetwise Poisson identity. [A1, F1, F2, F3, given, algebra]

2.1 By [F4] the Mellin transform continues meromorphically. Its reflected parameter is $$\left(\frac12+\frac e n\right)-\frac{s+e/n}{2}=\frac{1-s+e/n}{2}.$$ The conjugate character has the same parities, so [F3] and [F4] identify the reflected transform with $\Lambda_{C^\#}(1-s,\bar\chi)$. Thus $\Lambda_C(s,\chi)=W_\chi\Lambda_{C^\#}(1-s,\bar\chi)$, with the class-independent modulus-one scalar of [F2]. This proves the full partial-class equation at every complex parameter by meromorphic continuation. [F2, F3, F4, step 1.1, algebra]

3.1 If either the finite modulus or a real parity is nontrivial, [F5] makes both constants in [F4] zero, so every completed partial function is entire. Otherwise $e=0$, the Mellin parameter is $s/2$, and [F4] allows only simple poles at $s=0,1$, with residues linear in $a_C$ and the conjugate-class constant. Summing over the finite class group is legitimate by [F1]. For a nontrivial ordinary class character, [F5]–[F6] make both total constants zero (the class involution permutes the classes), so the sum is entire. For the trivial primitive character only the two possible simple poles remain. Summing step 2.1 over $C$ and using the same bijective class involution proves the stated full functional equation. No class-field-existence theorem or unresolved unit-average assertion is being assumed. [F1, F4, F5, F6, step 2.1, algebra] ∎ 