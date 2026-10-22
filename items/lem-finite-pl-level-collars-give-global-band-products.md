---
id: lem-finite-pl-level-collars-give-global-band-products
kind: lemma
title: "Finite piecewise linear level collars give global band products"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar, lem-finite-convex-cell-complexes-admit-compatible-triangulations, lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation ]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
      locator: "Printed pp.57–59, 4.21–4.24; full extending-collars, collar-leveling, and finite interval-pasting proofs. The precise height-band formulation below is proved directly."
dependency_level: 3
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $P$ be a compact finite polyhedron and $h:P\to[a,b]$ a surjective PL function, where $a<b$. Write $X_t=h^{-1}(t)$, $P_{\ge t}=h^{-1}([t,b])$ and $P_{\le t}=h^{-1}([a,t])$. Suppose, for every $t<b$, $X_t$ is locally PL collared in $P_{\ge t}$ and, for every $t>a$, it is locally PL collared in $P_{\le t}$. Local collars here have open half-product images, including at boundary points of the fiber. Then there is a PL homeomorphism with PL inverse
$$H:X_a\times[a,b]\longrightarrow P,\qquad H(x,a)=x,\qquad h(H(x,t))=t.$$
The construction is finite and introduces no choice hypothesis. In particular this conclusion holds when each point has a local PL height-product chart, with the appropriate one-sided chart at the end levels.

## Facts & Assumptions

**Given:** The compact finite polyhedron, surjective PL height and the two-sided or endpoint one-sided level-collar hypotheses.

[F1] A compact locally PL collared subpolyhedron has a PL collar ([[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]).

[F2] Finite PL maps and marked subpolyhedra admit compatible finite subdivisions, and finite convex cell complexes admit compatible finite triangulations ([[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]], [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]).

## Proof

**Given:** The stated data.

1.1 First consider a compact finite polyhedron $Y$ with a PL function $q:Y\to[0,M]$, zero set $X$, and a PL collar $c:X\times[0,1]\to Y$ of $X$. Its image contains an open neighborhood $U$ of $X$. The compact complement $Y\setminus U$ has strictly positive minimum $q$ when nonempty. Thus, for sufficiently small positive $\eta$, the whole set $q^{-1}([0,\eta])$ lies in the collar image. On the collar domain let $r(x,s)=s$ and $k(x,s)=q(c(x,s))$. Both are PL, nonnegative, and vanish precisely on $X\times\{0\}$: injectivity of $c$ precludes any other collar point from mapping to the zero set. Choose a finite triangulation of the domain on which $c,r,k$ are linear, with the bottom a subcomplex, by [F2]. Corresponding source and image simplices of $c$ consequently have exactly the same zero vertices, all their other vertices having strictly positive $r$ and $q$ values. Choose $0<\delta<\eta$ smaller than all these finitely many positive values. [given, F2, construct]

2.1 Cut each source simplex by $r\le\delta$ and its corresponding image simplex by $q\le\delta$. Only simplices with at least one zero vertex occur. On a mixed simplex the truncated polytope has its original zero face, its top section at $\delta$, and the truncated faces of the original simplex. Its vertices are the zero vertices and the intersections of zero-positive edges with the top section. In particular its face incidences depend only on which original vertices are zero, not on the strictly positive values at the remaining vertices. This assertion follows directly from the simplex inequalities $\lambda_i\ge0$, $\sum\lambda_i=1$ and the cut $\sum q_i\lambda_i\le\delta$: the cut meets exactly the edges from zero vertices to positive vertices and no edge joining positive vertices. The corresponding truncated source and target cells therefore have identical face posets, compatible on common faces. Their zero faces are identified pointwise by $c(x,0)=x$. [step 1.1, construct]

3.1 Construct compatible PL homeomorphisms of these truncated cells, preserving $r$ as target height $q$. On zero faces use the identity. On top faces, match the corresponding vertices and extend inductively over their faces by coning from relative interior points; all these points have height $\delta$, so these maps preserve height. Any remaining face spans heights zero to $\delta$ and has a relative interior point at height $\delta/2$ on both sides: its section at that level meets its relative interior by convexity. Having already defined its boundary map, triangulate the boundary compatibly and cone that map between those two points. Convexity makes each extension bijective with PL inverse. Height is preserved on every cone simplex because it is affine, agrees on the boundary, and has equal values at the two cone points. Induction over faces gives a PL homeomorphism from the entire source truncation $X\times[0,\delta]$ onto the target truncation $q^{-1}([0,\delta])$, fixed on the bottom and with $q$ equal to the parameter. The target equality uses the neighborhood inclusion from step 1.1. Thus every collar satisfying the stated positivity has an exact short height-product replacement, rather than only an abstract collar parameter. [F2, step 2.1, construct]

4.1 Apply this construction to each $t<b$, with $Y=P_{\ge t}$ and $q=h-t$. The fiber $X_t$ is a compact subpolyhedron by [F2], and [F1] supplies its collar in $Y$. Hence a whole short upper slab has a height-product parameter based on $X_t$. For $t>a$ apply it to $Y=P_{\le t}$ and $q=t-h$ for a lower slab. Paste the two parameters at their common identity bottom fiber, reversing the lower parameter. Thus, for each $t$, there exists a relative open interval $J$ about $t$ in $[a,b]$ together with a PL height-product parameter $\Phi:X_t\times J\to h^{-1}(J)$, after restricting the closed short parameters slightly if necessary. At endpoints use just the one-sided parameter. This is a pointwise existence assertion; no family of parameters indexed by all $t$ is selected. All fibers are nonempty by surjectivity. [given, F1, F2, step 3.1, construct]

5.1 Take the set of all relative open intervals $J$ for which some base level $s\in J$ and a parameter of the kind established in step 4.1 exist. This is an open cover of $[a,b]$ by that pointwise existence assertion. Compactness first gives finitely many such intervals. Only now choose, for each of these finitely many intervals, one witnessing base level and parameter, denoting them $J_s$ and $\Phi_s$. Choose a finite subdivision $a=t_0<t_1<\cdots<t_N=b$ such that each closed interval $[t_{i-1},t_i]$ is contained in one of these selected $J_{s_i}$. For completeness, such a subdivision can be selected without an infinite sequence of choices: a finite open interval cover of a compact real interval has a positive Lebesgue number, as follows by taking, at each point, an interval contained in one cover member, then a finite subcover by intervals of half that radius and the minimum of their finitely many half-radii. Any sufficiently fine equal subdivision works. Restrict $\Phi_{s_i}$ to the corresponding closed subinterval. Its inverse at height $t_{i-1}$ identifies that initial fiber with $X_{s_i}$. Reparametrize this restricted product by that identification to obtain $\Psi_i:X_{t_{i-1}}\times[t_{i-1},t_i]\to h^{-1}([t_{i-1},t_i])$ with $\Psi_i(y,t_{i-1})=y$. [step 4.1, construct]

6.1 Define $H$ inductively. On the first band put $H(x,t)=\Psi_1(x,t)$. On the $i$th band put $H(x,t)=\Psi_i(H(x,t_{i-1}),t)$. These formulas agree at the joining fibers, are PL on finite compatible subdivisions, and preserve height. On every fiber the map is a composition of PL homeomorphisms; the inverse formulas likewise paste on the bands. Therefore $H$ is a PL homeomorphism onto $P$ with the claimed initial restriction. A local height-product chart supplies exactly the local collar charts used in step 4.1. Every cover, subdivision, cell extension and selection in this proof is finite; no countable or arbitrary-index choice was used. [given, F2, step 5.1, construct] ∎
