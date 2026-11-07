---
id: thm-mass-transference-principle-on-regular-metric-spaces
kind: theorem
title: "Mass transference principle on locally regular metric spaces"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-countable-choice
  - def-hausdorff-dimension-function-and-gauge-measure
  - def-limsup-of-shrinking-balls-in-a-metric-space
  - def-doubling-gauge-and-locally-regular-hausdorff-measure
  - def-gauge-transformed-ball-in-a-metric-space
  - thm-hausdorff-gauge-mass-distribution-principle
  - lem-regular-metric-covering-and-positive-density-limsup
  - lem-finite-branching-cantor-weights-extend-to-borel-measure

proof_strategy: direct
sources:
  references:
    - title: "Beresnevich and Velani, A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures, Theorem 3"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf"
      locator: "§6.1, Theorem 3"
    - title: "Beresnevich, Ramírez, and Velani, Metric Diophantine Approximation: Aspects of Recent Work, §3.4"
      url: "https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf"
      locator: "§3.4, general metric-space formulation"
---

## Statement

Assume the Axiom of Countable Choice. Let $(X,d)$ be a locally compact metric space such that for every $\rho>0$ it has a countable cover by balls of diameter less than $\rho$. Let $g$ be a doubling dimension function such that $\mathcal H^g$ is locally regular, and let $B_i=B(x_i,r_i)$ be a sequence of balls with $r_i\to0$. Let $f$ be a dimension function such that $f(r)/g(r)$ is monotonic, assume $f(r_i)$ lies in the range of $g$ for every $i$, and define $B_i^{f,g}=B(x_i,g^{-1}(f(r_i)))$. If for every ball $B\subseteq X$ one has

$$\mathcal H^g\left(B\cap\limsup_i B_i^{f,g}\right)=\mathcal H^g(B),$$

then for every ball $B\subseteq X$ one has

$$\mathcal H^f\left(B\cap\limsup_i B_i\right)=\mathcal H^f(B).$$

## Statement references

[Beresnevich and Velani, *A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures*, Theorem 3](https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf)

[Beresnevich, Ramírez, and Velani, *Metric Diophantine Approximation: Aspects of Recent Work*, §3.4](https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf)

## Facts & Assumptions

**Given:** Countable Choice and the complete hypotheses of the Statement. Put $\nu=\mathcal H^g$, $h=f/g$, $A_i=B_i^{f,g}$ and $R_i=r(A_i)$.

[A1] Countable Choice supports the explicitly countable construction and measures. [[def-countable-choice]]

[F1] Finite separated selections from full tail balls, local regularity of $\nu$, and the positive-density limsup comparison hold. [[lem-regular-metric-covering-and-positive-density-limsup]]

[F2] Consistent weights on a finite-branching nested compact tree extend to a Borel probability measure. [[lem-finite-branching-cantor-weights-extend-to-borel-measure]]

[F3] A probability measure with ball bound $C f(r)/\eta$ gives Hausdorff gauge measure at least $\eta/C$ on its support. [[thm-hausdorff-gauge-mass-distribution-principle]]

[F4] The generalized inverse convention gives $g(R_i)=f(r_i)$, with no strict increase or uniqueness assumption on $g$. [[def-gauge-transformed-ball-in-a-metric-space]]

## Proof

1.1 The limit $L=\lim_{r\downarrow0}h(r)$ exists. If $L=0$, cover each precompact ball with nearly minimizing $g$-covers: for all sufficiently small radii their $f$-cost is at most $\epsilon$ times their $g$-cost. Thus that ball has $\mathcal H^f=0$. A countable cover by such balls gives the conclusion for every ball. If $0<L<\infty$, the same comparison in both directions gives $\mathcal H^f=L\mathcal H^g$ on Borel sets. For $U_i=B_i\cap A_i$, local regularity, $g(R_i)=f(r_i)$ and $h(r_i)\to L$ give $\nu(U_i)\ge a\nu(A_i)$ for a fixed $a>0$. The last part of [F1] and the full enlarged limsup imply full original limsup. This proves the finite-limit cases. [given, A1, F1, F4, algebra]

1.2 Suppose $L=\infty$. Then $h$ is non-increasing as $r$ increases near zero. Doubling of $g$ gives $f(Tr)\le C_T f(r)$ for fixed $T\ge1$, while $g(3r_i)<f(r_i)$ eventually, hence $3r_i<R_i$. Also $R_i\to0$, since otherwise $g(R_i)\ge g(\epsilon)>0$ along a subsequence. Every nonempty small ball has infinite $\mathcal H^f$: for any $M$, sufficiently fine covers have $f$-cost at least $M$ times $g$-cost, whose infimum is its positive $g$-measure. It suffices to construct arbitrarily large lower bounds inside any compact closed ball $B_0$ contained in the given ball. Such a $B_0$ exists by local compactness; all following balls and their fixed dilates are taken within the regularity scale. [given, F4, algebra, choose]

2.1 Fix $\eta>1$. There are constants $0<a<A$ depending only on regularity such that a finite selected family of disjoint triple enlarged balls in a parent $B$ has $a g(r(B))\le\sum f(r_i)\le A g(r(B))$, by [F1] and $f(r_i)=g(R_i)$. This also holds in an open subset occupying a fixed fraction of $\nu(B)$. Set $l_{B_0}=\lceil\eta/(a g(r(B_0)))\rceil+1$ and, for every later parent, $l_B=\lceil f(r(B))/(a g(r(B)))\rceil+1$. Restrict all selected radii to a small enough tail that $f(r(B))/g(r(B))\ge1$ for every nonroot parent, so $l_B\le C f(r(B))/g(r(B))$. [step 1.2, F1, F4, construct, algebra]

3.1 Construct $l_B$ sublevels of children inside each parent. The first is a finite family from [F1]. Before each selection require $3r_i<R_i$, $r_i<2^{-n}$ at depth $n$, indices exceeding all those used at earlier depths, and $g(r_i)\le\epsilon f(r_i)$. Before each later sublevel also require $f(r_i)\le\tfrac12\min f(r_j)$ over earlier children. These are possible because both radii vanish, $g/f\to0$ and $f(r_i)\to0$. Delete the closed quadruple dilates of earlier children from the open middle half of the parent. Their total $\nu$-measure is at most $C\epsilon\sum f(r_j)\le C\epsilon l_B g(r(B))$. Choose $\epsilon$ at the start of this parent smaller than a fixed constant times $1/l_B$. At least half the middle half-ball's measure then remains. Apply the open-subset version of [F1] there, taking the new tail small enough that the triple enlarged balls stay in that open set. [step 2.1, step 1.2, F1, A1, construct, algebra]

4.1 This finite induction gives all sublevels. Triple original children are pairwise disjoint across sublevels, since later triples avoid earlier quadruple children. In each sublevel the enlarged balls are disjoint and contained in the parent; their $f$-cost sum lies between $a g(r(B))$ and $A g(r(B))$, after decreasing $a$ uniformly for the open-subset selection. Use this decreased $a$ already in the definition of $l_B$. Consecutive sublevels have every child's $f$-cost at most half the minimum in the preceding sublevel. Recursively doing this for all finitely many parents gives a nested compact tree with radii tending uniformly to zero and support $K_\eta\subset B_0\cap\limsup_iB_i$. Its children are actual original closed balls. The increasing index thresholds ensure infinitely many distinct original indices along every branch. [step 3.1, step 2.1, construct, algebra]

5.1 Put $Z_B=\sum_{L\text{ child of }B}f(r(L))$ and define $w(B_0)=1$, $w(L)=w(B)f(r(L))/Z_B$. The lower selection bound gives $Z_{B_0}\ge\eta$ and $Z_B\ge f(r(B))$ for every nonroot parent. Thus induction gives $w(L)\le f(r(L))/\eta$ for every nonroot node, with exactly the same constant at every depth. Apply [F2] to get a Borel probability measure $\mu$ on $K_\eta$ with these node masses. This normalization avoids any accumulation of multiplicative comparison constants down the tree. [step 4.1, F2, A1, construct, algebra]

6.1 Let $D$ be any sufficiently small ball. If it meets at most one child at every depth, $\mu(D)\le f(r(L_n))/\eta\to0$. Otherwise take the first depth at which it meets two children and the unique parent $B$ it met at the preceding depth. Take $r(D)$ smaller than the least radius of the root's children; disjoint triples ensure it cannot meet two such root children, so this parent is nonroot. If $r(D)\ge r(B)$, then $\mu(D)\le\mu(B)\le f(r(D))/\eta$. Assume $r(D)<r(B)$. Every child $L$ meeting $D$ has $r(L)\le r(D)$: choose a point in its intersection with $D$ and another point in $D$ lying in a different child, outside $3L$; the triangle inequality yields $3r(L)\le2r(D)+r(L)$. [step 4.1, step 5.1, algebra]

7.1 Sublevels with just one child meeting $D$ contribute at most $2f(r(D))/\eta$: take the first such child and use its radius bound from step 6.1, then the geometric decay of $f$ across subsequent sublevels. For a sublevel with two or more children meeting $D$, let $A$ be an enlarged ball corresponding to any meeting child. Another meeting child lies outside $3A$ because triple enlarged balls in that sublevel are disjoint. Since $D\cap A\ne\varnothing$ and $D\setminus3A\ne\varnothing$, the same triangle calculation gives $r(A)\le r(D)$ and $A\subset5D$. Consequently the sum of $f$-costs of its meeting children is $\sum g(r(A))\le C\nu(5D)\le C'g(r(D))$ by disjointness and regularity. Summing over the $l_B$ sublevels and using $l_B\le C f(r(B))/g(r(B))$ and $h(r(B))\le h(r(D))$ bounds their mass by $C''f(r(D))/\eta$. Thus every sufficiently small $D$ satisfies the uniform Frostman bound. [step 6.1, step 4.1, step 5.1, F1, algebra]

8.1 By [F3], $\mathcal H^f(K_\eta)\ge\eta/C''$. The constant is independent of $\eta$; only the permitted radius threshold depends on the construction. Letting $\eta\to\infty$ proves infinite measure in the given ball in the $L=\infty$ case. Together with step 1.1 this proves the complete Statement. [step 7.1, F3, step 1.1, algebra] ∎
