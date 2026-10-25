---
id: alg-reidemeister-move-neighbors-from-code
kind: algorithm
title: "Enumerate Reidemeister move neighbors from a knot code"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-planar-diagram-gauss-and-dowker-codes
  - alg-planar-code-validation-and-diagram-reconstruction
  - alg-enumerate-diagrams-up-to-crossing-bound
  - def-oriented-reidemeister-moves
justified_by: []
aliases: []
proof_strategy: not-applicable
axiom_use: "Choice-free: the crossing bound, code space, label permutations, finite move sites, and orientation/sign variants are all finite."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §1.2, pp. 5–7"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§1.2, finite Reidemeister move types and variants."
    - title: "Jeff Erickson, Planar Graphs, Computational Topology lecture notes (2023)"
      url: "https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html"
      locator: "Rotation Systems and Formalities and Trivialities, finite dart permutations and face cycles."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
---

## Definition

**Input:** A valid normalized oriented planar-diagram code $C$ for a connected one-component knot diagram, with $c$ crossings. A positive-crossing-count code records its finite crossing labels, four darts at each crossing, edge pairings, clockwise rotations, strand orientations, over/under pairs, crossing signs, and one outer face. A crossingless code records one oriented circle and its outer face.

**Output:** A finite ordered list of pairs $(E,\mu)$, where $E$ is a valid normalized one-component knot code and $\mu$ records either the finite crossing/edge relabeling identifying the unchanged planar-isotopy class or a local disk boundary, move type, and orientation/sign variant witnessing one oriented R1, R2, or R3 move from $C$ to $E$. Different labelings of the same candidate may appear more than once.

**Finite comparison rules:** Two normalized codes represent the same code class when some bijection of their finite crossing labels and edge labels carries all dart incidences, crossing rotations, orientations, signs, component cycles, and outer-face data of one code to the other. For a move-site test use the finite spherical cellulation returned by reconstruction and mark a point at infinity in its distinguished outer face. For the crossingless circle, insert one auxiliary degree-two vertex and use its two complementary face disks; this vertex is suppressed in all comparisons.

For each of $m=2,4,6$, enumerate every distribution of $m$ distinct cut points among diagram edges and every linear order of the points on each edge. Use one representative of each order (for example equally spaced interior points); their numerical positions are immaterial. In each face disk enumerate noncrossing pairings of all boundary occurrences of these cut points by interior arcs. In the distinguished face also record which complementary region contains the marked point at infinity. Glue the face arcs at the cut points and retain only choices forming a single simple closed curve. Cutting the finite cellulation along these arcs and flooding across incident cell pieces identifies the two sides; select the side not containing infinity. This is the candidate closed move disk. Its entire diagram intersection, including every vertex, edge segment and possible closed component inside it, must be isomorphic relative to its cyclically ordered boundary points to one side of a standard R1, R2 or R3 template with the chosen orientation/sign variant. In particular no additional diagram portion is permitted inside the disk. All tests are finite incidence and cyclic-order comparisons. The same construction is performed for the other code, requiring the opposite side of the same template and an isomorphism of the outside records fixing the ordered boundary points, all decorations and the infinity region. Store the cut orders, face pairings, selected regions, template variant and outside isomorphism as the certificate.

The local templates and their exact orientation/sign variants are those in the oriented Reidemeister-move definition.

**Instructions:**

1. Validate $C$ with the planar-code validation procedure. If it is invalid, return its first invalid-code result.
2. Set $N:=c+2$ and run the bounded normalized-diagram enumerator with bound $N$. It returns a finite list of reconstructed one-component knot-diagram candidates.
3. For each candidate, form the finite set of normalized code representatives obtained by assigning crossing labels and edge labels in every permitted order and applying the code's normalization rule.
4. For each representative $E$, apply the finite comparison rules. Append $E$ with a relabeling certificate if it is the same code class as $C$, or with the successful local-site certificate if a comparison certifies one R1, R2, or R3 move between them. Preserve the enumerator order and retain duplicates.
5. Return the accumulated list.

The bound $c+2$ includes every one-move result because R1 changes crossing count by one, R2 by two, and R3 by zero. This procedure lists candidates one move away; it does not decide whether two arbitrary codes are related by any number of moves.

## Definition references

[[def-planar-diagram-gauss-and-dowker-codes]]

[[alg-planar-code-validation-and-diagram-reconstruction]]

[[alg-enumerate-diagrams-up-to-crossing-bound]]

[[def-oriented-reidemeister-moves]]

[Calegari, *Introduction to Knot Theory* (2025), §1.2](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Erickson, *Planar Graphs*, Rotation Systems](https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html)


## Remarks

The schematic shows one R2 certificate with four cyclically ordered cut points $p_1,p_2,p_3,p_4$ on the dashed disk boundary. Each boundary segment between consecutive cut points lies in a face; these segments illustrate the face-pairing arcs. The marked point $\infty$ is outside the selected disk $D$. The two outside arcs are identical in both panels and join $p_2$ to $p_3$ and $p_4$ to $p_1$, giving a one-component diagram. Their identity is the outside-record isomorphism fixing the boundary labels and infinity region.

```tikz
\begin{tikzpicture}[scale=1.05]
\begin{scope}
\draw[dashed] (0,0) circle (1.35);
\draw (-1.2,0.62) .. controls (-2,0.62) and (-2,-0.62) .. (-1.2,-0.62);
\draw (1.2,0.62) .. controls (2,0.62) and (2,-0.62) .. (1.2,-0.62);
\draw (-1.2,-0.62) -- (-0.7,-0.62);
\draw (-0.5,-0.62) -- (0.5,-0.62);
\draw (0.7,-0.62) -- (1.2,-0.62);
\draw[rounded corners=5pt] (-1.2,0.62) -- (-0.6,0.62) -- (-0.6,-0.92) -- (0.6,-0.92) -- (0.6,0.62) -- (1.2,0.62);
\draw[->] (-1.05,0.62) -- (-0.82,0.62);
\draw[->] (0.25,-0.62) -- (0,-0.62);
\node at (0,1.05) {$D$};
\node at (0,1.8) {$\infty$};
\node at (-1.2,0.83) {$p_1$};
\node at (1.2,0.83) {$p_2$};
\node at (1.2,-0.85) {$p_3$};
\node at (-1.2,-0.85) {$p_4$};
\node at (0,-1.75) {two crossings};
\end{scope}
\draw[<->] (2.1,0) -- (2.9,0) node[midway,above] {R2};
\begin{scope}[xshift=5cm]
\draw[dashed] (0,0) circle (1.35);
\draw (-1.2,0.62) .. controls (-2,0.62) and (-2,-0.62) .. (-1.2,-0.62);
\draw (1.2,0.62) .. controls (2,0.62) and (2,-0.62) .. (1.2,-0.62);
\draw (-1.2,0.62) -- (1.2,0.62);
\draw (-1.2,-0.62) -- (1.2,-0.62);
\draw[->] (-1.05,0.62) -- (-0.82,0.62);
\draw[->] (0.25,-0.62) -- (0,-0.62);
\node at (0,1.05) {$D$};
\node at (0,1.8) {$\infty$};
\node at (-1.2,0.83) {$p_1$};
\node at (1.2,0.83) {$p_2$};
\node at (1.2,-0.85) {$p_3$};
\node at (-1.2,-0.85) {$p_4$};
\node at (0,-1.75) {no crossings};
\end{scope}
\end{tikzpicture}
```

The strand from $p_1$ to $p_2$ passes over the strand from $p_3$ to $p_4$ at both crossings (gaps mark the under-strand). In the usual positively oriented drawing plane, the determinant convention in the code definition gives sign $-1$ at the left crossing and $+1$ at the right crossing: the over-strand points downward and upward respectively, while the under-strand points leftward. The disk contains exactly these two strands, with no extra component. This illustrates one orientation/sign variant only; the finite comparison rules still test all R1, R2 and R3 variants and all recorded decorations. The illustration does not replace any of the incidence or template tests in the algorithm.
