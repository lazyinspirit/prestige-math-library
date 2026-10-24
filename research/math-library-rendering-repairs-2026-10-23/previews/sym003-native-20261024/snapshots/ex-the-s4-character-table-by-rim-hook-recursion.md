---
id: ex-the-s4-character-table-by-rim-hook-recursion
kind: example
title: "The $S_4$ character table by rim-hook recursion"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [thm-murnaghan-nakayama-character-rule,
       thm-first-orthogonality-relation-for-irreducible-complex-characters,
       def-character-table-of-a-finite-group,
       def-standard-inner-product-on-complex-class-functions,
       thm-hook-length-formula,
       def-hook-arm-leg-and-hook-length,
       lem-character-value-on-a-full-cycle-is-supported-on-hooks,
       cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types,
       thm-centralizer-cardinality-from-cycle-type,
       def-column-antisymmetrizer-polytabloid-and-specht-module,
       def-permutation-support-disjoint-cycles-and-cycle-type]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978 (complete author-hosted scan, 161 pp.)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§21.1–21.2, printed pp. 79–80: the Murnaghan–Nakayama rule and its worked small examples, from which the S_4 entries below are recomputed"
    - title: "William Woods, Representation theory of the symmetric groups (Cambridge Part III essay, 33 pp.)"
      url: "https://billywoods.net/part_iii_essay.pdf"
      locator: "§4.2, printed pp. 19–24: the S_4 character table by an independent fixed-tabloid computation, serving as a cross-check of the displayed array"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (complete author-hosted scan, 486 pp.)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, Example 5, printed p. 117: character values as signed border-strip chain sums, derived from the symmetric-function product formula"
---

## Example

The Murnaghan–Nakayama rule ([[thm-murnaghan-nakayama-character-rule]])
computes the full ordinary character table of $S_4$. With rows
$\lambda=(4),(3,1),(2,2),(2,1,1),(1^4)$ and columns the classes
$(1^4),(2,1,1),(2,2),(3,1),(4)$ (of sizes $1,6,3,8,6$),
$$
\begin{array}{c|rrrrr}\chi^{(4)}&1&1&1&1&1\\\chi^{(3,1)}&3&1&-1&0&-1\\\chi^{(2,2)}&2&0&2&-1&0\\\chi^{(2,1,1)}&3&-1&-1&0&1\\\chi^{(1^4)}&1&-1&1&1&-1\end{array}
$$
(for example $\chi^{(2,2)}$ on the $4$-cycle class is $0$ because $(2,2)$ is
not a hook ([[lem-character-value-on-a-full-cycle-is-supported-on-hooks]]), and
$\chi^{(3,1)}(3,1)=0$, $\chi^{(3,1)}(4)=-1$ by the same rule). Checking the
first orthogonality relation
([[thm-first-orthogonality-relation-for-irreducible-complex-characters]]) row
by row gives, for instance,
$\langle\chi^{(3,1)},\chi^{(2,2)}\rangle=\frac{1}{24}\bigl(1\cdot3\cdot2+6\cdot1\cdot0+3\cdot(-1)\cdot2+8\cdot0\cdot(-1)+6\cdot(-1)\cdot0\bigr)=0$,
and every row has norm $1$.

## Facts & Assumptions

**Given:** The partitions of $4$, the conjugacy classes of $S_4$ indexed by cycle type with sizes $|C_\rho|$ ([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]], [[thm-centralizer-cardinality-from-cycle-type]]), and for every partition of an integer the character $\chi^\lambda$ of the complex Specht module $S^\lambda$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F1] Murnaghan–Nakayama rule: for a cycle $c$ of length $r$ on a specified set of points fixed by $\sigma$ (a specified fixed point for length $1$), $\chi^\lambda(\sigma c)=\sum_{\lambda/\mu}(-1)^{\operatorname{ht}(\lambda/\mu)}\chi^\mu(\sigma)$, summed over the removable border strips of $\lambda$ of size $r$, the empty sum being $0$ ([[thm-murnaghan-nakayama-character-rule]]).

[F2] Hook lengths and dimensions: the hook lengths of $(3,1),(2,2),(2,1,1),(1^4)$ are $4,2,1,1$; $3,2,2,1$; $4,2,1,1$; $4,3,2,1$, and the dimensions are $f^\lambda=4!/\prod h(x)$, namely $1,3,2,3,1$ for $(4),(3,1),(2,2),(2,1,1),(1^4)$ ([[def-hook-arm-leg-and-hook-length]], [[thm-hook-length-formula]]).

[F3] The five conjugacy classes of $S_4$ have cycle types $(1^4),(2,1,1),(2,2),(3,1),(4)$ and sizes $1,6,3,8,6$ ([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]], [[thm-centralizer-cardinality-from-cycle-type]], [[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F4] Standard inner product $\langle\varphi,\psi\rangle=\frac{1}{|G|}\sum_{g\in G}\varphi(g)\overline{\psi(g)}$ ([[def-standard-inner-product-on-complex-class-functions]]), and the first orthogonality relation $\langle\chi^\lambda,\chi^\mu\rangle=\delta_{\lambda\mu}$ for irreducible characters ([[thm-first-orthogonality-relation-for-irreducible-complex-characters]]); the character table of a finite group has rows the irreducible characters and columns the classes ([[def-character-table-of-a-finite-group]]).

[F5] For the empty partition $\chi^\varnothing$ is the trivial character of $S_0$, so $\chi^\varnothing(1)=1$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

## Verification

**Proof technique:** direct.

1.1 Row $(4)$: for each part $r$ of the cycle type the unique removable $r$-strip of the row $(4)$ is horizontal and has height $0$, leaving the row $(4-r)$, so iterating the rule [F1] gives $\chi^{(4)}=1$ on all five classes. Row $(1^4)$ is the sign character: the unique $r$-strip of the column is vertical of height $r-1$, so iterating [F1] gives $\chi^{(1^4)}(\rho)=\prod_i(-1)^{r_i-1}$ for the parts $r_i$ of the cycle type, that is the values $1,-1,1,1,-1$ on $(1^4),(2,1,1),(2,2),(3,1),(4)$. [F1, F5, algebra]

1.2 Row $(3,1)$: by [F2] the dimension is $4!/(4\cdot2\cdot1\cdot1)=3$; on $(2,1,1)$ the only $2$-strip removes the domino $\{(1,2),(1,3)\}$ and leaves $(1,1)$ with height $0$, so the value is $\chi^{(1,1)}(1,1)=1$; on $(2,2)$ the same strip gives $\chi^{(1,1)}(2)=-1$; on $(3,1)$ the hook lengths $4,2,1,1$ contain no $3$, so there is no $3$-strip and the value is $0$; on $(4)$ the whole diagram $(3,1)$ is the unique $4$-strip, of height $1$, so the value is $-\chi^\varnothing=-1$. This gives the row $3,1,-1,0,-1$. [F1, F2, F5, algebra]

1.3 Row $(2,2)$: the two $2$-strips are the bottom row to $(2)$ (height $0$) and the right column to $(1,1)$ (height $1$), so on $(2,1,1)$ the value is $\chi^{(2)}(1,1)-\chi^{(1,1)}(1,1)=1-1=0$, on $(2,2)$ it is $\chi^{(2)}(2)-\chi^{(1,1)}(2)=1-(-1)=2$; on $(3,1)$ the unique $3$-strip (leaving the single node $(1)$) has height $1$ and gives $-\chi^{(1)}(1)=-1$; on $(4)$ the hook lengths $3,2,2,1$ contain no $4$, so the value is $0$; the dimension is $2$ by [F2]. Row $(2,1,1)$: the unique $2$-strip removes the vertical domino $\{(2,1),(3,1)\}$ and leaves $(2)$ with height $1$, so the values on $(2,1,1)$ and $(2,2)$ are $-\chi^{(2)}(1,1)=-1$ and $-\chi^{(2)}(2)=-1$; there is no $3$-strip because the hook lengths are $4,2,1,1$; the whole diagram is the unique $4$-strip, of height $2$, giving $\chi^\varnothing=1$ on $(4)$; the dimension is $3$ by [F2]. This gives the rows $2,0,2,-1,0$ and $3,-1,-1,0,1$. [F1, F2, F5, algebra]

2.1 With the class sizes $1,6,3,8,6$ [F3] and the standard inner product [F4], the five rows have norms $\frac{1}{24}(1+6+3+8+6)=1$ for $(4)$ and $(1^4)$, $\frac{1}{24}(9+6+3+0+6)=1$ for $(3,1)$ and $(2,1,1)$, and $\frac{1}{24}(4+0+12+8+0)=1$ for $(2,2)$; pairwise orthogonality holds as in the displayed computation $\langle\chi^{(3,1)},\chi^{(2,2)}\rangle=\frac{1}{24}(6-6)=0$, and likewise $\langle\chi^{(2,2)},\chi^{(2,1,1)}\rangle=\frac{1}{24}\bigl(1\cdot2\cdot3+6\cdot0\cdot(-1)+3\cdot2\cdot(-1)+8\cdot(-1)\cdot0+6\cdot0\cdot1\bigr)=0$, the remaining pairs checking in the same way. Hence the five rows computed by the recursion are exactly the character table of $S_4$ displayed in the statement, with the rows orthonormal with respect to the class sizes of [F3]. [step 1.1, step 1.2, step 1.3, F3, F4, algebra] ∎

## Remarks

- **The $4$-cycle column is the hook column.** On the class $(4)$ only the hooks $(4),(3,1),(2,1,1),(1^4)$ can be nonzero and their values are $1,-1,1,-1$, while $\chi^{(2,2)}(4)=0$; this is the $S_4$ instance of the full-cycle lemma [[lem-character-value-on-a-full-cycle-is-supported-on-hooks]].

- **Cross-check.** The same array is obtained by the fixed-tabloid algorithm of [[thm-triangular-fixed-tabloid-reconstruction-of-the-character-table]], whose worked $S_4$ instance in the source recorded above produces the identical entries; the two routes use disjoint inputs, the recursion using hooks and the fixed-tabloid route using the Gram equation.
