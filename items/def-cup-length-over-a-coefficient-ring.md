---
id: "def-cup-length-over-a-coefficient-ring"
kind: "definition"
title: "Cup length over a coefficient ring"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-singular-cohomology-ring","thm-singular-cohomology-is-graded-commutative","prop-cup-product-is-natural-unital-and-associative"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher §3.2 ring examples; Miller Lectures 28--29
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $X$ be nonempty and $R$ a commutative unital ring. In positive degrees reduced and ordinary cohomology coincide; use the multiplication of [[def-singular-cohomology-ring]]. Define a set of nonnegative integers by
$$L_R(X)=\{0\}\cup\{k\ge1:\text{there exist }a_j\in H^{d_j}(X;R),\ d_j>0\ (1\le j\le k),\ a_1\smile\cdots\smile a_k\ne0\}.$$
The **cup length over $R$** is $\operatorname{cl}_R(X)=\sup L_R(X)$ in $\mathbb N\cup\{\infty\}$. More explicitly it is $\infty$ if the set is unbounded, and otherwise its largest member, which exists for a bounded nonempty subset of $\mathbb N$. If there are no nonzero products of positive length, it is $0$. The inserted $0$ is a convention and does not assert that an empty product is nonzero over the zero ring.

Associativity makes the unparenthesized finite product well-defined. By [[thm-singular-cohomology-is-graded-commutative]], permuting homogeneous factors changes it by a unit sign, hence does not change whether it is zero. Positive degrees exclude padding a product with degree-zero units. If a product of length $k$ is nonzero, every initial subproduct is nonzero, since multiplying a zero subproduct by the remaining factors would give zero. Thus $L_R(X)$ is downward closed.

Cup length is a homotopy invariant: [[prop-cup-product-is-natural-unital-and-associative]] supplies graded ring pullbacks and their homotopy invariance. A homotopy equivalence and its inverse induce inverse graded ring maps, which carry nonzero products of positive-degree classes to nonzero products of the same length in both directions. Hence their sets $L_R$ agree.

A zero cohomology ring, in particular $R=0$, has cup length zero. Length one asks only for a nonzero positive-degree class. The value $\infty$ means that each finite bound is exceeded; it does not assert the existence of one infinite sequence with all products nonzero. Degrees and factors are chosen only for a particular finite witness, so no AC is used. No cup length for empty $X$ is assigned by this definition.
