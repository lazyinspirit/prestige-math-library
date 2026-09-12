---
id: "def-n-connected-cw-pair"
kind: "definition"
title: "Connectivity of a CW pair"
proof_strategy: direct
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-relative-homotopy-group","def-path-connected","def-skeleta-cw-subcomplex-and-relative-cw-complex","lem-relative-cubical-disk-model-and-compression"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, printed p346, equivalent definitions of
        relative connectivity
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Definition

Let $(X,A)$ be a CW pair in the sense of [[def-skeleta-cw-subcomplex-and-relative-cw-complex]], and let $k\ge0$ be an integer. The pair is **$k$-connected** when every path component of $X$ meets $A$ and, for every $a\in A$ and $1\le i\le k$, the pointed set or group $\pi_i(X,A,a)$ has one element. The positive relative objects are those of [[def-relative-homotopy-group]], and path components are those of [[def-path-connected]]. In degree one triviality concerns a pointed set. No relative $\pi_0$ is defined.

Equivalently, for every $0\le i\le k$, every continuous map $(D^i,S^{i-1})\to(X,A)$ is homotopic into $A$ while its whole boundary is fixed. For $i=0$, use $D^0=\{*\}$ and empty boundary; the clause asks for a path from its image point into $A$.

No basepoint is chosen per component. In particular $0$-connectedness only requires that every component meet $A$, and does not assert that $X$ or $A$ has one component. If $A$ is empty, this definition holds precisely when $X$ is empty. If $X=A$, it holds for every $k$.

## Facts & Assumptions

[F1] [[def-relative-homotopy-group]] supplies the all-basepoint positive relative sets and their distinguished constant representatives.

[F2] [[def-path-connected]] defines path components by the path equivalence relation. [[def-skeleta-cw-subcomplex-and-relative-cw-complex]] supplies the subspace topology on the pair.

[F3] [[lem-relative-cubical-disk-model-and-compression]] identifies disk representatives with relative cubical classes, and proves that relative nullity is equivalent to compression into the subspace fixing the entire boundary.

## Verification

**Given:** The pair and integer in the definition.

1.1 Suppose the component and relative-triviality conditions hold. A map of a zero-disk is a point of $X$, whose component meets $A$, so a path to $A$ supplies its compression. For $i\ge1$, mark $b=(1,0,\ldots,0)\in S^{i-1}$ and set $a=u(b)$ for the specified disk map $u$. Its relative class based at this actual $a$ is trivial by hypothesis. By [F3] it has a homotopy into $A$ fixing the full boundary, including both endpoints when $i=1$. No selected family of basepoints or paths is involved. [F1, F2, F3, given]

1.2 Conversely suppose all the stated disk-compression conditions hold. The zero-disk condition supplies a path to $A$ for any point of $X$, so every component meets $A$. For each $a\in A$, every positive relative class in degrees $i\le k$ has a disk representative with marked boundary value $a$ by [F3]. Its stipulated boundary-fixed compression makes the class trivial by the converse in [F3]. Thus all the defining conditions hold. [F1, F2, F3, given]

2.1 If $A$ is empty and $X$ nonempty, its point disks fail the required path condition; if both are empty there are no such maps or basepoints. When $X=A$, the constant homotopy of any disk map already ends in $A$, so the compression condition holds in all degrees. For $k=0$ there are no positive-degree conditions; for $k=1$ the positive condition is exactly the pointed degree-one one. Steps 1.1–1.2 prove both formulations equivalent, including their endpoints, without any choice principle. [F1, F2, step 1.1, step 1.2] ∎
