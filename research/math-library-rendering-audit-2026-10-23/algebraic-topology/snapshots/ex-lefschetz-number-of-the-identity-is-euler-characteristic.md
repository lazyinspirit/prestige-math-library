---
id: "ex-lefschetz-number-of-the-identity-is-euler-characteristic"
kind: "example"
title: "The Lefschetz number of the identity is Euler characteristic"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-lefschetz-number-of-a-finite-cw-self-map","def-euler-characteristic-of-a-finite-cw-complex","lem-hopf-trace-formula","thm-relative-homology-of-consecutive-cw-skeleta","prop-cellular-maps-induce-cellular-chain-maps","cor-contractible-nonempty-spaces-have-the-homology-of-a-point"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, §2.C
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For every finite CW complex $X$,
$$L(\mathrm{id}_X)=\chi(X).$$
If $X$ is nonempty and contractible, these invariants equal $1$ and its identity fixes every point. For the empty complex both invariants are $0$. No AC is required.

## Facts & Assumptions

[F1] [[def-lefschetz-number-of-a-finite-cw-self-map]] defines the rational homology trace sum.

[F2] [[def-euler-characteristic-of-a-finite-cw-complex]] defines $\chi(X)=\sum_n(-1)^n c_n(X)$ from the numbers of cells.

[F3] [[lem-hopf-trace-formula]] equates alternating chain and homology traces for bounded finite-dimensional complexes.

[F4] [[thm-relative-homology-of-consecutive-cw-skeleta]] gives one copy of the coefficient group per cell in the corresponding cellular degree.

[F5] [[prop-cellular-maps-induce-cellular-chain-maps]] identifies cellular-map homology with the induced singular homology map.

[F6] [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]] gives the homology of a point for a nonempty contractible space, with arbitrary abelian coefficients.

## Proof

**Given:** A finite CW complex $X$ with $c_n$ cells in dimension $n$.

1.1 Its rational cellular chain group $C_n=H_n(X^n,X^{n-1};\mathbb Q)$ has dimension $c_n$ by [F4]. There are finitely many nonzero groups, since $X$ has finitely many cells. The identity map preserves every skeleton and induces the identity map of each relative group. Its cellular chain trace in degree $n$ is therefore the sum of the $c_n$ diagonal entries equal to one, namely $c_n$, with trace zero if $c_n=0$. By [F5], the induced homology map is the singular homology identity. [F4, F5, given]

2.1 Apply [F3] to the identity chain map in step 1.1. Its homology trace sum is $L(\mathrm{id}_X)$ by [F1], and its chain trace sum is $\sum_n(-1)^n c_n=\chi(X)$ by [F2]. This proves the equality over $\mathbb Q$ directly; no change-of-coefficients identification with integral ranks is needed. [F1, F2, F3, step 1.1]

3.1 If $X$ is nonempty and contractible, [F6] gives its rational homology as that of a point. For completeness, the singular chain group of a point is $\mathbb Q$ in each nonnegative degree, with its unique simplex as basis. In positive degree $n$ the boundary is multiplication by $\sum_{j=0}^n(-1)^j$, which is $1$ for even $n$ and $0$ for odd $n$. Thus in every positive degree the kernel equals the image from the next degree; in degree zero the boundary from degree one is zero. Consequently only $H_0=\mathbb Q$ survives. The identity therefore has trace $1$ in degree zero and no other nonzero traces, so [F1] gives $L=1$, and step 2.1 gives $\chi=1$. Every $x\in X$ satisfies $\mathrm{id}_X(x)=x$; nonemptiness supplies a fixed point without any choice family. This is consistent with the nonzero-Lefschetz sufficient condition, but the identity's fixed point is already explicit. [F1, F6, step 2.1]

4.1 If $X$ is empty, there are no cells or singular simplices, so both sums are zero. If $X$ is a singleton, step 3.1 gives $1$; for a finite discrete space the same degree-zero identity matrix has one diagonal $1$ per point. Missing dimensions and zero cellular groups are covered by step 1.1. Degenerate singular simplices at a point are exactly the generators used in step 3.1 and do not produce unwanted higher homology. The proof is a finite alternating sum, with no infinite endpoint or limiting convention; the boundedness required by [F3] was verified in step 1.1. All basis choices in that theorem are finite, so this example is choice-free. [F1, F2, F3, step 1.1, step 3.1] ∎
