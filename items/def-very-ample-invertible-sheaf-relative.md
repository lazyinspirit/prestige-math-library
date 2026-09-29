---
id: def-very-ample-invertible-sheaf-relative
kind: definition
title: "Relative very ampleness in the finite projective-space convention"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-invertible-sheaf
  - def-relative-projective-space-standard-charts
  - def-quasi-compact-and-quasi-separated-morphism
  - def-locally-closed-immersion
  - def-proper-morphism
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Definition 29.38.1 (Tag 01VG) and Section 29.40 (Tag 01VU)"
      url: https://stacks.math.columbia.edu/tag/01VG
    - title: "Ravi Vakil, The Rising Sea, August 2022 draft, Section 17.6"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Definition

Let $S$ be a scheme and let $n\ge0$. Denote by
$$\pi:\mathbb P^n_S\longrightarrow S$$
the relative projective space with its standard charts $U_0,\dots,U_n$ and
transition isomorphisms
$\theta_{ij}:U_i\cap U_j\to U_j\cap U_i$ carrying the coordinates by
$x^{(i)}_\ell\mapsto x^{(j)}_\ell/x^{(j)}_i$ and
$x^{(i)}_j\mapsto1/x^{(j)}_i$
([[def-relative-projective-space-standard-charts]]). Write
$x^{(i)}_j$ for the coordinate $t_j/t_i$ on $U_i$.

*The twisting sheaf on relative projective space.* On each chart $U_i$ let
$\mathcal O_{U_i}e_i$ be a free rank-one $\mathcal O_{U_i}$-module with basis
$e_i$. On the overlap $U_i\cap U_j$, identify
$$(\mathcal O_{U_i}e_i)|_{U_i\cap U_j}\longrightarrow (\mathcal O_{U_j}e_j)|_{U_i\cap U_j},\qquad e_i\longmapsto x^{(j)}_i\,e_j ,$$ that is, $e_j=x^{(i)}_j e_i$ on $U_i\cap U_j$; this is the standard normalization under which the coordinate section $x_j$ restricts to $x^{(i)}_je_i$ on $U_i$ and to $e_j$ on $U_j$. This is an isomorphism of invertible sheaves: $x^{(j)}_i$ is a unit on $U_i\cap U_j$ by construction. The transition data are compatible on triple overlaps, $$x^{(j)}_i\cdot x^{(k)}_j=x^{(k)}_i \quad\text{on }U_i\cap U_j\cap U_k,$$ because $x^{(k)}_i=(t_i/t_k)$ and $x^{(j)}_i x^{(k)}_j=(t_i/t_j)(t_j/t_k)$; equivalently, the identifications obtained from $e_i\mapsto x^{(j)}_i e_j$, $e_j\mapsto x^{(k)}_j e_k$ and $e_i\mapsto x^{(k)}_i e_k$ agree on the triple overlap. Hence the trivial invertible sheaves on the $U_i$ glue to an invertible sheaf on $\mathbb P^n_S$, denoted $$\mathcal O_{\mathbb P^n_S}(1)\qquad\text{or}\qquad\mathcal O(1)$$
when the ambient space is clear, with $e_i$ a frame on $U_i$. For integers
$d$ put $\mathcal O(d)=\mathcal O(1)^{\otimes d}$ for $d\ge0$ and
$\mathcal O(d)=(\mathcal O(-d))^{\vee}$ for $d<0$.

**Definition.** Let $f:X\to S$ be a quasi-compact morphism
([[def-quasi-compact-and-quasi-separated-morphism]]) and let $L$ be an
invertible $\mathcal O_X$-module ([[def-invertible-sheaf]]). Then $L$ is
**H-very ample relative to $S$** if there exist an integer $n\ge0$ and a
quasi-compact $S$-immersion
$$i:X\longrightarrow\mathbb P^n_S$$
of schemes ([[def-locally-closed-immersion]]) such that
$$L\;\cong\;i^*\mathcal O_{\mathbb P^n_S}(1).$$
The value $n=0$ is allowed, with $\mathbb P^0_S\cong S$. If in addition $i$
can be chosen to be a closed immersion, then $L$ is **closed H-very ample
relative to $S$**.

## Remarks

- The comparisons in these remarks assume the Axiom of Choice
  ([[def-axiom-of-choice]]) where they invoke the AC-qualified projective
  space, Proj twist, and properness suppliers. The chart-based definition
  above makes no additional choice.

- **Proper sources force closedness.** Suppose that $X\to S$ is proper
  ([[def-proper-morphism]]). Then every quasi-compact $S$-immersion
  $i:X\to\mathbb P^n_S$ is a closed immersion, so on a proper source the two
  notions coincide. Indeed, by
  [[lem-proper-source-to-separated-target-proper]] the morphism $i$ is proper
  (here $\mathbb P^n_S\to S$ is separated, which holds because
  [[thm-projective-space-proper-over-base]] shows it is proper), so its image
  $i(X)$ is closed in $\mathbb P^n_S$ by
  [[thm-proper-morphism-closed-image]]; an immersion with closed image is a
  closed immersion by [[lem-immersion-with-closed-image]].
- **Quasi-compactness of $X$.** If $S$ is quasi-compact, then a quasi-compact
  $S$-morphism has quasi-compact source. Thus every morphism to which this
  definition applies has quasi-compact source when $S$ is quasi-compact;
  quasi-compactness of $X$ alone does not imply quasi-compactness of $X\to S$.
  Over a non-quasi-compact base the morphism
  $f:X\to S$ can be quasi-compact while $X$ is not quasi-compact, and the
  definition is stated for morphisms to cover that case.
- **Relation to the twist on $\operatorname{Proj}$.** Under the
  identification $\mathbb P^n_A=\operatorname{Proj}A[x_0,\dots,x_n]$ of
  [[thm-projective-space-as-proj]], the sheaf $\mathcal O(1)$ defined here
  agrees with the twist $\widetilde{A[x_0,\dots,x_n](1)}$ of
  [[def-twisting-sheaf-proj]]; the frames $e_i$ correspond to the degree-$1$
  elements $x_i$. To verify the sheaf comparison directly, put
  $B=A[x_0,\dots,x_n]$. On $D_+(x_i)$, multiplication by $x_i$ is
  an isomorphism $B_{(x_i)}\to B(1)_{(x_i)}$: its inverse divides
  a degree-one element of $B[x_i^{-1}]$ by $x_i$.
  On overlaps these frames satisfy $x_i=(x_i/x_j)x_j$, exactly the
  transition $e_i=x^{(j)}_i e_j$ above. The chartwise identifications
  therefore glue to the claimed comparison, carrying each coordinate
  section to the corresponding homogeneous element.
