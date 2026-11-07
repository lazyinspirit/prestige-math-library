---
dependency_level: 0
id: lem-finite-abelian-quotient-coset-character-basis
kind: lemma
title: "Character basis on a conjugacy-invariant coset with abelian quotient"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-group
  - def-normal-subgroup
  - def-quotient-group
  - def-conjugacy-class-and-centralizer
  - def-group-homomorphism
  - def-finite-cardinality
  - def-character-of-a-complex-representation
  - def-additive-character-of-a-finite-abelian-group
  - lem-additive-characters-are-one-dimensional-complex-representations
  - def-finite-dimensional-representation-of-a-group-over-a-field
  - def-subrepresentation-and-irreducible-representation
  - def-irreducible-complex-character
  - def-class-function-and-the-space-of-complex-class-functions
  - def-standard-inner-product-on-complex-class-functions
  - thm-first-orthogonality-relation-for-irreducible-complex-characters
  - thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions
  - thm-second-column-orthogonality-relation-for-irreducible-complex-characters
  - thm-product-rule
  - thm-nth-roots-exist
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
aliases: []
sources:
  scraped: []
  references:
    - title: "Emmanuel Kowalski, The Large Sieve and its Applications (Cambridge Tracts 175, 2008)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf"
      locator: "Lemma 3.2, printed pp. 37–39"
verification:
  precheck: pass
---

## Statement

Let $H$ be a finite group, let $N\triangleleft H$, and suppose the quotient
$A:=H/N$ is abelian, written additively. Fix $a\in A$ and let
$Y_a:=\{h\in H:hN=a\}$. Let $Y_a^\#$ be the set of $H$-conjugacy classes
contained in $Y_a$, and give a class $D\in Y_a^\#$ mass $\nu(D):=|D|/|N|$.
Let $\widehat A$ be the set of additive characters of $A$. For an irreducible
complex representation $\pi$ of $H$, put
$$\widehat A_\pi:=\{\psi\in\widehat A:\pi\otimes\psi\simeq\pi\},$$
where $(\pi\otimes\psi)(h):=\psi(hN)\pi(h)$. This is finite and contains
the trivial character. Identify two irreducible
representations when their restrictions to $N$ are equivalent. Choose one
representative from each such equivalence class, choosing the trivial
representation in the class with trivial restriction. Discard any chosen
representation whose character vanishes identically on $Y_a$. The functions
$$D\longmapsto\frac{\chi_\pi(h)}{\sqrt{|\widehat A_\pi|}}\qquad(h\in D)$$
from the remaining representatives form an orthonormal basis of the
complex-valued functions on $Y_a^\#$ for the inner product
$\langle f,g\rangle:=\sum_{D\in Y_a^\#}\nu(D)f(D)\overline{g(D)}$.
The trivial representation contributes the constant function $1$.

## Statement references

[[def-group]]

[[def-normal-subgroup]]

[[def-quotient-group]]

[[def-conjugacy-class-and-centralizer]]

[[def-finite-cardinality]]

[[def-additive-character-of-a-finite-abelian-group]]

[[lem-additive-characters-are-one-dimensional-complex-representations]]

[[def-finite-dimensional-representation-of-a-group-over-a-field]]

[[def-character-of-a-complex-representation]]

[[def-subrepresentation-and-irreducible-representation]]

[[def-irreducible-complex-character]]

[[def-standard-inner-product-on-complex-class-functions]]

[[thm-first-orthogonality-relation-for-irreducible-complex-characters]]

[[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]

[[thm-second-column-orthogonality-relation-for-irreducible-complex-characters]]

[[thm-product-rule]]

[[thm-nth-roots-exist]]

[Kowalski, Lemma 3.2, full text](https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf)

## Facts & Assumptions

**Given:** A finite group $H$, a normal subgroup $N$, the finite abelian
quotient $A=H/N$, a coset $Y_a$, and irreducible complex representations of
$H$.

[F1] The irreducible complex characters of a finite group are orthonormal,
and their normalized inner product computes the dimension of the intertwiner
space ([[thm-first-orthogonality-relation-for-irreducible-complex-characters]]).

[F2] The irreducible complex characters form a basis of all class functions,
and their column orthogonality sum is $|C_G(g)|$ on a conjugacy class and zero
off it ([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]],
[[thm-second-column-orthogonality-relation-for-irreducible-complex-characters]]).

[F3] The quotient cardinality satisfies $|H|=|N||A|$, because the quotient
map partitions $H$ into $|A|$ cosets, each bijective with $N$
([[def-finite-cardinality]], [[thm-product-rule]]).

[F4] The irreducible characters of the finite abelian group $A$ are exactly
its additive characters ([[lem-additive-characters-are-one-dimensional-complex-representations]]).

[F5] The twist action in the Statement multiplies each representation matrix
by the nonzero scalar $\psi(hN)$, so its trace is
$\psi(hN)\chi_\pi(h)$ and its invariant subspaces are unchanged; equivalent
representations have the same trace character
([[def-character-of-a-complex-representation]],
[[def-subrepresentation-and-irreducible-representation]]).

[F6] Every positive real number has a unique positive square root
([[thm-nth-roots-exist]]).

[F7] The character of a finite-dimensional representation at the identity
is its positive dimension, so each irreducible character is nonzero at the
identity ([[def-character-of-a-complex-representation]],
[[def-finite-dimensional-representation-of-a-group-over-a-field]]).

[F8] By [F2] applied to the finite group $A$, its irreducible characters
form a finite basis of its class-function space. By [F4], these are exactly
the additive characters, so $\widehat A$ is finite. The subset
$\widehat A_\pi\subseteq\widehat A$ is therefore finite, and it contains
the trivial character, since $\pi\otimes1=\pi$. Thus
$|\widehat A_\pi|$ is a positive integer
([[def-additive-character-of-a-finite-abelian-group]],
[[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]],
[[lem-additive-characters-are-one-dimensional-complex-representations]]).

## Proof

1.1 For any irreducible $\pi,\tau$ of $H$, the coset indicator has the character expansion $1_{\{hN=a\}}=\frac1{|A|}\sum_{\psi\in\widehat A} \psi(hN)\overline{\psi(a)}$ by column orthogonality [F2] applied to the abelian group $A$. Each twisted representation remains irreducible by [F5]. The inner product on $Y_a^\#$ is the normalized sum over its elements, divided by $|N|$, since each class $D$ has mass $|D|/|N|$. Using [F3], expanding the indicator, and applying first orthogonality [F1] gives $\langle\chi_\pi|_{Y_a},\chi_\tau|_{Y_a}\rangle =\sum_{\substack{\psi\in\widehat A\\\pi\otimes\psi\simeq\tau}} \overline{\psi(a)}.$ [F1, F2, F3, F5, algebra]

2.1 If $\pi|_N$ and $\tau|_N$ are inequivalent, no twist in step 1.1 can identify them because every $\psi\in\widehat A$ is trivial on $N$; hence their restricted characters are orthogonal on $Y_a$. If $\pi|_N\simeq\tau|_N$, their restricted characters agree and are nonzero at the identity, so their inner product on the identity coset $Y_0=N$ is positive by [F7]. Step 1.1 with $a=0$ then shows that some $\psi_0\in\widehat A$ satisfies $\pi\otimes\psi_0\simeq\tau$. [F1, F4, F5, F7, step 1.1, algebra]

3.1 When such a $\psi_0$ exists, any $\psi$ with $\pi\otimes\psi\simeq\tau\simeq\pi\otimes\psi_0$ has $\pi\otimes(\psi\psi_0^{-1})\simeq\pi$. Thus every twist identifying $\pi$ with $\tau$ is $\psi_0\eta$ for $\eta\in\widehat A_\pi$. If $\chi_\pi$ is nonzero on $Y_a$, then $\eta(a)=1$ for every $\eta\in\widehat A_\pi$: otherwise $\chi_\pi(h)=\eta(hN)\chi_\pi(h)=\eta(a)\chi_\pi(h)$ would force it to vanish throughout $Y_a$. Step 1.1 therefore gives $\langle\chi_\pi|_{Y_a},\chi_\tau|_{Y_a}\rangle =|\widehat A_\pi|\overline{\psi_0(a)}$. For $\tau=\pi$ this is the squared norm $|\widehat A_\pi|$; representatives from distinct restriction classes have inner product zero by step 2.1. [step 1.1, step 2.1, F5, algebra]

4.1 The coset $Y_a$ is conjugacy invariant because $A$ is abelian. Extend any class function on $Y_a$ by zero off $Y_a$; this is a class function on $H$. It expands in irreducible characters by [F2], so their restrictions span the class functions on $Y_a$. Within one restriction-equivalence class, step 2.1 gives a twist $\pi\otimes\psi_0\simeq\tau$, and [F5] then gives $\chi_\tau(h)=\psi_0(a)\chi_\pi(h)$ for $h\in Y_a$; zero restrictions contribute nothing. Thus one nonzero representative per class spans. Step 3.1 shows that dividing each by $\sqrt{|\widehat A_\pi|}$ normalizes it, while step 2.1 gives orthogonality between distinct chosen classes. The normalized restrictions are therefore an orthonormal basis, and the trivial representation restricts to $1$. [F2, F5, F6, F8, step 2.1, step 3.1, algebra] ∎
