---
id: ex-the-character-table-of-dih-c-four
kind: example
title: "The character table of $\\operatorname{Dih}(C_4)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-dihedral-groups-as-semidirect-products, cor-the-regular-character-gives-the-sum-of-squares-formula, thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group, thm-derived-subgroup-is-characteristic-and-abelianization-is-universal, thm-first-orthogonality-relation-for-irreducible-complex-characters, thm-second-column-orthogonality-relation-for-irreducible-complex-characters]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shani Meynet and Robert Moscrop, McKay quivers and decomposition, Section 4.1"
      url: "https://link.springer.com/article/10.1007/s11005-023-01685-9"
---

## Example

For $G=\operatorname{Dih}(C_4)=\langle r,s:r^{4}=s^{2}=1,\ srs^{-1}=r^{-1}
\rangle$, the conjugacy classes are represented by $1$, $r^{2}$, $r$, $s$,
$sr$ (sizes $1$, $1$, $2$, $2$, $2$), and the character table is

$$\begin{array}{c|ccccc} & 1 & r^{2} & r & s & sr\\\hline \chi_{1} & 1 & 1 & 1 & 1 & 1\\ \chi_{2} & 1 & 1 & -1 & 1 & -1\\ \chi_{3} & 1 & 1 & 1 & -1 & -1\\ \chi_{4} & 1 & 1 & -1 & -1 & 1\\ \psi & 2 & -2 & 0 & 0 & 0 \end{array}$$

Both orthogonality relations hold.

## Facts & Assumptions

**Given:** The dihedral group
$G=\operatorname{Dih}(C_4)=C_4\rtimes C_2$ with $C_4=\langle r\rangle$ and
$C_2=\langle s\rangle$.

[F1] $G$ has order $8$, presentation $r^{4}=s^{2}=1$, $srs^{-1}=r^{-1}$,
and every element has the unique form $r^{i}$ or $r^{i}s$
([[cor-dihedral-groups-as-semidirect-products]]).

[F2] Degree-one representations correspond to homomorphisms
$G\to\mathbb C^{\times}$
([[thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group]]).

[F3] Homomorphisms to abelian groups factor uniquely through the
abelianization $G^{\mathrm{ab}}=G/G'$
([[thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]]).

[F4] The squared degrees of the irreducible characters sum to $|G|$
([[cor-the-regular-character-gives-the-sum-of-squares-formula]]).

[F5] Row orthogonality: irreducible characters are orthonormal
([[thm-first-orthogonality-relation-for-irreducible-complex-characters]]).

[F6] Column orthogonality: distinct columns are orthogonal and a column has
squared norm the centralizer size
([[thm-second-column-orthogonality-relation-for-irreducible-complex-characters]]).

[A1] From [F1]'s relations: $r^{2}$ is central; $srs^{-1}=r^{-1}$ conjugates
$r$ to $r^{3}$; $rsr^{-1}=sr^{2}$ conjugates $s$ to $sr^{2}$; and
$r(sr)r^{-1}=sr^{3}$ conjugates $sr$ to $sr^{3}$. Hence the classes are
$\{1\}$, $\{r^{2}\}$, $\{r,r^{3}\}$, $\{s,sr^{2}\}$, $\{sr,sr^{3}\}$.

[A2] The commutator $[r,s]=rsr^{-1}s^{-1}$ equals $r^{2}$, the quotient
$G/\langle r^{2}\rangle$ has order $4$ and is abelian, and every assignment
$r\mapsto\varepsilon$, $s\mapsto\delta$ with $\varepsilon,\delta\in\{\pm1\}$
extends to a homomorphism $G\to\mathbb C^{\times}$.

## Verification

**Proof technique:** direct.

1.1 By [A1] the classes are $\{1\}$, $\{r^{2}\}$, $\{r,r^{3}\}$,
$\{s,sr^{2}\}$, $\{sr,sr^{3}\}$, of sizes $1$, $1$, $2$, $2$, $2$. [A1,
given]

2.1 By [A2], $r^{2}\in G'$, and the quotient $G/\langle r^{2}\rangle$ of
order $4$ is abelian; by [F3] the homomorphisms to abelian groups factor
through it, so $G'=\langle r^{2}\rangle$. [A2, F3, given]

3.1 By [F2] and [F3], the degree-one characters are the homomorphisms
factoring through the abelianization of step 2.1, namely the four
assignments of [A2]: $\chi(r)=\varepsilon$, $\chi(s)=\delta$. Their values
are the first four rows of the table (with $\chi(sr)=\varepsilon\delta$ and
$\chi(r^{2})=1$). [F2, F3, A2, step 2.1, given]

4.1 By [F4], the remaining irreducible degree $d$ satisfies
$1+1+1+1+d^{2}=8$, so $d=2$. [F4, step 3.1, algebra]

5.1 By [F6], the column of $r^{2}$ is orthogonal to the column of $1$:
$1+1+1+1+2\overline{\psi(r^{2})}=0$, so $\psi(r^{2})=-2$. The columns of
$r$, $s$, and $sr$ are orthogonal to the column of $1$, giving
$1-1+1-1+2\overline{\psi(r)}=0$, $1+1-1-1+2\overline{\psi(s)}=0$, and
$1-1-1+1+2\overline{\psi(sr)}=0$, so $\psi(r)=\psi(s)=\psi(sr)=0$. [F6,
step 3.1, step 4.1, algebra]

6.1 The five rows form the displayed table. By [F5],
$\langle\psi,\psi\rangle=\frac18(4+4)=1$ and $\psi$ is orthogonal to each
degree-one row, so the table is complete; the degrees sum correctly. [F5,
step 3.1, step 5.1, algebra]

7.1 By [F6], the column squared norms are $8$, $8$, $4$, $4$, $4$, equal to
the centralizer sizes, and distinct columns are orthogonal. [F6, step 1.1,
step 5.1, algebra] ∎
