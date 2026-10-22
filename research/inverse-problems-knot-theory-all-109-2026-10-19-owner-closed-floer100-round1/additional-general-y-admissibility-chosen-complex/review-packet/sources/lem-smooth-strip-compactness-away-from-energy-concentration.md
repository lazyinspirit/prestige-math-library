---
id: lem-smooth-strip-compactness-away-from-energy-concentration
kind: lemma
title: "Smooth strip convergence outside finitely many energy concentration points"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-interior-energy-regularity-for-smooth-almost-complex-strips, lem-boundary-energy-regularity-for-totally-real-strips, lem-local-sobolev-bootstrap-for-almost-complex-strips, thm-euclidean-inverse-function-theorem, thm-higher-regularity-of-local-inverses]
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dusa McDuff and Dietmar Salamon, J-holomorphic Curves and Symplectic Topology, compactness away from bubbling points"
      url: "https://bookstore.ams.org/coll-52"
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds, §§3.4 and 3.8"
      url: "https://arxiv.org/pdf/math/0101206"
---

## Statement

Assume Countable Choice. Let $S=\mathbb R\times[0,1]$, let $(X,g_0)$ be compact without boundary, and let $L_0,L_1\subset X$ be compact embedded submanifolds without boundary, of half the real dimension of $X$. Suppose smooth almost complex families $J_n(s,t,x)$ have uniform bounds for all derivatives on $S\times X$, converge in $C^\infty$ on compact subsets to $J_\infty$, and satisfy $J_n(s,j,x)=J_{b,j}(x)$ for $x\in L_j$, $j=0,1$, independently of $n,s$. Suppose $TL_j\cap J_{b,j}TL_j=0$.

Let $u_n:S\to X$ be smooth up to the boundary, with $u_n(s,j)\in L_j$, satisfying $(u_n)_s+J_n(s,t,u_n)(u_n)_t=0$, and with $g_0$-energies at most $E_0<\infty$. There is a constant $\varepsilon>0$ depending only on the geometric data and uniform coefficient bounds, a finite set $Z\subset S$ with $|Z|\le\lfloor E_0/\varepsilon\rfloor$, and a subsequence converging in $C^\infty$ on every compact subset of $S\setminus Z$, including one-sided derivatives at its boundary, to a map $u_\infty$. The limit satisfies the $J_\infty$ equation, the indicated boundary conditions, and has energy at most $E_0$ on $S\setminus Z$.

This assertion does not extend the map across $Z$, recover lost energy, construct bubble trees, or describe strip breaking at either noncompact end.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice and the strip, compact geometric data, families, and bounded-energy sequence in the statement.

[F1] Uniform small energy gives interior gradient bounds by [[lem-interior-energy-regularity-for-smooth-almost-complex-strips]] and boundary gradient bounds on half-disks by [[lem-boundary-energy-regularity-for-totally-real-strips]].

[F2] For a coordinate equation whose coefficient differs from $i$ by at most $1/2$, uniform $C^1$ bounds imply uniform bounds of every derivative on smaller disks and half-disks with real boundary, by [[lem-local-sobolev-bootstrap-for-almost-complex-strips]].

[F3] The local inverse theorem and its higher-regularity conclusion are [[thm-euclidean-inverse-function-theorem]] and [[thm-higher-regularity-of-local-inverses]].

## Proof

1.1 Choose fixed metrics adapted to $L_0,J_{b,0}$ and $L_1,J_{b,1}$ as in the boundary supplier [F1]. On compact $X$ their energies and gradient norms are uniformly comparable to those of $g_0$. The interior supplier and the two boundary suppliers therefore give one $\varepsilon>0$ and one $r_0>0$, with $r_0<1/4$, such that a $g_0$-energy below $\varepsilon$ on any disk or physical-boundary half-disk of radius at most $r_0$ gives a uniform gradient bound on its half-radius portion, in the metric $g_0$. Interior estimates at all points of that portion follow by applying the center estimate on smaller disks contained in the original one. At $t=1$ reflect $t$ to $1-t$ and replace $J_n$ by $-J_n$, which has the same uniform bounds and the appropriate fixed totally real boundary structure. The constants are uniform in $n,s$ by the hypotheses. [F1, given, construct]

2.1 Fix a countable basis of relative strip neighborhoods consisting of rational interior disks and rational-center half-disks along its two physical edges, all of radius at most $r_0$. For each basis member $B$, the energies $E_n(B)$ lie in $[0,E_0]$. Pass to one subsequence on which all these numbers converge. This is an explicit countable diagonal extraction: for a bounded real sequence, repeatedly retain the first closed dyadic interval containing infinitely many remaining terms and take least remaining indices; use that deterministic extraction for the first basis member, then the second, and so on, finally taking the diagonal. Write $e(B)$ for the resulting limit and put $$Z=\{p\in S:e(B)\ge\varepsilon\text{ for every basis member }B\ni p\}.$$ If $p_1,\ldots,p_N$ are distinct points of $Z$, choose pairwise disjoint basis neighborhoods around them. Their limiting energies are each at least $\varepsilon$, whereas their sum is at most $E_0$, since the corresponding finite sums of energies of $u_n$ have that bound. Thus $N\varepsilon\le E_0$. It follows that $Z$ is finite with the asserted cardinality bound. Only finitely many neighborhoods are chosen in this last argument. [step 1.1, given, construct, algebra]

3.1 For $p\notin Z$, choose a basis neighborhood $B\ni p$ with $e(B)<\varepsilon$. Its actual energies are below $\varepsilon$ for all sufficiently large indices. Choose a smaller disk or physical-boundary half-disk about $p$ whose closure lies in $B$. Step 1.1 bounds the gradients uniformly on a neighborhood of $p$. Finite subcovers give uniform local $C^1$ bounds on every compact subset of $S\setminus Z$. Compactness of $X$ and these derivative bounds give a further subsequence converging locally uniformly to a continuous $u_\infty$. To make the selection precise under Countable Choice, fix finite $2^{-k}$ nets of $X$ for all positive integers $k$, using Countable Choice once for this family, and a countable dense set of source points outside $Z$. At each such point use the fixed nets to extract a convergent subsequence by retaining the first net ball containing infinitely many remaining values, with radii tending to zero, and then least indices; diagonalize over the source points. One may instead use successive finite intersections of the previously retained value sets, so the centers need not form nested balls: their radii tending to zero makes the retained values Cauchy. Local equicontinuity and completeness of compact $X$ extend the dense-point limits uniquely and give uniform convergence on compact subsets, by finite source nets. Thus no arbitrary family of pointwise choices or dependent-choice axiom is needed. [step 1.1, step 2.1, given, construct]

4.1 Higher bounds can now be obtained in genuine target charts. At an interior source point choose a target chart about its limiting image and make one constant linear coordinate change taking the limiting complex structure at that point to $i$. Local uniform convergence, uniform first-derivative bounds, and convergence of $J_n$ show that on a sufficiently small source disk all large-index images lie in one relatively compact coordinate set and the transformed coefficient differs from $i$ by at most $1/2$. At a boundary point first take an adapted target chart in which $L_j$ is real and the fixed boundary structure is $i$ along it. Here is its construction: in arbitrary target coordinates write $x\mapsto\ell(x)$ for a local parametrization of $L_j$ and set $$F(x,y)=\ell(x)+\sum_{a=1}^m y_aJ_{b,j}(\ell(x))\partial_{x_a}\ell(x).$$ Its derivative at $y=0$ maps the real and imaginary coordinate vectors to a tangent basis and its $J_{b,j}$ image. Total reality makes it invertible; [F3] gives a smooth local inverse. Consequently $F^{-1}$ sends $L_j$ to the real plane and intertwines $J_{b,j}$ with $i$ along it. At the upper strip edge use the reflected structure from step 1.1. Uniform convergence then gives the same coefficient smallness and bounded image in a fixed chart on a small half-disk. All transformed coefficient derivatives are uniformly bounded on these patches, and the coordinate first derivatives of the maps are bounded by step 3.1. [F3, step 1.1, step 3.1, construct, algebra]

5.1 Apply [F2] on every patch of step 4.1. It gives uniform bounds for every derivative on smaller patches. Choose a countable such patch cover, possible by second countability of the strip and Countable Choice for witnessing patches. Extract one subsequence on which coordinate derivatives of every order converge locally uniformly on all these patches: use a countable dense set in each patch, bounded finite-dimensional derivative values, the deterministic bounded-sequence extraction of step 2.1, and diagonalize over patches and multi-indices. Uniform bounds of the next derivative give equicontinuity of the derivatives under consideration, so dense-point convergence is locally uniform. Integrating derivatives along coordinate segments shows that the limiting derivative functions are the derivatives of the already determined continuous limit. The limits agree on chart overlaps because their underlying maps converge to the same $u_\infty$ and the smooth coordinate change obeys the chain rule. This proves all the stated local $C^\infty$ convergence, including the half-disk boundary derivatives. [F2, step 2.1, step 3.1, step 4.1, construct]

6.1 Pass to the limit in the equation using the $C^1$ convergence of the maps and local $C^\infty$ convergence of the coefficients. Closedness of the compact submanifolds $L_j$ preserves the boundary condition. On every compact subset of $S\setminus Z$, convergence of first derivatives gives convergence of the energy densities and hence an energy integral at most $E_0$. Exhaust the punctured strip by an increasing sequence of compact subsets; monotone convergence gives total limit energy at most $E_0$. None of these arguments controls what happens at the omitted finite set or at either strip end, so precisely the stated compactness conclusion follows. [step 2.1, step 5.1, given, algebra] ∎
