---
id: "thm-eilenberg-steenrod-uniqueness-on-finite-dimensional-cw-pairs"
kind: "theorem"
title: "Eilenberg steenrod uniqueness on finite dimensional cw pairs"
deps: ["lem-coefficient-comparison-on-finite-cw-pairs", "lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support", "lem-comparison-maps-between-homology-theories-extend-over-one-skeleton-stage"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 15§2, pp.119–120"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "15§2, pp.119–120"
status: "draft"
origin: "pipeline"
proof_strategy: "Pass the finite-CW comparisons through finite-subcomplex colimits. Every continuous map takes a finite subcomplex into a finite subcomplex, so the extension is natural for all maps, not just cellular maps. Uniqueness and boundary compatibility follow on each finite support."
---

## Statement

For ordinary homology theories $h,k$ and a specified isomorphism $u:h_0(*)\to k_0(*)$, there is a unique boundary-compatible natural equivalence on finite-dimensional CW pairs normalized by $u$. Infinitely many cells in bounded dimensions are allowed.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For ordinary homology theories $h,k$ and a specified isomorphism $u:h_0(*)\to k_0(*)$, there is a unique natural equivalence on finite CW pairs normalized by $u$ and commuting with connecting homomorphisms. ([[lem-coefficient-comparison-on-finite-cw-pairs]])

[F2] For a finite-dimensional CW pair $(X,A)$ and ordinary $h$, the canonical map $$\underset{K\subset X\text{ finite subcomplex}}{\operatorname{colim}}\,h_n(K,K\cap A)\longrightarrow h_n(X,A)$$ is an isomorphism for every integer $n$. ([[lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support]])

[F3] Let $\eta:h\to k$ be an existing morphism of ordinary theories, natural on CW pairs and commuting with connecting maps. For a CW skeleton stage $F_{r-1}\subset F_r$, if $\eta_q(F_{r-1})$ and $\eta_q(F_r,F_{r-1})$ are isomorphisms for every $q$, then $\eta_q(F_r)$ is an isomorphism for every $q$. ([[lem-comparison-maps-between-homology-theories-extend-over-one-skeleton-stage]])

## Proof

1.1 F1 constructs the normalized comparison on every finite CW pair and makes it natural for inclusions of finite subcomplex pairs. By F2, take the colimit of these maps over all finite $K\subset X$ to define an isomorphism on a finite-dimensional pair $(X,A)$. Its inverse is the colimit of the inverse comparisons. [F1, F2]

2.1 Every finite $K$ is compact, so a continuous map $f:(X,A)\to(Y,B)$ carries $K$ into a finite subcomplex $M\subset Y$ by compact-cell support as used in F2. The restricted map $(K,K\cap A)\to(M,M\cap B)$ is a map of finite pairs. Naturality there, followed by the two colimit maps, gives naturality on the class represented in $K$. Every class has such a representative, proving naturality for all continuous maps. [F1, F2, step 1.1]

3.1 The boundary of a class supported on $K$ is supported on $K\cap A$, and F1 makes the boundary square commute on that finite pair. Therefore it commutes on the colimit. Any other normalized natural morphism agrees on every finite pair by F1, and hence on every class by F2. At a point its component remains $u$. The one-stage five-lemma principle F3 also propagates invertibility of this already constructed morphism through each finite skeletal stage; it is not needed to invent the comparison maps. [F1, F2, F3, step 1.1, step 2.1] ∎
