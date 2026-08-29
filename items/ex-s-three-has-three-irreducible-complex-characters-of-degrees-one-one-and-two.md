---
id: ex-s-three-has-three-irreducible-complex-characters-of-degrees-one-one-and-two
kind: example
title: "$S_3$ has three irreducible complex characters of degrees $1$, $1$, and $2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types, cor-the-regular-character-gives-the-sum-of-squares-formula, def-sign-representation-and-restriction-of-a-representation, ex-the-standard-representation-of-s-n-has-character-fixed-points-minus-one, cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 3.1.2"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.5"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Example

The symmetric group $S_3$ has exactly three irreducible complex characters:
the trivial character $1$, the sign character $\operatorname{sgn}$, and the
standard character $\chi_{\mathrm{std}}$; their degrees are $1$, $1$, and $2$.

## Facts & Assumptions

**Given:** The symmetric group $S_3$ acting on $\{1,2,3\}$.

[F1] The conjugacy classes of $S_n$ are indexed by cycle types ([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]]).

[F2] The degrees of all irreducible characters satisfy $\sum_in_i^{2}=|G|$ ([[cor-the-regular-character-gives-the-sum-of-squares-formula]]).

[F3] The sign representation is the one-dimensional representation in which $\sigma$ acts by $\operatorname{sgn}(\sigma)$ ([[def-sign-representation-and-restriction-of-a-representation]]).

[F4] The standard character of $S_n$ is $\chi_{\mathrm{std}}(\sigma)=\operatorname{fix}(\sigma)-1$ ([[ex-the-standard-representation-of-s-n-has-character-fixed-points-minus-one]]).

[F5] A complex character is irreducible exactly when its self-inner-product is $1$ ([[cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one]]).

[A1] The standard inner product of class functions on a group of order $n$ is $\langle f,h\rangle=\frac{1}{n}\sum_gf(g)\overline{h(g)}$.

## Verification

**Proof technique:** direct.

1.1 By [F1] the cycle types of $S_3$ are the identity type, the type of a transposition, and the type of a $3$-cycle, so $S_3$ has three conjugacy classes; a direct count of each type gives class sizes $1$, $3$, and $2$. [F1, given]

1.2 By [F3] the trivial and sign characters are distinct one-dimensional characters, hence irreducible: a one-dimensional space has no proper nonzero subspaces. Their degrees are $1$ and $1$. [F3, given]

2.1 By [F4], the standard character has values $2$, $0$, and $-1$ on the three classes of step 1.1 (fixed points $3$, $1$, and $0$ minus $1$). Using [A1], $\langle\chi_{\mathrm{std}},\chi_{\mathrm{std}}\rangle=\frac16(4+3\cdot 0+2\cdot1)=1$, so by [F5] the standard character is irreducible, of degree $\chi_{\mathrm{std}}(1)=2$. [F4, A1, F5, step 1.1, algebra]

3.1 The three irreducible characters of steps 1.2 and 2.1 have squared degrees $1+1+4=6=|S_3|$. By [F2] the sum over all irreducible characters is also $6$, so no further irreducible character exists. [F2, step 1.2, step 2.1, algebra] ∎
