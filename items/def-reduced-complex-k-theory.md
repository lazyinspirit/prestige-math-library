---
id: def-reduced-complex-k-theory
kind: definition
title: Reduced complex K-theory
status: draft
origin: pipeline
deps: [def-grothendieck-ring-structure-and-rank-map]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §2.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Reduced K-theory as the kernel of restriction, printed pp.40–41"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §1"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Reduced KU, printed pp.203–204"
---

## Definition

Let $(X,x_0)$ be a based compact Hausdorff space, and let
$i_{x_0}:*\to X$ select the basepoint. Restriction to the fiber gives a unital
ring map

$$i_{x_0}^*:K^0(X)\longrightarrow K^0(*)\cong\mathbb Z,$$

where complex dimension identifies $K^0(*)$ with $\mathbb Z$. The **reduced
complex K-group** is

$$\widetilde K^0(X)=\ker i_{x_0}^*.$$

Thus a virtual bundle belongs to $\widetilde K^0(X)$ exactly when its virtual
rank is zero on the path component containing $x_0$. Its rank on another
component can be different. Since $i_{x_0}^*$ is a ring homomorphism by
[[def-grothendieck-ring-structure-and-rank-map]], $\widetilde K^0(X)$ is an
ideal in $K^0(X)$.

The empty space has no basepoint, so this based reduced group is not invoked
for $X=\varnothing$.
