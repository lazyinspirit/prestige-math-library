---
id: ex-the-character-table-of-a-four
kind: example
title: "The character table of $A_4$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-a-four-has-a-normal-klein-four-subgroup-and-four-conjugacy-classes, thm-classification-of-cyclic-groups, thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group, cor-the-regular-character-gives-the-sum-of-squares-formula, thm-first-orthogonality-relation-for-irreducible-complex-characters, thm-second-column-orthogonality-relation-for-irreducible-complex-characters]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.5"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Example

Let $\omega=e^{2\pi i/3}$ and let the classes of $A_4$ be represented by
$1$, $(12)(34)$, $(123)$, and $(132)$ (sizes $1$, $3$, $4$, $4$). The
character table is

$$\begin{array}{c|cccc} & 1 & (12)(34) & (123) & (132)\\\hline 1 & 1 & 1 & 1 & 1\\ \chi & 1 & 1 & \omega & \omega^{2}\\ \chi^{2} & 1 & 1 & \omega^{2} & \omega\\ \psi & 3 & -1 & 0 & 0 \end{array}$$

Both orthogonality relations hold.

## Facts & Assumptions

**Given:** The group $A_4$, its normal subgroup $V_4$, a primitive cube root
of unity $\omega$, and the class representatives $1$, $(12)(34)$, $(123)$,
$(132)$.

[F1] $A_4$ has a normal subgroup $V_4$ of order $4$ with quotient of order
$3$, and its conjugacy classes have sizes $1$, $3$, $4$, $4$
([[ex-a-four-has-a-normal-klein-four-subgroup-and-four-conjugacy-classes]]).

[F2] A group of order $3$ is cyclic
([[thm-classification-of-cyclic-groups]]).

[F3] Degree-one representations are exactly the homomorphisms
$G\to\mathbb C^{\times}$
([[thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group]]).

[F4] The squared degrees of the irreducible characters sum to $|G|$
([[cor-the-regular-character-gives-the-sum-of-squares-formula]]).

[F5] Row orthogonality: irreducible characters are orthonormal
([[thm-first-orthogonality-relation-for-irreducible-complex-characters]]).

[F6] Column orthogonality: distinct columns are orthogonal, and a column
has squared norm the centralizer size
([[thm-second-column-orthogonality-relation-for-irreducible-complex-characters]]).

[A1] A homomorphism $A_4\to\mathbb C^{\times}$ that is trivial on $V_4$
factors through the quotient $A_4/V_4$; conversely, a homomorphism from
$A_4/V_4$ pulls back to one on $A_4$ that is trivial on $V_4$.

## Verification

**Proof technique:** direct.

1.1 By [F1] and [F2] the quotient $A_4/V_4$ has order $3$, hence is cyclic.
Its three homomorphisms to $\mathbb C^{\times}$ send a generator to $1$,
$\omega$, or $\omega^{2}$. By [F3] and [A1] these give exactly three
one-dimensional characters of $A_4$, trivial on $V_4$; their values are the
first three rows, with a $3$-cycle sent to $\omega^{k}$. [F1, F2, F3, A1,
given]

2.1 By [F4], the remaining irreducible degree $d$ satisfies
$1+1+1+d^{2}=12$, so $d=3$. [F4, step 1.1, algebra]

3.1 By [F6], the column of $(12)(34)$ is orthogonal to the column of $1$:
$1+1+1+\psi((12)(34))=0$, so $\psi((12)(34))=-1$. [F6, step 1.1, step 2.1,
algebra]

4.1 By [F6], the column of $(123)$ is orthogonal to the column of
$(12)(34)$: $1\cdot\overline1+1\cdot\overline\omega+1\cdot\overline{\omega^{2}}
+(-1)\cdot\overline{\psi((123))}=0$. Since $1+\overline\omega+\overline{\omega^{2}}
=1+\omega^{2}+\omega=0$, this forces $\overline{\psi((123))}=0$, hence
$\psi((123))=0$; the same argument gives $\psi((132))=0$. [F6, step 1.1, step
3.1, algebra]

5.1 The four rows assembled in steps 1.1 through 4.1 form the displayed
table. Row orthogonality holds by [F5]: the first three rows are orthonormal
($\frac1{12}(4+3\cdot1+4+4)=1$ for the identity, with cross terms
$1+3\cdot1+4\omega+4\omega^{2}=1+3-4=0$), and
$\langle\psi,\psi\rangle=\frac1{12}(9+3\cdot1)=1$, while $\psi$ is
orthogonal to each of the first three rows. [F5, step 1.1, step 4.1, algebra]

6.1 Column orthogonality holds by [F6]: the squared norms are $12$, $4$, $3$,
$3$, matching the centralizer sizes $12$, $4$, $3$, $3$ of the four classes,
and distinct columns are orthogonal. [F6, step 1.1, step 5.1, algebra] ∎
