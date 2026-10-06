---
id: ex-a-positive-crossing-factorization-complex
kind: example
title: "A positive crossing factorization complex"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps: [def-positive-and-negative-khovanov-rozansky-crossing-complexes, def-chi-zero-and-chi-one-wide-edge-morphisms, def-factorization-of-a-marked-moy-graph]
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
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), section 1, formulas (2)-(6) and Figure 6, printed pp. 3-6; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, Geom. Topol. 12 (2008) 1387-1425 (published version of record), formulas (12)-(13) and Figure 6, printed pp. 1393-1394"
      url: "https://msp.org/gt/2008/12-3/gt-v12-n3-p04-p.pdf"
    - title: "Khovanov and Rozansky, Matrix factorizations and link homology, arXiv:math/0401268v2, introduction printed pp. 6-12: fixed-n sl(n) analogue with different potentials and gradings, not the parameter-a formulas of KR II"
      url: "https://arxiv.org/pdf/math/0401268"
---

## Example

Write out the positive crossing complex of
[[def-positive-and-negative-khovanov-rozansky-crossing-complexes]]: with the
two resolutions $\Gamma_0$ (two arcs with labels $x_1,x_4$ and $x_2,x_3$) and
$\Gamma_1$ (one wide edge with the same four labels) and the maps
$\chi_0,\chi_1$ of [[def-chi-zero-and-chi-one-wide-edge-morphisms]], the
positive crossing contributes
$$0\to C(\Gamma_0)\{0,2\}\xrightarrow{\chi_0}C(\Gamma_1)\to0$$
with $C(\Gamma_1)$ in cohomological degree $0$, the differential having
bidegree $(0,0)$ on the shifted terms.

Both resolutions carry the potential $a(x_1+x_2-x_3-x_4)$. In the standard
product bases the four presentation matrices are
$$P_0=\begin{pmatrix}a&x_3-x_2\\ a&x_1-x_4\end{pmatrix},\qquad P_1=\begin{pmatrix}x_1-x_4&x_2-x_3\\ -a&a\end{pmatrix},$$
$$Q_0=\begin{pmatrix}a&x_3x_4-x_1x_2\\ 0&x_1+x_2-x_3-x_4\end{pmatrix},\qquad Q_1=\begin{pmatrix}x_1+x_2-x_3-x_4&x_1x_2-x_3x_4\\ 0&a\end{pmatrix},$$
the term shifts are $C^0(\Gamma_0)=R\oplus R\{-2,2\}$,
$C^1(\Gamma_0)=R\{-1,1\}\oplus R\{-1,1\}$,
$C^0(\Gamma_1)=R\oplus R\{-2,4\}$,
$C^1(\Gamma_1)=R\{-1,1\}\oplus R\{-1,3\}$, and the two components of
$\chi_0$ are
$$U_0^0=\begin{pmatrix}x_4-x_2&0\\ 0&1\end{pmatrix},\qquad U_0^1=\begin{pmatrix}x_4&-x_2\\ -1&1\end{pmatrix}.$$
The negative crossing complex is the analogous two-term complex of $\chi_1$
with the $\{0,-2\}$ shift of
[[def-positive-and-negative-khovanov-rozansky-crossing-complexes]]; written
side by side with the positive one, the shift asymmetry is visible: the
positive complex shifts the source by $\{0,2\}$ and nothing else, while the
negative complex applies the overall shift $\{0,-2\}$ to both terms.

Caveat: the source's arXiv prose misprints the negative crossing in terms of
$\chi_0$; this example uses the corrected $\chi_1$ complex of
[[def-positive-and-negative-khovanov-rozansky-crossing-complexes]]
(Khovanov-Rozansky II, Figure 6 and formula (6); published formula (13)).

## Facts & Assumptions

**Given:** the ring $R=\mathbb Q[a,x_1,x_2,x_3,x_4]$, the two resolutions $\Gamma_0$ (two arcs) and $\Gamma_1$ (one wide edge), their presentation matrices $P_0,P_1,Q_0,Q_1$ with the displayed shifts, and the morphism matrices $U_0^0,U_0^1$ of $\chi_0$.

[F1] $C(\Gamma_0)$ is the tensor product of the arc rows $(a,x_1-x_4)$ and $(a,x_2-x_3)$, $C(\Gamma_1)$ is the tensor product of the rows $(a,x_1+x_2-x_3-x_4)$ and $(0,x_1x_2-x_3x_4)$, and both have potential $w=a(x_1+x_2-x_3-x_4)$ ([[def-factorization-of-a-marked-moy-graph]]).

[F2] $\chi_0$ is a morphism of factorizations of bidegree $(0,2)$; $\chi_1$ is a morphism of bidegree $(0,0)$; the positive crossing complex is the cone of $\chi_0$ with the source shifted by $\{0,2\}$, and the negative crossing complex is the cone of $\chi_1$ with the overall shift $\{0,-2\}$ ([[def-chi-zero-and-chi-one-wide-edge-morphisms]], [[def-positive-and-negative-khovanov-rozansky-crossing-complexes]]).

## Verification

**Proof technique:** direct transcription with the two matrix verifications that make each presentation a factorization of potential $w$.

1.1 *The products are factorizations.* Multiplying out over $R$ gives $P_1P_0=\left(\begin{smallmatrix}a(x_1+x_2-x_3-x_4)&0\\ 0&a(x_1+x_2-x_3-x_4)\end{smallmatrix}\right)=w\cdot I_2$ and $Q_1Q_0=\left(\begin{smallmatrix}w&0\\ 0&w\end{smallmatrix}\right)=w\cdot I_2$, because the off-diagonal entries $(x_1-x_4)(x_3-x_2)+(x_2-x_3)(x_1-x_4)$ and $(x_1+x_2-x_3-x_4)(x_3x_4-x_1x_2)+(x_1x_2-x_3x_4)(x_1+x_2-x_3-x_4)$ vanish; hence both presentations are factorizations with potential $w$, in accordance with [F1]. [F1, algebra]

1.2 *The morphism and its bidegree.* The matrix products $Q_0U_0^0=U_0^1P_0$ and $Q_1U_0^1=U_0^0P_1$ of the definition of $\chi_0$ show that the displayed $U$ matrices commute with the differentials, and the entries $x_4,-x_2$ and the shifts $R\{-1,1\}\to R\{-1,3\}$, $R\{-2,2\}\to R\{-2,4\}$ combine to bidegree $(0,2)$; on the source shifted by $\{0,2\}$ the differential has bidegree $(0,0)$. [F2, algebra]

2.1 *The two complexes side by side.* The positive complex has terms $C(\Gamma_0)\{0,2\}$ in degree $-1$ and $C(\Gamma_1)$ in degree $0$ with differential $\chi_0$, and the negative complex has terms $C(\Gamma_1)\{0,-2\}$ in degree $0$ and $C(\Gamma_0)\{0,-2\}$ in degree $1$ with differential $\chi_1$; in both cases the differential is a morphism of factorizations of bidegree $(0,0)$ on the shifted terms by step 1.2 and [F2], so each displayed two-term complex is a complex of objects of $\mathrm{hmf}_w$. The shift asymmetry is exactly the one recorded in [[def-positive-and-negative-khovanov-rozansky-crossing-complexes]]: $\{0,2\}$ on the positive source versus the overall $\{0,-2\}$ normalization on the negative complex. [F1, F2, step 1.2] ∎
