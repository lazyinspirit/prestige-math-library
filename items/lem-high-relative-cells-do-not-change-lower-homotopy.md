---
id: "lem-high-relative-cells-do-not-change-lower-homotopy"
kind: "lemma"
title: "High relative cells do not change lower homotopy"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-n-connected-cw-pair","lem-compact-cw-images-have-finite-cell-support-without-choice","lem-a-low-dimensional-disk-can-be-pushed-off-a-higher-cell","def-skeleta-cw-subcomplex-and-relative-cw-complex","def-higher-homotopy-group-by-based-cubes","prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant","thm-heine-borel-rn","thm-compactness-agrees-with-metric-compactness","lem-finite-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Corollary4.9, Lemma4.10 and the
        cell-attachment argument on pp351–353; relative compact-domain proof
        supplied locally
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $(X,A)$ be a CW pair all of whose cells outside $A$ have dimension at least $n\ge1$. For every $0\le i<n$, every continuous $u:I^i\to X$ has a homotopy to a map into $A$ that fixes $u^{-1}(A)$ throughout. Consequently:

- $(X,A)$ is $(n-1)$-connected.
- $\pi_0(A)\to\pi_0(X)$ is surjective, and is bijective if $n\ge2$.
- At every $a\in A$, the homomorphism $\pi_i(A,a)\to\pi_i(X,a)$ is an isomorphism for $1\le i<n-1$ and is surjective for $i=n-1\ge1$.

The basepoint need not be a vertex. No choice principle is used, regardless of the number or dimensions of the cells of $A$ or $X$.

## Facts & Assumptions

[F1] [[def-n-connected-cw-pair]] characterizes connectivity by full-boundary-fixed disk compression, including the zero-disk component clause.

[F2] [[lem-compact-cw-images-have-finite-cell-support-without-choice]] puts the image of each specified compact-domain map into a finite CW subcomplex, without choosing such subcomplexes for all maps at once.

[F3] [[lem-a-low-dimensional-disk-can-be-pushed-off-a-higher-cell]] pushes $I^i$ off a higher-dimensional last cell of a finite CW complex, fixing its entire inverse image of the remaining subcomplex.

[F4] [[def-skeleta-cw-subcomplex-and-relative-cw-complex]] gives the subcomplex and cell-boundary conditions.

[F5] [[def-higher-homotopy-group-by-based-cubes]] defines based classes and nullhomotopies with the whole cubical boundary fixed. [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]] gives induced homomorphisms.

[F6] [[thm-heine-borel-rn]] and [[thm-compactness-agrees-with-metric-compactness]] give compactness of cubes, including the singleton zero-cube. [[lem-finite-choice]] justifies a finite succession of witness selections without AC.

## Proof

**Given:** The CW pair, the integer $n$ and a specified map $u:I^i\to X$ with $i<n$.

1.1 By [F6] the domain is compact, and [F2] supplies a finite subcomplex $T\subseteq X$ containing its image. If $T\subseteq A$, the constant homotopy suffices. Otherwise take a cell $e$ of largest dimension among the finitely many cells of $T$ outside $A$. Its dimension $k$ is at least $n>i$. The complement $W=T\setminus e$ is a subcomplex: a cell in $A$ has its entire closure in $A$ and cannot meet $e$; any other remaining cell has dimension at most $k$, and its boundary consists of strictly lower-dimensional cells, so cannot meet the distinct $k$-cell $e$. Thus $T$ is obtained from $W$ by this one $k$-cell, even if $T\cap A$ has cells of dimension greater than $k$. [F2, F4, F6, given]

2.1 Apply [F3] to deform $u$ into $W$. Since $W$ contains $T\cap A$, this deformation fixes every point of the original $u^{-1}(A)$. Repeat with the current map and the smaller finite subcomplex $W$, each time choosing a cell of maximal dimension outside $A$. The number of such cells strictly decreases, so finitely many applications end in $T\cap A$. At every stage the original points of $u^{-1}(A)$ still have their original values in $A$, hence are fixed by every subsequent deformation. Concatenating the finite list gives the claimed homotopy. Its choices form only a finite sequence [F6]; no sequence over all maps or cells of $X$ is selected. This proof also works for $i=0$. [F3, F6, step 1.1]

3.1 A Euclidean disk and cube are homeomorphic as pairs: on the centered cube the radial map $v\mapsto v\|v\|_\infty/\|v\|_2$, with zero sent to zero, has inverse $w\mapsto w\|w\|_2/\|w\|_\infty$. Thus step 2.1 applies to each disk map of dimension less than $n$, fixing its boundary when that boundary maps into $A$. By [F1] the pair is $(n-1)$-connected. In dimension zero it gives a path from any point of $X$ into $A$, proving surjectivity on components. If $n\ge2$, a path in $X$ between two points of $A$ has dimension one less than $n$; compress it by step 2.1 fixing both endpoints to obtain a path in $A$. Hence two $A$ components cannot merge in $X$, proving component injectivity. [F1, step 2.1]

3.2 Let $a\in A$ and $1\le i<n$. A based $i$-cube in $X$ has its boundary in $A$, so step 2.1 compresses it into $A$ while fixing that boundary at $a$. The resulting based class maps to the original class; thus the inclusion is surjective on $\pi_i$. If also $i+1<n$ and a based cube in $A$ represents an element of the kernel, take its based nullhomotopy $I^i\times I\to X$. The entire boundary of this $(i+1)$-cube lies in $A$: the bottom is the given cube, the top is constant, and the side boundary is constantly $a$. Step 2.1 compresses this map into $A$ fixing that whole boundary, giving a based nullhomotopy in $A$. Hence the induced homomorphism has trivial kernel and is injective. This works for the nonabelian degree-one group as well and uses no vertex restriction on $a$. [F5, step 2.1]

4.1 If there are no relative cells the compression is constant. If $A$ is empty, the no-low-cell hypothesis forces $X$ empty: a nonempty CW complex contains a zero-cell, since descending through the nonempty boundary image of any positive-dimensional characteristic disk eventually reaches dimension zero. Thus there is no map of a nonempty cube into $X$ in this case, and the component map is the bijection of empty sets. The case $n=1$ asserts only the zero-disk compression and component surjectivity, with no positive-degree surjection at the undefined relative degree zero. At $i=n-1\ge1$ surjectivity was proved, but injectivity would require a dimension-$n$ compression, which was not assumed or claimed. Equal endpoints, constant maps and nonregular attaching maps retain their fixed inverse-image data in step 2.1. Steps 3.1 and 3.2 prove all the consequences, and every selection was finite. [F4, step 1.1, step 2.1, step 3.1, step 3.2] ∎
