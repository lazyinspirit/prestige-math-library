---
id: def-complex-projective-space-and-holomorphic-charts
kind: definition
title: Complex projective space and its holomorphic charts
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-complex-differentiability-holomorphic-and-entire
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-quotient-topology
  - def-riemann-surface-and-holomorphic-atlas
  - def-smooth-manifold
  - def-topological-manifold-without-boundary
  - thm-chain-rule-for-complex-derivatives
  - thm-algebra-of-complex-derivatives
aliases: []
landmark: false
verification:
  audited: "2026-10-08"
  precheck: n/a
sources:
  references:
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 12, printed pp. 98–99: projective space as the space of lines in a complex vector space, its complex-manifold structure, and compactness from the Hopf fibration; Ch. 2, printed pp. 2–3: the quotient model for the Riemann sphere"
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 1 §1, Example 1.2(iii), printed pp. 7–8: projective-space quotient topology and standard charts; Ch. 5 §1, printed pp. 47–51: maps defined by linear systems"
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan
      url: http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "§1.5(c), printed pp. 3–4: the Riemann sphere as projective one-space; §17.20, printed pp. 142–143: projective-space quotient, standard charts and holomorphic maps"
dependency_level: 0
---

## Definition

For an integer $n\ge1$, **complex projective space** is the set of complex lines in $\mathbb C^{n+1}$ with the quotient topology
$$\mathbb P^n(\mathbb C):=(\mathbb C^{n+1}\setminus\{0\})/\mathbb C^\times,\qquad [z_0:\cdots:z_n]:=\mathbb C^\times(z_0,\ldots,z_n).$$
The quotient projection is continuous and surjective. Its restriction to the unit sphere $S^{2n+1}\subset\mathbb C^{n+1}$ is still surjective, so $\mathbb P^n(\mathbb C)$ is compact. It is Hausdorff: the map sending a nonzero vector $z$ to the orthogonal projection $zz^*/\lVert z\rVert^2$ is continuous and constant on each complex line, hence descends by the quotient topology to a continuous injection from $\mathbb P^n(\mathbb C)$ into the Hausdorff space of complex matrices. A continuous injection from a compact space to a Hausdorff space is a homeomorphism onto its image.

For open $V\subseteq\mathbb C^r$, a map $H:V\to\mathbb C^s$ is **holomorphic** if at every $a\in V$ there is a complex-linear map $A_a:\mathbb C^r\to\mathbb C^s$ such that $H(a+h)=H(a)+A_a h+R_a(h)$ with $\lVert R_a(h)\rVert/\lVert h\rVert\to0$ as $h\to0$, $h\ne0$. When $r=1$, this is equivalent to each component being holomorphic in the sense of [[def-complex-differentiability-holomorphic-and-entire]], since a finite vector of scalar difference quotients converges exactly when each component does. A complex atlas consists of charts into $\mathbb C^n$ with holomorphic transitions in both directions.

For $j\in\{0,\ldots,n\}$ let $U_j:=\{[z_0:\cdots:z_n]:z_j\ne0\}$. These open sets cover projective space: their inverse images under the quotient projection are the open saturated sets where $z_j\ne0$. The **standard chart** is
$$\varphi_j:U_j\longrightarrow\mathbb C^n,\qquad [z_0:\cdots:z_n]\longmapsto (z_0/z_j,\ldots,\widehat{z_j/z_j},\ldots,z_n/z_j),$$
where the $j$th coordinate is omitted. It is well defined under rescaling. The coordinate-ratio map on the inverse image of $U_j$ is continuous and constant on each quotient fibre, so the quotient topology makes $\varphi_j$ continuous; its inverse inserts $1$ in the $j$th position and is continuous by composition with the quotient projection. Hence it is a homeomorphism. On $U_j\cap U_k$ the transition from the $j$th chart to the $k$th chart sends each coordinate $w_\ell=z_\ell/z_j$ ($\ell\ne j$) to $w_\ell/w_k$ for $\ell\ne k$, with the omitted $j$th coordinate equal to $1/w_k$. To check holomorphy at $a$ with $a_k\ne0$, set $a_j=1$ and $h_j=0$ for the omitted source coordinate. Each target coordinate has the expansion $(a_\ell+h_\ell)/(a_k+h_k)=a_\ell/a_k+h_\ell/a_k-a_\ell h_k/a_k^2+O(\lVert h\rVert^2)$ for $\ell\ne k$. The linear term is complex-linear, and the remainder estimate follows by expanding the reciprocal at the nonzero $a_k$. The inverse transition has the same form, so both are holomorphic. Thus these charts make $\mathbb P^n(\mathbb C)$ a complex manifold of complex dimension $n$ and a topological manifold of real dimension $2n$ in the sense of [[def-topological-manifold-without-boundary]]. The finite chart cover by second-countable copies of $\mathbb C^n$ gives a countable base. Its rational transition functions have smooth real coordinate expressions on their domains, so the atlas also defines the smooth structure in the sense of [[def-smooth-manifold]]. The space is path-connected: distinct lines represented by $u,v$ give the path $t\mapsto[(1-t)u+tv]$, whose vector never vanishes because $u,v$ are linearly independent; equal lines give a constant path. In particular, $\mathbb P^1(\mathbb C)$ is a Riemann surface in the sense of [[def-riemann-surface-and-holomorphic-atlas]].

A map $F:X\to\mathbb P^n(\mathbb C)$ from a Riemann surface is **holomorphic** when it is continuous and every component of each chart expression $\varphi_j\circ F$, written in a local coordinate of $X$, is holomorphic on the open set $F^{-1}(U_j)$. On an overlap, the new components are $f_\ell/f_k$ and $1/f_k$, where the $f_\ell$ are the old components and $f_k\ne0$. The scalar quotient rule gives their holomorphy ([[thm-algebra-of-complex-derivatives]]), so it suffices to check one target chart locally. Changing the source coordinate composes each scalar component with a one-variable holomorphic chart transition, where [[thm-chain-rule-for-complex-derivatives]] applies ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]). A **projective line** is the image in $\mathbb P^n(\mathbb C)$ of a two-dimensional complex subspace of $\mathbb C^{n+1}$. Every invertible linear map of $\mathbb C^{n+1}$ induces a holomorphic projective linear transformation: in source and target standard charts its coordinates are ratios of affine-linear functions with nonzero denominator, and the same reciprocal expansion gives a complex-linear derivative; these transformations act transitively on $\mathbb P^n(\mathbb C)$.
