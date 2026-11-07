---
id: lem-dedekind-zeta-divisibility-for-galois-extensions-positive-strip
kind: lemma
title: Dedekind zeta divisibility for normal extensions in the positive strip
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- lem-artin-l-meromorphic-continuation-in-positive-half-plane-under-choice
- thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions
- cor-frobenius-reciprocity-for-complex-characters
- thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one
- thm-fundamental-theorem-of-finite-galois-theory
- thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
axiom_use: AC, CC and DC are inherited from the positive-half-plane Artin and Dedekind analytic interfaces.
sources:
  references:
  - title: Robert J. Lemke Oliver, Jesse Thorner and Asif Zaman, An approximate form of Artin's holomorphy conjecture and non-vanishing of Artin L-functions
    url: https://lemkeoliver.github.io/papers/27-ApproximateArtin.pdf
    locator: Section 5.1, Lemmas 5.1–5.2, printed p. 18. The finite character identity and its holomorphy consequence are reconstructed below; no external result is imported.
---

## Statement

Assume AC, Countable Choice and DC. If $B/A$ is a finite Galois extension of number fields, then $\zeta_B(s)/\zeta_A(s)$ is holomorphic on $0<\operatorname{Re}s<1$. Consequently every zero of $\zeta_A$ in that strip is a zero of $\zeta_B$, with at least the same multiplicity. The assertion is for normal extensions; it makes no claim about arbitrary nonnormal extensions.

## Facts & Assumptions

**Given:** The finite Galois extension and choice assumptions in the Statement.

[F1] Complete Artin products are meromorphic on $\operatorname{Re}s>0$. For a cyclic Galois group, the complete Artin product of any nontrivial irreducible character is holomorphic on $\operatorname{Re}s>0$, including at $s=1$. [[lem-artin-l-meromorphic-continuation-in-positive-half-plane-under-choice]]

[F2] Artin products satisfy the finite induction and direct-sum identities, including ramified primes. The product for the trivial character of $\operatorname{Gal}(B/A)$ is $\zeta_A$, while that for the regular character is $\zeta_B$. [[lem-artin-l-meromorphic-continuation-in-positive-half-plane-under-choice]]

[F3] Irreducible complex characters form an orthonormal basis of class functions and induction satisfies Frobenius reciprocity. Every irreducible character of a cyclic group is linear. [[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]] [[cor-frobenius-reciprocity-for-complex-characters]] [[thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one]]

[F4] The Dedekind zeta functions are meromorphic and holomorphic off their simple pole at one. [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[A1] The Artin and Dedekind interfaces use AC, CC and DC. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Put $G=\operatorname{Gal}(B/A)$. For every cyclic subgroup $C\le G$, let $\operatorname{Gen}(C)$ be its set of generators and write $\phi_C=|\operatorname{Gen}(C)|$. For a linear character $\chi$ of $C$, set $$a_{C,\chi}=\sum_{h\in\operatorname{Gen}(C)}(1-\overline{\chi(h)}).$$ This is an integer: replacing each generator by its inverse pairs conjugate summands, so it is real; as a sum of roots of unity it is an algebraic integer, and every automorphism of a cyclotomic splitting field permutes generators, so it is rational. A rational algebraic integer is an integer. For the trivial character it is zero. For a nontrivial character and nontrivial $C$, its real part is a sum of $1-\operatorname{Re}\chi(h)\ge0$ with at least one strictly positive term, since a generator cannot map to one under a nontrivial character. Thus $a_{C,\chi}>0$. For $C=\{1\}$ all coefficients are zero. [F3, given, construct, algebra]

2.1 Define a class function on $C$ by $\lambda_C=\sum_{\chi\ne1}a_{C,\chi}\chi$. Cyclic character orthogonality gives $\lambda_C(x)=\phi_C\operatorname{reg}_C(x)-|C|\mathbf1_{\operatorname{Gen}(C)}(x)$: expanding the sum over all characters gives $\phi_C\sum_\chi\chi(x)-\sum_{h\in\operatorname{Gen}(C)}\sum_\chi\overline{\chi(h)}\chi(x)$, and the two finite character sums are $|C|$ exactly at the identity and at $x=h$ respectively, and zero otherwise. For any irreducible character $\psi$ of $G$, Frobenius reciprocity [F3] now yields $$\left\langle\sum_C\operatorname{Ind}_C^G\lambda_C,\psi\right\rangle_G=\sum_C\left(\phi_C\psi(1)-\sum_{h\in\operatorname{Gen}(C)}\overline{\psi(h)}\right)=|G|\psi(1)-\sum_{g\in G}\overline{\psi(g)}.$$ The generators of all cyclic subgroups partition $G$, so $\sum_C\phi_C=|G|$. The final expression equals $\langle |G|(\operatorname{reg}_G-1_G),\psi\rangle_G$. Completeness of irreducibles therefore proves $$|G|(\operatorname{reg}_G-1_G)=\sum_C\sum_{\chi\ne1}a_{C,\chi}\operatorname{Ind}_C^G\chi.$$ All coefficients are nonnegative integers by step 1.1. [F3, step 1.1, algebra]

3.1 Apply the Artin induction and direct-sum identities [F2] to the two genuine characters in step 2.1, first on $\operatorname{Re}s>1$. They give $$\left(\frac{\zeta_B(s)}{\zeta_A(s)}\right)^{|G|}=\prod_C\prod_{\chi\ne1}L(s,\chi;B/B^C)^{a_{C,\chi}}.$$ Every factor on the right is holomorphic in $0<\operatorname{Re}s<1$ by [F1]; in particular no negative exponent occurs. The quotient on the left is meromorphic by [F4], and both sides agree throughout the strip by the identity theorem for meromorphic functions. At any point in the strip the order of the left side is $|G|$ times the integral order of the quotient; because the right side is holomorphic, that order is nonnegative. Hence the quotient has no pole anywhere in the strip. The asserted zero multiplicity comparison follows immediately from the product $\zeta_B=(\zeta_B/\zeta_A)\zeta_A$. [A1, F1, F2, F4, step 2.1, algebra] ∎
