---
id: lem-product-of-distinct-primitive-real-characters-is-nonprincipal
kind: lemma
title: The product of distinct primitive real characters is nonprincipal at the product modulus
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-dirichlet-character-primitive-induction
  - def-dirichlet-character-modulo-q
  - lem-dirichlet-character-values
  - def-primitive-dirichlet-character-and-conductor
  - def-induced-dirichlet-character
  - thm-euclids-lemma
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Ian Petrow, Introduction to Analytic Number Theory
      url: https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf
      locator: Theorem 10.3 proof, printed pp. 76–79, product characters in the Siegel argument.
    - title: Philippe Michel, Analytic Number Theory and Families of L-functions, Park City lecture notes
      url: https://www.epfl.ch/labs/tan/wp-content/uploads/2018/10/Parkcitylectures.pdf
      locator: Landau/Page argument, printed pp. 20–21, product of distinct primitive real characters.
---

## Statement

Let $q_1,q_2\ge3$ and let $\chi_1,\chi_2$ be distinct primitive real nonprincipal Dirichlet characters modulo $q_1,q_2$, respectively. Put $m=q_1q_2$ and $\psi(n)=\chi_1(n)\chi_2(n)$. Then $\psi$ is a real nonprincipal Dirichlet character modulo $m$.

## Facts & Assumptions

**Given:** Distinct primitive real nonprincipal characters $\chi_i$ modulo $q_i\ge3$, and $m=q_1q_2$.

[F1] A Dirichlet character modulo $q$ is periodic, completely multiplicative, zero on nonunits, and takes roots of unity on units; for a real character the unit values are $\pm1$ ([[def-dirichlet-character-modulo-q]], [[lem-dirichlet-character-values]]).

[F2] A primitive character has a unique primitive ancestor equal to itself; an induced character agrees with its primitive ancestor on units ([[thm-dirichlet-character-primitive-induction]], [[def-primitive-dirichlet-character-and-conductor]], [[def-induced-dirichlet-character]]).

[F3] If a prime divides a product of two integers, it divides at least one factor ([[thm-euclids-lemma]]).

## Proof

1.1 The function $\psi$ is periodic modulo $m$, since each $q_i$ divides $m$ and each $\chi_i$ is periodic modulo $q_i$. It is completely multiplicative as a product of completely multiplicative functions. [F1, given, algebra]

2.1 If $(n,m)>1$, a prime $p$ divides both $n$ and $m$. Since $m=q_1q_2$, [F3] gives $p\mid q_i$ for some $i$, so [F1] gives $\chi_i(n)=0$ and hence $\psi(n)=0$. If $(n,m)=1$, then $(n,q_i)=1$ for each $i$; [F1] gives $\psi(n)\in\{1,-1\}$. Thus $\psi$ satisfies the character value and nonunit conditions modulo $m$, and is real. [F1, F3, step 1.1, given]

3.1 Suppose $\psi$ were principal modulo $m$. On each unit modulo $m$, both induced characters equal their respective $\chi_i$ and have values $\pm1$; the equality $\chi_1(n)\chi_2(n)=1$ therefore gives $\chi_1(n)=\chi_2(n)$. The two characters induced to modulus $m$ agree on all units and both vanish on nonunits, so they are the same character modulo $m$. Uniqueness of the primitive ancestor in [F2] then gives $\chi_1=\chi_2$, contrary to the hypothesis. Therefore $\psi$ is nonprincipal. [F1, F2, step 2.1, given, contradiction] ∎

