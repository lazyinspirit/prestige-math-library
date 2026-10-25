---
id: "thm-homotopy-excision"
kind: "theorem"
title: "Homotopy excision"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-relative-homotopy-group","def-n-connected-cw-pair","lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees","lem-high-relative-cells-do-not-change-lower-homotopy","thm-long-exact-sequence-of-relative-homotopy-groups","lem-homotopy-excision-for-a-single-relative-cell-layer","lem-relative-homotopy-exact-sequence-of-a-triple-in-group-degrees","lem-compact-cw-images-have-finite-cell-support-without-choice","thm-heine-borel-rn","thm-compactness-agrees-with-metric-compactness","lem-a-connected-cw-pair-has-a-model-without-low-relative-cells","lem-weak-equivalences-glue-along-a-common-connected-cw-subcomplex","lem-weak-equivalences-of-pairs-induce-isomorphisms-on-relative-homotopy"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Theorem 4.23 and full proof; May Chapter 11 §§1--3
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $X=A\cup B$ be a CW complex with subcomplexes $A,B$ and nonempty path-connected intersection $C=A\cap B$. Suppose $(A,C)$ is $m$-connected and $(B,C)$ is $n$-connected, where $m,n\ge0$. For every $c\in C$, inclusion induces
$$\pi_i(A,C,c)\longrightarrow\pi_i(X,B,c)$$
as an isomorphism for $1\le i<m+n$ and a surjection for positive $i=m+n$. In degree one, isomorphism means a bijection of pointed sets. If $m+n=0$ the asserted positive-degree range is empty; relative $\pi_0$ is not defined or asserted here. No choice principle is required.

## Facts & Assumptions

[F1] [[def-relative-homotopy-group]] gives relative cubes and paths; [[def-n-connected-cw-pair]] specifies component-surjectivity and relative triviality. [[lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees]] gives group structures in degrees at least two, with functorial inclusion maps.

[F2] [[lem-high-relative-cells-do-not-change-lower-homotopy]] gives relative connectivity, component control and absolute homotopy isomorphisms below the first relative cell dimension, with the endpoint surjection. It is choice-free at every basepoint.

[F3] [[thm-long-exact-sequence-of-relative-homotopy-groups]] gives the pair sequence; its proof in degree one identifies a relative path starting in a connected subspace with a loop by prefixing a path in that subspace.

[F4] [[lem-homotopy-excision-for-a-single-relative-cell-layer]] proves the finite-relative case when all first-side cell boundaries lie in the common subcomplex, for cell dimensions at least $a,b$, with isomorphism below $a+b-2$ and surjection at that endpoint. The common subcomplex may be infinite and need not be connected.

[F5] [[lem-relative-homotopy-exact-sequence-of-a-triple-in-group-degrees]] gives the natural exact triple segment at its three middle terms in degrees at least two. Its last term may be pointed in degree one; no group operation there is supplied or needed.

[F6] [[lem-compact-cw-images-have-finite-cell-support-without-choice]] gives finite support for a specified compact-domain map; [[thm-heine-borel-rn]] and [[thm-compactness-agrees-with-metric-compactness]] make the cubes and homotopy cubes compact.

[F7] The first, choice-free clause of [[lem-a-connected-cw-pair-has-a-model-without-low-relative-cells]] gives a weak model fixed on the common subcomplex with relative cells only above the prescribed connectivity. Its separate AC homotopy-inverse clause is not used.

[F8] [[lem-weak-equivalences-glue-along-a-common-connected-cw-subcomplex]] glues those two weak models choice-free. [[lem-weak-equivalences-of-pairs-induce-isomorphisms-on-relative-homotopy]] then gives the relative vertical comparisons, including pointed degree one.

## Proof

**Given:** The CW union, connectivities and a fixed $c\in C$. Put $N=m+n$. First assume that $A\setminus C$ has cells only in dimensions at least $m+1$ and $B\setminus C$ only in dimensions at least $n+1$. Later we remove this additional assumption.

1.1 Under this cell assumption, $A,B$ and $X$ are path-connected. Indeed [F2] with cell bound one makes every point of $A$ or $B$ path-connected to some point of $C$, and $C$ is path-connected. The same holds for all subcomplexes obtained by retaining $C$ and any closed set of these relative cells. If $m\ge1$, both $(A,C)$ and $(X,B)$ have all relative cells of dimension at least two. By [F2] their relative degree-one sets are singletons. Thus the required degree-one map is bijective whenever it is in the asserted range in this case. [F1, F2, given]

1.2 We record the exact algebra needed in higher degrees. Consider a commuting diagram of sequences $G_1\to G_2\to G_3\to G_4\to S_5$ and $G'_1\to G'_2\to G'_3\to G'_4\to S'_5$, exact at positions two, three and four. The first four terms are groups and their intervening arrows are homomorphisms; the last terms and last arrows need only be pointed. Denote the vertical maps by $v_j$. If $v_2,v_4$ are surjective and $v_5$ injective, then $v_3$ is surjective. In fact, for $y\in G'_3$ lift its image in $G'_4$ to $z\in G_4$. Its image in $S_5$ maps to the distinguished point, so is distinguished by injectivity of $v_5$. Exactness gives $x\in G_3$ mapping to $z$. Then $y(v_3x)^{-1}$ is in the kernel at $G'_3$, so is the image of some $u'\in G'_2$. Lift $u'$ through $v_2$ and multiply its image in $G_3$ on the left of $x$ to obtain a preimage of $y$. If also $v_1$ is surjective and $v_2,v_4$ injective, then $v_3$ is injective: a kernel element $x$ first maps to zero in $G_4$, by $v_4$ injective, so $x$ is the image of $u\in G_2$. Its image $v_2u$ lies in the image from $G'_1$. Lift that element through $v_1$ and divide $u$ by its image from $G_1$. The result maps to the identity under $v_2$, hence is the identity. Thus $u$ itself was in the image from $G_1$, and $x$ was the identity. This uses no commutativity of the groups and no subtraction or action on $S_5$. [given, algebra]

2.1 For clarity about the other degree-one case, if $D$ is a path-connected subspace of $Y$ containing $c$, every relative path $u$ from $D$ to $c$ is equivalent to a based loop: prefix a path from $c$ to $u(0)$ in $D$ and then shrink that prefix, as in [F3]. Two based loops $u_0,u_1$ represent the same class in $\pi_1(Y,D,c)$ precisely when $[u_0][u_1]^{-1}$ lies in the image of $\pi_1(D,c)\to\pi_1(Y,c)$. In one direction a relative homotopy has an initial-endpoint loop $\beta$ in $D$; its square boundary gives $[u_0]=[\beta][u_1]$. This follows directly by traversing the four square sides, the terminal-endpoint side being constant, and contracting that boundary through the square. Conversely such a loop equality gives a based homotopy from $u_0$ to $\beta*u_1$ for a loop $\beta$ in $D$, and shrinking the $D$ prefix gives a relative homotopy to $u_1$. Only the selected path or loop for these given representatives is used; there is no family of paths. [F1, F3, step 1.1]

3.1 Suppose $m=0$. Degree one occurs only if $n=N\ge1$. By [F2], $A\to X$ is surjective on absolute $\pi_1$ because its added cells, the cells of $B\setminus C$, have dimensions at least $n+1\ge2$. Represent a target relative class by a loop using step 2.1 for $B\subseteq X$, and lift its absolute class to $A$. This proves the required relative surjection. If $n>1$, [F2] makes $\pi_1(A,c)\to\pi_1(X,c)$ an isomorphism and makes $\pi_1(C,c)\to\pi_1(B,c)$ surjective (indeed an isomorphism). Represent two source classes by loops in $A$. If their images are relatively equal in $(X,B)$, step 2.1 puts their difference in the image of $\pi_1(B,c)$. Lift that class from $C$, and use injectivity of $\pi_1(A,c)\to\pi_1(X,c)$ to get the same difference already in the image of $\pi_1(C,c)$ inside $\pi_1(A,c)$. Step 2.1 for $(A,C)$ proves equality of the source classes. This gives the isomorphism for $1<N$ and only the promised surjection for $N=1$. [F2, step 2.1]

4.1 Suppose now there are finitely many cells outside $C$ in both $A$ and $B$. Put $A_k=C\cup\{\text{relative cells of }A\text{ of dimension at most }k\}$ and $X_k=A_k\cup B$. These are subcomplexes since cell boundaries have lower dimension and cells of $C$ stay in $C$. We prove the asserted comparison for $(A_k,C)\to(X_k,B)$ by induction on $k\ge m+1$. At $k=m+1$, all new $A$ boundaries lie in $C$, so [F4] applies with $a=m+1$, $b=n+1$, giving precisely the desired range. The degree-one assertions for every stage are already established by steps 1.1 and 3.1; each stage has the same cell bounds and connected $C$. If there are no relative $A$ cells, the comparison is between the equal pairs $(C,C)$ and $(B,B)$ and is automatically a bijection. [F1, F4, step 1.1, step 3.1]

5.1 For the induction step let $k\ge m+2$, and use [F5] for the triples $(A_k,A_{k-1},C)$ and $(X_k,X_{k-1},B)$. In degree $i\ge2$, the five terms of the top row are $$\pi_{i+1}(A_k,A_{k-1})\longrightarrow\pi_i(A_{k-1},C)\longrightarrow\pi_i(A_k,C)\longrightarrow\pi_i(A_k,A_{k-1})\longrightarrow\pi_{i-1}(A_{k-1},C),$$ with the corresponding bottom row replacing $A_k,A_{k-1},C$ by $X_k,X_{k-1},B$. The last terms are only pointed when $i=2$. The maps in columns one and four are single-layer comparisons: use common subcomplex $A_{k-1}$, first side $A_k$ attaching $k$-cells, and second side $X_{k-1}$ attaching the $B\setminus C$ cells of dimension at least $n+1$. The union is $X_k$ and the intersection is $A_{k-1}$. Thus [F4] gives isomorphisms in degrees $j<k+n-1$ and surjections at $j=k+n-1$. [F4, F5, step 4.1]

6.1 If $2\le i<N$, then $i+1\le N<k+n-1$, so both columns one and four in step 5.1 are isomorphisms. By induction columns two and five are isomorphisms as well, using the separate degree-one result when $i-1=1$. Apply both parts of step 1.2 to obtain an isomorphism in column three. If $i=N\ge2$, column four is still an isomorphism since $N<k+n-1$, column two is surjective by induction, and column five is injective since $N-1<N$. The surjective part of step 1.2 applies; no condition on column one is needed at this endpoint. This closes the induction. There is a maximum dimension among the finitely many relative $A$ cells, so finitely many stages reach $A$. If that maximum is $m+1$, the initial stage already suffices. Thus the theorem under the cell assumption is proved whenever the relative cell sets are finite. [F4, F5, step 1.2, step 4.1, step 5.1]

7.1 Remove finiteness while retaining the cell bounds. A specified target relative cube in $(X,B,c)$ has image in a finite subcomplex $T$ by [F6]. Put $K=C\cup T$, $A'=K\cap A$, $B'=K\cap B$. Their intersection is $C$, and they have finitely many cells outside $C$ with the same dimension bounds. Their union is $K$; continuity into these subspaces follows by corestriction. The finite-relative surjection gives a preimage in $(A',C)$, and its inclusion into $(A,C)$ gives the desired preimage. For injectivity, take two source representatives and a relative homotopy of their images in $(X,B)$. Apply [F6] to that homotopy cube; its finite support already contains the two endpoint images. The same construction gives $A',B'$ containing all data, and finite-relative injectivity proves equality in $(A',C)$, hence in $(A,C)$. This includes every positive degree in its asserted range. The full common $C$ is retained, so it stays path-connected even when $T\cap C$ is not. [F1, F6, step 6.1]

8.1 Return to the original connectivity assumptions. By [F7], applied with parameters $m+1$ and $n+1$, there are weak maps $q_A:P_A\to A$ and $q_B:P_B\to B$ equal to the identity on $C$, with respective relative cell dimensions at least $m+1$ and $n+1$. Only the choice-free weak-model assertion is used. Since the original pairs are $0$-connected by [F1] and $C$ is nonempty path-connected, [F8] makes the glued map $q:P_A\cup_C P_B\to X$ a weak equivalence. The maps of pairs $(P_A,C)\to(A,C)$ and $(P_A\cup_C P_B,P_B)\to(X,B)$ are weak on both ambient and subspace, so [F8] makes their induced relative maps bijective in every positive degree. They form a commuting square with horizontal excision inclusions. Step 7.1 applies to its upper horizontal map, which satisfies the required cell bounds. The vertical bijections transfer its surjectivity and injectivity to the original lower horizontal map, giving the theorem. In group degrees the maps are homomorphisms by [F1]. [F1, F7, F8, step 7.1]

9.1 The point $c\in C$ was arbitrary and was never replaced by a chosen vertex, so the conclusion holds at every stated basepoint. If $N=0$ there are no positive degrees claimed, and if $N=1$ only the degree-one surjection is claimed and proved. A side equal to $C$, an empty relative cell set, constant representatives and nonregular attaching maps all occur in the preceding arguments without change. At the endpoint $i=N$ the proof uses only the surjective diagram chase; injectivity was established only below it. The proof instantiates finite supports, paths, geometric witnesses and algebraic preimages only for the current finite data. The models and gluing in step 8.1 are choice-free; their optional global homotopy inverses are never invoked. Consequently no AC assumption is introduced or propagated by this theorem. [F1, F2, F4, F6, F7, F8, step 1.1, step 3.1, step 6.1, step 7.1, step 8.1] ∎
