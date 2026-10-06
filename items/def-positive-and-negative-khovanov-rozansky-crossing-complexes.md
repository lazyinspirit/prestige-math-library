---
id: def-positive-and-negative-khovanov-rozansky-crossing-complexes
kind: definition
title: "The positive and negative Khovanov-Rozansky crossing complexes"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps: [def-chi-zero-and-chi-one-wide-edge-morphisms]
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
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), section 1, printed pp. 5-6; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, Geom. Topol. 12 (2008) 1387-1425 (published version of record), formulas (12)-(13) and Figure 6, printed pp. 1393-1394"
      url: "https://msp.org/gt/2008/12-3/gt-v12-n3-p04-p.pdf"
    - title: "Khovanov and Rozansky, Matrix factorizations and link homology, arXiv:math/0401268v2, introduction printed pp. 6-12: fixed-n sl(n) analogue with different potentials and gradings, not the parameter-a formulas of KR II"
      url: "https://arxiv.org/pdf/math/0401268"
---

## Definition

With $\chi_0\colon C(\Gamma_0)\to C(\Gamma_1)$ and
$\chi_1\colon C(\Gamma_1)\to C(\Gamma_0)$ as in
[[def-chi-zero-and-chi-one-wide-edge-morphisms]], assign to a crossing $p$ of a
tangle diagram the following two-term complex of matrix factorizations, using
the integer grading of arXiv:math/0505056v2, Figure 6.

**Positive crossing.**
$$C_p=\bigl[0\to C(\Gamma_0)\{0,2\}\xrightarrow{\chi_0}C(\Gamma_1)\to0\bigr],$$
with $C(\Gamma_1)$ in cohomological degree $0$ (so $C(\Gamma_0)\{0,2\}$ sits in
degree $-1$); the shift $\{0,2\}$ makes the differential bidegree-preserving.

**Negative crossing.**
$$C_p=\bigl[0\to C(\Gamma_1)\{0,-2\}\xrightarrow{\chi_1}C(\Gamma_0)\{0,-2\}\to0\bigr],$$
with $C(\Gamma_1)\{0,-2\}$ in cohomological degree $0$ and
$C(\Gamma_0)\{0,-2\}$ in degree $1$; the overall shift $\{0,-2\}$ is the
normalization required by the Reidemeister IIa move.

In both cases the differential is $\chi_0$ or $\chi_1$ and has bidegree
$(0,0)$ as a map of the shifted terms.

**Recorded source conflict and regrading.** The arXiv prose before Figure 6
incorrectly displays the negative crossing with $\chi_0$ in the opposite
direction. Its Figure 6, the bidegrees of the matrices (5)-(6), and the
negative-crossing Euler relation in section 7 agree with the $\chi_1$-cone
above. The published version of record corrects the direction but also
changes the grading: writing $C_{p,\mathrm{v2}}^+$ and
$C_{p,\mathrm{v2}}^-$ for the two complexes above, formulas (12)-(13) on
printed p. 1393 give
$$C_{p,\mathrm{pub}}^+=C_{p,\mathrm{v2}}^+\{-\tfrac12,-\tfrac12\}[-\tfrac12],\qquad C_{p,\mathrm{pub}}^-=C_{p,\mathrm{v2}}^-\{\tfrac12,\tfrac12\}[\tfrac12].$$
Here $C[n]^j=C^{j+n}$; the displayed identifications specify term degrees
and maps, with the usual compatible shift signs. Both published cones have
outer degrees $-\tfrac12,\tfrac12$. Their respective term shifts are
$\{-\tfrac12,\tfrac32\},\{-\tfrac12,-\tfrac12\}$ for the positive cone and
$\{\tfrac12,-\tfrac32\}$ on both terms of the negative cone.

Caveat: no absolute normalization is claimed; the $\{0,-2\}$ shift is fixed
only by the source's IIa normalization.

## Facts & Assumptions

**Given:** the four diagrams $\Gamma_0,\Gamma_1$ of a positive and a negative crossing, the morphisms $\chi_0,\chi_1$ with their matrix presentations, bidegrees and shifts, and the two displayed two-term complexes.

[F1] $\chi_0\colon C(\Gamma_0)\to C(\Gamma_1)$ is a morphism of factorizations of bidegree $(0,2)$ and $\chi_1\colon C(\Gamma_1)\to C(\Gamma_0)$ is a morphism of bidegree $(0,0)$, all with respect to the displayed term shifts $C^0(\Gamma_0)=R\oplus R\{-2,2\}$, $C^1(\Gamma_0)=R\{-1,1\}\oplus R\{-1,1\}$, $C^0(\Gamma_1)=R\oplus R\{-2,4\}$, $C^1(\Gamma_1)=R\{-1,1\}\oplus R\{-1,3\}$ ([[def-chi-zero-and-chi-one-wide-edge-morphisms]]).

## Proof

**Proof technique:** direct verification of the complex and bidegree axioms, followed by the Euler-characteristic comparison that settles the recorded source conflict.

1.1 *The positive complex is a complex of factorizations.* In a two-term complex the composite of its two differentials is zero on one side because there is nothing to compose on the other, so the complex condition in $\mathrm{hmf}_w$ is automatic; the term $C(\Gamma_0)\{0,2\}$ lies in cohomological degree $-1$ and $C(\Gamma_1)$ in degree $0$, and both terms are objects of $\mathrm{hmf}_w$ with potential $w=a(x_1+x_2-x_3-x_4)$ because the source and target of $\chi_0$ have that potential. The differential $\chi_0$ has bidegree $(0,2)$ by [F1], and the shift $\{0,2\}$ on its source subtracts $(0,2)$ from the bidegree of the map of shifted terms, so the differential of $C_p$ has bidegree $(0,0)$ as required. [F1, algebra]

1.2 *The negative complex is a complex of factorizations.* Likewise the two-term complex $0\to C(\Gamma_1)\{0,-2\}\xrightarrow{\chi_1}C(\Gamma_0)\{0,-2\}\to0$ has zero composite on the one composable side, its terms are objects of $\mathrm{hmf}_w$, and $\chi_1$ has bidegree $(0,0)$ by [F1]; the overall shift $\{0,-2\}$ is applied to both terms, so it shifts the grading of both terms alike and leaves the differential bidegree-preserving. With $C(\Gamma_1)\{0,-2\}$ in degree $0$ and $C(\Gamma_0)\{0,-2\}$ in degree $1$, the two terms are exactly the cone of $\chi_1$. [F1, algebra]

2.1 *The source conflict and the grading comparison.* In the integer grading, the negative cone has Euler characteristic $q^{-2}(\langle De_i\rangle-\langle D\rangle)$, as in arXiv section 7, whereas reversing its two terms changes the sign; moreover the printed $\chi_0$ with equal shifts would still have bidegree $(0,2)$ by [F1]. Thus that prose display is incompatible with both the bidegree condition and Figure 6. For the published positive cone, shifting the outer degrees $-1,0$ by $[-\tfrac12]$ gives $-\tfrac12,\tfrac12$, and adding $(-\tfrac12,-\tfrac12)$ to the internal shifts gives $(-\tfrac12,\tfrac32)$ and $(-\tfrac12,-\tfrac12)$, exactly formula (12). For the negative cone, $[\tfrac12]$ moves degrees $0,1$ to $-\tfrac12,\tfrac12$, and adding $(\tfrac12,\tfrac12)$ to both internal shifts $(0,-2)$ gives $(\tfrac12,-\tfrac32)$, exactly formula (13). The maps remain $\chi_0,\chi_1$, up to compatible shift signs; agreement with the published cones therefore requires the recorded regrading. [F1, step 1.1, step 1.2, algebra] ∎
