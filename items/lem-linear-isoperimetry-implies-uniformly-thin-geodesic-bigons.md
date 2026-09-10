---
id: "lem-linear-isoperimetry-implies-uniformly-thin-geodesic-bigons"
kind: "lemma"
title: "Linear isoperimetry implies uniformly thin geodesic bigons"
deps: ["def-group-presentation", "def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation", "def-axiom-of-choice", "thm-linear-relator-area-implies-slim-geodesic-triangles", "lem-uniform-filling-data-give-a-uniform-slimness-bound", "lem-relator-disks-give-area-controlled-coarse-fillings", "def-hg-toolkit-hyperbolic-group-and-stable-length", "lem-slim-triangles-imply-the-gromov-product-inequality", "lem-the-gromov-product-inequality-implies-the-four-point-condition", "lem-the-four-point-condition-implies-slim-triangles"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Druţu–Kapovich, revised Proposition 9.104, Proposition 11.176 and Theorem 11.181"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---


## Statement

Assume the Axiom of Choice. For a finite presentation with relator lengths at most $L\ge0$ and $\operatorname{Area}(w)\le K|w|$ for every null word, $K\ge0$, the geometric Cayley graph has uniformly slim geodesic triangles, with a constant depending only on $K,L$. Consequently its geodesic bigons are uniformly thin. The assertion uses the toolkit's labelled unit-edge realization, retaining loops and parallel edges.

In fact, if $\delta_0(K,L)$ is the common slimness bound for the simple unit-edge Cayley realizations supplied by the uniform filling lemma, then $12\delta_0(K,L)+8$ is a bound for these labelled realizations. No explicit numerical formula for $\delta_0$ is asserted.

## Facts & Assumptions

**Given:** The finite presentation, nonnegative $K,L$, the stated inequality for every null word, and AC.

[F1] The finite presentation and algebraic relator area mean the quotient by the normal closure and least number of conjugated relators, respectively ([[def-group-presentation]], [[def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation]]).

[F2] Under AC the simple unit-edge realization has the common triangle-minsize bound $A(K,L)\sqrt{P+7}+B(L)$ by [[thm-linear-relator-area-implies-slim-geodesic-triangles]], and the point-wedge argument supplies a common finite slimness bound $\delta_0(K,L)$ by [[lem-uniform-filling-data-give-a-uniform-slimness-bound]].

[F3] The simple realization is geodesic and induces the vertex word metric by [[lem-relator-disks-give-area-controlled-coarse-fillings]]. The labelled realization, including loops and parallel edges, is geodesic and has the same vertex metric by [[def-hg-toolkit-hyperbolic-group-and-stable-length]]. These metric constructions do not require hyperbolicity as an input.

[F4] Slimness $\delta_0$ implies the product inequality with constant $3\delta_0$ by [[lem-slim-triangles-imply-the-gromov-product-inequality]]. The product and four-point conditions have the same constant by [[lem-the-gromov-product-inequality-implies-the-four-point-condition]], and a geodesic space with four-point constant $\kappa$ has $4\kappa$-slim triangles by [[lem-the-four-point-condition-implies-slim-triangles]].

[F5] AC has the family-of-nonempty-sets meaning of [[def-axiom-of-choice]]. Its uses in F2 are free-ultrafilter extension, the representative side and violating-triangle selections in the cone criterion, and the countable presentation selection in the uniformity proof.

## Proof

1.1 Write $X_0$ for the simple realization and $X$ for the labelled realization of the same presented group and generating alphabet. In $X_0$, identity letters are constant paths and parallel labels share a single edge; in $X$ all prescribed labelled edges are retained. F1 is the identical word/relator convention for both. The inequalities in F2 therefore apply to $X_0$, with the same fixed $K,L$ for every presentation. They give a number $\delta_0=\delta_0(K,L)\ge0$ bounding all its chosen triangles. The common bound, rather than merely a separate bound for each presentation, is exactly the uniformity conclusion of F2 under F5. [F1, F2, F3, F5, given]

2.1 By F4, $X_0$ satisfies the four-point condition with $\kappa_0=3\delta_0$. Since both spaces induce the same word metric on their common vertex set by F3, all vertex quadruples in $X$ satisfy that identical condition. Equivalently, each of their three opposite-pair sums is at most the maximum of the other two plus $2\kappa_0$; for a sum that is not largest this is automatic, and for a largest sum it is the four-point hypothesis. [step 1.1, F3, F4, algebra]

3.1 For arbitrary points $a,b,c,d\in X$, choose a nearest endpoint vertex $\hat a,\hat b,\hat c,\hat d$ on each of their unit edges, and use the point itself if it is already a vertex. Each distance to the selected vertex is at most $1/2$, including loop edges; these are four finite choices. The triangle inequality yields $|d_X(u,v)-d_X(\hat u,\hat v)|\le1$ for each pair. Consequently corresponding opposite-pair sums differ by at most $2$. Denote the three sums for the original points by $S_i$ and the corresponding vertex sums by $\widehat S_i$, $1\le i\le3$. For each $i$, step 2.1 gives $$S_i\le\widehat S_i+2\le\max_{j\ne i}\widehat S_j+2\kappa_0+2\le\max_{j\ne i}S_j+2\kappa_0+4.$$ Thus the largest sum is at most the second-largest plus $2(\kappa_0+2)$, including ties. This proves the four-point condition on all of $X$ with constant $\kappa_0+2$. [step 2.1, F3, algebra]

4.1 The geodesicity of $X$ in F3 and F4 now make every chosen triangle in $X$ $4(\kappa_0+2)=12\delta_0+8$-slim. This depends only on $K,L$, even if many labels represent the same generator or the identity; rounding at a loop uses its shorter half-interval and needs no map collapsing that loop. [step 3.1, step 2.1, F3, F4, algebra]

5.1 For two specified geodesics from $x$ to $y$, regard them as two sides of a triangle with vertices $x,y,x$ and with third side the constant segment at $x$. Step 4.1 places every point of either side within $12\delta_0+8$ of the other side together with $x$; since $x$ already lies on that other side, their Hausdorff distance is at most this same constant. This includes $x=y$, constant sides, an empty generating alphabet (a one-vertex group), empty relator sets, $K=0$ and $L=0$. All added realization-comparison choices were finite; the assumed AC is used only through F2's explicitly named cone and uniformity selections. [step 4.1, F2, F3, F5, given] ∎
