---
id: thm-cg-large-metric-flag-complexes-are-cat-one
kind: theorem
title: "Finite large metric flag complexes are CAT(1)"
status: draft
origin: pipeline
dependency_level: 18
deps:
  - def-cg-large-spherical-metric-flag-and-almost-negative-matrix
  - lem-cg-metric-flag-links-and-local-cat-one
  - thm-cg-large-metric-flag-short-loop-radial-contradiction
  - def-cg-cat-zero-cat-one-and-local-geodesic
  - lem-cg-spherical-simplex-existence-and-link-gram-formula
  - def-cg-euclidean-cone-and-spherical-join-metrics
  - def-axiom-of-choice
proof_strategy: induction
axiom_use: "Assume AC. It is used by the finite-spherical-complex supplier for minimizing geodesics, and through the compact short-circle and Bowditch arguments inside item thm-cg-large-metric-flag-short-loop-radial-contradiction. No additional choice is used in the dimension induction."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Ruth Charney and Michael W. Davis, The Euler characteristic of a nonpositively curved, piecewise Euclidean manifold, Pacific J. Math. 171 (1995)"
      url: "https://msp.org/pjm/1995/171-1/pjm-v171-n1-p04-s.pdf"
      locator: "2.9-2.10 (metric flag complexes and Moussong's Lemma: a piecewise spherical simplicial complex with simplices of size $>\\pi/2$ is large — uniquely geodesic for distances $<\\pi$ — if and only if it is a metric flag complex)"
    - title: "Martin R. Bridson and Andre Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "II.5.2 and II.5.4, printed pp. 206-207 (the link criterion; for $\\kappa>0$: CAT($\\kappa$) is equivalent to the link condition plus the absence of isometrically embedded circles of length $<2\\pi/\\sqrt{\\kappa}$)"
    - title: "Philip Moeller, A note on almost negative matrices and Gromov-hyperbolic Coxeter groups, arXiv:2205.07791"
      url: "https://arxiv.org/pdf/2205.07791"
      locator: "Section 3, Proposition 3.3 (the nerve of an almost negative matrix is CAT(1) if and only if its girth and the girths of all links are $\\ge2\\pi$; the induction and the link criterion used there)"
    - title: "G. Moussong, Hyperbolic Coxeter groups, PhD thesis (Ohio State University 1988), McCammond transcription"
      url: "https://people.math.osu.edu/davis.12/papers/moussongdissertation.pdf"
      locator: "Chapter 1, Section 5 (girth of finite S-complexes); Chapter 2, Proposition 10.1 (the non-strict girth computation). The present proof uses its own confined-insertion and three-edge argument instead of the disputed Lemma 9.11 step."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every finite large metric flag complex $X$ ([[def-cg-large-spherical-metric-flag-and-almost-negative-matrix]]) is CAT(1) for its truncated angular metric $d_\pi$ ([[def-cg-cat-zero-cat-one-and-local-geodesic]](3)): every connected component of $X$ with the induced metric is CAT(1), and distinct components of $X$ are at truncated distance $\pi$ from one another, so the CAT(1) tests, which involve only triangles of perimeter $<2\pi$, hold in $X$ as well ([[lem-cg-metric-flag-links-and-local-cat-one]](iv)).

The proof is dimension induction: the zero-dimensional case is [[lem-cg-metric-flag-links-and-local-cat-one]](iv). The smaller-dimensional hypothesis gives local CAT(1) by that lemma's clause (iii), and [[thm-cg-large-metric-flag-short-loop-radial-contradiction]](iv) gives global CAT(1). Its minimum-loop argument applies the compact short-loop results to untruncated intrinsic component metrics, which are compact geodesic under AC by [[lem-cg-spherical-simplex-existence-and-link-gram-formula]](iii), then transfers the short comparison tests to $d_\pi$.

## Facts & Assumptions

**Given:** AC and a finite large metric flag complex $X$ of dimension $d$, with its vertex complex $K$ and truncated angular metric $d_\pi$.

[F1] $X$ is a finite spherical complex that is large (all simplex off-diagonals at most $0$) and metric flag. ([[def-cg-large-spherical-metric-flag-and-almost-negative-matrix]])

[F2] Face links of finite large metric flag complexes are again finite large metric flag complexes; if every finite large metric flag complex of dimension $<d$ is CAT(1), then every $d$-dimensional one is locally CAT(1); a $0$-dimensional one is a finite set of isolated vertices at truncated distance $\pi$ with vacuous CAT(1) tests; and every $d_\pi$-triangle of perimeter $<2\pi$ in a finite spherical complex lies in one component with sides the componentwise intrinsic distances. ([[lem-cg-metric-flag-links-and-local-cat-one]])

[F3] The truncated angular metric is $d_\pi=\min\{\pi,d_{\mathrm{path}}\}$ with $\min\{\pi,\infty\}:=\pi$, and the componentwise path distance is $+\infty$ between distinct components. ([[def-cg-euclidean-cone-and-spherical-join-metrics]])

[F4] Assume AC; each connected component of a finite spherical complex, with its untruncated intrinsic metric, is a compact length space whose metric topology is the weak topology and in which every two points are joined by a minimizing geodesic. ([[lem-cg-spherical-simplex-existence-and-link-gram-formula]](iii), [[def-axiom-of-choice]])

[F5] Under AC, a finite large metric flag complex that is locally CAT(1) is CAT(1). ([[thm-cg-large-metric-flag-short-loop-radial-contradiction]](iv))

[F6] A metric space is CAT(1) when pairs at distance $<\pi$ are joined by geodesic segments and geodesic triangles of perimeter $<2\pi$ satisfy the spherical comparison inequality. ([[def-cg-cat-zero-cat-one-and-local-geodesic]])

## Proof

1.1 The empty complex has no CAT(1) tests and is CAT(1) vacuously. Otherwise, at the induction base $\dim X=0$, a finite large metric flag complex is a finite set of isolated vertices; by [F2] and [F3] distinct vertices are at truncated distance $\pi$, so any triangle with two distinct vertices has a side $\pi$ and perimeter at least $2\pi$, every admissible comparison test is degenerate and the only pairs at distance $<\pi$ are equal points, joined by constant segments. Hence the zero-dimensional complex is CAT(1). [base, F2, F3]

1.2 Components: if $X$ has several connected components, then every component, with the induced metric, is again a finite large metric flag complex: it carries the same cell Gram matrices, its intrinsic chain metric has the same angular truncation as the induced metric, and a pairwise adjacent vertex set lies in one component and spans a simplex in the component exactly when it does in $X$. Distinct components are at truncated distance $\pi$ by [F3], so a triangle of perimeter $<2\pi$ has all its vertices in one component and its comparison test is the test inside that component, and a pair at distance $<\pi$ lies in one component; hence the CAT(1) tests for $X$ are exactly the componentwise tests. [F1, F2, F3, F6, algebra]

1.3 Induction hypothesis [IH]: assume that every finite large metric flag complex of dimension $<d$ is CAT(1), and let $X$ be a finite large metric flag complex of dimension $d$. For every nonempty face $F$, [F2] gives a finite large metric flag link of dimension at most $d-\dim F-1<d$; a nonempty link is CAT(1) by the induction hypothesis, and an empty link is CAT(1) vacuously. The relative interiors of these nonempty faces cover $X$, so the local models of [F2] make $X$ locally CAT(1). The empty face, whose link is $X$ itself, is not used in this inference. [F1, F2, ih]

2.1 By step 1.3, $X$ is locally CAT(1); [F5] gives CAT(1). Its compact-geodesic argument uses the untruncated intrinsic metrics of the connected components supplied by [F4], rather than assuming the angular truncation is globally geodesic. [F4, F5, step 1.3]

3.1 The base step 1.1 and induction steps 1.3–2.1 establish the theorem in every finite dimension. Step 1.2 also expresses the result componentwise, including disconnected complexes at intercomponent distance $\pi$. [F1, F2, F3, step 1.1, step 1.2, step 2.1, discharge-induction] ∎
