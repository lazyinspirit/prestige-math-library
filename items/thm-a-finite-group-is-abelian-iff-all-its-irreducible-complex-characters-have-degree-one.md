---
id: thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one
kind: theorem
title: "A finite group is abelian if and only if all its irreducible complex characters have degree $1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars, cor-the-regular-character-gives-the-sum-of-squares-formula, def-splitting-field-for-a-finite-group, thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional, thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Theorem 4.1.5"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $G$ be a finite group. Then $G$ is abelian if and only if every
irreducible complex character of $G$ has degree $1$.

## Facts & Assumptions

**Given:** A finite group $G$ with irreducible characters $\chi_1,\dots,
\chi_r$ of degrees $n_i=\chi_i(1)$.

[F1] Over an algebraically closed field, every intertwiner from an
irreducible representation to itself is a scalar
([[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

[F2] A field $k$ is a splitting field for $G$ when every irreducible
representation $V$ has $\operatorname{End}_G(V)=k$
([[def-splitting-field-for-a-finite-group]]).

[F3] Every irreducible representation of a finite abelian group over a
splitting field has degree $1$
([[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]]).

[F4] The degrees of the irreducible characters satisfy
$\sum_in_i^{2}=|G|$
([[cor-the-regular-character-gives-the-sum-of-squares-formula]]).

[F5] The number of irreducible representations of $G$ up to equivalence
equals the number of conjugacy classes, when the field is algebraically
closed of characteristic not dividing $|G|$
([[thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order]]).

[A1] The degree of an irreducible character is the dimension of any
representation affording it.

[A2] A finite group is abelian exactly when every conjugacy class has one
element.

## Proof

**Proof technique:** direct.

1.1 Assume $G$ is abelian. For every irreducible representation $V$ of $G$,
[F1] gives $\operatorname{End}_G(V)=\mathbb C$; by [F2], $\mathbb C$ is a
splitting field for $G$. [F1, F2, given]

2.1 By [F3] applied over this splitting field, every irreducible
representation of the abelian group $G$ has degree $1$; by [A1] every
irreducible character has degree $1$. This proves the forward implication.
[F3, A1, step 1.1, given]

3.1 Conversely, assume every irreducible character has degree $1$, so
$n_i=1$ for all $i$. By [F4], $|G|=\sum_in_i^{2}=r$. [F4, given]

4.1 Since $\mathbb C$ is algebraically closed and $\operatorname{char}
\mathbb C=0$ does not divide $|G|$, [F5] applies: $r$ equals the number of
conjugacy classes of $G$. [F5, given]

5.1 Steps 3.1 and 4.1 show $|G|$ equals the number of conjugacy classes, so
the $|G|$ conjugacy classes each have exactly one element; by [A2], $G$ is
abelian. This proves the reverse implication. [A2, step 3.1, step 4.1]

6.1 Steps 2.1 and 5.1 prove the two implications, hence the equivalence.
[step 2.1, step 5.1] ∎
