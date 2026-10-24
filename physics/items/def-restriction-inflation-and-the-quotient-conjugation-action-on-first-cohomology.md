---
id: def-restriction-inflation-and-the-quotient-conjugation-action-on-first-cohomology
kind: definition
title: "Restriction, inflation, and the quotient conjugation action on first cohomology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-first-cohomology-via-crossed-homomorphisms, def-first-nonabelian-cohomology-as-a-pointed-set]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Chaoli Li, Class field theory: proofs"
      url: "https://www.math.columbia.edu/~chaoli/docs/ClassFieldTheory2.html"
---

## Definition

Let $N\trianglelefteq G$ and let $A$ be an abelian $G$-group.

The **restriction map**

$$\operatorname{Res}:H^1(G,A)\to H^1(N,A)$$

is induced by restricting a crossed homomorphism $z:G\to A$ to $N$.

The **inflation map**

$$\operatorname{Inf}:H^1(G/N,A^N)\to H^1(G,A)$$

is induced by pulling a cocycle $\bar z:G/N\to A^N$ back along the quotient
map:

$$\operatorname{Inf}(\bar z)(g)=\bar z(gN).$$

For $g\in G$ and a crossed homomorphism $z:N\to A$, define another crossed
homomorphism by

$$ (g\star z)(n)=g\cdot z(g^{-1}ng). $$

Passing to cohomology classes, this action depends only on the coset $gN$, so
it gives the **quotient conjugation action** of $G/N$ on $H^1(N,A)$. If $M$ is
any $G$-group, the same formula defines the quotient action on nonabelian
$H^1_{\mathrm{nab}}(N,M)$.
