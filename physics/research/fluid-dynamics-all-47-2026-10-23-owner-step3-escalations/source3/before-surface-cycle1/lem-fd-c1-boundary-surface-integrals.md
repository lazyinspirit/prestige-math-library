---
id: lem-fd-c1-boundary-surface-integrals
kind: lemma
title: Finite continuous surface integrals on compact C1 boundaries
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - thm-heine-borel-rn
  - def-the-standard-smooth-step-function
  - cor-change-of-variables-for-compactly-supported-functions
  - thm-chain-rule-for-total-derivatives
  - def-gram-matrix-and-gram-determinant
  - thm-determinant-multiplicative
  - thm-determinant-of-transpose
  - thm-gram-determinant-detects-linear-independence
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - thm-multidimensional-integral-properties
  - lem-compactly-supported-riemann-integral-is-well-defined
dependency_roles:
  thm-heine-borel-rn: mathematical-premise
  def-the-standard-smooth-step-function: mathematical-premise
  cor-change-of-variables-for-compactly-supported-functions: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-gram-matrix-and-gram-determinant: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  thm-determinant-of-transpose: mathematical-premise
  thm-gram-determinant-detects-linear-independence: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  lem-compactly-supported-riemann-integral-is-well-defined: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John K. Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: §1.9.2 Theorem 1.31 and §§1.10.2–1.10.3, printed pp. 12–16 (PDF pp.
        18–22). Finite partition, compact boundary area density and outward
        normal; local finite Riemann construction proved here.
    - title: Michael E. Taylor, Introduction to Analysis in Several Variables
      url: https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf
      locator: "§3.2, Lemma 3.2.1 and formulas (3.2.7)–(3.2.23), printed pp. 119–123
        (PDF pp. 132–136): coordinate transitions, surface density, change of
        coordinates and finite patch gluing."
verification:
  precheck: pending
---

## Statement

Let $\Omega\subset\mathbb R^3$ be a nonempty bounded open set whose boundary is locally, after a rigid coordinate change, a $C^1$ graph with $\Omega$ on one side. Put $S=\partial\Omega$. Then $S$ is compact and has a finite cover by graph charts $X_j:U_j\subset\mathbb R^2\to S\cap O_j$ that are $C^1$ homeomorphisms onto $S\cap O_j$, have derivative of rank two everywhere, and have $C^1$ coordinate transitions and a finite subordinate nonnegative smooth ambient partition $\chi_j$ with supports compactly contained in $O_j$ and sum one on $S$. For every continuous $f:S\to\mathbb R$, define
$$\int_S f\,dS:=\sum_j\int_{\mathbb R^2} g_j(y)\,dy,\qquad g_j(y)=\begin{cases}\chi_j(X_j(y))f(X_j(y))\sqrt{\det(DX_j(y)^TDX_j(y))},&y\in U_j,\\0,&y\notin U_j.\end{cases}$$
The right-hand integrals are Riemann integrals of continuous compactly supported functions, and the finite sum is independent of the charts and partition. In graph coordinates $X(y)=(y,h(y))$ the area density is $\sqrt{1+|Dh|^2}$. The outward unit normal is $(-Dh,1)/\sqrt{1+|Dh|^2}$ for the subgraph side, transported by the rigid chart, and is continuous and independent of charts. Vector and tensor surface integrals are componentwise; flux means $\int_S F\cdot n\,dS$ for continuous $F$. All these integrals are finite. The empty surface has zero integral.

## Statement references

[Hunter, Notes on Partial Differential Equations, §§1.9.2 and 1.10.2–1.10.3, printed pp. 12–16](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf)

[Taylor, Introduction to Analysis in Several Variables, §3.2, printed pp. 119–123](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf)

## Facts & Assumptions

**Given:** The bounded open set with locally one-sided $C^1$ graph boundary and continuous scalar or vector fields on its boundary.

[F1] A closed bounded Euclidean set is compact. ([[thm-heine-borel-rn]])

[F2] The standard smooth step $\sigma$ is smooth, takes values in $[0,1]$, equals zero on $(-\infty,0]$, and equals one on $[1,\infty)$. ([[def-the-standard-smooth-step-function]])

[F3] Compactly supported Riemann integrands transform under injective $C^1$ maps with invertible derivative on their open domain by the absolute Jacobian formula. ([[cor-change-of-variables-for-compactly-supported-functions]])

[F4] The chain rule, Gram determinant and determinant multiplicativity give the surface-density transformation law. ([[thm-chain-rule-for-total-derivatives]], [[def-gram-matrix-and-gram-determinant]], [[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]], [[thm-gram-determinant-detects-linear-independence]])

[F5] Continuous functions on compact rectangles are Riemann integrable, finite sums integrate linearly, and compact-support integrals do not depend on the containing rectangle. ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]], [[thm-multidimensional-integral-properties]], [[lem-compactly-supported-riemann-integral-is-well-defined]])

## Proof

1.1 The boundary is closed and bounded, hence compact by F1. Consider the family of all available local one-sided graph neighborhoods and all smaller ambient chart neighborhoods whose compact closures lie inside such neighborhoods. This family covers $S$; compactness retains finitely many smaller neighborhoods and their corresponding charts, without selecting a chart separately for every point. The partition is constructed explicitly in the next two steps. Each graph chart is a homeomorphism onto its image, has rank two, and has $C^1$ transitions: on an overlap the inverse of the second graph chart is its rigid-coordinate projection onto the two base coordinates. [given, F1, F2]

1.2 Consider all rational centers $a\in\mathbb Q^3$ and positive rational radii $r<R$ for which $\overline B_R(a)$ lies inside one original chart neighborhood $O_j$. Assign each pair to the least such index $j$. Their inner balls $B_r(a)$ cover $S$, since every point has a small ball inside one chart neighborhood, and rational centers and radii can be chosen with a strict margin around that point. F1 retains finitely many inner balls covering $S$. For each retained pair put $s_l=(r_l+R_l)/2$ and
$$b_l(x)=\sigma\!\left(\frac{s_l^2-|x-a_l|^2}{s_l^2-r_l^2}\right).$$
By F2 each $b_l$ is smooth, between zero and one, equals one on $\overline B_{r_l}(a_l)$ and has support in $\overline B_{s_l}(a_l)\Subset O_{j(l)}$. This is a finite explicit selection from one covering family, with no countable-choice premise. [step 1.1, F1, F2, algebra]

1.3 Put $s=\sum_l b_l$ and $\theta=\sigma(4s-1)$. Then $s\ge1$ on $S$ and $\theta=1$ on the neighborhood $\{s>1/2\}$ of $S$. For $s>0$ define $c_l=\theta b_l/s$, and extend it by zero on $s=0$. Since $\theta=0$ where $s\le1/4$, this extension is smooth. Each $c_l$ is nonnegative with compact support inside $O_{j(l)}$. Put $\chi_j=\sum_{l:j(l)=j}c_l$, using zero for an empty index set. Then each support is a finite union of compact subsets of $O_j$, and $\sum_j\chi_j=\theta=1$ near $S$. [step 1.2, F2, algebra]

1.4 For each $j$, $S\cap\operatorname{supp}\chi_j$ is compact and contained in $S\cap O_j$. Its inverse under $X_j$ is compact inside $U_j$. Thus $g_j$ vanishes outside a compact subset of $U_j$, its extension by zero is continuous on $\mathbb R^2$, and F5 makes its integral finite and independent of the containing rectangle. [step 1.1, step 1.3, F5]

2.1 On an overlap write $X=Y\circ T$. The transition is a $C^1$ diffeomorphism of open subsets of $\mathbb R^2$. F4 gives $DX=(DY\circ T)DT$ and hence $J_X=(J_Y\circ T)|\det DT|$, with $J_X=\sqrt{\det(DX^TDX)}$. The regularity makes both Gram densities positive. F3 transfers each continuously weighted integral whose support is compact inside that overlap between its two coordinate descriptions. [step 1.1, F3, F4]

2.2 Given two chart partitions $\chi_j$ and $\eta_k$, insert $\sum_k\eta_k=1$ in each integral of the first sum. The support on $S$ of each $\chi_j\eta_k$ is compact inside both chart neighborhoods, so step 2.1 transfers this continuous overlap integrand to the second chart. Finite linearity in F5 and $\sum_j\chi_j=1$ recover exactly the second sum, proving chart and partition independence. [step 1.4, step 2.1, F5]

3.1 The graph derivative has columns $(e_i,\partial_i h)$, so its Gram matrix has entries $G_{ij}=\delta_{ij}+\partial_i h\,\partial_j h$ for $i,j\in\{1,2\}$, and $\det G=(1+(\partial_1h)^2)(1+(\partial_2h)^2)-(\partial_1h)^2(\partial_2h)^2=1+|Dh|^2$. The vector $(-Dh,1)$ is perpendicular to both tangent columns and points out of the subgraph. On overlaps both graph descriptions have the same tangent plane; of its two unit normals the exterior side selects the same one. For the upper-side region the outward normal is the negative of the displayed subgraph normal. Rigid coordinate maps transport the chosen exterior-side vector, including orientation-reversing maps, by their orthogonal linear part; the exterior-side criterion still gives agreement on overlaps. The graph formula is continuous. Componentwise finite linearity and the continuous dot product give all vector, tensor and flux assertions. [step 2.2, F4, F5, algebra] ∎
