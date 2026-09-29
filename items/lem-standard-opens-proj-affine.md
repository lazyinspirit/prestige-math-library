---
id: lem-standard-opens-proj-affine
kind: lemma
title: "Standard opens are affine"
status: draft
origin: pipeline
deps:
  - thm-proj-structure-sheaf-scheme
  - def-axiom-of-choice
  - def-standard-open-proj
  - def-affine-scheme-spectrum
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Section 27.8 (Tag 01M3)"
      url: https://stacks.math.columbia.edu/tag/01M3
    - title: "Ravi Vakil, The Rising Sea, August 2022 draft, Section 4.5"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice as inherited from the affine scheme construction
([[def-axiom-of-choice]]). Let $S=\bigoplus_{e\ge0}S_e$ be a commutative
nonnegatively graded ring, let $X=\operatorname{Proj}S$ be the scheme of
[[thm-proj-structure-sheaf-scheme]], and let $f\in S_+$ be homogeneous of
positive degree with $D_+(f)=\{\mathfrak p\in\operatorname{Proj}S:f\notin
\mathfrak p\}$ ([[def-standard-open-proj]]). Then the canonical chart map

$$\varphi_f:\ D_+(f)\longrightarrow\operatorname{Spec}S_{(f)},\qquad S_{(f)}=(S[f^{-1}])_0,$$

is an isomorphism of schemes ([[def-affine-scheme-spectrum]]). This includes
the case of an empty chart: if $f$ is nilpotent then $D_+(f)=\varnothing$ and
$S_{(f)}=0$, and $\operatorname{Spec}0=\varnothing$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a commutative nonnegatively graded ring $S$; a homogeneous element $f\in S_+$ of positive degree.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] There is a scheme $\operatorname{Proj}S$ with open subscheme identifications $\varphi_f:D_+(f)\to\operatorname{Spec}S_{(f)}$ for every homogeneous $f\in S_+$ of positive degree, whose charts $D_+(f)$ form an affine open cover, such that $\varphi_f$ carries the structure sheaf of $\operatorname{Proj}S$ to that of $\operatorname{Spec}S_{(f)}$ and such that on overlaps $D_+(fg)$ the identifications agree; if $f$ is nilpotent then $D_+(f)=\varnothing$ and $S_{(f)}=0$, and if $S=0$ then $\operatorname{Proj}S=\varnothing$. ([[thm-proj-structure-sheaf-scheme]])

[F2] $D_+(f)=\{\mathfrak p\in\operatorname{Proj}S:f\notin\mathfrak p\}$ is an open subset; if $f$ is nilpotent then $f$ lies in every prime ideal, so $D_+(f)=\varnothing$. ([[def-standard-open-proj]])

[F3] For the zero ring there are no prime ideals, so $\operatorname{Spec}0=\varnothing$. ([[def-affine-scheme-spectrum]])

## Proof

**Proof technique:** direct: read the chart map off the gluing theorem and dispose of the empty chart.

1.1 By [F1] the scheme $X=\operatorname{Proj}S$ is equipped with the open subscheme identifications $\varphi_f:D_+(f)\to\operatorname{Spec}S_{(f)}$, one for each homogeneous $f$ of positive degree, agreeing on the overlaps $D_+(fg)$; these are the canonical chart maps of the construction, being the maps used in the gluing data. [F1, given]

2.1 The map $\varphi_f$ is an isomorphism of schemes onto the affine scheme $\operatorname{Spec}S_{(f)}$, with inverse the corresponding chart identification; this is precisely the first clause of [F1], and it identifies the structure sheaves, so $D_+(f)$ is an affine open subscheme with coordinate ring $S_{(f)}$. [F1, step 1.1]

2.2 Empty charts. If $f$ is nilpotent then $D_+(f)=\varnothing$ by [F2] and $S_{(f)}=0$ by [F1], while $\operatorname{Spec}0=\varnothing$ by [F3]; the canonical chart map is therefore the unique map $\varnothing\to\varnothing$, which is an isomorphism. If $S=0$ then $\operatorname{Proj}S=\varnothing$ by [F1], every homogeneous $f$ is nilpotent, and the same conclusion holds. [F1, F2, F3, step 1.1]

3.1 The Axiom of Choice [A1] is inherited only through the construction of $\operatorname{Proj}S$ in [F1] (prime existence and affine gluing); no choice is made in the present argument. Steps 2.1 and 2.2 prove the claim for every homogeneous $f$ of positive degree, including the empty chart. [A1, step 2.1, step 2.2]
\qed
