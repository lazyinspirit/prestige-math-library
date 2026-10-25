---
id: alg-incremental-planar-delaunay-edge-flips
kind: algorithm
title: "Incremental planar Delaunay insertion with exact edge flips"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 5
deps:
  - def-indexed-geometric-site-set
  - def-planar-delaunay-voronoi-structures
  - def-lexicographic-lift-tie-break
  - alg-certified-dyadic-geometric-predicate
  - lem-large-delaunay-supertriangle-exists
justified_by:
  - thm-incremental-planar-delaunay-correctness-and-termination
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 3rd ed., Chapter 9, Sections 9.2–9.3"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "David M. Mount, CMSC 754 Computational Geometry, Lecture 13"
      url: "https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf"
---

## Definition

Input is a nonempty finite indexed planar list of exact dyadic sites and optionally a prescribed insertion permutation. Collapse equal coordinates to the least stable identifier. If no permutation is supplied, use increasing stable-identifier order; otherwise require the permutation to list each deduplicated site exactly once. If the affine dimension is zero, return the single site; if it is one, sort by the first varying coordinate (use $x$ if it varies, otherwise $y$) and return the consecutive chain. These branches return no triangles.

For affine dimension two, run `CHOOSE-SUPERTRIANGLE(P,g)` before insertion, where $g=0$ in an ordinary batch run and $g=1$ when a caller requires the augmented general-position condition. Enumerate ordered triples of dyadic points by increasing height $H=0,1,2,\ldots$: represent each dyadic coordinate uniquely as $m/2^k$ with $k\ge0$ and either $k=0$ or odd $m$, and at height $H$ enumerate lexicographically the six coordinate representations with $|m|,k\le H$ and maximum $H$. For each candidate triple, reject coincident vertices or zero orientation; if its orientation is negative, swap the second and third vertices so it is counterclockwise. Reject it unless all input sites have strictly positive orientation against each of its three directed edges. For every noncollinear input triple and each candidate vertex, call [[alg-certified-dyadic-geometric-predicate]] for its exact orientation-normalized raw incircle sign and reject unless that sign is negative (outside). If $g=1$, test each input triple for zero orientation and each input four-site subset for zero raw incircle determinant; return `invalid-general-position-request` if either occurs. If $g=1$, for each remaining candidate also test every augmented triple for zero orientation and every augmented four-site subset for zero raw incircle determinant, rejecting that candidate if any test is zero. Return the first accepted triangle. The enumeration is deterministic and finite at each height; [[lem-large-delaunay-supertriangle-exists]] guarantees that an accepted candidate occurs for $g=0$, and also for $g=1$ under its general-position hypothesis. Assign the three synthetic vertices, in their enumerated order after the orientation correction, the consecutive integer identifiers immediately below the least input identifier. This fixes the universe $U$ and all lexicographic ranks before insertion. Initialize the current triangulation to the supertriangle and maintain its finite triangle list and edge incidences.

Expose the following state update `INSERT(p,L)`, where $p$ is a not-yet-inserted input site and $L$ is an optional location certificate. Its admissibility condition is that $p$ lies strictly inside the current triangulated hull. A face certificate names one current triangle $abc$ and is valid exactly when the three exact orientation tests put $p$ strictly in its interior. An edge certificate names an interior edge $uv$ and its two current incident triangles; it is valid exactly when $p$ lies strictly between $u$ and $v$ and those are the two triangles incident to $uv$. If a supplied certificate is invalid, return `invalid-location` without changing the triangulation. If $L$ is absent, scan the finite current triangle list in increasing lexicographic order of the sorted vertex identifiers. For each triangle $abc$, compute $s=\operatorname{sgn}\operatorname{orient}(a,b,c)$ and the three signs $s_{ab}=\operatorname{sgn}\operatorname{orient}(a,b,p)$, $s_{bc}=\operatorname{sgn}\operatorname{orient}(b,c,p)$, and $s_{ca}=\operatorname{sgn}\operatorname{orient}(c,a,p)$. If $ss_{ab},ss_{bc},ss_{ca}$ are all positive, use the face certificate for $abc$. If exactly one is zero and the other two are positive, use the edge certificate for that edge and its two incident triangles; if it is a hull edge, return `boundary-edge`. Two or more zero signs put $p$ at an existing vertex, contrary to the distinct-site input, and return `duplicate-vertex`. If the scan finds no containing face or interior edge, return `outside-hull`.

For a face certificate, replace its triangle by the three triangles joining $p$ to its edges. For an interior-edge certificate, replace its two incident triangles by the four triangles joining $p$ to the edge endpoints and the two opposite vertices. Then call `LEGALIZE(p,uv)` once on each distinct new edge $uv$ opposite $p$, in lexicographic order of its endpoint identifiers. In each call, order $u,v$ by stable identifier and let $w$ be the third vertex of the adjacent triangle. Compute the exact orientation determinant $O$ on rows $(u,v,w)$ and the raw lifted determinant sign $L$ on rows $(u,v,w,p)$ using [[alg-certified-dyadic-geometric-predicate]]. If $O=0$, return `degenerate-base`. If $L\ne0$, set the normalized sign to $\operatorname{sgn}(O)L$. If $L=0$, take the sign $L_{\rm lex}$ selected from the common formal height perturbation of [[def-lexicographic-lift-tie-break]] on the same row order and set the normalized sign to $\operatorname{sgn}(O)L_{\rm lex}$. A positive normalized sign means illegal; a negative sign means legal; zero is treated as legal. Boundary edges have no adjacent triangle and are legal. If an edge is illegal, test strict convexity with exact orientations: both $p,w$ must lie on opposite sides of $uv$, and $u,v$ must lie on opposite sides of $pw$. If either product of the corresponding two orientation signs is not negative, return `invalid-triangulation`. Otherwise flip $uv$ to $pw$, record the replacement event, and recursively call `LEGALIZE(p,uw)` and `LEGALIZE(p,wv)` in lexicographic order. Each face split, edge split, and flip records its removed triangles, created triangles, and overlap map: one-to-three for a face split, two-to-two-within-each-old-face for an edge split, and both new triangles for each old face at a flip. `INSERT` returns these events in execution order with the updated triangulation. A batch run calls `INSERT(p,none)` for each site in the chosen permutation, discards the event lists, halts with any returned status, and otherwise returns the remaining triangles and their edges after deleting triangles incident to synthetic vertices.

The exact raw predicate and its tie-break are separate: [[alg-certified-dyadic-geometric-predicate]] returns exact raw signs including zero; a zero nondegenerate-base sphere test is resolved by the common formal height perturbation in this algorithm. The procedure never chooses or evaluates a numerical $\varepsilon$. A degenerate base is reported as `degenerate-base` and is not flipped.
