---
title: Transverse positivity for the special spinning family
status: draft
research_item: lem-author-4f905b3f6478-spinning-transverse-certificate
dependency_level: 4
sources:
  references:
    - title: Eduardo A. Canale, From weighted to unweighted graphs in Synchronizing
        Graph Theory, arXiv:2209.06362v3
      url: https://arxiv.org/pdf/2209.06362v3
      locator: Sections II–III, pp. 4–10; Section V, pp. 11–15 (construction and proof
        method; notation corrected explicitly in Source notes)
---

## Prerequisites

- [def-author-4f905b3f6478-spinning](item-def-author-4f905b3f6478-spinning)
- [lem-author-4f905b3f6478-eight-phase-certificate](item-lem-author-4f905b3f6478-eight-phase-certificate)
- [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)


## Statement

For an integer $k\ge3$, put $d_k=\lceil k/2\rceil-1$, and use the eight-vertex weighted graph and equilibrium of the eight-phase certificate with $a=b=c=k$ and $d=d_k$. Form its simple spinning graph using the fixed-order convention, and lift its equilibrium. The lifted Hessian is positive on the orthogonal complement of the global constant vector. In particular its only zero eigenvalue comes from simultaneous phase rotation.

## Facts & Assumptions

[F1] The construction and Hessian are given by [def-author-4f905b3f6478-spinning](item-def-author-4f905b3f6478-spinning).

[F2] The weighted equilibrium and its positive Hessian on the complement of constants are given by [lem-author-4f905b3f6478-eight-phase-certificate](item-lem-author-4f905b3f6478-eight-phase-certificate) whenever its parameter inequalities hold.

[F3] Use the self-adjoint decomposition and quadratic-form convention of [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm).

## Proof

**Given:** An integer $k\ge3$, $d=d_k$, and the construction in the Statement.

**Goal:** Establish the complete lifted stability certificate without a large-$k$ weight hypothesis.

1.1 The integer $d$ satisfies $1\le d<k/2$; also $k^2>2kd$. Thus the weighted hypotheses in [F2] hold. The subspace $P$ of vectors constant on each cluster is invariant under the lifted Hessian: clique terms vanish, and each cross block has constant row sum equal to its weight, so the induced action is exactly the weighted Hessian. The lifted Hessian is real symmetric, hence $W=P^\perp$, the subspace with zero sum in every cluster, is invariant too. These spaces are orthogonal and exhaust all vectors. [given, F1, F2, F3, algebra]

2.1 Write $\alpha$ for the phase parameter. On $W$ each clique contributes $kI$. The $a$ and $c$ blocks are complete bipartite graphs because their weights equal $k$; their cross actions vanish on cluster-zero sums, leaving the diagonal contribution $k\cos\alpha+k\sin\alpha$. The $b$ coefficients vanish because their phase differences are $\pi/2$. The $d$ blocks have signed coefficient $-\cos\alpha$ and each vertex has $d$ such neighbours. Let $B$ denote the unsigned adjacency matrix of just these blocks. Thus the restriction is $H|_W=(k+k\cos\alpha+k\sin\alpha-d\cos\alpha)I+\cos\alpha B|_W$. The symmetry of $B$ and $2|x_ux_v|\le x_u^2+x_v^2$ give $|x^TBx|\le d\|x\|^2$ by summing over its edges. [F1, step 1.1, algebra]

3.1 Consequently $x^THx\ge[k+k\sin\alpha+(k-2d)\cos\alpha]\|x\|^2>0$ for nonzero $x\in W$. On $P$, [F2] gives positivity except for the global constant mode. The orthogonal invariant splitting in step 1.1 eliminates cross terms, proving positivity on the full complement of constants and showing that there are no other zero modes. [F2, F3, step 1.1, step 2.1, algebra] ∎

## Source notes

This follows the invariant-subspace method of Canale Proposition 2, pp. 8–10, specialized as in Theorem 2, p. 15. The quadratic estimate replaces its maximal-coordinate estimate. No use is made of Proposition 2's sufficient general hypothesis $k>2w(G)$, which this family does not satisfy.
