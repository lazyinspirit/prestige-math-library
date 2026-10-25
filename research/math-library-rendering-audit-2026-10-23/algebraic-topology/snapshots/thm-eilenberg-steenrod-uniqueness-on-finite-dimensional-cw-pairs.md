---
id: "thm-eilenberg-steenrod-uniqueness-on-finite-dimensional-cw-pairs"
kind: "theorem"
title: "Eilenberg steenrod uniqueness on finite dimensional cw pairs"
deps: ["lem-coefficient-comparison-on-finite-cw-pairs", "lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support", "lem-compact-cw-images-have-finite-cell-support-without-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 15§2, pp.119–120"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "15§2, pp.119–120"
status: published
origin: "pipeline"
proof_strategy: "Pass the finite-CW comparisons through finite-subcomplex colimits. Every continuous map takes a finite subcomplex into a finite subcomplex, so the extension is natural for all maps. Uniqueness and boundary compatibility follow on each finite support."
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-04-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

For ordinary homology theories $h,k$ and a specified isomorphism $u:h_0(*)\to k_0(*)$, there is a unique boundary-compatible natural equivalence on finite-dimensional CW pairs normalized by $u$. Infinitely many cells in bounded dimensions are allowed.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For ordinary homology theories $h,k$ and a specified isomorphism $u:h_0(*)\to k_0(*)$, there is a unique natural equivalence on finite CW pairs normalized by $u$ and commuting with connecting homomorphisms. ([[lem-coefficient-comparison-on-finite-cw-pairs]])

[F2] For a finite-dimensional CW pair $(X,A)$ and ordinary $h$, the canonical map $$\underset{K\subset X\text{ finite subcomplex}}{\operatorname{colim}}\,h_n(K,K\cap A)\longrightarrow h_n(X,A)$$ is an isomorphism for every integer $n$. ([[lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support]])

[F3] A continuous image of a compact space in a CW complex lies in a finite CW subcomplex, without a choice premise ([[lem-compact-cw-images-have-finite-cell-support-without-choice]]).

## Proof

1.1 For every finite subcomplex $K\subset X$, the intersection $K\cap A$ is a finite subcomplex, so F1 gives a comparison $h_n(K,K\cap A)\to k_n(K,K\cap A)$. Naturality for inclusions makes these maps a morphism of directed systems. F2 for $h$ and $k$ identifies their colimits with the respective groups on $(X,A)$, and hence defines the required isomorphism there. This uses only finite chains of cells to represent a class, not a chosen exhaustion of $X$. [F1, F2]

2.1 Every finite $K$ is compact, so a continuous map $f:(X,A)\to(Y,B)$ carries $K$ into some finite subcomplex $M\subset Y$ by F3. Since $f(K\cap A)\subset M\cap B$, the restriction is a map of finite CW pairs $(K,K\cap A)\to(M,M\cap B)$. F1 makes its comparison square commute. Every class on $(X,A)$ comes from some such $K$ by F2, proving naturality for the original continuous map. A different choice of $M$ gives the same result after inclusion into the finite union of the two choices. [F1, F2, F3, step 1.1]

3.1 The boundary of a class supported on $K$ is supported on $K\cap A$, and F1 makes the boundary square commute there. The pairs $(K\cap A,\varnothing)$ are cofinal among finite subcomplex pairs of $(A,\varnothing)$, because any finite subcomplex of $A$ can itself serve as $K$. Thus the boundary square commutes after passing to the colimits. Any other normalized boundary-compatible natural morphism agrees with this one on every finite pair by F1, and every class of a finite-dimensional pair comes from a finite pair by F2; hence that morphism agrees everywhere. On a point the construction is $u$. [F1, F2, step 1.1, step 2.1] ∎
