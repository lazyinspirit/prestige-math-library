---
id: lem-sphere-finite-graph-charts-and-surface-density
kind: lemma
title: Sphere graph charts, surface density, and a finite partition
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- def-polar-surface-measure-on-the-unit-sphere
- thm-polar-coordinates-formula-for-lebesgue-measure
- lem-euclidean-chart-measure-agrees-with-polar-surface-measure
- def-surface-integral-on-a-compact-c-one-hypersurface
- lem-surface-integral-is-independent-of-c-one-boundary-charts
- def-smooth-partition-of-unity-subordinate-to-an-open-cover
- cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover
- def-embedded-submanifold-and-slice-chart
- def-smooth-manifold
- thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
- thm-algebra-of-derivatives
- thm-chain-rule
- def-ck-and-multi-index-notation-in-several-variables
- def-jacobian-matrix-and-gradient
- def-countable-choice
- cor-determinant-is-alternating-multilinear-in-the-rows
- cor-determinant-vanishes-with-a-zero-or-repeated-column
- thm-determinant-of-transpose
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical completed Step7 repair full proof read (local repair; not an independent audit of repair); item lem-sphere-finite-graph-charts-and-surface-density; evidence research/frontier-38-owner-30-reader-6.md, research/frontier-38-owner-30-reader-findings-6.json, research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u6.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Terence Tao, Lecture Notes 8 for Math 247B
    url: https://www.math.ucla.edu/~tao/247b.1.07w/notes8.pdf
    locator: '§4, printed pp.12–13: sphere charts, partition and graph density. The hemisphere Hessian determinant and global cover are computed locally.'
  - title: John K. Hunter, Notes on Partial Differential Equations
    url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
    locator: '§1.10.2, printed pp.15–16: surface measure and partition patching.'
---

## Statement

Assume Countable Choice and let $n\ge2$. For each $i\in\{1,\dots,n\}$ and each sign $\varepsilon\in\{\pm1\}$ the map $X_i^\varepsilon(y)=(y_1,\dots,y_{i-1},\varepsilon\sqrt{1-|y|^2},y_i,\dots,y_{n-1})$, defined on the open unit ball $B\subseteq\mathbb R^{n-1}$, is a $C^\infty$ graph chart onto the hemisphere $\{\varepsilon x_i>0\}$, and the $2n$ hemispheres cover $S^{n-1}$. On such a chart the polar surface measure $\sigma$ has Lebesgue density $\sqrt{1+|\nabla h|^2}=(1-|y|^2)^{-1/2}$, and the graphing function $h=\varepsilon\sqrt{1-|y|^2}$ satisfies $\det D^2h=(-\varepsilon)^{n-1}(1-|y|^2)^{-(n+1)/2}\neq0$ on all of $B$. There exist finitely many nonnegative $C^\infty$ functions $\chi_1,\dots,\chi_m$ on $S^{n-1}$ with $\sum_j\chi_j=1$, each compactly supported in the image of one of these charts.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, the open unit ball $B\subseteq\mathbb R^{n-1}$, and for each $i,\varepsilon$ the map $X_i^\varepsilon$ and graphing function $h_i^\varepsilon=\varepsilon\sqrt{1-|y|^2}$.

[F1] The polar surface set function $\sigma$ on $S^{n-1}$ is the published Borel surface measure, and the chart surface measure on $S^{n-1}$ equals $\sigma$; the chart measure of a compact hypersurface is computed by chart densities and is independent of the charts. ([[def-polar-surface-measure-on-the-unit-sphere]], [[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-surface-integral-is-independent-of-c-one-boundary-charts]])

[F2] In graph coordinates $X(y)=(y,h(y))$ the chart density is $\sqrt{1+|Dh(y)|^2}$; more precisely the Gram determinant of the tangent columns is $\det DX^{T}DX=1+|Dh(y)|^2$. ([[lem-surface-integral-is-independent-of-c-one-boundary-charts]])

[F3] The one-variable sum, product and quotient derivative rules and the one-variable chain rule hold on open intervals. Applying them on coordinate lines computes partial derivatives; smoothness means continuity of all ordered iterated partials. The gradient and Jacobian conventions are the published ones. ([[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[def-ck-and-multi-index-notation-in-several-variables]], [[def-jacobian-matrix-and-gradient]])

[F4] Compactness: a subset of $\mathbb R^n$ is compact if and only if it is closed and bounded; $S^{n-1}$ is closed and bounded, hence compact. ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]])

[F5] Every countable cover of a smooth manifold by coordinate balls admits a smooth partition of unity subordinate to that cover; subordinate means locally finite supports inside the corresponding cover members summing to one. ([[cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover]], [[def-smooth-partition-of-unity-subordinate-to-an-open-cover]])

[F6] Embedded submanifolds and smooth manifolds: a subset that is locally the graph of a smooth function is an embedded submanifold, and compatible charts with smooth transitions define the smooth structure. ([[def-embedded-submanifold-and-slice-chart]], [[def-smooth-manifold]])

[F7] Determinant expansion: the determinant is multilinear and alternating in the columns and in the rows, a matrix with two proportional columns has determinant zero, and transposition preserves the determinant. ([[cor-determinant-is-alternating-multilinear-in-the-rows]], [[cor-determinant-vanishes-with-a-zero-or-repeated-column]], [[thm-determinant-of-transpose]])



## Proof

**Proof technique:** direct; identify each hemisphere with a graph, compute the density and the Hessian determinant, then subordinate a finite smooth partition to the hemisphere cover of the compact sphere.

1.1 Calculus for the graph expressions. For $t,s>0$, $|\sqrt t-\sqrt s|=|t-s|/(\sqrt t+\sqrt s)\le |t-s|/\sqrt s$, proving continuity at $s$. Rationalizing the difference quotient gives $(\sqrt{\cdot})'(s)=1/(2\sqrt s)$. By the product and quotient rules in [F3], induction shows that every derivative of $\sqrt t$ is a constant times an integer power of $\sqrt t$, hence exists and is continuous for $t>0$. Put $q(y)=1-\sum_jy_j^2$. Applying the chain rule on each coordinate line gives $\partial_j\sqrt{q(y)}=-y_j/\sqrt{q(y)}$. Repeated coordinate product and quotient rules show that every ordered partial of $\sqrt q$ and of its reciprocal is a finite sum of polynomial numerators divided by positive integer powers of $\sqrt q$. All these expressions are continuous on $B$, where $q>0$; thus the graph functions and density are smooth in the sense of [F3]. [F3, given, algebra]

1.2 A rank-one determinant. For every $t\ge0$ and $v\in\mathbb R^{m}$ with $m\ge1$, $\det(I+t\,vv^{T})=1+t|v|^2$. Indeed the $j$-th column of $I+t\,vv^{T}$ is $e_j+t v_jv$, so multilinearity in the columns [F7] expands the determinant over subsets $S$ of the column indices: the term for $S$ is $\bigl(\prod_{j\in S}t v_j\bigr)\det(c^{(S)})$, where $c^{(S)}$ has column $v$ in the slots $S$ and $e_j$ elsewhere. If $|S|\ge2$ two columns are equal to $v$, so the determinant vanishes [F7]; the term $S=\varnothing$ is $\det I=1$; and for $S=\{j\}$ the matrix has determinant $v_j$ (expanding along the standard basis columns), giving $t v_j^2$. Summing gives $1+t\sum_jv_j^2=1+t|v|^2$. [F7, algebra]

1.3 The density. Here $h(y)=\varepsilon\sqrt{1-|y|^2}$, so by [F3] $$\nabla h(y)=\varepsilon\cdot\tfrac{-y}{\sqrt{1-|y|^2}}=-\varepsilon\,(1-|y|^2)^{-1/2}y,\qquad |\nabla h(y)|^2=\frac{|y|^2}{1-|y|^2},$$ hence $\sqrt{1+|\nabla h(y)|^2}=\bigl(1-|y|^2\bigr)^{-1/2}$ on $B$. By [F2] this is the chart density of the graph, and by [F1] the chart measure is the polar surface measure $\sigma$; the density is finite and strictly positive on $B$ because $1-|y|^2>0$ there. [F1, F2, F3, algebra]

2.1 The charts and the cover. Fix $i$ and $\varepsilon$ and put $\pi_i(x)=(x_1,\dots,\widehat{x_i},\dots,x_n)$ for the coordinate projection. On the hemisphere $H_i^\varepsilon=\{x\in S^{n-1}:\varepsilon x_i>0\}$ the map $\pi_i$ is a left inverse of $X_i^\varepsilon$: $\pi_i(X_i^\varepsilon(y))=y$; conversely $X_i^\varepsilon(\pi_i(x))=x$ for $x\in H_i^\varepsilon$, because the removed coordinate is recovered by $x_i=\varepsilon\sqrt{1-|\pi_i(x)|^2}$, which is exactly the defining equation of the sphere with the sign $\varepsilon$. The coordinates of $X_i^\varepsilon$ are smooth by step 1.1, and its inverse is coordinate projection, since $1-|y|^2>0$ on $B$ and the coordinates of a unit vector satisfy $|x_i|\le1$; hence $X_i^\varepsilon$ is a $C^\infty$ chart of $S^{n-1}$ onto $H_i^\varepsilon$. Every $x\in S^{n-1}$ satisfies $\sum_kx_k^2=1$, so some coordinate is nonzero; then $x\in H_i^{\operatorname{sgn}(x_i)}$ for that $i$, and the $2n$ hemispheres cover $S^{n-1}$. [F3, step 1.1, given, algebra]

2.2 The Hessian determinant. Differentiating the gradient of step 1.3 with [F3] gives $$\partial_i\partial_jh(y)=-\varepsilon\Bigl[(1-|y|^2)^{-1/2}\delta_{ij}+(1-|y|^2)^{-3/2}y_iy_j\Bigr],$$ that is $D^2h(y)=-\varepsilon\,a\bigl[I+a^2yy^{T}\bigr]$ with $a:=(1-|y|^2)^{-1/2}>0$. Taking determinants and using step 1.2 with $t=a^2$, $v=y$, $$\det D^2h(y)=(-\varepsilon)^{n-1}a^{\,n-1}\bigl(1+a^2|y|^2\bigr)=(-\varepsilon)^{n-1}a^{\,n-1}\cdot\frac1{1-|y|^2}=(-\varepsilon)^{n-1}(1-|y|^2)^{-(n+1)/2},$$ because $1+a^2|y|^2=1+|y|^2/(1-|y|^2)=1/(1-|y|^2)$ and $a^{\,n-1}a^2=a^{\,n+1}$. The value is nonzero for every $y\in B$ since $1-|y|^2>0$. [F3, step 1.2, step 1.3, algebra]

3.1 The smooth structure and compactness. Each $X_i^\varepsilon$ is a bijection of the open ball onto its image with smooth inverse and smooth transitions: on overlaps, the transition is $\pi_{i'}\circ X_i^\varepsilon$, a coordinate selection of a smooth graph map, smooth by [F3]. The ambient coordinate map that deletes $x_i$ and appends $x_i-h_i^\varepsilon(\pi_i(x))$ has smooth inverse obtained by reinserting $h_i^\varepsilon(y)+z$ in the $i$th slot; near each point of the hemisphere it carries the sphere to $z=0$. These are slice charts in [F6], so the sphere is an embedded smooth manifold with the displayed graph charts. Being the zero set of the continuous function $x\mapsto|x|^2-1$, the sphere is closed; it is bounded by $|x|=1$, so it is compact by [F4]. [F3, F4, F6, step 2.1]

4.1 The finite partition. The $2n$ hemispheres $H_i^\varepsilon$ are coordinate balls of the smooth manifold $S^{n-1}$ of step 3.1 and form a countable (indeed finite) open cover. By [F5] this cover admits a smooth partition of unity $(\chi_i^\varepsilon)_{i,\varepsilon}$ subordinate to it: the supports are locally finite, $\operatorname{supp}\chi_i^\varepsilon\subseteq H_i^\varepsilon$, and $\sum_{i,\varepsilon}\chi_i^\varepsilon=1$ with every $\chi_i^\varepsilon\ge0$. Since $S^{n-1}$ is compact by step 3.1, every support, being closed in $S^{n-1}$, is compact; enumerating the $2n$ pairs $(i,\varepsilon)$ as $1,\dots,m$ with $m=2n$ gives the asserted functions, each compactly supported inside the image $H_i^\varepsilon$ of the chart $X_i^\varepsilon$. [F5, step 2.1, step 3.1]

5.1 Conclusion. Step 2.1 gives the $2n$ smooth graph charts and their hemisphere cover, step 1.3 computes the density $(1-|y|^2)^{-1/2}$, step 2.2 computes $\det D^2h=(-\varepsilon)^{n-1}(1-|y|^2)^{-(n+1)/2}\neq0$, and step 4.1 produces the finite smooth partition with compactly supported pieces. Each clause holds for every $n\ge2$, with the case $n=2$ covered by the same computation ($m=n-1=1$ and the determinant is $-\varepsilon(1-|y|^2)^{-3/2}$). [step 2.1, step 3.1, step 1.3, step 2.2, step 4.1] ∎
