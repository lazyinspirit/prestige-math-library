---
id: thm-cg-large-metric-flag-short-loop-radial-contradiction
kind: theorem
title: "Nonshrinkable edge loops of length $<2\\pi$ have three edges, and the finite locally CAT(1) large metric flag complex is CAT(1)"
status: draft
origin: pipeline
dependency_level: 17
deps:
  - def-cg-large-spherical-metric-flag-and-almost-negative-matrix
  - lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion
  - def-cg-short-loop-homotopy-and-nonshrinkability
  - lem-cg-bowditch-quantitative-short-loop-control
  - def-cg-cat-zero-cat-one-and-local-geodesic
  - lem-cg-comparison-convexity-and-model-spaces
  - thm-cg-compact-local-cat-one-short-circle-criterion
  - lem-cg-spherical-simplex-existence-and-link-gram-formula
  - def-cg-euclidean-cone-and-spherical-join-metrics
  - def-axiom-of-choice
  - thm-sylvesters-criterion-for-positive-definiteness
  - def-definiteness-inertia-and-signature-data-over-the-reals
  - thm-sine-and-cosine-addition-formulas
proof_strategy: contradiction
axiom_use: "Assume AC. It is used through the compact short-circle criterion and the Bowditch short-loop theorem to obtain the attained minimum nonshrinkable circle in a component that is not CAT(1); no further choice is made in the edge count, determinant calculation, or corner shortening."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "G. Moussong, Hyperbolic Coxeter groups, PhD thesis (Ohio State University 1988), McCammond transcription"
      url: "https://people.math.osu.edu/davis.12/papers/moussongdissertation.pdf"
      locator: "Chapter 2, Proposition 10.1 and Corollary 10.2 (girth of $N(A)$ and of the links $\\ge2\\pi$; the case analysis over a closed geodesic through a vertex star)"
    - title: "Philip Moeller, A note on almost negative matrices and Gromov-hyperbolic Coxeter groups, arXiv:2205.07791"
      url: "https://arxiv.org/pdf/2205.07791"
      locator: "Section 3, Theorem 3.2, Proposition 3.3 (CAT(1) is equivalent to the girth bound for the nerve and all links) and the analysis of the gap in Moussong's Lemma 9.11, which this proof replaces by the direct three-edge argument"
    - title: "Ruth Charney and Michael W. Davis, The Euler characteristic of a nonpositively curved, piecewise Euclidean manifold, Pacific J. Math. 171 (1995)"
      url: "https://msp.org/pjm/1995/171-1/pjm-v171-n1-p04-s.pdf"
      locator: "2.3-2.4 (cosine matrices of spherical simplices), 2.7-2.10 (flag and metric flag complexes; Moussong's Lemma)"
    - title: "B. H. Bowditch, Notes on locally CAT(1) spaces (Aberdeen preprint, 27 scanned sheets)"
      url: "https://www.bhbowditch.com/papers/bhb-catone.pdf"
      locator: "Sections 3.1.4-3.1.7 and 3.4, printed pp. 19-32 (every loop shorter than the minimal embedded-circle length is shrinkable; the minimal embedded circle is the shortest nonshrinkable loop)"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a finite large metric flag complex which is locally CAT(1).

**(i)** A nonshrinkable locally geodesic edge loop of $X$ of length $<2\pi$ has exactly three edges. A closed edge walk with one or two edges is an immediate backtrack — the $1$-skeleton is a simple graph, since the complex is simplicial ([[def-cg-large-spherical-metric-flag-and-almost-negative-matrix]](2)) — hence short-loop homotopic to a point; and every edge has length $\ge\pi/2$, so a closed edge walk with four or more edges has length $\ge4\cdot\pi/2=2\pi$.

**(ii)** Let $v_1,v_2,v_3$ be the vertices of such a three-edge loop, and let $a,b,c$ be the assigned spherical lengths of its edges $v_1v_2,v_2v_3,v_3v_1$. Thus $a,b,c\in[\pi/2,\pi)$ and $a+b+c<2\pi$. Its cosine matrix $C=\begin{pmatrix}1&\cos a&\cos c\\ \cos a&1&\cos b\\ \cos c&\cos b&1\end{pmatrix}$ is positive definite: with $s=(a+b+c)/2$, the identity $\det C=4\sin s\sin(s-a)\sin(s-b)\sin(s-c)$ makes its determinant positive, and the leading principal minors are positive ([[thm-sylvesters-criterion-for-positive-definiteness]]). For an isometrically embedded minimum circle these edge lengths also equal the ambient vertex distances, since each edge is shorter than the sum of the other two.

**(iii)** By the metric flag condition the three vertices span a simplex $\sigma$ of $X$, a spherical triangle with sides $a,b,c$ ([[lem-cg-spherical-simplex-existence-and-link-gram-formula]](i)); the loop is the boundary of $\sigma$. Since the three vertices are linearly independent, every interior angle of $\sigma$ lies in $(0,\pi)$; at a corner take the two points at distance $t>0$ on the two incident edges: the segment of the round sphere joining them lies in the wedge spanned by the two edge directions and hence in $\sigma$, and the spherical cosine rule gives $d=\arccos(\cos^{2}t+\sin^{2}t\cos\alpha)<2t$, where $\alpha\in(0,\pi)$ is the interior angle. So the loop admits a strict shortening of arbitrarily small scale near each corner and is not locally geodesic, contradicting ([[lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion]](i)).

**(iv)** Hence $X$ has no minimum nonshrinkable circle: by [[lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion]](iv) some shortest nonshrinkable loop is a locally geodesic edge loop visiting at most three vertices; (i) leaves the three-edge case, which (ii)-(iii) exclude, and fewer than three edges gives a backtrack. Therefore $X$ is CAT(1): if it were not, a minimum nonshrinkable circle would exist ([[lem-cg-bowditch-quantitative-short-loop-control]](iii), (iv)), and its non-existence is equivalent to the absence of isometrically embedded circles of length $<2\pi$, which for each compact geodesic untruncated component is equivalent to CAT(1) ([[thm-cg-compact-local-cat-one-short-circle-criterion]](i)). Disconnected $X$ is treated component by component with the truncated inter-component convention of [[def-cg-euclidean-cone-and-spherical-join-metrics]](2).

## Facts & Assumptions

**Given:** AC and a finite large metric flag complex $X$ that is locally CAT(1), with vertex complex $K$, and a nonshrinkable locally geodesic edge loop $\gamma$ of length $<2\pi$.

[F1] Distinct vertices of a simplicial complex span at most one simplex, so each pair spans at most one edge and there are no loop edges; $X$ is large, so every edge of every simplex has length in $[\pi/2,\pi)$. ([[def-cg-large-spherical-metric-flag-and-almost-negative-matrix]])

[F2] A positive-definite Gram matrix realizes its spherical simplex; its points have unique nonnegative barycentric ray coordinates and lie in an open hemisphere. For a finite spherical complex, assume AC, the chain metric makes each component compact and geodesic. The spherical cosine rule holds in the round sphere. ([[lem-cg-spherical-simplex-existence-and-link-gram-formula]](i)-(iii), [[lem-cg-comparison-convexity-and-model-spaces]](iii), [[def-axiom-of-choice]])

[F3] A loop is normalized and short when its length is $<2\pi$; short-loop homotopy is homotopy through short loops with continuous uniform-plus-length parameter, and shrinkable means short-loop homotopic to a constant loop. ([[def-cg-short-loop-homotopy-and-nonshrinkability]])

[F4] Under AC, for a compact geodesic locally CAT(1) component with its untruncated intrinsic metric, CAT(1) is equivalent to the absence of isometrically embedded circles of length $<2\pi$, and if $X$ is not CAT(1), it contains an isometrically embedded circle of length $2\operatorname{injrad}(X)<2\pi$; every loop of length below the infimum $m$ of the lengths of isometrically embedded circles is shrinkable, and if $m<2\pi$ then $m$ is attained by a nonshrinkable isometrically embedded circle. ([[thm-cg-compact-local-cat-one-short-circle-criterion]], [[lem-cg-bowditch-quantitative-short-loop-control]])

[F5] If a finite large metric flag complex is locally CAT(1) and not CAT(1), some minimum nonshrinkable circle, chosen to maximize its distinct vertex visits, is a locally geodesic edge loop in the $1$-skeleton visiting at most three distinct vertices. ([[lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion]])

[F6] A real symmetric matrix is positive definite exactly when all its leading principal minors are positive, and a principal submatrix of a positive-definite matrix is positive definite. ([[thm-sylvesters-criterion-for-positive-definiteness]], [[def-definiteness-inertia-and-signature-data-over-the-reals]])

[F7] The elementary product and sum formulas for sine and cosine expand $4\sin s\sin(s-a)\sin(s-b)\sin(s-c)$ into $1+2\cos a\cos b\cos c-\cos^{2}a-\cos^{2}b-\cos^{2}c$ for $s=\tfrac12(a+b+c)$. ([[thm-sine-and-cosine-addition-formulas]])

## Proof

1.1 Clause (i): a closed edge walk of $K$ with one edge is a loop edge, which does not exist, and with two edges it is an immediate backtrack $u,v,u$; the backtrack loop is short-loop homotopic to the constant loop at $u$ by the family that pulls the second half back along the first, whose loops have length at most the original length, so it is shrinkable [F3]. Hence a nonshrinkable edge loop has at least three edges; if it had four or more, its length would be at least $4\cdot\pi/2=2\pi$ by [F1], contrary to the hypothesis. Therefore it has exactly three edges. [F1, F3, given, algebra]

1.2 Clause (ii): let $a,b,c\in[\pi/2,\pi)$ be the three edge lengths, with $a+b+c<2\pi$, and put $x=\cos a$, $y=\cos b$, $z=\cos c$. By [F7] the determinant of $C$ equals $4\sin s\sin(s-a)\sin(s-b)\sin(s-c)$ with $s=\tfrac12(a+b+c)$: here $0<s<\pi$, and $s-a=\tfrac12(b+c-a)>0$ because $b+c\ge\pi>a$, together with $s-b>0$, $s-c>0$ and $s-a<s$, $s-b<s$, $s-c<s<\pi$; hence all four sines are positive and $\det C>0$. The two leading principal minors are $1>0$ and $1-x^{2}=\sin^{2}a>0$, and the principal $2\times2$ minors are handled the same way as leading minors of submatrices, so by [F6] the matrix $C$ is positive definite. [F6, F7, algebra]

2.1 Clause (iii): by the metric flag condition and step 1.2 the three vertices of the loop span a simplex $\sigma$ of $X$. Its spherical model is $K(C_\sigma)\cap S^2$; for points $p,q$ in this simplex at distance $\delta<\pi$, the shorter spherical segment has points $\bigl(\sin((1-t)\delta)p+\sin(t\delta)q\bigr)/\sin\delta$ for $0\le t\le1$. The coefficients are nonnegative, so the whole segment remains in the positive cone $K(C_\sigma)$ and hence in $\sigma$. Thus the loop is the boundary of a geodesically convex spherical triangle [F1, F2]. At a corner with interior angle $\alpha\in(0,\pi)$, take the points at distance $t>0$ along the two incident edges, with $2t<\pi$; their inner product is $\cos^{2}t+\sin^{2}t\cos\alpha$, so the spherical segment in $\sigma$ joins them at distance $d(t)=\arccos(\cos^{2}t+\sin^{2}t\cos\alpha)<2t$, because $\cos d(t)>\cos2t$ is equivalent to $\sin^{2}t(1+\cos\alpha)>0$. Replacing the two boundary subarcs of total length $2t$ by this strictly shorter segment exhibits a strict local shortening, contradicting local geodesicity by its definition. Thus the boundary of $\sigma$, hence $\gamma$, is not locally geodesic. [F1, F2, step 1.2, algebra]

3.1 Clause (iv): assume for contradiction that [assume-contra] $X$ is not CAT(1). Short triangle tests and circles of length $<2\pi$ are unchanged by truncation: their intrinsic side-point or circle distances are below $\pi$. Thus some untruncated intrinsic component is not CAT(1). It is compact geodesic by [F2], so [F4] supplies an attained minimum nonshrinkable circle; across the finitely many components choose one of global minimum length $m<2\pi$. By [F5] some such minimum is a locally geodesic edge loop. Step 1.1 leaves exactly three edges, while step 2.1 excludes that case. This is a contradiction. Therefore each untruncated component is CAT(1), and the same short comparison tests give CAT(1) for the angular truncation of $X$. [F1, F2, F4, F5, step 1.1, step 2.1, discharge-contradiction] ∎
