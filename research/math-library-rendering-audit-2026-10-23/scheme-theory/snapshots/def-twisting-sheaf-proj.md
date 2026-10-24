---
id: def-twisting-sheaf-proj
kind: definition
title: "Twisting sheaf on Proj"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-associated-sheaf-graded-module-proj
  - def-shifted-graded-module
forward_refs: [ex-twisting-sheaf-projective-line-transitions]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Section 27.10 (Tag 01MM)"
      url: https://stacks.math.columbia.edu/tag/01MM
    - title: "Ravi Vakil, The Rising Sea, August 2022 draft, Section 4.5"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  audited: 2026-09-30
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
associated-sheaf construction of [[def-associated-sheaf-graded-module-proj]].
Let $S=\bigoplus_{d\ge0}S_d$ be a commutative nonnegatively graded ring, let
$X=\operatorname{Proj}S$ be the scheme of
[[thm-proj-structure-sheaf-scheme]], and for an integer $n$ let $S(n)$ be the
graded $S$-module with $S(n)_d=S_{n+d}$
([[def-shifted-graded-module]]). The **twisting sheaf** $\mathcal O_X(n)$ is
the associated sheaf of the graded module $S(n)$:
$$\mathcal O_X(n)=\widetilde{S(n)}$$
in the sense of [[def-associated-sheaf-graded-module-proj]]. Thus on a
standard open $D_+(f)$ with $f$ homogeneous of positive degree,
$$\Gamma(D_+(f),\mathcal O_X(n))=S(n)_{(f)}=\{\,a/f^k\in S(n)[f^{-1}]:a\in S(n)\ \text{homogeneous of degree }kd\,\},$$
the degree-zero part of the homogeneous localisation of $S(n)$, with
restriction maps induced by homogeneous localisation.

Because $S(0)=S$ and $\widetilde S=\mathcal O_X$ by construction of the
structure sheaf, one has $\mathcal O_X(0)=\mathcal O_X$. For every pair of
integers $m,n$ the multiplication of the graded ring defines sheaf morphisms
$$\mathcal O_X(m)\otimes_{\mathcal O_X}\mathcal O_X(n)\longrightarrow\mathcal O_X(m+n),$$
induced on $D_+(f)$ by the $S_{(f)}$-bilinear maps
$S(m)_{(f)}\times S(n)_{(f)}\to S(m+n)_{(f)}$, $(a/f^k,b/f^l)\mapsto ab/f^{k+l}$,
which are compatible with the restriction maps; the induced maps
$\mathcal O_X(0)\otimes\mathcal O_X(n)\to\mathcal O_X(n)$ are the canonical
identifications.

**No invertibility is asserted here.** For an arbitrary nonnegatively graded
ring the sheaf $\mathcal O_X(n)$ need not be invertible, and the
multiplication maps above need not be isomorphisms. The precise positive
statement is [[thm-twisting-sheaf-invertible-standard-graded]]: if $S$ is
generated as an $S_0$-algebra by $S_1$, then every $\mathcal O_X(n)$ is
invertible and every such multiplication map is an isomorphism.
The sign convention $S(n)_d=S_{n+d}$ of [[def-shifted-graded-module]] is used
throughout this page.

## Remarks

With this convention, the frames in the later example
[[ex-twisting-sheaf-projective-line-transitions]] transform by
$e_1=t^n e_0$.
