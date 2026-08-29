---
id: ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root
kind: example
title: "The irreducible complex characters of a finite cyclic group are the $n$ powers of a primitive $n$th root"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars, def-splitting-field-for-a-finite-group, thm-classification-of-cyclic-groups, thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group, thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity, prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group, thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity, thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.3"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 4.1"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Example

Let $G=\langle g\rangle$ be a cyclic group of order $n\ge1$, and let
$\zeta\in\mathbb C$ be a primitive $n$-th root of unity. The irreducible
complex characters of $G$ are exactly

$$\chi_k(g^{m}):=\zeta^{km}\qquad(0\le k\le n-1),$$

and they are pairwise distinct.

## Facts & Assumptions

**Given:** A cyclic group $G=\langle g\rangle$ of order $n\ge1$.

[F1] A cyclic group of order $n$ is isomorphic to $\mathbb Z/n$ ([[thm-classification-of-cyclic-groups]]).

[F2] Choosing a basis identifies degree-one representations with homomorphisms $G\to\mathbb C^{\times}$, and two such representations are equivalent exactly when the homomorphisms agree ([[thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group]]).

[F3] The roots of $x^{n}-1$ in a field form a finite cyclic subgroup $\mu_n$ whose order divides $n$. This group contains a primitive $n$-th root exactly when it has order $n$, and in that case its generators are exactly the primitive $n$-th roots. ([[prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group]])

[F4] Over a field of characteristic not dividing $n$, a splitting field of $t^{n}-1$ has exactly $n$ distinct $n$-th roots of unity, and they form a cyclic group of order exactly $n$ ([[thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity]]).

[F5] Over an algebraically closed field, every endomorphism of an irreducible representation is scalar ([[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

[F6] A field is a splitting field for a finite group exactly when every irreducible representation has scalar endomorphism ring ([[def-splitting-field-for-a-finite-group]]).

[F7] Every irreducible representation of a finite abelian group over a splitting field has degree $1$ ([[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]]).

## Verification

**Proof technique:** direct.

1.1 Since $g^{n}=1$, a homomorphism $\varphi:G\to\mathbb C^{\times}$ sends $g$ to an $n$-th root of unity: $\varphi(g)^{n}=\varphi(g^{n})=\varphi(1)=1$. By [F4] the $n$-th roots of unity in $\mathbb C$ are exactly the $n$ distinct powers $\zeta^{0},\dots,\zeta^{n-1}$ of a primitive root $\zeta$ of [F3]. [F3, F4, given]

1.2 For each $k$, the formula $\chi_k(g^{m})=\zeta^{km}$ is well defined by [F1] and is a homomorphism, since $\chi_k(g^{a}g^{b})=\zeta^{k(a+b)} =\zeta^{ka}\zeta^{kb}$. They are pairwise distinct because $\zeta^{k-k'}\ne1$ for $0<|k-k'|<n$ by primitivity of [F3]. [F1, F3, given, algebra]

2.1 By [F5] and [F6], $\mathbb C$ is a splitting field for the finite abelian group $G$; then [F7] shows every irreducible representation of $G$ has degree $1$. By [F2] it corresponds to a homomorphism $\varphi:G\to\mathbb C^{\times}$, and step 1.1 shows $\varphi(g)=\zeta^{k}$ for some $k$, so $\varphi=\chi_k$. Hence the irreducible characters are exactly the $\chi_k$. [F2, F5, F6, F7, step 1.1, step 1.2] ∎
