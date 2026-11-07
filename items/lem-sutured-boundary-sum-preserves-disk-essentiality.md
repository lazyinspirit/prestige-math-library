---
id: lem-sutured-boundary-sum-preserves-disk-essentiality
kind: lemma
title: "Sutured boundary sum preserves disk essentiality"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-well-ordering-principle
justified_by: []
aliases: []
proof_strategy: contradiction
axiom_use: "Choice-free: there are two supplied summands and one gluing disk. The sole minimization uses the least natural boundary-intersection count."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, End-essential spanning surfaces for links in thickened surfaces, Proposition 1.5 and proof, manuscript pp. 6–7"
      url: "https://arxiv.org/pdf/2210.03218v2"
---

## Statement

For $i=1,2$, let $N_i$ be a compact smooth $3$-manifold with boundary, with a finite union $s_i$ of disjoint simple closed curves in its boundary and a marked boundary disk $D_i$. Suppose $s_i\cap D_i$ is exactly one properly embedded arc $\lambda_i$. Glue the disks by a diffeomorphism carrying $\lambda_1$ to $\lambda_2$, and round corners to obtain $N=N_1\cup_D N_2$. Let $s\subset\partial N$ be the union of the unglued portions of the $s_i$, joined at the two matched endpoints; thus the interior arcs $\lambda_i$ are removed.

Assume that in each summand every properly embedded disk $Y$ with $|\partial Y\cap s_i|\le1$ has no such intersection and has boundary bounding a disk in $\partial N_i\setminus s_i$. Then every properly embedded disk $X\subset N$ with $|\partial X\cap s|\le1$ likewise has no such intersection and has boundary bounding a disk in $\partial N\setminus s$.

## Statement references

[Kindred, *End-essential spanning surfaces for links in thickened surfaces*, Proposition 1.5](https://arxiv.org/pdf/2210.03218v2)

## Facts & Assumptions

**Given:** The two sutured manifolds, marked disks, matching map and summand disk properties in the statement.

[F1] A nonempty set of natural numbers has a least member. ([[thm-well-ordering-principle]])

[F2] A bad disk in $N$ is a proper disk with one suture intersection, or with none whose boundary does not bound a disk in $\partial N\setminus s$.

## Proof

1.1 Suppose a bad disk exists. Put its boundary transverse to $\partial D$, avoiding the two points $s\cap\partial D$, and its interior transverse to $D$, with finite intersections. This can be done by a sufficiently small polygonal perturbation in finitely many coordinate patches, followed by smoothing, preserving the suture intersection count. Use [F1] to choose a bad disk $X$ minimizing $m=|\partial X\cap\partial D|$. [given, F1, F2, assume-contra]

2.1 Remove intersection circles in $X\cap D$ by surgery on a disk innermost in $D$, retaining the disk with the original boundary and discarding the sphere. The innermost disk's interior misses $X$, since an intersection arc with endpoints on $\partial D$ could not enter it without crossing its boundary circle. Thus the replacement is embedded after rounding. It removes circles without changing $\partial X$ or $m$. After finitely many such replacements, $X\cap D$ consists of arcs. [step 1.1, construct]

3.1 If these arcs are nonempty, choose an outermost subdisk $X_0$ whose boundary portion $\alpha$ on $\partial X$ misses $s$. Such a choice exists because disjoint arcs in a disk have at least two outermost complementary disks, whereas $\partial X$ meets $s$ at most once. The remaining boundary portion is a proper arc $\beta$ in a copy $D_i$ of the gluing disk, and $X_0$ lies in $N_i$. Thus $\partial X_0=\alpha\cup\beta$, with the interior of $\alpha$ disjoint from $D_i$. [step 1.1, step 2.1, construct]

4.1 Holding the endpoints fixed, isotope $\beta$ in $D_i$ to an arc $\beta'$ meeting $\lambda_i$ at most once. Indeed, $\lambda_i$ divides $D_i$ into two disks. If the endpoints are on the same boundary interval, choose $\beta'$ in that disk; otherwise choose an arc crossing $\lambda_i$ once. Any two proper arcs in a disk with the same endpoints are isotopic relative to its boundary, by cutting off their successive innermost bigons. Extend this boundary isotopy to a collar in $N_i$, carrying $X_0$ to a proper disk $X_i$ with boundary $\alpha\cup\beta'$. We do not require the isotopy to avoid $s_i$; its final boundary has at most one suture intersection, because $\alpha$ misses $s_i$ and all intersections lie on $\beta'\cap\lambda_i$. The summand hypothesis therefore rules out the one-intersection case. In the zero-intersection case it supplies a disk $Y_i\subset\partial N_i\setminus s_i$ with boundary $\alpha\cup\beta'$. [given, step 3.1, construct]

5.1 The arc $\beta'$ divides $D_i$ into two disks, exactly one of which lies in $Y_i$. This follows by separating along $\partial Y_i$: it meets the interior of $D_i$ only along $\beta'$, with its two endpoints on $\partial D_i$, so one side of that arc lies inside $Y_i$ and the other outside. The side inside $Y_i$ misses $\lambda_i$, since $Y_i$ misses $s_i$. Remove this disk from $Y_i$. What remains is a disk $R$ in $\partial N_i\setminus\operatorname{int}D_i$, with boundary $\alpha$ and an interval of $\partial D_i$, and disjoint from $s_i$. It is therefore a boundary bigon in the original $\partial N$, disjoint from $s$. [step 4.1, construct]

6.1 If other portions of $\partial X$ enter $R$, they are disjoint arcs with both ends on its interval of $\partial D$: they cannot cross $\alpha$, and the single boundary circle $\partial X$ already contains $\alpha$, so there is no separate circle inside $R$. Take an innermost such arc and the disk it cuts off adjacent to that interval, or use $R$ if its interior already misses $\partial X$. Isotoping across this smaller bigon removes two intersections of $\partial X$ with $\partial D$, without changing its intersection with $s$. This boundary isotopy extends over a collar to the whole disk $X$, preserves badness and decreases $m$, a contradiction. Hence $X\cap D$ has no arcs. [F2, step 1.1, step 5.1, construct]

7.1 Thus $X$ lies in one summand, and its boundary is disjoint from $D_i$. It meets $s_i$ in the same at-most-one points as it meets $s$. The summand hypothesis gives zero intersections and a disk $Y_i\subset\partial N_i\setminus s_i$ bounded by $\partial X$. This disk misses $D_i$: its boundary misses the connected disk $D_i$, so either the interior of $D_i$ lies in $Y_i$ or it is disjoint from $Y_i$; the first possibility would put $\lambda_i\subset s_i$ inside $Y_i$. Therefore $Y_i$ is also a disk in $\partial N\setminus s$, contradicting badness. [given, F2, step 2.1, step 6.1, construct]

8.1 No bad disk exists. This is exactly the required preservation of the zero- and one-suture disk property under the specified boundary sum. [F2, step 1.1, step 7.1, discharge-contradiction] ∎
