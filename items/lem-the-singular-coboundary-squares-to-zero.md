---
id: lem-the-singular-coboundary-squares-to-zero
kind: lemma
title: The singular coboundary squares to zero
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-singular-cochain-complex-with-coefficients, thm-the-singular-boundary-squares-to-zero]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Hatcher, section 3.1, printed pages 197–198
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Statement

For every space $X$, abelian group $G$ and integer $n$, the singular coboundary satisfies $\delta^{n+1}\delta^n=0:C^n(X;G)\to C^{n+2}(X;G)$.

## Facts & Assumptions

[F1] [[def-singular-cochain-complex-with-coefficients]] defines $\delta^n\varphi=\varphi\partial_{n+1}$ for $n\ge0$, with zero cochain groups and zero coboundaries in negative degrees.

[F2] [[thm-the-singular-boundary-squares-to-zero]] gives $\partial_{k-1}\partial_k=0$ for $k\ge1$, including the low-degree boundary convention.

## Proof

**Given:** $X,G,n$ as in the statement.

1.1 If $n\ge0$, let $\varphi\in C^n(X;G)$ and $c\in C_{n+2}(X;\mathbb Z)$. Associativity of composition and [F1]–[F2] give $$((\delta^{n+1}\delta^n)\varphi)(c)=(\varphi\partial_{n+1})\partial_{n+2}(c)=\varphi(0)=0.$$ This holds for every chain, hence the cochain is zero, for every $\varphi$. It includes $n=0$, where the boundary composite is $\partial_1\partial_2$. [F1, F2]

1.2 If $n<0$, the domain $C^n$ is zero and $\delta^n=0$ by [F1], so the composite is zero. In particular $n=-1$ has zero first map even though the later groups may be nonzero. For empty $X$ or $G=0$ all groups are zero and both calculations remain valid. [F1]

2.1 Steps 1.1 and 1.2 cover every integer $n$. Thus the graded cochains and coboundary form a complex, with no topological restrictions on $X$ or freeness/injectivity restriction on $G$. A point still has singular simplices in every nonnegative degree; step 1.1 applies to that unnormalized complex without discarding them. No representatives, bases or primitives were selected, so no AC is used. [F1, step 1.1, step 1.2] ∎
