---
id: lem-tdmath-relative-boundary-support
kind: lemma
title: Supporting hyperplanes at relative boundary points
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-convex-subset-of-euclidean-space, lem-tdmath-closed-convex-separation, thm-heine-borel-rn, def-euclidean-inner-product]
dependency_roles:
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

[F1] [[lem-tdmath-closed-convex-separation]]: a point outside a nonempty closed convex Euclidean set is strictly separated from that set by a nonzero linear functional.

[F2] [[thm-heine-borel-rn]]: closed bounded subsets of finite-dimensional Euclidean space are compact.

[F3] [[def-euclidean-inner-product]]: Euclidean coordinates identify linear functionals with vectors and give the usual unit sphere.

## Proof

1.1 Choose affine coordinates identifying $H$ with $\mathbb R^k$. Convexity of $C$ makes its closure $K$ convex: approximate any two points of $K$ by sequences in $C$ and pass to the limit in each convex combination. Since $z\in\partial_H K$, choose $z_m\notin K$ with $z_m\to z$. By [F1], for each $m$ there are $u_m\ne0$ and $c_m$ with $u_m\cdot q\le c_m<u_m\cdot z_m$ for all $q\in K$. Normalize $u_m$ to unit length; [F3] places these vectors on the compact unit sphere, which is compact by [F2], so a subsequence converges to a unit vector $u$. [F2] and [F3] provide the convergent subsequence. [given, F1, F2, F3, choose]

2.1 For every $q\in K$, the inequalities give $u_m\cdot(q-z_m)<0$. Along the convergent subsequence, continuity of the Euclidean inner product yields $u\cdot(q-z)\le0$. The limit vector has unit length, so its functional is nonzero and supports $K$, hence $C$, at $z$. [step 1.1, F3, algebra]

3.1 If $C\subset\mathbb R^d$ has affine hull $H$ of dimension at most $d-2$, its orthogonal complement has dimension at least two. Choose two nonparallel nonzero normals $n_1,n_2$ orthogonal to the direction space of $H$. For each $j$, the hyperplane $\{q:n_j\cdot(q-z)=0\}$ contains $H$ and therefore supports $C$ at $z$. The two hyperplanes are distinct because their normals are not parallel. [given, F3, algebra] ∎
