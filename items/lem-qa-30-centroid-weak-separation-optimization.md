---
id: lem-qa-30-centroid-weak-separation-optimization
kind: lemma
title: "Query-only optimization from weak separation by centroid cuts"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-30-quantum-membership-separation-model
  - thm-brunn-minkowski-for-compact-convex-sets
  - thm-jensen-inequality-for-expectation
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice is used for the stated Brunn–Minkowski, Lebesgue-volume and integration suppliers; no arbitrary-index choice is used."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "van Apeldoorn, Gilyen, Gribling, de Wolf, Convex optimization using quantum oracles, Lemmas 14–21 and Theorem 23"
      url: "https://arxiv.org/pdf/1809.00643"
---

## Statement

Assume countable choice, with positive rationally encoded radii and accuracy/failure parameters. Let $B(0,r)\subseteq K\subseteq B(0,R)$ be a closed convex body, let $0<\zeta\le R$, $0<\nu\le1/3$, and let $c$ be a unit objective vector with supplied finite rational approximations to any requested error. Put
$$\tau=\zeta/8,\qquad s=r\tau/(16R),\qquad \eta=s/(100n).$$
Let $T$ be the least integer with $(3/4)^T(2R)^n<(2s/n)^n$, and $B$ the least positive integer with $2^B\tau\ge8R$. There is a finite classical procedure using at most $BT=O(n\log(nR/s)(1+\log(R/\zeta)))$ calls to $\mathrm{SEP}_{\eta,\nu/(2BT)}(K)$ that, with probability at least $1-\nu$, returns $y\in B(K,\zeta)$ with
$$\langle c,y\rangle\ge\max_{x\in K}\langle c,x\rangle-\zeta.$$
The normal encoding must supply a nonzero rational direction $u$ for its unit normal $u/\|u\|$; a rational $N$ with $\|u\|\le N\le2\|u\|$ can be computed by bisection. Query points and polytope arithmetic are rational. Computing exact centroids by exhaustive finite triangulation is allowed and charged separately: this result asserts no polynomial arithmetic, gate, or bit-time bound.

## Facts & Assumptions

**Given:** The body, radii, approximate objective access, and weak-separation contract in the Statement.

[A1] Countable choice is assumed only for the Lebesgue-volume suppliers. ([[def-countable-choice]])

[F1] For compact convex sets in $\mathbb R^d$, Brunn–Minkowski gives concavity of volume to the power $1/d$ under Minkowski interpolation. ([[thm-brunn-minkowski-for-compact-convex-sets]])

[F2] Jensen's inequality applies to an integrable variable and a convex function with integrable composition. ([[thm-jensen-inequality-for-expectation]])

[F3] Linear changes of variables scale volume by the determinant; Tonelli integrates nonnegative slices. ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F4] A successful weak separation answer at $p$ is IN with $p\in B(K,\eta)$, or a unit $g$ with $\langle g,x\rangle\le\langle g,p\rangle+\eta$ on $B(K,-\eta)$. ([[def-qa-30-quantum-membership-separation-model]])

## Proof


1.1 Let $P$ be a full-dimensional compact convex body and $X$ uniform on $P$. For any unit $a$, the survival function $S(t)=\Pr(\langle a,X\rangle\ge t)$ is log-concave on the open projection interval: the Minkowski interpolation of the two caps at $t_0,t_1$ lies in the cap at their interpolated threshold, so [F1] gives concavity of $S^{1/n}$, and the increasing concave logarithm gives concavity of $\log S$. Slices and [F3] show that the projected distribution has continuous strictly increasing cumulative distribution on that interval and no atoms. Consequently $S(\langle a,X\rangle)$ is uniform on $(0,1)$, by inverting this strictly monotone continuous function. Thus $\mathbb E[-\log S(\langle a,X\rangle)]=\int_0^1-\log t\,dt=1$. Jensen [F2] yields $S(\langle a,\mathbb EX\rangle)\ge e^{-1}$. Applying this to $-a$ shows that either halfspace through the centroid contains at least $1/e$ of the volume. [A1, F1, F2, F3, construct, algebra]

1.2 If $P$ contains a radius-$s$ ball, its width in every direction is at least $2s$. The projected density is at most $n/(2s)$. Indeed, for $n\ge2$ the $(n-1)$-slice area to the power $1/(n-1)$ is concave by [F1]. A slice of area $A$ at position $t$ therefore gives cone lower bounds $A((v-a)/(t-a))^{n-1}$ to its left and $A((b-v)/(b-t))^{n-1}$ to its right, where $[a,b]$ is the projection interval. Integrating gives $\operatorname{vol}(P)\ge A(b-a)/n$. Taking limits at endpoints proves the density bound for every interior slice. For $n=1$ the density is $1/(b-a)$ directly. A slab of thickness $h$ thus has relative volume at most $nh/(2s)$. [F1, F3, given, algebra]

1.3 Choose a rational vector $v$ with $\|v-c\|\le\zeta/(64R)$, so $\|v\|\le2$. For a rational threshold $\gamma$, initialize a localization polytope $P=[-R,R]^n$ and make at most $T$ iterations. If it is empty or lower-dimensional, return FAIL. Otherwise compute its exact centroid $p_0$ and round to a fixed-point rational $p$ with $\|p-p_0\|\le\eta$. If $\langle v,p\rangle<\gamma$, keep $P\cap\{x:\langle v,x\rangle\ge\langle v,p\rangle\}$ without an oracle call. Otherwise query weak separation at $p$: IN returns $p$ as a witness; on an OUT answer in rational direction $u$, keep $P\cap\{x:\langle u,x\rangle\le\langle u,p\rangle+\eta N\}$. After $T$ iterations without a witness, return FAIL. All constraints are rational. Every retained polytope contains $F_\gamma=B(K,-\eta)\cap\{x:\langle v,x\rangle\ge\gamma\}$ whenever the oracle answers succeed. The oracle cut has geometric displacement at most $3\eta$ from the true centroid, including point rounding; the objective cut has displacement at most $\eta$. Common fixed-point query registers can therefore be chosen from the bounded initial box and this explicit rounding precision, despite growth of the internal exact centroid denominators. [F4, given, construct, algebra]

2.1 This is a finite arithmetic procedure. Vertices of a bounded rational polytope are found by enumerating all subsets of $n$ defining hyperplanes, solving each nonsingular linear system, and retaining feasible solutions. A nonempty full-dimensional bounded polytope has vertices, since successively minimizing coordinates on a minimizing face eventually gives a zero-dimensional face. Supporting facets can be enumerated from its finite vertex list and checked by rational sign tests. Triangulate a facet inductively by choosing one vertex and coning its nonincident boundary facets; then cone the resulting boundary simplices to a rational interior point such as the average of all vertices. This partitions $P$ up to common faces. A simplex has volume $|\det(v_1-v_0,\ldots,v_n-v_0)|/n!$ and centroid $(v_0+\cdots+v_n)/(n+1)$: the first identity is [F3], and the second follows by permutation symmetry of barycentric coordinates and their sum being one. The volume-weighted average of these simplex centroids is the exact rational centroid of $P$. Dimensions, incidences, and zero determinants are decided by finite rational elimination. No efficiency of this enumeration is asserted. [F3, step 1.3, construct, algebra]

2.2 Put $h=\max_{x\in K}\langle v,x\rangle$ and take a maximizer $x_*$. If $\gamma\le h-\tau$, let $\alpha=\tau/(8R)$ and $z=(1-\alpha)x_*$. Convexity gives $B(z,\alpha r)\subset K$. Since $s=\alpha r/2$ and $\eta\le s$, the ball $B(z,s)$ lies in $B(K,-\eta)$. Also $\langle v,z\rangle\ge h-\alpha|h|\ge h-\tau/4$, and its value on that ball drops by at most $2s\le\tau/8$. Therefore $F_\gamma$ contains this radius-$s$ ball. [given, step 1.3, algebra]

3.1 Under this condition, every localization polytope contains the ball from step 2.2. The rounded-centroid objective and oracle cuts remove at least $1/e-n(3\eta)/(2s)=1/e-3/200>1/4$ of the volume by step 1.1 and step 1.2. Thus each nonterminating iteration leaves at most $3/4$ of the volume. But the radius-$s$ ball contains a cube of side $2s/n$, whereas after $T$ cuts the volume is less than $(2s/n)^n$ by the defining rational test for $T$. This is impossible. Hence FAIL implies $\gamma>h-\tau$ on successful oracle answers; IN returns a witness in $B(K,\eta)$ with $\langle v,p\rangle\ge\gamma$. [step 1.1, step 1.2, step 1.3, step 2.2, algebra]

4.1 Maintain an upper bound $H=2R\ge h$, a lower threshold $L=0$, and its witness $y=0$. Repeatedly test $\gamma=(L+H)/2$. A witness sets $L=\gamma$ and saves it. FAIL sets $H=\min\{H,\gamma+\tau\}$, preserving $H\ge h$ by step 3.1. Stop when $H-L\le4\tau$, and in any event after $B$ iterations. The width obeys $w_{j+1}\le w_j/2+\tau$; hence $w_B\le2R/2^B+2\tau<4\tau$. A saved witness satisfies $\langle v,y\rangle\ge L\ge h-4\tau$ and $y\in B(K,\eta)$. If a successful witness threshold exceeds $h$, the same conclusion holds and early stopping is valid; no assumption $L\le h$ was used. There are at most $BT$ separation calls, and $T=O(n\log(nR/s))$, $B=O(1+\log(R/\zeta))$ follow from their geometric tests. [step 3.1, given, construct, algebra]

5.1 The failure probability of any successful-answer guarantee among these adaptive calls is at most $BT\cdot\nu/(2BT)=\nu/2$, conditioning on previous outputs and using a union bound. On the complement, $\|y\|\le R+\eta\le2R$, so changing from $v$ to $c$ costs at most $3R\|v-c\|\le3\zeta/64$ in the difference between the optimum and output objective. The remaining gap is at most $4\tau=\zeta/2$. Thus $y\in B(K,\zeta)$ and $\langle c,y\rangle\ge\max_K\langle c,x\rangle-\zeta$ with probability at least $1-\nu$. All omitted operations are the explicitly charged arithmetic of step 2.1 and the oracle encoding; they are not hidden query calls. [step 4.1, given, algebra] ∎

