---
id: thm-markings-do-not-change-the-khovanov-rozansky-complex
kind: theorem
title: "Markings do not change the Khovanov-Rozansky complex"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps: [def-khovanov-rozansky-complex-and-trigraded-braid-homology, lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type, def-factorization-of-a-marked-moy-graph]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), section 2, subsection 3, Lemma 3, formula (10), Figures 10-11, printed pp. 18-20; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, Geom. Topol. 12 (2008) 1387-1425 (published version of record), Proposition 1, printed p. 1395"
      url: "https://msp.org/gt/2008/12-3/gt-v12-n3-p04-p.pdf"
    - title: "Khovanov and Rozansky, Matrix factorizations and link homology, arXiv:math/0401268v2, introduction printed pp. 6-12: fixed-n sl(n) analogue with different potentials and gradings, not the parameter-a formulas of KR II"
      url: "https://arxiv.org/pdf/math/0401268"
---

## Statement

Let $D$ be a marked tangle diagram and let $D'$ be obtained from $D$ by
adding or removing marks, subject to the standing convention of
[[def-khovanov-rozansky-complex-and-trigraded-braid-homology]] (at least one
mark on every internal edge and every circle; any number on boundary edges and
external edges). Then $C(D')$ is chain homotopy equivalent to $C(D)$ in
$K(\mathrm{hmf}_w)$ with the same potential; moreover the equivalences are
compatible with the crossing differentials: for the two local diagrams
$\Gamma^0_1,\Gamma^1_1$ and $\Gamma^0_2,\Gamma^1_2$ of the source's Figure 11
the two-term complexes
$0\to C(\Gamma^1_i)\xrightarrow{\chi_1}C(\Gamma^0_i)\to0$, $i=1,2$, are chain
homotopy equivalent.

Consequently, for closed braid diagrams the trigraded cohomology $H(D)$ is an invariant of the underlying unmarked diagram as a graded isomorphism
class: different marking
choices give isomorphic trigraded vector spaces, with no grading shift.

Caveat: the theorem is a statement about $C(D)$ as an object of
$K(\mathrm{hmf}_w)$; it does not assert literal equality of the complexes.

## Facts & Assumptions

**Given:** a marked tangle diagram $D$ and the diagrams $\Gamma_1,\Gamma_2$ of Figure 10 and $\Gamma_1^0,\Gamma_1^1,\Gamma_2^0,\Gamma_2^1$ of Figure 11, together with their Koszul matrices.

[F1] A mark on an arc or a wide edge contributes a label appearing in the rows of the Koszul matrix of $C(\Gamma)$; adding or removing a mark changes the label pattern locally, and the potential $w_\Gamma$ is unchanged when a label occurring at two edge-ends with opposite signs is removed ([[def-khovanov-rozansky-complex-and-trigraded-braid-homology]], [[def-factorization-of-a-marked-moy-graph]]).

[F2] Elementary row operations are isomorphisms of factorizations, and a row $(0,y-\mu)$ with $y$ internal may be deleted with the substitution $y\mapsto\mu$ applied to all remaining rows, producing a factorization chain homotopy equivalent over the smaller ring ([[lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type]]).

## Proof

**Proof technique:** local Koszul computations for the two mark-removal configurations of Figures 10-11.

1.1 *Removing a mark: the top configuration of Figure 10.* The Koszul matrix of $C(\Gamma_1)$ has rows $(a,x_1+x_5-x_3-x_4)$, $(0,x_1x_5-x_3x_4)$ and $(a,x_2-x_5)$. Apply the row operation $[13]_1$ to the first and third rows: they become $(a,x_1+x_5-x_3-x_4+x_2-x_5)=(a,x_1+x_2-x_3-x_4)$ and $(a-a,x_2-x_5)=(0,x_2-x_5)$, while the quadratic row is unchanged; the operation is an isomorphism of factorizations by [F2]. The bottom row $(0,x_2-x_5)$ has coefficient $-1$ on $x_5$, a unit; $x_5$ may still occur in the quadratic row, to which the ensuing substitution must also be applied; it is internal because $w=a(x_1+x_2-x_3-x_4)$ does not involve $x_5$. By the variable-exclusion clause of [F2] the row may be deleted and $x_5$ replaced by $x_2$ in every remaining row, leaving rows $(a,x_1+x_2-x_3-x_4)$ and $(0,x_1x_2-x_3x_4)$, which is the Koszul matrix of $C(\Gamma_2)$. Hence $C(\Gamma_1)\cong C(\Gamma_2)$ in $\mathrm{hmf}_w$, with the same potential by [F1]; the other local pairs of Figure 10 are the symmetric cases with the roles of the rows exchanged. [F1, F2, algebra]

2.1 *Compatibility with the crossing differential.* The first complex of formula (10), written in Koszul form, has common first and third rows $(a,x_1+x_5-x_3-x_4)$ and $(a,x_2-x_5)$, with second row $(0,(x_5-x_3)(x_4-x_5))$ in the source and $(0,x_5-x_3)$ in the target, with differential $\mathrm{Id}\otimes\psi(x_4-x_5)\otimes\mathrm{Id}$. Applying the row operation $[13]_1$ to both matrices simultaneously gives an isomorphic complex whose matrices have first row $(a,x_1+x_2-x_3-x_4)$, second row unchanged and third row $(0,x_2-x_5)$; the differential is the identity on this third row. Substituting the internal variable $x=x_2-x_5$, both matrices have identical bottom rows $(0,x)$ on which the differential acts by the identity, so the variable-exclusion clause of [F2] deletes that row and sets $x_5=x_2$, reducing the ground ring to $R=\mathbb Q[a,x_1,x_2,x_3,x_4]$ and leaving the complex $(a,x_1+x_2-x_3-x_4)\otimes(0,(x_2-x_3)(x_4-x_2))\xrightarrow{\psi(x_4-x_2)}(a,x_1+x_2-x_3-x_4)\otimes(0,x_2-x_3)$, which is precisely the second complex of formula (10). The two complexes are therefore chain homotopy equivalent. The reverse crossing map $\psi^{\prime}(x_4-x_5)$ is likewise the identity on the first and third exterior factors, so the same row change and substitution give $\psi^{\prime}(x_4-x_2)$. This proves compatibility for both crossing signs. The second pair of Figure 11 is obtained by exchanging the exterior edge labels; that relabelling carries each of these row operations, substitutions and maps to the corresponding formulas, proving the equivalence for $i=2$. [F1, F2, step 1.1, algebra]

3.1 *Conclusion.* Every change of marking decomposes into the local moves of Figure 10, each of which changes $C$ by an isomorphism or a chain homotopy equivalence as in step 1.1, and step 2.1 shows that these local equivalences can be chosen compatibly with the crossing differentials $\chi_1$, so the two-term complexes of Figure 11 are chain homotopy equivalent. Composing the local equivalences along any finite sequence of marking changes gives a chain homotopy equivalence $C(D')\simeq C(D)$ in $K(\mathrm{hmf}_w)$ with the same potential, all three gradings being preserved because every operation is a homogeneous change of basis or a substitution by a linear form of bidegree $(0,2)$; passing to cohomology gives an isomorphism $H(D')\cong H(D)$ with no shift. No Axiom of Choice is used. [F1, F2, step 1.1, step 2.1] ∎
