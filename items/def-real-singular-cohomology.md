---
id: "def-real-singular-cohomology"
kind: "definition"
title: "Real singular cohomology"
deps: ["def-real-singular-cochain-complex", "def-cohomology-object-of-a-cochain-complex"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 item 5; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: published
origin: "pipeline"
---

## Definition

For the complex in [[def-real-singular-cochain-complex]], define the real vector spaces
$$Z^k(X;\mathbb R)=\ker\delta^k,\qquad B^k(X;\mathbb R)=\operatorname{im}\delta^{k-1},\qquad H^k_{\mathrm{sing}}(X;\mathbb R)=Z^k(X;\mathbb R)/B^k(X;\mathbb R).$$
The square-zero identity puts $B^k$ inside $Z^k$, so the quotient is well-defined. This is the vector-space instance of [[def-cohomology-object-of-a-cochain-complex]]. A **cocycle** has $\delta\varphi=0$, and a **coboundary** is $\delta\psi$. Two cocycles determine the same class if and only if their difference is a coboundary. Addition and scalar multiplication are induced by those of cocycles; changing representatives adds a coboundary since $B^k$ is a vector subspace.

Negative cohomology groups are zero. At degree zero there are no incoming coboundaries: $H^0$ is the space of point functions taking equal values on the endpoints of every path. For the empty space every group is zero; for a point the alternating differential calculated in the preceding definition gives $H^0=\mathbb R$ and $H^k=0$ for $k\ne0$.

This definition uses the cochain quotient, without choosing representatives or identifying it with a dual homology space. It requires no AC.
