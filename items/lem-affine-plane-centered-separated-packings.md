---
dependency_level: 2
id: lem-affine-plane-centered-separated-packings
kind: lemma
title: "Finite separated plane-centered coverings and small-ball packings"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-countable-choice
  - thm-vitali-covering-lemma-for-balls-with-fivefold-dilates
  - lem-constant-scaling-limsup-neighborhoods-preserves-measure
  - lem-truncating-affine-planes-preserves-small-tubes-on-a-ball
  - thm-lebesgue-measure-under-dilations-and-reflections
proof_strategy: direct
sources:
  references:
    - title: "Mass-transference and metric approximation source proof, with explicit local reconstruction"
      url: "https://arxiv.org/pdf/1703.10015v2"
      locator: "\u00a74 Lemmas4\u20135 and plane packing; constants harmlessly enlarged"
---

## Statement

Assume Countable Choice. Fix $k\ge1$, $0\le\ell<k$, $m=k-\ell$, affine $\ell$-planes $R_j$, and positive $u_j\to0$. Put $t_j=g(u_j)^{1/m}$, where $g$ is a dimension function, and suppose the limsup of $\Delta(R_j,t_j)$ is Lebesgue full in every ball of an open ball $\Omega$. For every ball $B\Subset\Omega$ and every tail there is a finite family of plane-centered balls $A=B(z,t_j)$ with pairwise disjoint $3A\subset B$ and $\sum_A t_j^k\ge c_k r(B)^k$. The same holds inside any open subset of $B$ occupying a fixed positive fraction of its volume. If also $u_j/t_j\to0$, each such $A$ in a sufficiently late tail admits a finite family of closed balls $L=B(z',u_j)$ centered on $R_j$, with disjoint triple dilates inside $A$, and with $c_k(t_j/u_j)^\ell\le N_A\le C_k(t_j/u_j)^\ell$. For every ball $D$ with $r(D)\ge u_j$, at most $C_k(r(D)/u_j)^\ell$ members of this family meet $D$.

## Facts & Assumptions

**Given:** The full enlarged-tube hypothesis and the small-radius limits.

[A1] Countable Choice supports the measure and countably many finite families. [[def-countable-choice]]

[F1] Countable Euclidean ball families admit disjoint fivefold-covering selections, and ball volume scales as the $k$th power of radius. [[thm-vitali-covering-lemma-for-balls-with-fivefold-dilates]] [[thm-lebesgue-measure-under-dilations-and-reflections]]

[F2] Constant scaling of shrinking bounded neighborhoods preserves their limsup measure; affine planes can be truncated without changing their small tubes on a fixed bounded ball. [[lem-constant-scaling-limsup-neighborhoods-preserves-measure]] [[lem-truncating-affine-planes-preserves-small-tubes-on-a-ball]]

## Proof

1.1 By [F2], the limsup with radii $t_j/2$ is also full locally. For each plane take a countable dense subset, obtained by orthogonal projection of rational points of $\mathbb R^k$ onto it. Balls of radius $t_j$ centered on this subset cover its $t_j/2$ tube. In a sufficiently late tail the triple balls meeting the middle half of $B$ lie in $B$. Apply [F1] to those triples; fifteenfold original dilates cover the middle half up to a null set. Their volume sum is therefore at least $c_k r(B)^k$, and a finite subfamily retains half this bound. For an open subset occupying a fixed volume fraction, use a compact core and the same argument with the tail small enough that triples stay in the open subset. [given, A1, F1, F2, construct, algebra]

1.2 In the plane disk $R_j\cap\tfrac12A$, choose successively a maximal $7u_j$-separated set. It is finite by packing disjoint plane disks of radius $7u_j/2$ in a bounded plane disk, and maximality covers the half-disk by plane disks of radius $7u_j$. The elementary $\ell$-dimensional volume comparison gives upper and lower bounds constant times $(t_j/u_j)^\ell$. For $\ell=0$ take its single center. The closed ambient radius-$u_j$ balls have disjoint triples; $3u_j<t_j/2$ ensures all triples lie in $A$. The greedy construction terminates within the packing bound, so no maximal-set choice principle is used. [given, F1, construct, algebra]

2.1 A small ball meeting $D$ has its plane center within $r(D)+u_j\le2r(D)$ of $D$'s center. Its center therefore lies in a plane disk of radius at most $2r(D)$ about the orthogonal projection of that center. Packing the disjoint plane disks of radius $7u_j/2$ gives the asserted bound $C_k(r(D)/u_j)^\ell$; again for $\ell=0$ it is one. This proves every assertion. [step 1.1, step 1.2, algebra] ∎
