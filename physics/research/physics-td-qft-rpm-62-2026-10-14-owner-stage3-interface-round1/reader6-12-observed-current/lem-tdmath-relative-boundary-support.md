---
id: lem-tdmath-relative-boundary-support
kind: lemma
title: Supporting hyperplanes at relative boundary points
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [lem-tdmath-reciprocal-naturals-tend-zero, lem-finite-dimensional-unit-spheres-are-sequentially-compact, thm-extreme-value-metric, lem-rat-embeds-dense, def-convex-subset-of-euclidean-space, lem-tdmath-closed-convex-separation, thm-heine-borel-rn, def-euclidean-inner-product]
dependency_roles:
  lem-tdmath-reciprocal-naturals-tend-zero: mathematical-premise
  lem-finite-dimensional-unit-spheres-are-sequentially-compact: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  lem-rat-embeds-dense: mathematical-premise
  def-convex-subset-of-euclidean-space: mathematical-premise
  lem-tdmath-closed-convex-separation: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §III.C"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.1 and 7.2–7.3, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Statement

Let $C$ be a nonempty convex set in a finite-dimensional affine Euclidean space $H$ of dimension $k\ge1$, let $\operatorname{aff}C=H$, and put $K=\overline{C}^{\,H}$. If $z\in\partial_H K$ (that is, $z\in K$ and every relative neighborhood of $z$ meets $H\setminus K$), then there is a nonzero linear functional $\ell$ on the translation space of $H$ such that $\ell(q-z)\le0$ for all $q\in C$. If $C\subset\mathbb R^d$ has affine dimension at most $d-2$, then every $z\in C$ has at least two distinct ambient supporting hyperplanes containing $\operatorname{aff}C$.

## Facts & Assumptions

**Given:** The stated finite-dimensional affine Euclidean space and convex set.

**Additional context, not used in the proof:** [[lem-tdmath-closed-convex-separation]]: a point outside a nonempty closed convex Euclidean set is strictly separated from that set by a nonzero linear functional.

[F2] [[thm-heine-borel-rn]]: closed bounded subsets of finite-dimensional Euclidean space are compact.

[F3] [[def-euclidean-inner-product]]: Euclidean coordinates identify linear functionals with vectors and give the usual unit sphere.

[F4] [[thm-extreme-value-metric]]: a continuous real function on a nonempty compact metric space attains its minimum.

[F5] [[lem-finite-dimensional-unit-spheres-are-sequentially-compact]]: unit spheres in finite-dimensional normed spaces are sequentially compact without a choice principle.

[F6] [[lem-rat-embeds-dense]]: rational coordinates are dense in real coordinates.

[F7] [[lem-tdmath-reciprocal-naturals-tend-zero]] supplies the positive real sequence $\epsilon_m=1/\iota_{\mathbb N}(\sigma(m))$, $m\in\mathbb N$, decreasing to zero with the canonical-natural field convention.

## Proof

1.1 Fix affine coordinates $H\cong\mathbb R^k$. Closure preserves convexity without choosing approximating sequences: for $x,y\in K$ and any $\epsilon>0$, choose two points of $C$ within $\epsilon$ of them; their convex combination approximates $(1-t)x+ty$ within $\epsilon$, so this point lies in $K$. Enumerate rational $k$-tuples canonically by increasing sums of absolute numerators and positive denominators, breaking the finite ties lexicographically. Density [F6] and the open complement of $K$ show that for each $m\in\mathbb N$ at least one enumerated point lies in $B(z,\epsilon_m)\setminus K$. Let $z_m$ be the first such point. This is a uniquely specified sequence with $z_m\to z$, not a countable selection of arbitrary witnesses. [given, F3, F6, F7, construct]

2.1 The nonempty compact set $K\cap\overline B(z_m,\|z_m-z\|+1)$ contains $z$. By [F2] and [F4], squared distance to $z_m$ attains a minimum there, and every point outside that ball is farther than the candidate $z$. Thus a nearest point $q_m\in K$ exists. It is unique: if two distinct minimizers had squared distance $d_m^2$, their midpoint would have squared distance $d_m^2-\|q_m-q'_m\|^2/4$, contradicting minimality and convexity. Consequently $(q_m)$ is also canonically determined. Since $z_m\notin K$, put $u_m=(z_m-q_m)/\|z_m-q_m\|$. Expanding the distance at $q_m+t(q-q_m)$ and letting $t\downarrow0$ gives $u_m\cdot(q-q_m)\le0$ for every $q\in K$. Also $\|q_m-z\|\le2\|z_m-z\|\to0$. [F2, F3, F4, step 1.1, algebra]

3.1 Every $u_m$ has norm one. The exact choice-free sequential-compactness supplier [F5] gives a subsequence converging to a unit vector $u$. This introduces no additional choice hypothesis. [F3, F5, step 2.1]

4.1 For every $q\in K$, pass to the limit in $u_m\cdot(q-q_m)\le0$ along that subsequence. Continuity of the Euclidean pairing and $q_m\to z$ give $u\cdot(q-z)\le0$. The unit vector $u$ defines a nonzero supporting functional for $K$, hence for $C$, at $z$. [F3, step 2.1, step 3.1, algebra]

5.1 If $C\subset\mathbb R^d$ has affine hull $H$ of dimension at most $d-2$, its orthogonal complement has dimension at least two. Choose two nonparallel nonzero normals $n_1,n_2$ orthogonal to the direction space of $H$. For each $j$, the hyperplane $\{q:n_j\cdot(q-z)=0\}$ contains $H$ and therefore supports $C$ at $z$. The two hyperplanes are distinct because their normals are not parallel. [given, F3, algebra] ∎
