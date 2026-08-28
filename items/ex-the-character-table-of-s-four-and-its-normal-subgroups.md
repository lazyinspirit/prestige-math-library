---
id: ex-the-character-table-of-s-four-and-its-normal-subgroups
kind: example
title: "The character table of $S_4$ and the normal subgroups it reveals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-the-regular-character-gives-the-sum-of-squares-formula, def-sign-representation-and-restriction-of-a-representation, ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six, ex-the-standard-representation-of-s-n-has-character-fixed-points-minus-one, thm-characters-of-direct-sums-tensor-products-and-duals, thm-first-orthogonality-relation-for-irreducible-complex-characters, thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters, thm-second-column-orthogonality-relation-for-irreducible-complex-characters]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 3.3.5"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Example 3.15"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Example

The character table of $S_4$, with columns $1$, $(12)$, $(123)$, $(1234)$,
$(12)(34)$ (sizes $1$, $6$, $8$, $6$, $3$), is

$$\begin{array}{c|ccccc} & 1 & (12) & (123) & (1234) & (12)(34)\\\hline 1 & 1 & 1 & 1 & 1 & 1\\ \varepsilon & 1 & -1 & 1 & -1 & 1\\ \chi_{3} & 3 & 1 & 0 & -1 & -1\\ \varepsilon\chi_{3} & 3 & -1 & 0 & 1 & -1\\ \chi_{2} & 2 & 0 & -1 & 0 & 2 \end{array}$$

The normal subgroups of $S_4$ are exactly $\{1\}$, $V_4$, $A_4$, and $S_4$.

## Facts & Assumptions

**Given:** The group $S_4$ with class representatives $1$, $(12)$, $(123)$,
$(1234)$, $(12)(34)$.

[F1] $S_4$ has five conjugacy classes, of sizes $1$, $6$, $8$, $6$, $3$
([[ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six]]).

[F2] The sign representation is the one-dimensional representation in which
$\sigma$ acts by $\operatorname{sgn}(\sigma)$
([[def-sign-representation-and-restriction-of-a-representation]]).

[F3] The standard character is $\operatorname{fix}(\sigma)-1$
([[ex-the-standard-representation-of-s-n-has-character-fixed-points-minus-one]]).

[F4] Characters multiply on tensor products
([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[F5] The squared degrees of the irreducible characters sum to $|G|$
([[cor-the-regular-character-gives-the-sum-of-squares-formula]]).

[F6] Column orthogonality: distinct columns are orthogonal and a column has
squared norm the centralizer size
([[thm-second-column-orthogonality-relation-for-irreducible-complex-characters]]).

[F7] Row orthogonality: irreducible characters are orthonormal
([[thm-first-orthogonality-relation-for-irreducible-complex-characters]]).

[F8] Normal subgroups are exactly intersections of kernels of irreducible
characters
([[thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters]]).

[A1] The kernel of a character of a representation is $\{g:\chi(g)=\chi(1)\}$.

[A2] The kernel of a direct sum of representations is the intersection of the
kernels of the summands, and a permutation of a set of four letters with
exactly two fixed points is a transposition.

## Verification

**Proof technique:** direct.

1.1 By [F2] the sign row is $(1,-1,1,-1,1)$ on the representatives: values
$+1$ on even permutations and $-1$ on odd ones. By [F3], the permutation
character of $S_4$ has values $4$, $2$, $1$, $0$, $0$ (fixed points), so the
standard character has values $3$, $1$, $0$, $-1$, $-1$. [F2, F3, given]

2.1 By [F4], the sign twist $\varepsilon\chi_{3}$ has values
$(3,-1,0,1,-1)$. [F4, step 1.1, algebra]

3.1 By [F5], the fifth irreducible degree $d$ satisfies
$1+1+9+9+d^{2}=24$, so $d=2$. [F5, step 1.1, step 2.1, algebra]

4.1 By [F6], each column is orthogonal to the first column
$(1,1,3,3,2)$, so reading off the first four entries gives the fifth entry:
at $(12)$, $1-1+3-3+2\overline{\chi_2}=0$, so $\chi_2=0$; at $(123)$,
$1+1+0+0+2\overline{\chi_2}=0$, so $\chi_2=-1$; at $(1234)$,
$1-1-3+3+2\overline{\chi_2}=0$, so $\chi_2=0$; at $(12)(34)$,
$1+1-3-3+2\overline{\chi_2}=0$, so $\chi_2=2$. [F6, step 1.1, step 3.1,
algebra]

5.1 The five rows so obtained are orthonormal by [F7], e.g.
$\langle\chi_2,\chi_2\rangle=\frac1{24}(4+0+8\cdot1+0+3\cdot4)=1$ and
$\langle\chi_3,\chi_3\rangle=\frac1{24}(9+6\cdot1+0+6\cdot1+3\cdot1)=1$;
the degrees sum correctly, so the table is complete. [F7, step 1.1, step
4.1, algebra]

6.1 The kernels, by [A1]: $\ker 1=S_4$; $\ker\varepsilon=A_4$ (the even
permutations); $\ker\chi_3=\{1\}$, because $\chi_3(\sigma)=3$ means
$\operatorname{fix}(\sigma)=4$, i.e. $\sigma=1$; $\ker\varepsilon\chi_3=
\{1\}$; $\ker\chi_2=V_4$, because $\chi_2(\sigma)=2$ exactly at the identity
and the double transpositions. [A1, F2, F3, step 4.1, algebra]

7.1 By [F8], the normal subgroups are exactly the intersections of the five
kernels of step 6.1; by [A2] these intersections are $\{1\}$, $V_4$, $A_4$,
and $S_4$. [F8, A2, step 6.1, algebra] ∎
