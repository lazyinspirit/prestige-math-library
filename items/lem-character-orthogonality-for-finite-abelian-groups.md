---
id: lem-character-orthogonality-for-finite-abelian-groups
kind: lemma
title: "Character orthogonality for finite abelian groups"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-group
  - thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional
  - def-irreducible-complex-character
  - thm-first-orthogonality-relation-for-irreducible-complex-characters
  - thm-second-column-orthogonality-relation-for-irreducible-complex-characters
  - cor-the-regular-character-gives-the-sum-of-squares-formula
  - def-standard-inner-product-on-complex-class-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VI §4, Lemma 4.7, printed p.197; orthogonality of characters of an arbitrary finite abelian group."

---

## Statement

Let $A$ be a finite abelian group and let $\widehat A=\operatorname{Hom}(A,\mathbb C^\times)$ be its group of complex characters. Then $|\widehat A|=|A|$, and
$$\sum_{\chi\in\widehat A}\chi(g)\overline{\chi(h)}=\begin{cases}|A|,&g=h,\\0,&g\ne h,\end{cases}\qquad \sum_{g\in A}\chi(g)\overline{\psi(g)}=\begin{cases}|A|,&\chi=\psi,\\0,&\chi\ne\psi\end{cases}$$
for all $g,h\in A$ and $\chi,\psi\in\widehat A$.

## Statement references

[[def-group]]

[[def-irreducible-complex-character]]

[[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]]

[[thm-first-orthogonality-relation-for-irreducible-complex-characters]]

[[thm-second-column-orthogonality-relation-for-irreducible-complex-characters]]

[[cor-the-regular-character-gives-the-sum-of-squares-formula]]

## Facts & Assumptions

**Given:** A finite abelian group $A$, its character group $\widehat A$, elements $g,h\in A$, and characters $\chi,\psi\in\widehat A$.

[F1] Every irreducible complex representation of a finite abelian group is one-dimensional, and one-dimensional representations are precisely homomorphisms to $\mathbb C^\times$. [[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]] [[def-irreducible-complex-character]]

[F2] Distinct irreducible complex characters are orthogonal and each has norm one: $\langle\chi,\psi\rangle=\delta_{\chi,\psi}$. [[thm-first-orthogonality-relation-for-irreducible-complex-characters]]

[F3] For every finite group, the sum over all irreducible complex characters is $|C_A(g)|$ when the two elements are conjugate and zero otherwise. [[thm-second-column-orthogonality-relation-for-irreducible-complex-characters]]

[F4] The standard inner product is $\langle\chi,\psi\rangle=|A|^{-1}\sum_{a\in A}\chi(a)\overline{\psi(a)}$. [[def-standard-inner-product-on-complex-class-functions]]

[F5] The degrees $d_i$ of all irreducible complex characters of a finite group satisfy $\sum_i d_i^2=|A|$. [[cor-the-regular-character-gives-the-sum-of-squares-formula]]

[A1] Since $A$ is abelian, each conjugacy class is a singleton and every centralizer is $A$.

## Proof

**Given:** The data above.

1.1 Every homomorphism $A\to\mathbb C^\times$ is a one-dimensional representation and is irreducible; by [F1], every irreducible complex representation is one-dimensional. Thus $\widehat A$ is exactly the set of irreducible complex characters. Each such character has degree one, so [F5] gives $|\widehat A|=|A|$. [F1, F5, given, algebra]

2.1 By [F3] and [A1], the sum over $\widehat A$ is $|A|$ when $g$ and $h$ are conjugate and is zero otherwise. In an abelian group conjugacy means equality, proving the first displayed orthogonality relation. [F3, A1, step 1.1]

3.1 By [F2] and [F4], $|A|^{-1}\sum_{g\in A}\chi(g)\overline{\psi(g)}=\delta_{\chi,\psi}$. Multiplying by $|A|$ proves the second displayed relation. [F2, F4, step 1.1, algebra] ∎
