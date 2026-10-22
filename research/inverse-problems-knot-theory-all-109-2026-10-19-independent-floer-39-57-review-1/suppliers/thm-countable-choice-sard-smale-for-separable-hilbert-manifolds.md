---
id: thm-countable-choice-sard-smale-for-separable-hilbert-manifolds
kind: theorem
title: "Sard–Smale for separable Hilbert manifolds under countable choice"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, def-hilbert-space, def-fredholm-operator-cokernel-and-index, def-countable-base-banach-manifold-and-smooth-map, def-nowhere-dense-meagre-and-residual-subsets, thm-morse-sard-for-euclidean-maps]
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen Smale, An Infinite Dimensional Version of Sard's Theorem, Theorem 1.3"
      url: "https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $M,N$ be Hausdorff second-countable $C^r$ manifolds modeled on separable real Hilbert spaces, and let $f:M\to N$ be $C^r$, where $r$ is a positive integer or $\infty$. Suppose every derivative $Df(x)$ is a bounded Fredholm operator of the same index $d$ and $r>\max\{d,0\}$. Then the regular values of $f$ form a dense residual subset of $N$. A value is regular if every derivative at its inverse images is surjective; values with empty inverse image are regular.

Here Hilbert completeness means convergence of Cauchy sequences. No arbitrary-index choice or dependent-choice axiom is assumed. This theorem concerns a map already known to be Fredholm; it does not establish Fredholmness of a differential operator or transversality of its universal solution space.

## Statement references

[[def-countable-choice]]

[[def-hilbert-space]]

[[def-fredholm-operator-cokernel-and-index]]

[[def-countable-base-banach-manifold-and-smooth-map]]

[[def-nowhere-dense-meagre-and-residual-subsets]]

## Facts & Assumptions

**Given:** Countable choice and the map and manifolds in the statement.

[F1] A finite-dimensional $C^r$ map from an open subset of $\mathbb R^a$ to $\mathbb R^b$, $b>0$, has null critical-value set if $r>\max\{a-b,0\}$, by [[thm-morse-sard-for-euclidean-maps]]. In particular its critical values contain no nonempty open subset.

[F2] Countable choice selects from any given sequence of nonempty sets, as in [[def-countable-choice]]. Fredholm means closed range and finite-dimensional kernel and cokernel, as in [[def-fredholm-operator-cokernel-and-index]]. Manifolds and residual sets have the conventions in [[def-countable-base-banach-manifold-and-smooth-map]] and [[def-nowhere-dense-meagre-and-residual-subsets]].



## Proof

1.1 We first establish the needed complete-space facts with the indicated choice strength. Every subspace $S$ of a separable metric space is separable under countable choice: enumerate its ambient rational-radius balls with centers in a fixed countable dense set, and for each ball meeting $S$ select a point of its intersection with $S$ by [F2]. Those selected points are dense in $S$. Complete separable metric spaces satisfy the Baire conclusion by a deterministic construction. Given closed nowhere dense sets $A_n$ and a nonempty open set $O$, enumerate the same kind of balls; recursively take the first ball whose closed ball lies in the preceding open ball minus $A_n$, has positive radius at most $2^{-n}$, and, at the first stage, has closed ball in $O$. Such a ball exists because $A_n$ has empty interior. The centers form a Cauchy sequence; its limit belongs to every closed ball and hence to $O\setminus\bigcup_n A_n$. This uses recursion with a uniquely specified next ball, not dependent choice. It applies equally inside any open subset by keeping the first closed ball inside that subset. [F2, given, construct]

2.1 For a closed linear subspace $S$ of a separable real Hilbert space $H$, fix $x\in H$ and put $a=\inf_{s\in S}\|x-s\|$. Use a countable dense sequence in $S$ from step 1.1 and take its first point $s_n$ satisfying $\|x-s_n\|^2<a^2+1/n$. The parallelogram identity gives $$\|s_n-s_j\|^2=2\|x-s_n\|^2+2\|x-s_j\|^2-4\left\|x-\frac{s_n+s_j}{2}\right\|^2\le 2/n+2/j.$$ The limit $s\in S$ minimizes the distance. The inequality $\|x-s-tv\|^2\ge\|x-s\|^2$ for all real $t$ and $v\in S$ forces $\langle x-s,v\rangle=0$. Thus $H=S\oplus S^\perp$, uniquely; the projection onto $S$ is linear and has norm at most one, by Pythagoras. This proves the splitting without Hahn–Banach. [step 1.1, algebra, construct]

2.2 A bounded surjection $T:E\to F$ between separable Banach spaces is open under the same hypothesis. Indeed $F=\bigcup_{n\ge1}\overline{T(B_E(0,n))}$. By step 1.1 some member has interior. Subtracting two points of a small ball in this interior shows that for some $c>0$, $$B_F(0,c)\subseteq\overline{T(B_E(0,1))}.$$ Here subtraction of limits of images of two radius-$n$ balls gives a radius-$2n$ ball before rescaling. For $\|y\|<c/2$ choose successively $x_j$ with $\|x_j\|<2^{-j}$ and residual $\|y-T\sum_{i=1}^j x_i\|<c2^{-j-1}$, starting at $j=1$. At each step the displayed closure inclusion rescaled by $2^{-j}$ permits this approximation; take the first qualifying element of a fixed dense sequence in the open ball of radius $2^{-j}$, since the inequalities are open. The sum converges in $E$, has norm less than one, and maps to $y$. Thus $B_F(0,c/2)\subseteq T(B_E(0,1))$. Rescaling and translating proves openness. In particular a bounded bijection has bounded inverse. [step 1.1, construct, algebra]

3.1 We also need the local inverse theorem with no stronger choice. If a $C^r$ map $g$ between open subsets of real Hilbert spaces has boundedly invertible derivative $A$ at zero, translate so $g(0)=0$ and choose $R>0$ with the closed radius-$R$ ball in its domain and $\|I-A^{-1}Dg(x)\|\le1/2$ on that ball. The mean-value estimate along a segment gives that $T_y(x)=x-A^{-1}(g(x)-y)$ is a contraction of ratio $1/2$ and maps the ball into itself when $\|A^{-1}y\|<R/2$. The estimate follows without any vector integration theorem: apply each continuous real linear functional of norm one to the segment curve and the scalar mean-value inequality, then take the supremum; for Hilbert targets the required norming functional is explicitly the inner product with the normalized difference. The deterministic iterates $x_{n+1}=T_y(x_n)$, $x_0=0$, have a geometric Cauchy bound and converge to the unique fixed point. Thus $g$ has an inverse on a neighborhood of zero. Comparison of fixed-point equations makes this inverse locally Lipschitz. [step 2.2, construct, algebra]

4.1 This inverse is $C^r$. The operators $Dg(x)$ near zero have bounded inverses by the norm-convergent series for $(I-(I-A^{-1}Dg(x)))^{-1}A^{-1}$. If $g^{-1}(y+h)=x+k$, the Lipschitz estimate gives $\|k\|=O(\|h\|)$ and differentiability gives $h=Dg(x)k+o(\|k\|)$, so $Dg^{-1}(y)=Dg(x)^{-1}$. Inversion of boundedly invertible operators is smooth: writing $(B+H)^{-1}=(I+B^{-1}H)^{-1}B^{-1}$ and using the convergent geometric series shows the first derivative $H\mapsto-B^{-1}HB^{-1}$, with a remainder bounded by a constant times $\|H\|^2$ locally; repeated differentiation of this product gives derivatives of every order, finite sums of products of inverses and increments. The chain and product rules and induction now give the claimed $C^r$ regularity of $g^{-1}$, also for $r=\infty$. All limits in this argument are of specified sequences. [step 3.1, algebra]

5.1 Work in charts about $x\in M$ and $f(x)\in N$, translate both coordinate origins, and write $L=Df(0)$. By step 2.1 split the domain as $K\oplus E_1$, with $K=\ker L$, and the target as $R\oplus Q$, with $R=\operatorname{ran}L$. The spaces $K,Q$ are finite dimensional by Fredholmness, $R$ is closed, and $E_1=K^\perp$. The restriction $L:E_1\to R$ is a bounded bijection and has bounded inverse by step 2.2. Write $f=(\rho,c)$ in the target splitting. The map $$ (v,z)\longmapsto(\rho(v+z),v)\quad (v\in K,\ z\in E_1) $$ has boundedly invertible derivative $(v,z)\mapsto(Lz,v)$ at zero. Steps 3.1 and 4.1 give a local $C^r$ inverse. Shrink its image to a product $U\times A$, with $U\subset R$, $A\subset K$ open. In these coordinates $f$ has the form $(u,v)\mapsto(u,h(u,v))$, where $h:U\times A\to Q$ is $C^r$ and $\dim K-\dim Q=d$. The coordinate changes need only be compatible local coordinate changes; they need not be members of the originally specified atlas. [F2, step 2.1, step 2.2, step 3.1, step 4.1, construct]

6.1 In each such normal-form neighborhood choose a product of closed positive-radius balls $C=\overline B_R\times\overline B_K$ whose product lies in $U\times A$, and let $C$ also denote its inverse image in $M$. Its interior contains its center, it is closed relative to that normal-form neighborhood, and $f|_C$ is proper into the target chart. To verify properness, the first coordinates of inverse images of a compact target set lie in a compact subset of $R$, while their second coordinates lie in the compact finite-dimensional ball $\overline B_K$. The inverse-image set is closed in that compact product by continuity and the closed-ball conditions, hence compact. No compactness of an infinite-dimensional ball is asserted. [step 5.1, construct]

7.1 The interiors of all these blocks cover $M$. Choose a countable base $(B_i)$ of $M$. For each nonempty $B_i$ contained in the interior of some block, [F2] selects one witnessing block together with its normal-form neighborhood and target chart. There are countably many such indices, and their chosen interiors still cover $M$: for every point, first use any covering block and then a base member containing the point and contained in its interior. Relabel the chosen blocks $C_i$, neighborhoods $W_i$, and target charts $V_i$. This is one explicit countable-choice use, with the family fixed in advance; no selections indexed by all points of $M$ were made. [F2, step 6.1, construct]

8.1 Let $A_i=C_i\cap\operatorname{Crit}(f)$. In the normal form of step 5.1, surjectivity of $Df$ is equivalent to surjectivity of the finite-dimensional matrix $D_vh$. Thus the critical set is closed in $W_i$, because nonsurjectivity of such matrices is closed; hence $A_i$ is closed in $C_i$. Its image $D_i=f(A_i)$ is closed relative to $V_i$. For a direct verification, if $y_n\in D_i$ tends to $y\in V_i$, countable choice selects $x_n\in A_i$ over $y_n$. Properness places these points in the compact inverse image of $\{y\}\cup\{y_n:n\ge1\}$. In normal-form coordinates compactness gives a convergent subsequence with limit in $A_i$, mapping to $y$. This proves sequential closedness, which is closedness in the metrizable chart. [F2, step 5.1, step 6.1, step 7.1]

9.1 The set $D_i$ has empty interior in $V_i$. If $Q=\{0\}$ in this block, all derivatives are onto and $D_i$ is empty. Otherwise a nonempty product open set $U'\times Q'$ in $D_i$ would, for any fixed $u\in U'$, make every point of $Q'$ a critical value of the finite-dimensional $C^r$ map $v\mapsto h(u,v)$ on its open kernel-coordinate domain. The inequality $r>\max\{\dim K-\dim Q,0\}$ is exactly the hypothesis of [F1]. For $r=\infty$ apply [F1] at any finite differentiability order above that bound. This contradicts [F1]. Thus $D_i$ is closed and nowhere dense relative to $V_i$. It is nowhere dense in $N$ as well: its closure in $N$ lies in $\overline V_i$, and any nonempty open subset of that closure must meet $V_i$, since the boundary of an open set has empty interior. Such an intersection would contradict its relative nowhere density. [F1, step 5.1, step 8.1, cases]

10.1 Every critical point lies in some $C_i$, so the nonregular values are exactly $\bigcup_i D_i$. Step 9.1 makes this a meagre subset of $N$, proving residuality of its complement. To see density, take any nonempty open subset of $N$, pass to a chart and then a nonempty open coordinate ball with closed ball still in the chart. The closures of the $D_i$ restrict there to closed nowhere dense sets. The deterministic Baire construction of step 1.1 gives a point in this ball outside them all. It is a regular value. The empty-manifold cases are immediate, and values outside $f(M)$ are included because their fibres have no nonsurjective derivative. [F2, step 1.1, step 7.1, step 9.1] ∎
