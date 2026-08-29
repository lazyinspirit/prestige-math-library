---
id: ex-the-character-table-of-q-eight
kind: example
title: "The character table of $Q_8$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-the-regular-character-gives-the-sum-of-squares-formula, prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two, thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group, thm-derived-subgroup-is-characteristic-and-abelianization-is-universal, thm-first-orthogonality-relation-for-irreducible-complex-characters, thm-second-column-orthogonality-relation-for-irreducible-complex-characters]
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
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Example 3.15"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Example

The character table of $Q_8=\{1,-1,i,-i,j,-j,k,-k\}$, with columns $1$, $-1$,
$i$, $j$, $k$ (sizes $1$, $1$, $2$, $2$, $2$), is

$$\begin{array}{c|ccccc} & 1 & -1 & i & j & k\\\hline \chi_{1} & 1 & 1 & 1 & 1 & 1\\ \chi_{2} & 1 & 1 & 1 & -1 & -1\\ \chi_{3} & 1 & 1 & -1 & 1 & -1\\ \chi_{4} & 1 & 1 & -1 & -1 & 1\\ \psi & 2 & -2 & 0 & 0 & 0 \end{array}$$

Both orthogonality relations hold.

## Facts & Assumptions

**Given:** The quaternion group $Q_8=\{1,-1,i,-i,j,-j,k,-k\}\subseteq\mathbb H^{\times}$.

[F1] $Q_8$ has order $8$ and $-1$ is its only element of order $2$ ([[prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two]]).

[F2] Degree-one representations correspond to homomorphisms $G\to\mathbb C^{\times}$ ([[thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group]]).

[F3] The abelianization $G^{\mathrm{ab}}=G/G'$ is abelian and homomorphisms to abelian groups factor uniquely through it ([[thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]]).

[F4] The squared degrees of the irreducible characters sum to $|G|$ ([[cor-the-regular-character-gives-the-sum-of-squares-formula]]).

[F5] Row orthogonality: irreducible characters are orthonormal ([[thm-first-orthogonality-relation-for-irreducible-complex-characters]]).

[F6] Column orthogonality: distinct columns are orthogonal and a column has squared norm the centralizer size ([[thm-second-column-orthogonality-relation-for-irreducible-complex-characters]]).

[A1] In $Q_8$, $i^{2}=j^{2}=k^{2}=-1$ and $ij=k$; the commutator $[i,j]=iji^{-1}j^{-1}$ equals $-1$; the conjugates of $i$ are $\pm i$, of $j$ are $\pm j$, and of $k$ are $\pm k$, so the classes are $\{1\}$, $\{-1\}$, $\{\pm i\}$, $\{\pm j\}$, $\{\pm k\}$.

[A2] A homomorphism $\varphi:Q_8\to\mathbb C^{\times}$ satisfies $\varphi(i)^{2}=\varphi(j)^{2}=\varphi(i)\varphi(j)\varphi(k)=1$, and every assignment $i\mapsto\pm1$, $j\mapsto\pm1$ extends to one.

## Verification

**Proof technique:** direct.

1.1 By [A1] the conjugacy classes of $Q_8$ are $\{1\}$, $\{-1\}$, $\{\pm i\}$, $\{\pm j\}$, $\{\pm k\}$, of sizes $1$, $1$, $2$, $2$, $2$. [A1, given]

1.2 Since $[i,j]=-1$ by [A1], $-1\in Q_8'$; the quotient $Q_8/\{\pm1\}$ has order $4$ by [F1] and every element of it squares to $1$, so it is abelian, and [F3] gives $Q_8'=\{\pm1\}$ with abelianization of order $4$. [A1, F1, F3, given]

2.1 By [F2] and [F3], the degree-one characters are the homomorphisms factoring through the abelianization of step 1.2; by [A2] they are exactly the four assignments $i\mapsto\varepsilon$, $j\mapsto\delta$ for $\varepsilon,\delta\in\{\pm1\}$, with $k=ij$ sent to $\varepsilon\delta$. Their values are the first four rows of the table. [F2, F3, A2, step 1.2, given]

3.1 By [F4], the remaining irreducible degree $d$ satisfies $1+1+1+1+d^{2}=8$, so $d=2$. [F4, step 2.1, algebra]

4.1 By [F6], the column of $-1$ is orthogonal to the column of $1$: $1+1+1+1+2\overline{\psi(-1)}=0$, so $\psi(-1)=-2$. The column of $i$ is orthogonal to the column of $1$: $1+1-1-1+2\overline{\psi(i)}=0$, so $\psi(i)=0$; likewise $\psi(j)=0$ and $\psi(k)=0$. [F6, step 2.1, step 3.1, algebra]

5.1 The five rows form the displayed table. By [F5], $\langle\psi,\psi\rangle=\frac18(4+4)=1$ and $\psi$ is orthogonal to each degree-one row, so the table is complete; the degrees sum correctly. [F5, step 2.1, step 4.1, algebra]

6.1 By [F6], the column squared norms are $8$, $8$, $4$, $4$, $4$, equal to the centralizer sizes $8$, $8$, $4$, $4$, $4$, and distinct columns are orthogonal. [F6, step 1.1, step 4.1, algebra] ∎
