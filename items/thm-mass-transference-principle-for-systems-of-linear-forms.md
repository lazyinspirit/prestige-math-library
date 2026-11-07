---
id: thm-mass-transference-principle-for-systems-of-linear-forms
kind: theorem
title: "Mass transference principle for limsup sets of affine planes"
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
  - def-limsup-tubes-about-affine-subspaces
  - thm-hausdorff-gauge-mass-distribution-principle
  - thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure
  - lem-gauge-fixed-dilation-and-small-gauge-regimes
  - lem-constant-scaling-limsup-neighborhoods-preserves-measure
  - lem-truncating-affine-planes-preserves-small-tubes-on-a-ball
  - lem-affine-plane-centered-separated-packings
  - lem-finite-branching-cantor-weights-extend-to-borel-measure

proof_strategy: direct
sources:
  references:
    - title: "Allen and Beresnevich, A Mass Transference Principle for Systems of Linear Forms and Its Applications, Theorem 1 and §§3–5"
      url: "https://arxiv.org/pdf/1703.10015v2"
      locator: "Theorem 1, complete Cantor/Frostman proof in §§3–5"
    - title: "Beresnevich and Velani, A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures, §§3–5"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf"
      locator: "Theorem 2 and complete Euclidean-ball Cantor/Frostman proof"
---

## Statement

Assume the Axiom of Countable Choice. Fix integers $k\ge1$ and $0\le\ell<k$, and put $m=k-\ell$. Let $R_j\subset\mathbb R^k$ be affine $\ell$-planes and let $\Upsilon_j>0$ tend to zero. Define $g(r):=r^{-\ell}f(r)$, and suppose that both $f$ and $g$ are dimension functions and that $r^{-k}f(r)$ is monotonic. Let $\Omega$ be a Euclidean ball. If for every ball $B\subseteq\Omega$,

$$\mathcal H^k\left(B\cap\Lambda\left(g(\Upsilon)^{1/m}\right)\right)=\mathcal H^k(B),$$

then for every ball $B\subseteq\Omega$,

$$\mathcal H^f\left(B\cap\Lambda(\Upsilon)\right)=\mathcal H^f(B).$$

Here $g(\Upsilon)^{1/m}$ denotes the sequence $g(\Upsilon_j)^{1/m}$ and $\Lambda$ is the limsup of the corresponding Euclidean tubes.

## Statement references

[Allen and Beresnevich, *A Mass Transference Principle for Systems of Linear Forms and Its Applications*, Theorem 1 and §§3–5](https://arxiv.org/pdf/1703.10015v2)

[Beresnevich and Velani, *A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures*, §§3–5](https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf)

## Facts & Assumptions

**Given:** Countable Choice and the complete affine-plane hypotheses. Write $h(r)=r^{-k}f(r)$, $m=k-\ell$ and $\nu$ for Lebesgue measure.

[A1] Countable Choice supports the countable measure construction. [[def-countable-choice]]

[F1] Finite separated enlarged plane-centered families and their small-ball clusters have uniform covering, cardinality and local packing bounds. [[lem-affine-plane-centered-separated-packings]]

[F2] Consistent finite Cantor-tree weights extend to a Borel probability measure. [[lem-finite-branching-cantor-weights-extend-to-borel-measure]]

[F3] A uniform probability ball bound gives the gauge mass-distribution lower bound. [[thm-hausdorff-gauge-mass-distribution-principle]]

[F4] Gauge dilation bounds and the zero-gauge regime hold; fixed scaling of shrinking truncated-plane tubes preserves their limsup measure. [[lem-gauge-fixed-dilation-and-small-gauge-regimes]] [[lem-constant-scaling-limsup-neighborhoods-preserves-measure]] [[lem-truncating-affine-planes-preserves-small-tubes-on-a-ball]]

[F5] $\mathcal H^k$ is a positive constant multiple of Lebesgue measure. [[thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure]]

## Proof

1.1 The monotone ratio has a limit $L\in[0,\infty]$. If $L=0$, [F4] makes the conclusion trivial. If $0<L<\infty$, comparison of fine covering costs gives $\mathcal H^f=L\mathcal H^{r^k}$, and $g(\Upsilon_j)^{1/m}/\Upsilon_j=h(\Upsilon_j)^{1/m}$ stays between two positive constants. Truncate the planes on a bounded neighborhood of a chosen ball. The scaling assertion in [F4] sandwiches the two limsup tube measures and makes the original limsup Lebesgue full there. By [F5] this is the required full $\mathcal H^f$ measure. Thus assume $L=\infty$, when $h$ is non-increasing in $r$ and every nonempty ball has infinite $\mathcal H^f$. [given, F4, F5, algebra]

2.1 Put $u_j=\Upsilon_j/2$ and $t_j=g(u_j)^{1/m}$. Since $h$ is non-increasing, $g(r)=r^m h(r)$ gives $g(r/2)\ge2^{-m}g(r)$. Thus $t_j$ is between $g(\Upsilon_j)^{1/m}/2$ and $g(\Upsilon_j)^{1/m}$. By [F4], the limsup of $\Delta(R_j,t_j)$ is full in every ball of $\Omega$. Also $u_j/t_j=h(u_j)^{-1/m}\to0$. The clusters of [F1] are closed radius-$u_j$ balls centered on $R_j$, hence lie strictly inside the original open $\Upsilon_j$ tubes. Work inside an arbitrary closed ball $B_0\Subset\Omega$. [step 1.1, F1, F4, algebra]

3.1 For any enlarged ball $A$ of radius $t_j$, [F1] gives a cluster $\mathcal C(A)$ of $N_A\asymp(t_j/u_j)^\ell$ children. Therefore $\sum_{L\in\mathcal C(A)}f(r(L))=N_A f(u_j)\asymp t_j^k$, since $f(u_j)=u_j^\ell g(u_j)=u_j^\ell t_j^m$. Also $\sum_{L\in\mathcal C(A)}r(L)^k\ll t_j^k/h(u_j)$. All comparison constants depend only on $k,\ell$. Combining this with separated enlarged covering families gives, in every parent or open subset of fixed positive relative volume, a finite sublevel with total child $f$-cost between $a r(B)^k$ and $A r(B)^k$, for fixed $0<a<A$. [step 2.1, F1, algebra]

4.1 Fix $\eta>1$. Use $l_{B_0}=\lceil\eta/(a r(B_0)^k)\rceil+1$ sublevels at the root and $l_B=\lceil f(r(B))/(a r(B)^k)\rceil+1$ thereafter. Choose all nonroot radii sufficiently small that $h(r(B))\ge1$, so $l_B\ll f(r(B))/r(B)^k$. At each sublevel select separated enlarged balls by [F1] and their small clusters. Impose a tail so that $h(u_j)^{-1}<\epsilon$, $u_j<2^{-n}$ at depth $n$, and indices exceed all earlier-depth indices. For later sublevels also impose both $f(u_j)$ and $g(u_j)$ at most half their respective minima over all earlier children. All these finitely many restrictions are possible because the radii tend to zero and $f,g\to0$. [step 3.1, step 1.1, F1, A1, construct, algebra]

5.1 To separate a later sublevel, delete all closed quadruple children already chosen from the open middle half of the parent. By step 3.1, their removed volume is at most $C\epsilon l_B r(B)^k$. Fix $\epsilon$ smaller than a uniform constant times $1/l_B$ at the start of this parent. At least half the middle half-ball remains. The open-set selection in [F1], with tails small enough that all triples stay inside this open set, constructs the next sublevel. Its total child cost is still between the uniform $a r(B)^k$ and $A r(B)^k$; take these constants for the open-set fraction in step 4.1 from the beginning. Every triple child is disjoint from those in previous sublevels, every triple enlarged ball is disjoint within its sublevel, and all triples lie in the parent. This proves by finite induction the required $l_B$ sublevels. [step 4.1, step 3.1, F1, construct, algebra]

6.1 Recursing over the finite levels gives a compact finite-branching tree with uniformly vanishing diameters. Its limit $K_\eta$ lies in $B_0\cap\Lambda(\Upsilon)$: each child belongs to an original tube and the index thresholds increase along every branch. Set $Z_B=\sum_{L\text{ child}}f(r(L))$ and $w(L)=w(B)f(r(L))/Z_B$, with root weight $1$. Then $Z_{B_0}\ge\eta$ and $Z_B\ge f(r(B))$ for every nonroot parent. Consequently $w(L)\le f(r(L))/\eta$ with no depth-dependent constant. By [F2] these are the masses of a Borel probability measure $\mu$ supported on $K_\eta$. [step 5.1, F2, A1, construct, algebra]

7.1 Take a ball $D$ of radius less than the minimum radius of the root's children. If it meets at most one node at every depth, its mass is zero by the node bound. Otherwise take the first splitting depth and its unique preceding parent $B$. This parent is nonroot because triple separation prevents a ball this small meeting two root children. If $r(D)\ge r(B)$ the desired bound is immediate from $\mu(B)\le f(r(B))/\eta$. Otherwise assume $r(D)<r(B)$. Every child meeting $D$ has radius at most $r(D)$: a second meeting child supplies a point in $D$ outside its triple, and the triangle inequality gives $3r(L)\le2r(D)+r(L)$. [step 6.1, step 5.1, algebra]

8.1 Sublevels with exactly one child meeting $D$ contribute at most $2f(r(D))/\eta$ by their geometric $f$-decay. For sublevels with meeting children from at least two distinct enlarged groups, every such enlarged $A$ meets $D$ while another meeting child lies outside $3A$. The triangle inequality gives $r(A)\le r(D)$ and $A\subset5D$. Thus the total meeting child $f$-cost on one such sublevel is at most $C\sum_{A\subset5D}r(A)^k\le C'r(D)^k$, by step 3.1 and disjointness of the enlarged balls. Summing over $l_B$ and using decreasing $h$ gives mass at most $C'' l_B r(D)^k/\eta\ll f(r(D))/\eta$. [step 7.1, step 3.1, step 5.1, algebra]

8.2 The remaining sublevels have at least two meeting children but only one enlarged group. The local packing bound in [F1] gives at most $C(r(D)/u_j)^\ell$ meeting children in that group, as $u_j\le r(D)$ by step 7.1. Their total cost is at most $C r(D)^\ell g(u_j)$. At the first such sublevel, $g(u_j)\le g(r(D))$; the imposed geometric decay of $g$ bounds the sum over all later such sublevels by twice this. Their mass is therefore at most $2C r(D)^\ell g(r(D))/\eta=2C f(r(D))/\eta$. These three classes exhaust all meeting children, so $\mu(D)\le C_* f(r(D))/\eta$ uniformly. [step 7.1, step 4.1, F1, algebra]

9.1 The mass-distribution principle [F3] now gives $\mathcal H^f(B_0\cap\Lambda(\Upsilon))\ge\mathcal H^f(K_\eta)\ge\eta/C_*$. The constants are independent of $\eta$. Since $\eta$ was arbitrary, the measure is infinite. Any ball in $\Omega$ contains such a $B_0$, proving the infinite-ratio case. Together with step 1.1 this establishes the full theorem without any slice-intersection or uniform-angle restriction. [step 8.1, step 8.2, F3, step 1.1, algebra] ∎
