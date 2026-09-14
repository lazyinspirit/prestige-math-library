---
id: def-complex-topological-k-zero-by-grothendieck-completion
kind: definition
title: Complex topological K⁰ by Grothendieck completion
status: published
origin: pipeline
deps: [def-whitney-sum-monoid-of-complex-vector-bundles]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §2.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Grothendieck construction of K(X), printed pp.39–40"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §1"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Definition of KU(X), printed pp.203–204"
---

## Definition

Let $X$ be compact Hausdorff and put
$M=\operatorname{Vect}_{\mathbb C}(X)$ as in
[[def-whitney-sum-monoid-of-complex-vector-bundles]]. Define

$$K^0(X)=(M\times M)/\sim,$$

where $(E,F)\sim(E',F')$ when there is a finite-rank complex bundle $H$ with

$$E\oplus F'\oplus H\cong E'\oplus F\oplus H.$$

Write the class of $(E,F)$ as $[E]-[F]$. Addition and inverse are

$$([E]-[F])+([E']-[F'])=[E\oplus E']-[F\oplus F'],\qquad-([E]-[F])=[F]-[E].$$

This is the **Grothendieck group** of $M$. The canonical monoid map
$M\to K^0(X)$ sends $[E]$ to $[E]-[0_X]$. It is universal: for every monoid
map $u:M\to A$ to an abelian group there is a unique homomorphism
$\bar u:K^0(X)\to A$ with

$$\bar u([E]-[F])=u(E)-u(F).$$

The common-summand relation is exactly what makes this displayed formula
independent of the representative.
