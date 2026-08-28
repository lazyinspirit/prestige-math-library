---
id: cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one
kind: corollary
title: "A complex character is irreducible if and only if its self-inner-product is $1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 3.3.4"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.5"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Statement

Let $G$ be a finite group and let $\chi$ be a complex character of $G$. Then
$\chi$ is irreducible if and only if $\langle\chi,\chi\rangle=1$.

## Facts & Assumptions

**Given:** A finite group $G$ and a complex character $\chi=\chi_V$ of a
finite-dimensional representation $V$, completely reduced as
$V\cong\bigoplus_im_iV_i$.

[F1] The multiplicity of $V_i$ in $V$ is
$m_i=\langle\chi,\chi_i\rangle$
([[cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]]).

[A1] The inner product is conjugate-symmetric and linear in the first
argument, so from $\chi=\sum_im_i\chi_i$ one gets
$\langle\chi,\chi\rangle=\sum_im_i\langle\chi_i,\chi\rangle
=\sum_im_i\overline{\langle\chi,\chi_i\rangle}=\sum_im_i\overline{m_i}
=\sum_im_i^{2}$.

[A2] A representation is irreducible exactly when it has one irreducible
summand with multiplicity $1$ and no others.

## Proof

**Proof technique:** direct.

1.1 Completely reduce $V\cong\bigoplus_im_iV_i$ with $m_i\ge0$ integers. By
[F1] each $m_i=\langle\chi,\chi_i\rangle$, and [A1] gives
$\langle\chi,\chi\rangle=\sum_im_i^{2}$. [F1, A1, given]

2.1 Assume $\chi$ is irreducible. Then by [A2] exactly one multiplicity
equals $1$ and the rest are $0$, so the sum in step 1.1 is $1$; hence
$\langle\chi,\chi\rangle=1$. [A2, step 1.1]

3.1 Conversely, assume $\langle\chi,\chi\rangle=1$. The sum
$\sum_im_i^{2}$ of nonnegative integers in step 1.1 can equal $1$ only when
exactly one $m_i$ equals $1$ and all the others are $0$. By [A2],
$V\cong V_i$ is irreducible, so $\chi$ is irreducible. [A2, step 1.1,
algebra]

4.1 Steps 2.1 and 3.1 prove the two implications, hence the biconditional.
[step 2.1, step 3.1] ∎
