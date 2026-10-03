---
id: ex-the-artin-action-of-the-b-three-generators
kind: example
title: "The Artin action of the B_3 generators"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 4
deps: [def-artin-automorphisms-of-the-free-group]
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
    date: 2026-10-03
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 8-10"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, equations (14)-(15), printed pp. 113-114"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
---

## Example

In $B_3$ the two Artin automorphisms of
[[def-artin-automorphisms-of-the-free-group]] act by
$$\rho(\sigma_1): x_1\mapsto x_1x_2x_1^{-1},\quad x_2\mapsto x_1,\quad x_3\mapsto x_3,$$
$$\rho(\sigma_2): x_1\mapsto x_1,\quad x_2\mapsto x_2x_3x_2^{-1},\quad x_3\mapsto x_2 .$$
Tabulating both on a basis of $F_3$ and verifying the relation
$\rho(\sigma_1)\rho(\sigma_2)\rho(\sigma_1)=
\rho(\sigma_2)\rho(\sigma_1)\rho(\sigma_2)$ by direct substitution and free
reduction:

| generator | $\rho(\sigma_1)$ | $\rho(\sigma_2)$ |
|---|---|---|
| $x_1$ | $x_1x_2x_1^{-1}$ | $x_1$ |
| $x_2$ | $x_1$ | $x_2x_3x_2^{-1}$ |
| $x_3$ | $x_3$ | $x_2$ |

## Facts & Assumptions

**Given:** the free group $F_3=\langle x_1,x_2,x_3\rangle$ and the
automorphisms $\rho(\sigma_1),\rho(\sigma_2)$ of
[[def-artin-automorphisms-of-the-free-group]].

[F1] The displayed substitutions are the frozen formulas with $n=3$, and
$\rho(\sigma_j)(x_k)=x_k$ whenever $k\notin\{j,j+1\}$; two endomorphisms
agreeing on a free basis are equal, and equality of elements is decided by
reduced words ([[def-artin-automorphisms-of-the-free-group]]).

## Proof

**Proof technique:** direct.

1.1 *The table.* Substituting the frozen formulas for $n=3$ gives the table displayed above: $\rho(\sigma_1)$ moves only $x_1,x_2$, and $\rho(\sigma_2)$ moves only $x_2,x_3$. [F1]

2.1 *The composite $\rho(\sigma_1)\rho(\sigma_2)\rho(\sigma_1)$.* Composing the table (rightmost letter first) gives $x_1\mapsto x_1x_2x_3x_2^{-1}x_1^{-1},\qquad x_2\mapsto x_1x_2x_1^{-1},\qquad x_3\mapsto x_1 .$ Indeed: applying $\rho(\sigma_1)$ first gives $(x_1,x_2,x_3)\mapsto(x_1x_2x_1^{-1},x_1,x_3)$; applying $\rho(\sigma_2)$ gives $(x_1x_2x_3x_2^{-1}x_1^{-1},\,x_1,\,x_2)$; and applying $\rho(\sigma_1)$ again gives $\bigl(x_1x_2x_3x_2^{-1}x_1^{-1},\,x_1x_2x_1^{-1},\,x_1\bigr)$. [F1, step 1.1]

2.2 *The composite $\rho(\sigma_2)\rho(\sigma_1)\rho(\sigma_2)$.* Composing in the opposite order gives $x_1\mapsto x_1x_2x_3x_2^{-1}x_1^{-1},\qquad x_2\mapsto x_1x_2x_1^{-1},\qquad x_3\mapsto x_1 .$ Indeed: applying $\rho(\sigma_2)$ first gives $(x_1,x_2x_3x_2^{-1},x_2)$; applying $\rho(\sigma_1)$ gives $(x_1x_2x_1^{-1},\,x_1x_3x_1^{-1},\,x_1)$; and applying $\rho(\sigma_2)$ again gives $\bigl(x_1x_2x_3x_2^{-1}x_1^{-1},\,x_1x_2x_1^{-1},\,x_1\bigr)$. [F1, step 1.1]

3.1 *Comparison.* The two composites of steps 2.1 and 2.2 agree on each of $x_1,x_2,x_3$, hence on the whole free basis; by [F1] they are equal as automorphisms, which verifies the braid relation in $B_3$. [F1, step 2.1, step 2.2] ∎

## Remarks

- The exponent and the conjugation direction in the table follow the frozen
  convention of [[def-artin-automorphisms-of-the-free-group]]; with Artin's
  original letter convention the table is read with $\sigma_j$ and
  $\sigma_j^{-1}$ interchanged.
- The same verification is the $n=3$ case of
  `lem-artin-automorphisms-satisfy-the-braid-relations`.
