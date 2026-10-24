---
id: ex-pullback-over-an-evenly-covered-open-set-is-trivial
kind: example
title: "Pulling a covering back to an evenly covered open set gives a trivial covering"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pullback-covering-space, def-covering-map-and-evenly-covered-neighbourhoods, ex-trivial-coverings-and-discrete-fibre-products]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
    - title: "Omar Antolín Camarena, Proper local homeomorphisms and covering maps"
      url: "https://www.matem.unam.mx/~omar/notes/propetale.html"
pipeline_run: null
---

## Example

If $U$ is evenly covered by $p:E\to B$, then the pullback of $p$ along the inclusion $U\hookrightarrow B$ is a trivial covering of $U$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] For a covering $p:E\to B$ and a continuous map $f:X\to B$, define $f^*E:=\{(x,e)\in X\times E:f(x)=p(e)\}$ with the subspace topology, and let $f^*p:f^*E\to X$ be $(x,e)\mapsto x$ (def-product-topology, def-subspace-topology-top). This is the **pullback covering space**; its covering property is proved in prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback. ([[def-pullback-covering-space]]).

[F2] A **covering map** is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighbourhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sets $V_j$, called **sheets**, and each restriction $p|_{V_j}:V_j\to U$ is a homeomorphism (def-continuous-map-top, def-homeomorphism-and-open-maps, def-disjoint-union-topology). Such a $U$ is **evenly covered**, and $p^{-1}(b)$ is the **fibre** over $b$. A covering is **trivial** when it is isomorphic over $B$ to a product projection $B\times F\to B$ with $F$ discrete. ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F3] If $X$ is any space and $F$ is a nonempty discrete space, the projection $X\times F\to X$ is a trivial covering with fibre $F$. If $X=\varnothing$, the same holds for $F=\varnothing$; for nonempty $X$, an empty fibre would violate surjectivity. ([[ex-trivial-coverings-and-discrete-fibre-products]]).

## Verification

**Proof technique:** direct.

1.1 Let $f:U\hookrightarrow B$ be the inclusion. If $U=\varnothing$, its pullback is empty and is isomorphic over $U$ to $U\times\varnothing\to U$, which is a trivial covering by [F3]. Hence assume $U\ne\varnothing$. Choose an evenly covered decomposition $p^{-1}(U)=\bigsqcup_{j\in J}V_j$ as in [F2]. Surjectivity of $p$ makes $J$ nonempty. The pullback $f^*E$ is $\{(u,e):u=p(e)\in U\}$ by [F1]. [F1, F2, F3]

2.1 Give $J$ the discrete topology. Define $h:U\times J\to f^*E$ by $h(u,j)=(u,(p|_{V_j})^{-1}(u))$. Each $e\in p^{-1}(U)$ belongs to exactly one sheet $V_j$, so the inverse is $h^{-1}(u,e)=(u,j)$ for that unique $j$. Both maps preserve the projection to $U$. [step 1.1, F1, F2]

3.1 The restriction of $h$ to each open slice $U\times\{j\}$ is continuous because $(p|_{V_j})^{-1}$ is continuous. These slices cover $U\times J$, so $h$ is continuous. The pullback subset $\{(u,e):e\in V_j,\ u=p(e)\}$ is open in $f^*E$, since $V_j$ is open in $E$; on it, $h^{-1}$ has the continuous form $(u,e)\mapsto(u,j)$. These subsets cover $f^*E$, so $h^{-1}$ is continuous. Thus $h$ is a homeomorphism over $U$. [step 1.1, step 2.1, F1, F2]

4.1 By [F3], $U\times J\to U$ is a trivial covering. The homeomorphism of step 3.1 identifies it with the pullback covering, proving the Example. [step 3.1, F3] ∎
