---
dependency_level: 7
id: lem-berkovich-rooted-tree-finite-retractions-and-laplacian
kind: lemma
title: "Rooted-tree geometry, finite retractions and the elementary tree Laplacian"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-berkovich-projective-line-by-polynomial-seminorms
  - lem-berkovich-disc-nested-balls-and-hsia-kernel
  - lem-berkovich-dynamical-green-kernel-continuous-extension
  - lem-dynamical-diagonal-positivity-reduces-to-countable-coefficients
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert Rumely and Matthew Baker, Analysis and dynamics on the Berkovich projective line, §1 tree model and §§3.2–3.3 finite-graph Laplacian"
      url: "https://arxiv.org/pdf/math/0407433v1"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $X$ be the Berkovich projective line over a complete algebraically closed nontrivially nonarchimedean field, let $o$ be its Gauss point, and put $J(x,y)=-\log\delta(x,y)$. The nonclassical points form a rooted real tree with depth $J(x,x)$ and distance
$$\rho(x,y)=J(x,x)+J(y,y)-2J(x,y).$$
Disc points of radius in the value group are type-II branch points, with infinitely many outgoing residue directions. They are dense along every nonconstant logarithmic ancestor interval, and a neighborhood of such a point contains all but finitely many of its outgoing branches. The kernel $J(x,y)$ is the length common to the two paths from $o$ to $x,y$, with classical endpoints allowed at infinite depth. Every finite subtree $\Gamma$ spanned by $o$ and finitely many nonclassical points has a continuous retraction $r_\Gamma:X\to\Gamma$, and $J(x,y)=J(r_\Gamma x,y)$ for $y\in\Gamma$. For a continuous piecewise affine function $f$ on $\Gamma$, define
$$\Delta_\Gamma f=\sum_{v}\left(-\sum_{e\text{ issuing from }v}\partial_e f(v)\right)\delta_v,$$
where the sum uses vertices containing every slope break. This signed measure has total mass zero, $\Delta J(\cdot,y)=\delta_y-\delta_o$, and
$$\int f\,d\Delta g=\int g\,d\Delta f=\sum_e\int_e f'g'\,dt.$$
If $\Delta f=0$, then $f$ is constant. If the field has a countable dense subfield, one can choose increasing finite rooted subtrees $\Gamma_n$ so that $r_n=r_{\Gamma_n}$ tends uniformly to the identity for a compatible metric on $X$, and $J(r_nx,r_ny)\uparrow J(x,y)$ for all $x,y$.

## Statement references

[[def-axiom-of-choice]]

[[def-berkovich-projective-line-by-polynomial-seminorms]]

## Facts & Assumptions

**Given:** The field, compactification, spherical kernel and Gauss point in the statement.

[F1] Unit-disc points have nested-disc representations; their radius is zero exactly at classical points, and $\delta_D$ is the limit of the maximum of the two radii and the distance between centers. ([[lem-berkovich-disc-nested-balls-and-hsia-kernel]])

[F2] The spherical kernel glues the unit-disc kernels, has continuous bounded logarithmic slices at nonclassical points and gives the compact Hausdorff topology. ([[lem-berkovich-dynamical-green-kernel-continuous-extension]], [[def-berkovich-projective-line-by-polynomial-seminorms]])

[F3] A countable dense algebraically closed coefficient model has a compact metrizable seminorm projective line; its proof constructs a separating countable family of bounded logarithmic disc-kernel coordinates. ([[lem-dynamical-diagonal-positivity-reduces-to-countable-coefficients]])

[A1] Choice is inherited through the seminorm and countable-field constructions. ([[def-axiom-of-choice]])

## Proof

1.1 For a disc point $x$ of radius $r_x$, its ancestors of radius $R\in(r_x,1]$ are $x_R=x_{a_n,R}$ for any nested representative with $r_n\le R$; nesting makes this independent of $n$. Include $x$ itself at $R=r_x$. On linear polynomials their values are $\max(R,x(T-a))$, hence depend continuously on $R$, and factorization gives the same on all polynomials. These are precisely the ancestors for the order given by containment of representing discs. Two ancestor paths first meet at radius $\delta_D(x,y)$, by the nested maximum formula in [F1]. Their portions below that radius are disjoint, since two intersecting nonarchimedean discs are nested. Parameterizing by $-\log R$ gives the asserted common path length and distance. Completeness ensures radius-zero endpoints are classical; positive-radius empty intersections are the type-IV endpoints and cause no change to the ancestor construction. [F1, algebra]

1.2 The two unit-chart trees agree on their circle subtrees under inversion, which preserves the radii and kernel of circle points. Their roots are identified at the Gauss point. Consequently they glue to a rooted tree on the full line: the strict inner branch of the second chart is the additional infinity branch, and circle branches are identified once. Each nonclassical path has finite length because its radius is positive; classical paths have infinite logarithmic length and are retained as topological endpoints. The ancestor description proves existence and uniqueness of the path between any two nonclassical points, and the distance along it is exactly the formula in the Statement. Thus the finite-length part is a real tree. [F1, F2, step 1.1, algebra]

1.3 A disc point $x_{a,r}$ with $r\in|L^\times|$ has downward branches $x(T-b)<r$ for centers $b$ in its classical disc, classified by the residue of $(b-a)/c$ for $|c|=r$. Distinct residues give disjoint branches. The residue field is infinite, since it is algebraically closed by lifting and factoring monic integral polynomials. Thus there are infinitely many directions. The nontrivial value group of an algebraically closed field is dense after taking logarithms, so these type-II points are dense along each logarithmic ancestor interval. Finally polynomial factorization shows that, away from the finitely many directions containing its roots, a polynomial coordinate is constant throughout an outgoing branch at the given point. A basic neighborhood imposes finitely many polynomial-coordinate conditions, so contains every branch except possibly finitely many. For the Gauss point use the conditions in both charts, omitting at most the two strict-chart branches as well. This proves the stated neighborhood property. [F1, F2, step 1.1, step 1.2, algebra]

2.1 A union of finitely many root paths to nonclassical points is a finite tree: adjoining one root path attaches a single segment after its last common point, so introduces finitely many edges and branch points. Retraction sends $x$ to its last ancestor on this union. If $y\in\Gamma$, the common root path of $x,y$ already lies in $\Gamma$, giving $J(x,y)=J(r_\Gamma x,y)$. Take the finitely many leaves $y_i$ of $\Gamma$. The coordinates $J(\cdot,y_i)$ separate points of $\Gamma$: for two points with different root-path positions, a leaf beyond one of them distinguishes their common lengths. They define a continuous injection of compact $\Gamma$ into a finite real product and hence a homeomorphism to its image. Since these coordinates of $r_\Gamma x$ are the continuous functions $J(x,y_i)$ by [F2], the retraction is continuous. [F2, step 1.2, algebra]

3.1 On a finite tree, the Laplacian sum in the Statement is supported on the finite chosen vertex set. Each oriented edge contributes opposite endpoint slopes to its total mass, so that mass is zero. The function $J(\cdot,y)$ increases with slope1 along the root path from $o$ to $y$ and is constant off that path. Its outward slope sum is1 at $o$, −1 at $y$, and0 elsewhere, proving the claimed Laplacian. On an edge oriented from $a$ to $b$, integration of $f'g'$ gives its endpoint terms $f(b)g'(b)-f(a)g'(a)$ because $g$ is affine. Summing these terms over all edges is exactly $\int f\,d\Delta g$ with the indicated negative-outward-slope convention. Interchanging $f,g$ proves symmetry. With $f=g$, zero Laplacian forces the sum of the nonnegative squared-slope integrals to be zero, so all slopes vanish and connectedness makes $f$ constant. [step 1.2, algebra]

4.1 In the countable-dense case first enlarge a countable dense subfield to its algebraic closure inside the given field. This remains countable and dense: it is the union of the finite root sets of countably many polynomials. Enumerate the nonclassical disc centers $y_i$ from [F3], and let $\Gamma_n$ span $o,y_1,\ldots,y_n$. In the compatible metric built from their bounded kernel-coordinate differences, $r_nx$ and $x$ agree on the first $n$ coordinates by step2.1, so their distance is at most the remaining geometric tail, uniformly in $x$. The common root-path lengths $J(r_nx,r_ny)$ are nondecreasing. They exhaust $J(x,y)$: if some initial part of a common root path were missed by all the $\Gamma_n$, points at its two ends would have identical $J(\cdot,y_i)$ coordinates for every $i$, contradicting their separating property in [F3]. This also handles infinite depth at a classical diagonal, where arbitrarily long initial segments must be exhausted. [F3, step 1.2, step 2.1, algebra] ∎
