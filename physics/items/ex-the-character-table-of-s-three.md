---
id: ex-the-character-table-of-s-three
kind: example
title: "The character table of $S_3$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-s-three-has-three-irreducible-complex-characters-of-degrees-one-one-and-two, thm-first-orthogonality-relation-for-irreducible-complex-characters, thm-second-column-orthogonality-relation-for-irreducible-complex-characters]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 3.1.2"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.5"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Example

The character table of $S_3$, with columns indexed by the classes of $1$,
$(12)$, and $(123)$ (sizes $1$, $3$, $2$), is

$$\begin{array}{c|ccc} & 1 & (12) & (123)\\\hline 1 & 1 & 1 & 1\\ \operatorname{sgn} & 1 & -1 & 1\\ \chi_{\mathrm{std}} & 2 & 0 & -1 \end{array}$$

Both orthogonality relations hold for this table.

## Facts & Assumptions

**Given:** The symmetric group $S_3$ with its three irreducible characters $1$, $\operatorname{sgn}$, $\chi_{\mathrm{std}}$.

[F1] $S_3$ has exactly three irreducible characters of degrees $1$, $1$, and $2$, and its classes have sizes $1$, $3$, $2$ ([[ex-s-three-has-three-irreducible-complex-characters-of-degrees-one-one-and-two]]).

[F2] The first orthogonality relation: the rows are orthonormal ([[thm-first-orthogonality-relation-for-irreducible-complex-characters]]).

[F3] The second orthogonality relation: distinct columns are orthogonal and the squared norm of a column is the centralizer size ([[thm-second-column-orthogonality-relation-for-irreducible-complex-characters]]).

[A1] $\operatorname{sgn}(\sigma)=1$ for even $\sigma$ and $-1$ for odd $\sigma$, so on the three class representatives it is $1$, $-1$, $1$.

[A2] The standard character is $\operatorname{fix}(\sigma)-1$, with values $2$, $0$, $-1$ on the three representatives.

## Verification

**Proof technique:** direct.

1.1 By [F1] there are three irreducible characters and three classes; [A1] and [A2] supply the second and third rows, and the trivial character is the constant $1$. Hence the displayed table is the character table. [F1, A1, A2, given]

2.1 Row orthogonality: the rows $1$ and $\operatorname{sgn}$ have inner product $\frac16(1-3+2)=0$, the row $1$ with $\chi_{\mathrm{std}}$ gives $\frac16(2+0-2)=0$, $\operatorname{sgn}$ with $\chi_{\mathrm{std}}$ gives $\frac16(2-0-2)=0$, and each row has self-inner-product $1$; this matches [F2]. [F2, step 1.1, algebra]

3.1 Column orthogonality: the first column has squared norm $1+1+4=6=|C_{S_3}(1)|$; the second has $1+1+0=2=|C_{S_3}((12))|$; the third has $1+1+1=3=|C_{S_3}((123))|$; and each pair of distinct columns has inner product $1-1+0=0$, $1+1-2=0$, $1-1+0=0$, matching [F3]. [F3, step 1.1, algebra] ∎
