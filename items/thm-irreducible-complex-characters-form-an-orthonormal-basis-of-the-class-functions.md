---
id: thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions
kind: theorem
title: "The irreducible complex characters form an orthonormal basis of $\\mathrm{cf}(G)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-class-function-and-the-space-of-complex-class-functions, def-standard-inner-product-on-complex-class-functions, thm-first-orthogonality-relation-for-irreducible-complex-characters, thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 3.3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.5"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Statement

Let $G$ be a finite group. The irreducible complex characters of $G$,
$\chi_1,\dots,\chi_r$, form an orthonormal basis of the complex vector space
$\mathrm{cf}(G)$ of class functions on $G$, with respect to the standard
inner product.

## Facts & Assumptions

**Given:** A finite group $G$ and its irreducible complex characters
$\chi_1,\dots,\chi_r$.

[F1] The space $\mathrm{cf}(G)$ consists of the functions $G\to\mathbb C$
constant on conjugacy classes, with pointwise operations
([[def-class-function-and-the-space-of-complex-class-functions]]).

[F2] The standard inner product on $\mathrm{cf}(G)$ is the Hermitian form
$\langle\varphi,\psi\rangle=\frac{1}{|G|}\sum_g\varphi(g)\overline{\psi(g)}$
([[def-standard-inner-product-on-complex-class-functions]]).

[F3] The irreducible characters are orthonormal:
$\langle\chi_i,\chi_j\rangle=\delta_{ij}$
([[thm-first-orthogonality-relation-for-irreducible-complex-characters]]).

[F4] Over an algebraically closed field of characteristic not dividing
$|G|$, the number of irreducible representations up to equivalence equals the
number of conjugacy classes
([[thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order]]).

[A1] A class function is determined by its values on one representative of
each conjugacy class, and the indicator functions of the distinct conjugacy
classes form a basis of $\mathrm{cf}(G)$; in particular
$\dim_{\mathbb C}\mathrm{cf}(G)$ equals the number of conjugacy classes of
$G$.

## Proof

**Proof technique:** direct.

1.1 By [F3] the family $\chi_1,\dots,\chi_r$ is orthonormal, hence linearly
independent: any relation $\sum_ic_i\chi_i=0$ has inner product with
$\chi_j$ equal to $c_j$, because $\langle\chi_i,\chi_j\rangle=\delta_{ij}$
and the inner product is linear in its first argument by [F2]. [F2, F3,
given]

2.1 The group $G$ is finite, $\mathbb C$ is algebraically closed, and
$\operatorname{char}\mathbb C=0$ does not divide $|G|$, so [F4] applies and
$r$ equals the number of conjugacy classes of $G$. [F4, given]

3.1 By [A1], $\dim_{\mathbb C}\mathrm{cf}(G)$ equals the number of conjugacy
classes, which step 2.1 identified with $r$. Hence the linearly independent
family of $r$ elements from step 1.1 has as many elements as the dimension of
the space. [A1, step 1.1, step 2.1]

4.1 A linearly independent family whose size equals the dimension spans, so
the orthonormal family of step 1.1 is a basis of $\mathrm{cf}(G)$. [F1, step
1.1, step 3.1, algebra] ∎
