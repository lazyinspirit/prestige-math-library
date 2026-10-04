---
id: def-artin-automorphisms-of-the-free-group
kind: definition
title: "Artin automorphisms of the free group"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 3
deps: [def-free-group, thm-reduced-words-form-the-free-group, def-group-isomorphism-and-automorphism, thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians]
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
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, equations (14) and (15), printed pp. 113-114"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 8-10"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Definition

Let $F_n=\langle x_1,\dots,x_n\rangle$ be the free group of
[[def-free-group]], identified with $\pi_1(D^2\setminus Q_n,d)$ through the
standard meridians by
[[thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians]]. For
$1\le i\le n-1$, $\rho(\sigma_i)\in\operatorname{Aut}(F_n)$ is the automorphism
given on the basis by
$$\rho(\sigma_i)(x_i)=x_ix_{i+1}x_i^{-1},\qquad \rho(\sigma_i)(x_{i+1})=x_i, \qquad \rho(\sigma_i)(x_j)=x_j\ (j\notin\{i,i+1\}).$$
Its inverse is
$$\rho(\sigma_i)^{-1}(x_i)=x_{i+1},\qquad \rho(\sigma_i)^{-1}(x_{i+1})=x_{i+1}^{-1}x_ix_{i+1},\qquad \rho(\sigma_i)^{-1}(x_j)=x_j\ (j\notin\{i,i+1\}).$$
Products use ordinary function composition: the leftmost factor is the
outermost map and the rightmost factor acts first. Also
$\rho(\sigma_i^{-1}):=\rho(\sigma_i)^{-1}$.

**The assignments are automorphisms, and the displayed formulas are inverse.**
By the universal property of the free group
([[def-free-group]], [[thm-reduced-words-form-the-free-group]]) the displayed
values on the free basis extend to a unique endomorphism
$\rho(\sigma_i):F_n\to F_n$, and likewise the displayed inverse formulas extend
to an endomorphism $\theta:F_n\to F_n$. Substituting,
$$\theta\bigl(\rho(\sigma_i)(x_i)\bigr)=\theta(x_ix_{i+1}x_i^{-1}) =\theta(x_i)\,\theta(x_{i+1})\,\theta(x_i)^{-1} =x_{i+1}\,\bigl(x_{i+1}^{-1}x_ix_{i+1}\bigr)\,x_{i+1}^{-1}=x_i,$$
$$\theta\bigl(\rho(\sigma_i)(x_{i+1})\bigr)=\theta(x_i)=x_{i+1},$$
and both composites fix every other basis element; so
$\theta\circ\rho(\sigma_i)=\operatorname{id}_{F_n}$ on a basis, hence as
endomorphisms. Symmetrically $\rho(\sigma_i)\circ\theta=
\operatorname{id}_{F_n}$. Therefore $\rho(\sigma_i)$ is a bijection with the
displayed inverse, i.e. an automorphism
([[def-group-isomorphism-and-automorphism]]).

**Convention note.** The displayed formulas are Artin's equations (14) and (15)
with the letter $\sigma_i$ and its inverse interchanged; under the frozen
geometric conventions of this library the *positive* half twist is the
anticlockwise supported half rotation (see
`def-elementary-geometric-half-twist` and
`thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`),
and
`prop-the-geometric-action-on-meridians-is-the-artin-representation` proves
that its action on the standard meridians is exactly the substitution frozen
above. The interchange is a convention, not a change of mathematical content:
$\rho$ and Artin's substitution generate the same subgroup of
$\operatorname{Aut}(F_n)$ and satisfy the same braid relations, and the
companion page shows that the mirror (clockwise) half rotation realizes
Artin's displayed formulas verbatim.

## Remarks

- For $n=1$ there is no index $i$ with $1\le i\le n-1$, so there is no Artin
  automorphism and the statements making use of them are vacuous.
- $\rho(\sigma_i)$ fixes $x_j$ for all $j\notin\{i,i+1\}$: its support is the
  pair of adjacent letters. This is the algebraic shadow of the fact that the
  half twist is supported in the disc $U_i$ around the adjacent punctures.
