---
id: "thm-cellular-approximation-for-maps-of-cw-pairs"
kind: "theorem"
title: "Cellular approximation for maps of CW pairs"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["prop-relative-cw-inclusions-are-cofibrations","def-cw-complex-with-closure-finiteness-and-weak-topology","def-skeleta-cw-subcomplex-and-relative-cw-complex","lem-compact-cw-images-have-finite-cell-support-without-choice","lem-a-low-dimensional-disk-can-be-pushed-off-a-higher-cell","thm-the-exponential-law","thm-heine-borel-rn","thm-compactness-agrees-with-metric-compactness","def-axiom-of-choice","thm-recursion","lem-finite-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Theorem 4.8 and Lemma 4.10; May Chapter 10 §4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $(X,A)$ and $(Y,B)$ be CW pairs with supplied characteristic maps, and let $f:(X,A)\to(Y,B)$ be continuous and cellular on $A$. If $X\setminus A$ has finitely many cells, then, without any choice principle, $f$ is homotopic rel $A$ through maps of pairs to a cellular map $g$, meaning $g(X^n)\subseteq Y^n$ for every $n\ge0$. Assuming the Axiom of Choice, the same conclusion holds for an arbitrary set of relative cells.

If two cellular maps of pairs are homotopic rel $A$, they have a cellular homotopy rel $A$: the homotopy can be taken cellular as a map $X\times I\to Y$ for the product CW structure, with its prescribed end maps. This conclusion is choice-free for a finite relative source and uses AC for an arbitrary relative source. Here cellular homotopy refers to the cylinder map; it does not require every time slice to be cellular on $X$.

## Facts & Assumptions

[F1] [[prop-relative-cw-inclusions-are-cofibrations]] gives the homotopy extension property for every CW pair with ordinary cylinder topology, without choice.

[F2] [[def-cw-complex-with-closure-finiteness-and-weak-topology]] and [[def-skeleta-cw-subcomplex-and-relative-cw-complex]] give characteristic maps, closure finiteness, weak topology and the subcomplex condition.

[F3] [[lem-compact-cw-images-have-finite-cell-support-without-choice]] places the image of each compact characteristic disk in a finite CW subcomplex without choice.

[F4] [[lem-a-low-dimensional-disk-can-be-pushed-off-a-higher-cell]] deforms a map $I^n\to W\cup e^k$, $n<k$, into $W$, fixing the inverse image of $W$, without choice and for nonregular attaching maps.

[F5] [[thm-the-exponential-law]] for the interval gives continuous transposition to $C(I,Y)$ for arbitrary spaces. [[thm-heine-borel-rn]] and [[thm-compactness-agrees-with-metric-compactness]] give compactness of characteristic disks and cylinders; dimension zero is a singleton.

[F6] [[thm-recursion]] iterates a specified successor function on a set without choice. [[lem-finite-choice]] supplies every finite selection in ZF.

[A1] [[def-axiom-of-choice]] is assumed only for the arbitrary-relative-cell assertion, to select available disk deformations and HEP extensions over sets of problems. The finite assertion does not assume it.

## Proof

**Given:** The pairs and map in the statement. Write $D_n=A\cup X^n$, with $D_{-1}=A$.

1.1 For any map $u:(D^n,S^{n-1})\to(Y,Y^{n-1})$, [F3] gives a finite target subcomplex $T$ containing its image. A cube and a Euclidean disk are homeomorphic as pairs: after centering the cube, the radial map sends a nonzero vector $v$ to $v\|v\|_\infty/\|v\|_2$, with inverse $w\|w\|_2/\|w\|_\infty$ and zero mapped to zero. Thus [F4] applies to disk domains as well. If $T$ has cells of dimension greater than $n$, take a cell of maximum dimension. Removing its interior leaves a subcomplex $W$, since no boundary of any remaining cell can meet that maximum-dimensional interior. Apply [F4] to move the disk off this cell. Its boundary remains fixed because its image is in $Y^{n-1}$ and misses that cell. Repeat in the smaller finite subcomplex until no cell of dimension greater than $n$ remains. The resulting homotopy is rel boundary and ends in $Y^n$. This is a finite argument with finite selections, including when the finite subcomplex has cells not met by $u$. For $n=0$ the boundary is empty and [F4] moves the one-point map to a vertex. [F2, F3, F4, F5, given]

1.2 We will use the following continuity criterion. A function $H:Z\times I\to Y$ on a CW complex is continuous if its composite with every characteristic disk cylinder is continuous. First, its pointwise transpose to $C(I,Y)$ is well defined, since every point lies in a characteristic disk. By [F5] the transpose is continuous after every characteristic map. The latter maps are quotient onto their closed-cell images: each is a continuous surjection from a compact disk to a Hausdorff space and is closed, as compact images of closed disk subsets are closed. Thus the transpose is continuous on every closed cell. The weak topology [F2], applied to inverse images of closed subsets of $C(I,Y)$, makes it continuous on $Z$, and [F5] uncurries it. The compact-image and closedness argument, with no metric assumed on a closed cell, is also given explicitly in the proof of [F1]. The same criterion applies to subcomplexes. [F1, F2, F5]

2.1 Suppose a current map $f_{n-1}:X\to Y$ is cellular on $D_{n-1}$ and agrees with $f$ on $A$. On each $n$-cell outside $A$, apply step 1.1 to $f_{n-1}$ composed with its characteristic map. Its boundary is mapped into $Y^{n-1}$ by the induction hypothesis. The resulting disk homotopies fix all boundary fibers, so they descend and agree with the stationary homotopy on $D_{n-1}$. They give a homotopy on $D_n$, ending cellularly on $D_n$ and fixed on $A\cup X^{n-1}$. On a closed cell in $A$ it is constant; on each new $n$-disk it is the specified deformation; on lower cells it is constant. Step 1.2 proves continuity even when $A$ has arbitrarily high-dimensional cells. Extend this homotopy to $X$ using [F1] for the subcomplex $D_n$, and call its endpoint $f_n$. The extension is still fixed on $A\cup X^{n-1}$. [F1, F2, step 1.1, step 1.2]

2.2 We verify the cylinder CW structure used in the remaining assertion. Give $I$ its two endpoint vertices and one open edge. The cells of $X\times I$ are $e^r\times\{0\}$, $e^r\times\{1\}$ and $e^r\times(0,1)$, with characteristic domains $D^r$ and $D^r\times I$. The last is a closed $(r+1)$-disk as a pair: center its interval coordinate and use the radial homeomorphism between the unit balls of the Euclidean norm and the norm $\max(\|u\|_2,|s|)$, extending by zero at the origin. Their boundaries land in the union of lower-dimensional cells, and closure finiteness follows from that of $X$. These cells have exactly the ordinary product topology. Indeed the map from the disjoint union of characteristic disks onto $X$ is quotient by [F2] and the compact-Hausdorff quotient test in step 1.2. Its product with $I$ is quotient: transpose a proposed map out of the product by [F5], descend its transpose through the quotient, then untranspose. Applying this test to characteristic functions into the two-point space with opens $\varnothing,\{1\},\{0,1\}$ proves the assertion for open subsets, hence for the quotient topology itself. Thus the characteristic prisms test closed sets. To check the attachment topology on the $d$-skeleton $P_d$, suppose $C\subseteq P_d$ has closed preimage under each characteristic map of dimension at most $d$. Its intersection with each such closed cell is closed, by the compact-Hausdorff quotient test, hence closed in the whole product. In any other closed cell $Q$, closure finiteness gives finitely many cells of dimension at most $d$ meeting $Q$. The set $C\cap Q$ equals the intersection of $Q$ with the union of $C$ intersected with the closures of those finitely many cells. It is therefore closed in $Q$. The full weak topology now makes $C$ closed in the product. This proves both that $P_d$ is closed and that its topology is tested on its characteristic disks. Testing a map from $P_{d-1}$ and the $d$-disks is consequently exactly the cell-attachment quotient criterion. This verifies the CW topology, not just its set of cells. [F2, F5, step 1.2]


3.1 If there are finitely many cells outside $A$, use [F6] to make the finitely many disk-deformation and HEP-extension selections required in step 2.1 at each stage, and stop at their maximum dimension $N$. Only finitely many stages and finite selections are required; the existence of each extension is [F1], regardless of the size of $A$. Concatenating the finitely many homotopies gives a homotopy rel $A$ ending in a map cellular on $D_N=X$. If there are no relative cells, use the constant homotopy of $f$, already cellular on $A=X$. Throughout the homotopy, points of $A$ retain their original images in $B$, so every time slice is a map of pairs. [F1, F6, step 2.1]

3.2 For arbitrary relative cells assume [A1]. There is a set of all problems $(n,u)$ in step 1.1: continuous maps are subsets of the fixed sets $D^n\times Y$, and take the union over $n\in\mathbb N$. Each has a nonempty set of boundary-fixed homotopies with endpoint in $Y^n$, by step 1.1. There is likewise a set of all HEP extension problems that can occur in step 2.1: their subcomplex maps, prescribed homotopies and candidate extensions are subsets of fixed products formed from $X$, $I$ and $Y$, and [F1] says that each resulting set of candidate extensions is nonempty. AC supplies choice functions for both families. Using these two fixed functions at every characteristic disk and every HEP step makes the successor construction in step 2.1 specified. Apply [F6] to the state consisting of a stage number and a finite history of maps and homotopies; the collection of these histories is a set. Recursion over $n=0,1,\ldots$ gives the maps $f_n$ and homotopies $H_n$ without another selection of a sequence of existential witnesses. The cell family may be arbitrary and dimensions unbounded. The HEP assertion [F1] is choice-free for each individual problem; the global selection of one extension for every problem used by the recursion is part of the stated use of AC. [A1, F1, F6, step 1.1, step 2.1]

4.1 Run $H_n$ on $[1-2^{-n},1-2^{-(n+1)}]$, rescaled linearly, beginning with $n=0$. For $x\in X^r$, every stage after $r$ fixes $x$, so define $g(x)=f_r(x)$ and put $H(x,1)=g(x)$. These prescriptions agree where skeleta overlap and at adjacent time endpoints. On the image of any characteristic $r$-disk the cylinder map consists of the finitely many stages through $r$ followed by the constant endpoint map. It is continuous, including at time one, by finite pasting. The criterion of step 1.2 therefore makes $H:X\times I\to Y$ continuous. Its endpoint sends $X^r$ into $Y^r$, and it fixes $A$ at every time. This proves the arbitrary-cell conclusion with its stated assumption. [step 1.2, step 2.1, step 3.2]

5.1 Let $f_0,f_1$ be cellular and let $K:X\times I\to Y$ be a homotopy rel $A$ between them. In the CW structure of step 2.2 the subspace $$E=(X\times\{0,1\})\cup(A\times I)$$ is a subcomplex. The restriction $K|_E$ is cellular: on endpoint cells this is the cellularity of $f_0,f_1$; on $e^r\times(0,1)$ for a cell of $A$, it is the fixed value $f_0(e^r)\subseteq Y^r\subseteq Y^{r+1}$. Apply the first assertion, proved above, to the pair $(X\times I,E)$ with target pair $(Y,Y)$. It gives a cellular map $K'$ agreeing with $K$ on $E$. Hence $K'$ is the required homotopy with exactly the prescribed endpoints and constant track on $A$. There is precisely one relative cell $e^r\times(0,1)$ for each cell outside $A$; therefore the finite and arbitrary choice clauses apply exactly as stated. [step 2.2, step 3.1, step 4.1]

6.1 Empty $X$ or zero relative cells give the constant construction, and zero-cells were handled in step 1.1 without a boundary condition. An infinite-dimensional $A$ is harmless in the finite clause because its entire homotopy is fixed. The arbitrary concatenation is checked at its accumulating endpoint on every characteristic disk, not only pointwise. Each intermediate map sends $A$ into $B$, and $K'$ also does so because it is fixed on $A\times I$. No claim is made that all slices of $K'$ preserve every skeleton; its product-cell statement is the one established in step 5.1. This proves every assertion with the indicated choice boundary. [step 1.1, step 3.1, step 4.1, step 5.1] ∎
