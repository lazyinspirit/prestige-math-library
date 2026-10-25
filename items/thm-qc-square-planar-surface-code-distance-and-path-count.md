---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-qc-square-planar-surface-code-distance-and-path-count.json
  precheck: pass
id: thm-qc-square-planar-surface-code-distance-and-path-count
kind: theorem
title: Square planar surface-code distance and path count
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qc-generator-and-parity-check-matrices
  - def-qc-square-planar-surface-code
  - def-qc-stabilizer-distance
  - def-qc-stabilizer-syndrome-and-logical-operators
  - thm-qc-css-encoding-dimension-and-commutation
  - thm-qc-pauli-commutator-is-symplectic-pairing
  - thm-rank-nullity
  - thm-dimension-of-a-linear-subspace
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof is finite binary linear algebra on an explicit grid."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: 'John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction'
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: Eric Dennis, Alexei Kitaev, Andrew Landahl, and John Preskill, Topological quantum memory
      url: https://www.preskill.caltech.edu/pubs/preskill-2002-memory.pdf
---

## Statement

For the relative $d\times d$ square patch of
[[def-qc-square-planar-surface-code]], the code encodes one logical qubit and
has stabilizer distance $d$. Every nontrivial Z logical class contains a
rough-to-rough path of length at least $d$, and a straight row attains $d$.
Every nontrivial X logical class contains a top-to-bottom dual path of length
at least $d+1$. For each $\ell\ge1$, the number of self-avoiding
rough-to-rough paths of length $\ell$ is at most $(d+1)3^\ell$.

## Facts & Assumptions

**Given:** The relative boundary matrices of the square patch, its CSS
stabilizer, and the logical Pauli quotient convention.

[F1] [[def-qc-square-planar-surface-code]]: the $d\times d$ relative grid
has $2d^2$ physical edges with left and right rough boundary edges removed;
the maps satisfy $\partial_1\partial_2=0$, X checks are rows of
$\partial_1$, and Z checks are face boundaries with rough edges deleted.

[F2] [[thm-qc-css-encoding-dimension-and-commutation]]: if
$C_2\subseteq C_1$, the CSS code encodes
$\dim C_1-\dim C_2$ qubits, with X checks from $C_2$ and Z checks from
$C_1^\perp$.

[F3] [[def-qc-stabilizer-syndrome-and-logical-operators]]: a Pauli is in
the normalizer exactly when it commutes with every stabilizer generator;
logical Paulis are the normalizer modulo scalar phases and stabilizers.

[F4] [[def-qc-stabilizer-distance]]: distance is the minimum Pauli weight
in $N(S)\setminus Z_nS$ when the code encodes a qubit.

[F5] [[thm-rank-nullity]]: for a finite matrix, the dimension of its domain
is the sum of its kernel dimension and rank.

[F6] [[thm-qc-pauli-commutator-is-symplectic-pairing]]: two Pauli operators
commute exactly when their binary symplectic pairing is zero.

[F7] [[def-qc-generator-and-parity-check-matrices]]: a matrix row specifies
a binary support vector in the declared coordinate order.

[F8] [[thm-dimension-of-a-linear-subspace]]: finite-dimensional subspaces
admit basis extension.

## Proof


1.1 The grid has $d(d+1)$ horizontal and $d(d+1)$ vertical edges. Removing the $2d$ rough vertical edges leaves $n=2d^2$ physical edges. The grid has $(d+1)^2$ vertices, of which the two rough sides contain $2(d+1)$ distinct vertices; hence $Q_0$ has $(d-1)(d+1)=d^2-1$ coordinates. There are $d^2$ faces. [F1, given, algebra]

1.2 The columns of $\partial_2$ are independent. If a face combination $b\in Q_2$ has zero boundary, its coefficient on each top horizontal physical edge is the coefficient of the unique face immediately below that edge, so all top-row face coefficients vanish. On the next horizontal row, each boundary coefficient is the sum of the face coefficients immediately above and below; the already-zero top row forces the next row to vanish. Repeating downward gives $b=0$. Hence $\operatorname{rank}\partial_2=d^2$. [F1, given, algebra]

1.3 A self-avoiding left-to-right path starts with one of the $d+1$ horizontal edges from a left rough vertex into the patch. At each subsequent vertex the square grid has at most four incident edges, and the edge just used cannot be immediately traversed backwards, leaving at most three choices. Thus for length $\ell\ge1$ there are at most $(d+1)3^{\ell-1}\le(d+1)3^\ell$ such paths. [F1, algebra]

2.1 The rows of $\partial_1$ are independent. Indeed, a linear combination of rows with coefficients $a_v$ that vanishes on every physical edge has $a_u+a_v=0$ at the endpoints of each such edge, where $a_v=0$ on $R$. Every vertex outside $R$ is connected to $R$ by a horizontal path of physical edges, so these equations force every $a_v=0$. [F1, step 1.1, algebra]

3.1 For a finite binary matrix $A$ with $p$ independent rows, its map into $\mathbb F_2^p$ is onto. Otherwise its image is a proper subspace; by [F8], extend a basis of that image to a basis of $\mathbb F_2^p$ and choose an added basis vector $w$. Define a linear functional to be $1$ on $w$ and $0$ on every other vector of this basis. It is nonzero and vanishes on the image. In standard coordinates it is dot product with a nonzero coefficient vector, which gives a nontrivial linear combination of the rows of $A$ equal to zero, a contradiction. Thus the map rank is $p$. Apply this argument to $\partial_1$, using step 2.1, and to $\partial_2^{\mathsf T}$, whose rows are independent because they are the transposes of the independent columns of $\partial_2$ from step 1.2. Hence $\operatorname{rank}\partial_1=d^2-1$ and $\operatorname{rank}\partial_2^{\mathsf T}=d^2$; also $\operatorname{rank}\partial_2=d^2$ by the independent columns in step 1.2. [F8, step 1.2, step 2.1, algebra]

4.1 Put $C_2=\operatorname{row}(\partial_1)$ and $C_1=\ker(\partial_2^{\mathsf T})$. The chain identity from [[def-qc-square-planar-surface-code]] gives $C_2\subseteq C_1$. The independent rows in step 2.1 give $\dim C_2=d^2-1$, and [F5] with the map rank from step 3.1 gives $\dim C_1=2d^2-\operatorname{rank}(\partial_2^{\mathsf T})=d^2$. The CSS dimension theorem [F2] therefore gives $k=\dim C_1-\dim C_2=1$. [F2, F5, F7, step 2.1, step 3.1, algebra]

4.2 A Z-type Pauli with edge support $z$ commutes with every X check exactly when $\partial_1z=0$, so its support is a relative cycle. The Z-type stabilizers are exactly $\operatorname{im}\partial_2$, hence Z logical classes are $\ker\partial_1/\operatorname{im}\partial_2$. The chain identity gives $\operatorname{im}\partial_2\subseteq\ker\partial_1$. Extend a basis of $\operatorname{im}\partial_2$ to a basis of $\ker\partial_1$ using [F8]; the added basis vectors project to a basis of the quotient, since they span it and no nonzero combination of them lies in $\operatorname{im}\partial_2$. Therefore $\dim(\ker\partial_1/\operatorname{im}\partial_2)=\dim\ker\partial_1-\dim\operatorname{im}\partial_2$. By [F5], step 1.1 and step 3.1 give $\dim\ker\partial_1=n-\operatorname{rank}\partial_1=2d^2-(d^2-1)=d^2+1$ and $\dim\operatorname{im}\partial_2=\operatorname{rank}\partial_2=d^2$, so the quotient dimension is $1$. [F1, F3, F5, F6, F8, step 1.1, step 3.1]

5.1 For a relative cycle $z$, let $q_i(z)$ be the parity of its selected horizontal edges between columns $i$ and $i+1$, for $i=0,\ldots,d-1$. Summing the relative vertex-boundary equations over columns $1,\ldots,i$ cancels every interior edge twice and leaves only the two cut sets, so $q_0(z)=q_i(z)$. Each face boundary has either zero or two horizontal edges in a given column strip, so $q_i$ vanishes on $\operatorname{im}\partial_2$. The straight horizontal row $z_0$ has $q_i(z_0)=1$ for every $i$, and is therefore not a relative boundary. Since the quotient in step 4.2 is one-dimensional, every nonzero Z logical class has all $q_i=1$; it must contain at least one horizontal edge in each of the $d$ disjoint strips. Thus its weight is at least $d$, and $z_0$ attains $d$. [F1, F3, step 4.2, algebra]

6.1 In the edge subgraph of a relative cycle, every vertex outside $R$ has even degree, so all odd-degree vertices lie in $R$. The handshake identity $\sum_v\deg(v)=2|E|$ shows there are an even number of them. Add one dummy vertex joined to each odd boundary vertex; every degree in the augmented finite graph is now even. Starting with any unused edge, follow unused edges: at a vertex other than the start, the number of used incident edges is odd, so its even total degree leaves an unused edge. Finiteness therefore closes the trail at its start. Removing this closed trail preserves even degrees; repeating decomposes all edges into closed trails. Deleting dummy edges leaves cycles and paths with endpoints in $R$. Across any vertical cut, a cycle crosses evenly and a path crosses oddly exactly when its endpoints lie on opposite sides. Since $q_i=1$, at least one path joins the left and right rough sides. Removing repeated-vertex loops leaves a self-avoiding such path contained in the support. It crosses each of the $d$ disjoint vertical cuts, so its length is at least $d$. [step 5.1, construct, algebra]

6.2 For X-type supports, use the dual graph with one vertex per face and top and bottom exterior vertices, and one dual edge crossing each physical primal edge. The normalizer condition makes each face vertex even-degree, and X checks are the dual boundaries around vertices outside $R$. Their quotient has dimension $\dim(C_1/C_2)=1$ by step 4.1. A straight dual path from top to bottom is in the normalizer because it enters and leaves each face, and it crosses the straight Z logical row once. Since that Z cycle commutes with every X check, this odd intersection shows the dual path is not an X check; it represents the nonzero class. [F1, F2, F3, F6, step 4.1, step 4.2, step 5.1, algebra]

7.1 For an X support $x$, let $q'_j(x)$ be the parity of selected horizontal primal edges in row $j$, for $j=0,\ldots,d$. Each X stabilizer has either zero or two such edges in each row, so every $q'_j$ vanishes on the X stabilizer space. The straight dual path from step 6.2 has $q'_j=1$ for all $j$. Since the X logical quotient is one-dimensional, every nontrivial class has $q'_j=1$ in each of the $d+1$ disjoint rows. Its weight is therefore at least $d+1$. In the dual support graph every face vertex has even degree, so the finite even-degree decomposition from the path argument in step 6.1, now with top and bottom exterior vertices as boundary vertices, splits it into cycles and paths ending at those exterior vertices. A cycle and a path with both endpoints at the same exterior vertex cross each horizontal cut evenly; since every $q'_j=1$, at least one path joins top to bottom. Every such path has length at least $d+1$, and the straight dual path attains this bound. [F1, F3, step 6.1, step 6.2, algebra]

8.1 Step 5.1 and step 6.1 show that every nontrivial Z logical support contains a self-avoiding left-to-right path, so the path count bounds the number of candidate logical paths of each length. Step 5.1 and step 7.1 give minimum nontrivial Z and X logical weights $d$ and $d+1$, respectively. For a general normalizer Pauli $i^aX^xZ^z$, the CSS commutation equations require $X^x$ and $Z^z$ separately to normalize the checks. If both components are scalar-phase stabilizers then so is their product, so a nontrivial general class has at least one nontrivial component. Its physical support contains the support of each component, since an overlap gives a nonidentity $Y$ factor rather than cancellation. Thus its weight is at least $\min(d,d+1)=d$, and the straight Z row attains $d$. Since $k=1$ by step 4.1, [F4] gives stabilizer distance $d$. [F4, step 4.1, step 5.1, step 6.1, step 7.1, algebra] ∎

## Remarks

The count is a combinatorial upper bound on candidate paths, not a decoding
failure probability. The proof uses the exact relative cellulation and no
diagram.

For $d=3$, the picture overlays a primal Z row (cyan) and a dual X path
(orange). Solid grid edges are the $18=2d^2$ physical qubits; the six dashed
vertical edges on the rough sides, together with their vertices, form $R$.
Small grid dots indicate primal vertices, and the three orange interior dots
are face centers. Only the selected dual path is drawn, not the full dual
graph; its endpoints $t$ and $b$ are the top and bottom exterior vertices.

```tikz
\begin{tikzpicture}[scale=1.35]
  \draw (0,0)--(3,0) (0,1)--(3,1) (0,2)--(3,2) (0,3)--(3,3);
  \draw (1,0)--(1,3) (2,0)--(2,3);
  \draw[dashed] (0,0)--(0,3) (3,0)--(3,3);
  \draw[cyan,very thick] (0,1)--(3,1);
  \draw[orange,very thick] (1.5,3.5)--(1.5,2.5)--(1.5,1.5)--(1.5,0.5)--(1.5,-0.5);
  \foreach \i in {0,1,2,3} {
    \foreach \j in {0,1,2,3} { \fill (\i,\j) circle (1pt); }
  }
  \foreach \j in {0.5,1.5,2.5} { \fill[orange] (1.5,\j) circle (2pt); }
  \fill[orange] (1.5,3.5) circle (2pt);
  \fill[orange] (1.5,-0.5) circle (2pt);
  \node[left] at (0,1.5) {$R$};
  \node[right] at (3,1.5) {$R$};
  \node[right,cyan] at (3,1) {$Z:\ 3$ edges};
  \node[right,orange] at (3,2.5) {$X:\ 4$ edges};
  \node[above] at (1.5,3.5) {$t$};
  \node[below] at (1.5,-0.5) {$b$};
\end{tikzpicture}
```

The Z row crosses the three vertical cuts $x=i+\tfrac12$ once each
($i=0,1,2$), so its $q_i$ are all $1$, as in step 5.1. The X path crosses
one horizontal physical edge in each row $j=0,1,2,3$, so its $q'_j$ are all
$1$, as in steps 6.2 and 7.1. The two supports share exactly the physical
edge from $(1,1)$ to $(2,1)$: their primal/dual crossing illustrates the odd
binary pairing. The rigorous proof above is independent of this picture.
