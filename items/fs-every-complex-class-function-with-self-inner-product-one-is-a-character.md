---
id: fs-every-complex-class-function-with-self-inner-product-one-is-a-character
kind: false-statement
title: "FALSE: every complex class function with self-inner-product $1$ is a character"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one, ex-the-character-table-of-a-finite-cyclic-group-over-c]
justified_by: []
aliases: []
proof_strategy: construct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

The statement "every complex class function with self-inner-product $1$ is a
character" is false: for a nontrivial finite group $G$ with trivial
character $1$, the class function $-1$ has self-inner-product $1$ but is not
a character.

## Facts & Assumptions

**Given:** A finite cyclic group $G$ of order $n\ge2$, its trivial character
$1$, and the class function $-1$ defined by $(-1)(g)=-1$ for every $g$.

[F1] The cyclic group of order $n\ge2$ has the trivial irreducible character
$1$ with $1(g)=1$ for every $g$
([[ex-the-character-table-of-a-finite-cyclic-group-over-c]]).

[F2] A complex character is irreducible exactly when its self-inner-product
is $1$
([[cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one]]).

[A1] The inner product satisfies $\langle c\varphi,c\psi\rangle=
|c|^{2}\langle\varphi,\psi\rangle$ for a scalar $c$, so
$\langle-1,-1\rangle=\langle1,1\rangle$.

[A2] Every character $\chi$ of a representation satisfies
$\chi(1)=\dim V\ge0$.

## Refutation

**Proof technique:** construct.

1.1 The constant function $-1$ is a class function, because it is constant
on $G$, hence constant on every conjugacy class. [given]

2.1 By [F2], the trivial character satisfies $\langle1,1\rangle=1$; by [A1],
$\langle-1,-1\rangle=\langle1,1\rangle=1$. [F2, A1, given]

3.1 If $-1$ were a character of some representation, then by [A2] its value
at $1$ would be nonnegative, but $(-1)(1)=-1<0$. Hence $-1$ is not a
character. [A2, given]

4.1 Steps 1.1 through 3.1 exhibit a class function with self-inner-product
$1$ that is not a character, so the claimed statement is refuted. [step 1.1,
step 2.1, step 3.1, discharge-construct: counterexample] ∎
