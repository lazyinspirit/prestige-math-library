---
id: lem-the-khovanov-seidel-curve-complex-is-a-complex-and-is-invariant-under-normal-form-moves
kind: lemma
title: "The curve complex is a complex and is invariant under normal-form moves"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps:
  - def-complex-homotopy-and-contractibility-in-an-additive-category
  - def-khovanov-seidel-complex-of-an-admissible-bigraded-curve
  - lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action
  - lem-normal-form-string-types-and-their-geometric-intersection-contributions
  - def-basic-arcs-admissible-curves-and-normal-form
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Lemma 4.1 and the folded-diagram discussion"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Formula (4.1), Lemma 4.1, Lemma 4.2 and Figures 19-23, printed pp. 33-36"
verification:
  precheck: pass
---

## Statement

Let $\widetilde c,\widetilde c'$ be admissible bigraded curves that are
isotopic and both in normal form with respect to the fixed vertical curves
([[def-basic-arcs-admissible-curves-and-normal-form]]), and let
$L(\widetilde c),L(\widetilde c')$ be the complexes of
[[def-khovanov-seidel-complex-of-an-admissible-bigraded-curve]]. Then
$$L(\widetilde c)\cong L(\widetilde c')\qquad\text{in }C_m .$$
More precisely, $L(\widetilde c)$ is a complex and the relative isotopy between two normal-form representatives identifies their crossings, essential-segment types and local indices. The resulting permutation of identically shifted projective summands is an explicit chain isomorphism, with the inverse crossing correspondence as inverse; its mapping cone has an explicit contracting homotopy. Stretching or folding the drawn presentation of this same indexed complex changes only its presentation. A half twist is a braid action, not an isotopy move asserted to preserve $L$. The shift rule
$L(\chi(r_1,r_2)\widetilde c)\cong L(\widetilde c)[-r_1]\{r_2\}$ is compatible with these identifications.

## Facts & Assumptions

**Given:** Two isotopic admissible bigraded curves in normal form for the fixed dividing curves, with their indexed projective summands and essential-segment differentials.

[L1] The current definition constructs a bounded complex by assigning $P(x)=P_{x_0}[-x_1]\{x_2\}$ to each crossing, and path multiplication to the essential segments. Its square-zero verification excludes a consecutive arrow return by transversality, and its deck shift is $[-r_1]\{r_2\}$ ([[def-khovanov-seidel-complex-of-an-admissible-bigraded-curve]]).

[L2] Two isotopic normal-form admissible curves are carried to each other by an ambient isotopy preserving each dividing curve SETWISE; thus the isotopy transports their crossing and segment incidences ([[def-basic-arcs-admissible-curves-and-normal-form]]). This is the normal-form uniqueness statement of KS, not a half-twist move.

[L3] Bigrading transport through an isotopy is unique. An isotopy loop of an arc does not insert a deck shift; hence isotopic BIGRADED representatives have identical transported local indices, rather than indices known only up to an arbitrary shift ([[lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action]]).

[L4] An invertible chain map is a homotopy equivalence, and a complex whose identity is $dh+hd$ is contractible ([[def-complex-homotopy-and-contractibility-in-an-additive-category]]).


## Proof

**Proof technique:** direct.

1.1 *The complex and shift.* The square-zero verification is [L1], already proved for the actual essential-segment/path rules of the current definition. A deck shift changes each crossing index by $(r_1,r_2)$, so every summand changes by $[-r_1]\{r_2\}$. The source keeps its path entries, while the homological shift changes their sign by $(-1)^{r_1}$; the supplier’s sign map $(-1)^{r_1x_1}$ on the summand indexed by $x$ gives the stated chain isomorphism. [L1]

1.2 *The crossing correspondence.* Use [L2] to transport $\widetilde c$ to $\widetilde c'$, preserving the dividing curves setwise. A crossing with $d_i$ moves along $d_i$ and retains its index $i$, its two local indices by [L3], and the types and orientations of its incident essential segments. Thus its source and target summands are the identical shifted projective. Define $\Phi$ on that summand to be the identity into the summand indexed by the transported crossing; define $\Psi$ by the inverse correspondence. Every differential entry is multiplication by the same path before and after transport, so $\Phi d=d'\Phi$, $\Psi d'=d\Psi$, and $\Psi\Phi=\mathrm{id}$, $\Phi\Psi=\mathrm{id}$. No arbitrary overall deck shift is introduced for isotopic bigraded representatives. [L1, L2, L3]

2.1 *Explicit cone contraction.* In the degree-increasing convention the mapping cone of $\Phi$ is $L(\widetilde c')^n\oplus L(\widetilde c)^{n+1}$ with differential $D(y,x)=(d'y+\Phi x,-dx)$. Define $h(y,x)=(0,\Psi y)$. Then $Dh+hD=(y,-d\Psi y+\Psi d'y+x)=(y,x)$ by the chain-map identity. Hence the cone is contractible, and in particular the two complexes are isomorphic in $C_m$; the displayed maps are stronger than merely homotopy inverses. [L4, step 1.2, algebra]

3.1 *Presentations and conclusion.* Stretching the curve drawing, grouping the indexed summands into columns, and folding arrows into a complex leave precisely the same summands and differential entries, so their comparisons are the corresponding reindexing chain isomorphisms of step 1.2. Inessential end segments carry no pair of crossing modules and are omitted in the construction, not cancelled through a fabricated identity pivot. Half twists have their separate generator action. The isotopy isomorphism and deck-shift rule therefore prove the full claimed invariance and compatibility without additional choice. [step 1.1, step 1.2, step 2.1] ∎
