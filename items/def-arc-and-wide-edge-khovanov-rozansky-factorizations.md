---
id: def-arc-and-wide-edge-khovanov-rozansky-factorizations
kind: definition
title: "Arc and wide-edge Khovanov-Rozansky factorizations"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [def-bigraded-matrix-factorization-with-potential]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), section 1, formulas (2)-(4), printed pp. 2-3; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Khovanov and Rozansky, Matrix factorizations and link homology, arXiv:math/0401268v2, introduction printed pp. 6-12: fixed-n sl(n) analogue with different potentials and gradings, not the parameter-a formulas of KR II"
      url: "https://arxiv.org/pdf/math/0401268"
    - title: "Tina Kanstrup (notes by Corina Keller and Wai-kit Yeung), Knot homologies and matrix factorizations, ICMS summer school lecture notes (2019), Lecture 2"
      url: "https://webhomes.maths.ed.ac.uk/~djordan/notes/KnotHomologyMatrixFac.pdf"
---

## Definition

In the setting of [[def-bigraded-matrix-factorization-with-potential]], and
writing a two-term factorization $(p,q)$ for
$S\xrightarrow{p}S\{n_1,n_2\}\xrightarrow{q}S$ as a *Koszul row* (the notation
fixed for this construction in the sequel to this definition; the shifts
$n_1,n_2$ are the shifts of the middle term):

**(1) Oriented arc.** To an oriented arc $c$ oriented from the endpoint labelled $x_2$ to the endpoint labelled $x_1$ assign the two-term factorization
$$C_c:=\bigl(a,\;x_1-x_2\bigr)=\bigl[S\xrightarrow{a}S\{-1,1\}\xrightarrow{x_1-x_2}S\bigr]$$
over $S=\mathbb Q[a,x_1,x_2]$, with potential $w=a(x_1-x_2)$; the
differentials are $a$ and $x_1-x_2$, the middle term carries the bigrading
shift $\{-1,1\}$, and both maps have bidegree $(1,1)$. It is an object of
$\mathrm{hmf}_w$: the square of the differential is
$(x_1-x_2)\circ a=a(x_1-x_2)=w\cdot\mathrm{id}$.

**(2) Wide edge.** To a wide edge $t$ whose four adjacent edge labels are
$x_1,x_2$ on its outgoing ends and $x_3,x_4$ on its incoming ends assign the tensor
product, over $S=\mathbb Q[a,x_1,x_2,x_3,x_4]$, of the two Koszul rows
$$(a,\;x_1+x_2-x_3-x_4)=\bigl[S\xrightarrow{a}S\{-1,1\}\xrightarrow{x_1+x_2-x_3-x_4}S\bigr]$$
and
$$(0,\;x_1x_2-x_3x_4)=\bigl[S\xrightarrow{0}S\{-1,3\}\xrightarrow{x_1x_2-x_3x_4}S\bigr],$$
with potential $w=a(x_1+x_2-x_3-x_4)$. For a two-fold tensor product of rows
$(a_1,b_1)\otimes(a_2,b_2)$ the total differential satisfies
$d^2=(a_1b_1+a_2b_2)\cdot\mathrm{id}$ with the Koszul sign convention for the
totalization, so here $d^2=a(x_1+x_2-x_3-x_4)+0\cdot(x_1x_2-x_3x_4)=w$, and
the middle terms are $S\{-1,1\}\oplus S\{-1,3\}$. It is an object of
$\mathrm{hmf}_w$.

Both assignments produce objects of $\mathrm{hmf}_w$ with the stated
potentials. Caveats: the potential of a wide edge is linear in the $x_i$; the
quadratic entry $x_1x_2-x_3x_4$ enters only through the row whose first
differential is $0$; and the shifts $\{-1,1\}$ and $\{-1,3\}$ are part of the
definition and must be propagated exactly (Khovanov-Rozansky II, section 1,
formulas (2)-(4)). Khovanov-Rozansky I, introduction printed pp. 6-8, gives the fixed-$n$
analogue with potentials $x_i^{n+1}$ and different row entries and shifts;
it is not the source of these parameter-$a$ formulas.
